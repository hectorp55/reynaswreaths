import React, { ReactNode } from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { Event } from "@/app/hooks/queries/fetchEvents";
import PopupModal from "../modals/popup-modal";
import EventDetails from "./event-details";
dayjs.extend(isoWeek);

type MonthlyCalendarProps = {
    events: Event[]
}

const MonthlyCalendar = ({ events = [] }: MonthlyCalendarProps) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalHeader, setModalHeader] = React.useState("");
    const [modalContent, setModalContent] = React.useState<ReactNode>("");

    const today = dayjs();
    const startOfMonth = today.startOf("month");
    const endOfMonth = today.endOf("month");

    const startDate = startOfMonth.startOf("week");
    const endDate = endOfMonth.endOf("week");

    const days = [];
    let currentDay = startDate;

    while (currentDay.isBefore(endDate) || currentDay.isSame(endDate, "day")) {
        days.push(currentDay);
        currentDay = currentDay.add(1, "day");
    }

    const eventMap = events.reduce((acc: {[key: string]: Event[]}, event) => {
        const dateKey = dayjs(event.date).format("YYYY-MM-DD");
        acc[dateKey] = acc[dateKey] || [];
        acc[dateKey].push(event);
        return acc;
    }, {});

    const openModal = (event: Event) => {
        const modalContent = (
            <EventDetails event={event} />
        )
        setModalHeader(event.name);
        setModalContent(modalContent);

        setIsModalOpen(true);
    }

    return (
        <div className="p-4 w-full">
            <h2 className="text-xl font-bold text-center mb-4">
            {today.format("MMMM YYYY")}
            </h2>
            {/* Days of the Week */}
            <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-gray-700">
                {day}
                </div>
            ))}
            </div>

            {/* Weekly Boxes */}
            <div className="grid grid-cols-7 gap-2">
            {days.map((day) => {
                const isCurrentMonth = day.month() === today.month();
                const eventsForDay = eventMap[day.format("YYYY-MM-DD")] || [];
                
                // Dail Boxes
                return (
                <div
                    key={day.format("YYYY-MM-DD")}
                    className={`border rounded-lg p-2 min-h-[120px] text-sm ${
                    isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"
                    }`}
                >
                    <div className="font-bold mb-1">{day.date()}</div>
                    {eventsForDay.map((ev, i) => (
                    <button
                        key={i}
                        className="bg-(--cambridge-blue) text-white rounded px-1 mb-1 truncate"
                        onClick={() => openModal(ev)}
                    >
                        {ev.name}
                    </button>
                    ))}
                </div>
                );
            })}
            </div>
            <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} header={modalHeader}> 
                {modalContent}
            </PopupModal>
        </div>
    );
};

export default MonthlyCalendar;
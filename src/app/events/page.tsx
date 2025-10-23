"use client"
import React from 'react';
import PageForm from '../components/page-form';
import MonthlyCalendar from '../components/calendar/monthly-calendar';
import { useEventSheet } from '../hooks/queries/fetchEvents';
import Loading from '../components/loading';

function EventsPage() {
    const { data, isLoading } = useEventSheet();
    
    return (
        <PageForm>
            {isLoading && <Loading/>}
            {!isLoading && (
                <section className="flex flex-wrap justify-between p-10">
                    <MonthlyCalendar events={data ? data : []} />
                </section>
            )}
        </PageForm>
    )
}

export default EventsPage
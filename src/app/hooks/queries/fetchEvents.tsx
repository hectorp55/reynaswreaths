"use client";
import { useQuery } from "@tanstack/react-query";

export interface Event {
    date: string,
    name: string,
    time: string,
    location: string,
}

async function fetchEvents(): Promise<Event[]> {
    const eventsResponse = await fetch(`api/events`);
    if (!eventsResponse.ok) {
        throw new Error('Problem with Events response');
    }
    const eventsData = await eventsResponse.json();

    return eventsData;
}

export const useEventSheet = () => {
    return useQuery({
        queryKey: ['events'],
        queryFn: fetchEvents,
        staleTime: 1000 * 60 * 5 // 5 minutes cache
    });
}
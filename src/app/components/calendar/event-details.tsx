import { Event } from '@/app/hooks/queries/fetchEvents';
import React from 'react';

type EventDetailsProps = {
    event: Event
}

function EventDetails({event}: EventDetailsProps) {
  return (
    <section className="flex flex-col gap-2 items-center justify-center">
        <span>Date: {event.date}</span>
        <span>Time: {event.time}</span>
        <span>Location: {event.location}</span>
    </section>
  )
}

export default EventDetails
import React from 'react';
import EventCard from '../../Components/EventCard';
import { Campus } from '../Campus/Campus';
import Navbar2 from "../Navbar/Navbar2";

function Events() {
    // Array of sample events
    const events = [
        {
            id: 1,
            image: 'https://via.placeholder.com/300x150',
            name: 'Future Skills for Employment',
            date: '2020-05-29 to 2020-05-31',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/300x150',
            name: 'Tech Summit 2023',
            date: '2023-03-15 10:00 AM',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/300x150',
            name: 'AI Expo',
            date: '2023-04-05 11:30 AM',
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/300x150',
            name: 'Startup Workshop',
            date: '2023-05-01 9:00 AM',
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/300x150',
            name: 'Developer Meetup',
            date: '2023-06-10 5:00 PM',
        },
    ];


    return (
        <>
            <Navbar2 />
            <Campus />
            {/* Heading for the Alumni Events */}
            <h1 className="text-center text-3xl font-bold my-8">Sri Sairam Engineering College - Alumni Events</h1>

            {/* Event Cards Section */}
            <div className="flex justify-center px-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 ">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            id={event.id}
                            image={event.image}
                            eventName={event.name}
                            eventDate={event.date}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Events;

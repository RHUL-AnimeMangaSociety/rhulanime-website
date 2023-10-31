import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Event from "./Event";

/**
 * Component to display events for the current week
 *
 * @param {Object} props - Component props
 * @param {string} props.dataSource - The URL to fetch event data.
 * @param {Object} props.calendar - The URL of the full anisoc calendar
 * @returns {JSX.Element} - Rendered component
 */
const Events = ({ dataSource, calendar }) => {
    // State to hold the fetched events
    const [events, setEvents] = useState([]);

    /**
     * Fetches event data from the Google sheet
     */
    useEffect(() => {
        const fetchData = async () => {
            // Fetch data from the Google sheet provided
            const response = await fetch(dataSource);
            const text = await response.text();

            // Parse the CSV data using PapaParse library
            Papa.parse(text, {
                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    setEvents(result.data);
                },
            });
        };

        fetchData();
    }, [dataSource]);

    /**
     * Filters events to include only those happening in the current week.
     * @returns {Object[]} - Array of events for the current week.
     */
    const currentWeekEvents = events.filter((event) => {
        const eventDate = new Date(event.startDate);
        const currentDate = new Date();
        const daysUntilMonday = (currentDate.getDay() + 6) % 7; // Calculate days until Monday
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - daysUntilMonday + 1); // Start from Monday
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        return eventDate >= startOfWeek && eventDate <= endOfWeek;
    });

    // Render the component
    return (
        <div>
            <h1>Events</h1>
            {currentWeekEvents.map((event, index) => (
                // Render Event component for each event in the current week
                <Event
                    key={index}
                    title={event.title}
                    location={event.location}
                    date={event.startDate.toLocaleDateString()}
                    time={event.startDate.toLocaleTimeString()}
                    description={event.description}
                />
            ))}

            {/* Opens the AniSoc events calendar in a new tab */}
            <p>Click <a href={calendar} target="_blank" rel="noopener noreferrer">here</a> to view the full events calendar!</p>
        </div>
    );
};

export default Events;

import React from "react";

const Event = ({ title, location, date, time, description }) => {
    return (
        <div>
            <p>{title}</p>
            <p>{location}, {date}, {time}</p>
            <p>{description}</p>
            <p>----------------------------</p>
        </div>
    );
};

export default Event;
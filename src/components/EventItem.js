import React from "react";

const EventItem = ({ item }) => {
  return (
    <div className="rounded shadow-xl px-4 py-8 border-2 border-p-4">
      <div className="h-36 w-full rounded border-1 border-p-1 mb-2">
        <img src={item.image} className="object-cover h-36 w-full rounded border-1 border-p-1" />
      </div>
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p>Location: {item.location}</p>
      <p>Date & Time: {item.dateTime}</p>
    </div>
  );
};

export default EventItem;

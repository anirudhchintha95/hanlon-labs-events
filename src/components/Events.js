import React, { useCallback, useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";

import Loader from "./Loader";
import EventItem from "./EventItem";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const Locations = ["Hanlon Lab", "Gateway North 216", "Gateway South 204"];

const images = [
  "https://files.constantcontact.com/6fa9a39c501/217a9461-af44-4938-88c7-94aae4fef6e0.jpg",
  "https://fsc.stevens.edu/content/images/2021/12/Screen-Shot-2021-12-16-at-8.39.11-AM.png",
  "https://fsc.stevens.edu/content/images/2021/11/Group-10--1-.png",
];

const EventsFooter = ({ loadMore, loading }) => {
  return (
    <div
      style={{
        paddingTop: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button disabled={loading} onClick={loadMore}>
        {loading ? "Loading..." : "Press to load more"}
      </button>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [displayingEvents, setDisplayingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const totalEvents = [...Array(24).keys()].map((i) => ({
        name: `Event-${i + 1}`,
        location: Locations[getRandomInt(0, 3)],
        dateTime: new Date(
          Date.now() + getRandomInt(6000, 8640000)
        ).toLocaleString(),
        image: images[getRandomInt(0, 3)]
      }));
      setEvents(totalEvents);
      setDisplayingEvents(totalEvents.slice(0, 3));
      setLoading(false);
    }, 2000);
  }, []);

  const loadMore = () => {
    setDisplayingEvents((items) => {
      return [...items, ...events.slice(items.length, items.length + 3)];
    });
  };

  return (
    <div className="box-border my-4 min-h-[300px] md:min-h-[440px]">
      <h1 className="text-2xl font-semibold w-full text-center text-p-1 my-3">
        Events
      </h1>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center my-8">
          <Loader />
        </div>
      ) : (
        <div className="min-h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayingEvents.map((e) => (
              <EventItem item={e} />
            ))}
          </div>
          {displayingEvents.length != events.length ? (
            <EventsFooter loadMore={loadMore} loading={loadingMore} />
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Events;

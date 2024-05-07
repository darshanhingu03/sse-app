import React, { useEffect, useState } from "react";

const EventSourceComponent = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/events");

    eventSource.onmessage = (e) => {
      setText((prevText) => prevText + " " + e.data);
    };

    return () => {
      eventSource.close();
    };
  }, []);
  return <div>{text}</div>;
};

export default EventSourceComponent;

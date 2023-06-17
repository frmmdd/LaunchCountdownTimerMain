import React, { useState, useEffect } from "react";
import './App'


const COUNTDOWN_TARGET = new Date("2023-06-31T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div
        className="d-flex justify-content-center gap-2 my-4"
      >
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div key={label}>
              <div className="square p-4 fs-1 my-2">
                <span className="txt-square">
                  {value < 10 ? `0${value}` : value}
                </span>
              </div>
              <p className="text-light">{label.toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
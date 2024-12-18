import React from "react";
import { ArrowUpRight, Clock, LocationPin, Hourglass, Calendar } from "./icons";
import styles from "@/styles/Molecules/program.module.css";
import humanize from "humanize-duration";
import Image from "next/image";

export default function Program({
  title,
  description,
  start,
  end,
  location,
  image,
  register_url,
}: {
  title: string;
  description: string;
  start: Date;
  end: Date;
  location: string;
  image: string;
  register_url?: string;
}) {
  const now = new Date();
const adjustedEnd = new Date(end.getTime() + 24 * 60 * 60 * 1000); // Add 1 day to the end date
const isToday = 
  start.toDateString() === now.toDateString() && 
  start.getFullYear() === now.getFullYear();
const isEventOngoing = start.getTime() < now.getTime() && now.getTime() < adjustedEnd.getTime();
const isEventEnded = now.getTime() > adjustedEnd.getTime();
const isOneDayEvent = 
  start.toDateString() === end.toDateString() && 
  start.getFullYear() === end.getFullYear();

  return (
    <div className={styles.program_wrapper}>
      <div className={styles.image_wrapper}>
        <Image
          alt={title}
          src={image}
          className={styles.image}
          height={250}
          width={300}
        />
        <div
  className={`${styles.time_remaining} ${isEventEnded ? styles.red : ""}`}
>
  {isEventEnded 
    ? "Closed" 
    : isEventOngoing || (isOneDayEvent && isToday) 
      ? "Event Day" 
      : humanize(start.getTime() - now.getTime(), { largest: 2 })
  }{"   "}
  {!isEventEnded && !isEventOngoing && <Hourglass /> || isEventOngoing && <Calendar />}
</div>
        {/* <div
          className={`${styles.time_remaining} ${
            Date.now() > end.getTime() ? styles.red : ""
          }`}
        >
          {Date.now() > end.getTime()
            ? (start.getTime() < Date.now()  || Date.now() > end.getTime() ? "Happening" : "Closed")
            : humanize(start.getTime() - Date.now(), { largest: 2 })}{" "}
          {Date.now() > end.getTime() ? "" : <Hourglass />}
        </div> */}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.flex_wrapper}>
        <div className={styles.info_wrapper}>
          <div className={styles.info}>
            <span style={{ height: "5px" }}>
              <Clock />
            </span>
            <small>{formatDate(start, end)}</small>
          </div>
          <div className={styles.info}>
            <span style={{ height: "5px" }}>
              <LocationPin />
            </span>
            <small>{location}</small>
          </div>
        </div>
        <div>
          <button
            className={styles.register_button}
            onClick={() =>
              window.open(register_url ? register_url : "#", "_blank")
            }
            disabled={Date.now() > end.getTime()}
          >
            <span>Register</span>
            <span className={styles.register_arrow}>
              <ArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(start: Date, end: Date) {
  const [smonth, sday] = [start.getMonth(), start.getDate()];

  const [eyear, emonth, eday] = [
    end.getFullYear(),
    end.getMonth(),
    end.getDate(),
  ];

  return `${sday} ${MONTHS[smonth]} - ${eday} ${MONTHS[emonth]} ${eyear}`;
}

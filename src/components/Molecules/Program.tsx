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
  collection_url,
}: {
  title: string;
  description: string;
  start: Date;
  end: Date;
  location: string;
  image: string;
  register_url?: string;
  collection_url?: string;
}) {
  const now = new Date();
  const adjustedEnd = new Date(end.getTime() + 24 * 60 * 60 * 1000);
  const isToday =
    start.toDateString() === now.toDateString() &&
    start.getFullYear() === now.getFullYear();
  const isEventOngoing =
    start.getTime() < now.getTime() && now.getTime() < adjustedEnd.getTime();
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
          className={`${styles.time_remaining} ${
            isEventEnded ? styles.red : ""
          }`}
        >
          {isEventEnded
            ? "Closed"
            : isEventOngoing || (isOneDayEvent && isToday)
            ? "Event Day"
            : humanize(start.getTime() - now.getTime(), { largest: 2 })}
          {"   "}
          {(!isEventEnded && !isEventOngoing && <Hourglass />) ||
            (isEventOngoing && <Calendar />)}
        </div>
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
        <EventButton
          start={start}
          collectionUrl={collection_url}
          registerUrl={register_url}
        />
      </div>
    </div>
  );
}

interface EventButtonProps {
  start?: Date | null;
  collectionUrl?: string | null;
  registerUrl?: string | null;
}

function EventButton({
  start = new Date(),
  collectionUrl = null,
  registerUrl = null,
}: EventButtonProps) {
  // Safely check if start date exists and compare
  const isEventStarted = start ? Date.now() >= start.getTime() : false;
  const showGallery = isEventStarted && collectionUrl;

  const handleClick = () => {
    const url = showGallery ? collectionUrl : registerUrl || "#";
    window.open(url, "_blank");
  };

  if (showGallery) {
    return (
      <button className={styles.gallery_button} onClick={handleClick}>
        Gallery
      </button>
    );
  }

  return (
    <button
      className={styles.register_button}
      onClick={handleClick}
      disabled={isEventStarted}
    >
      Register
      <span className={styles.register_arrow}>
        <ArrowUpRight />
      </span>
    </button>
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

import React from "react";
import { ArrowUpRight, Clock, LocationPin, Hourglass, Calendar } from "./icons";
import styles from "@/styles/Molecules/program.module.css";
import humanize from "humanize-duration";
import Image from "next/image";
import { Program as ProgramProps, EventButtonProps } from "@/types";

export default function Program({
  title,
  description,
  start,
  end,
  location,
  image,
  register_url,
  collection_url,
  giveawayDeadline,
  giveawayMessage,
}: ProgramProps) {
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
          giveawayDeadline={giveawayDeadline}
          giveawayMessage={giveawayMessage}
        />
      </div>
    </div>
  );
}

function EventButton({
  start = new Date(),
  collectionUrl,
  registerUrl,
  giveawayDeadline,
  giveawayMessage,
}: EventButtonProps) {
  const isEventStarted = start && Date.now() >= start.getTime();
  const isGiveawayActive =
    giveawayDeadline &&
    (Date.now() < giveawayDeadline.getTime() ||
      new Date().toDateString() === giveawayDeadline.toDateString());
  const targetUrl =
    isEventStarted && collectionUrl ? collectionUrl : registerUrl || "#";

  const handleClick = () => {
    if (isGiveawayActive && giveawayMessage) {
      alert(giveawayMessage);
    }
    window.open(targetUrl, "_blank");
  };

  return isEventStarted && collectionUrl ? (
    <button className={styles.gallery_button} onClick={handleClick}>
      Gallery
    </button>
  ) : (
    <button
      className={styles.register_button}
      onClick={handleClick}
      disabled={!!isEventStarted}
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

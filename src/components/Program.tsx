"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, LocationPin } from "./icons";
import styles from "@/styles/program.module.css";
import humanize from "humanize-duration";

export default function Program({
    title,
    description,
    start,
    end,
    location,
    image,
}: {
    title: string;
    description: string;
    start: Date;
    end: Date;
    location: string;
    image: string;
}) {
    return (
        <div className={styles.program_wrapper}>
            <div className={styles.image_wrapper}>
                <img alt={title} src={image} className={styles.image} />
                <div
                    className={`${styles.time_remaining} ${
                        Date.now() > end.getTime() ? styles.red : ""
                    }`}
                >
                    {Date.now() > end.getTime()
                        ? "Closed"
                        : humanize(end.getTime() - Date.now(), { largest: 1 })}
                </div>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.flex_wrapper}>
                <div className={styles.info_wrapper}>
                    <div className={styles.info}>
                        <span style={{ height: "16px" }}>
                            <Clock />
                        </span>
                        {formatDate(start, end)}
                    </div>
                    <div className={styles.info}>
                        <span style={{ height: "16px" }}>
                            <LocationPin />
                        </span>
                        {location}
                    </div>
                </div>
                <div>
                    <button
                        className={styles.register_button}
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

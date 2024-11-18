import React from "react";
import {Calendar} from "./icons";
import styles from "@/styles/Molecules/program.module.css";
import Image from "next/image";

export default function Project({
  title,
  description,
  year,
  image,
}: {
  title: string;
  description: string;
  year: number;
  image: string;
}) {
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
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.flex_wrapper}>
        <div className={styles.info_wrapper}>
          <div className={styles.info}>
            <span style={{ height: "16px" }}>
              <Calendar />
            </span>
            {year}
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

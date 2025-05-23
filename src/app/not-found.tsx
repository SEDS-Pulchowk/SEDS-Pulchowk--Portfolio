"use client";

import React from "react";
import TailStar from "@/components/Atoms/TailStar";
import styles from "./not-found.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={`${styles.not_found_container} ${styles.hero_banner}`}>
      
        <TailStar />
      <div className={styles.content}>
        <div className={styles.astronaut}>
          <div className={styles.astronaut_body}>
            <div className={styles.helmet}>
              <div className={styles.helmet_reflection}></div>
              <div className={styles.face}>
                <div className={`${styles.eye} ${styles.left_eye}`}></div>
                <div className={`${styles.eye} ${styles.right_eye}`}></div>
                <div className={styles.mouth}></div>
              </div>
            </div>
            <div className={styles.suit}>
              <div className={styles.chest_panel}>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
                <div className={styles.display}></div>
              </div>
            </div>
            <div className={`${styles.arm} ${styles.left_arm}`}></div>
            <div className={`${styles.arm} ${styles.right_arm}`}></div>
            <div className={`${styles.leg} ${styles.left_leg}`}></div>
            <div className={`${styles.leg} ${styles.right_leg}`}></div>
          </div>
          <div className={styles.jetpack}>
            <div className={`${styles.flame} ${styles.flame_1}`}></div>
            <div className={`${styles.flame} ${styles.flame_2}`}></div>
            <div className={`${styles.flame} ${styles.flame_3}`}></div>
          </div>
        </div>

        <div className={styles.planets}>
          <div className={`${styles.planet} ${styles.planet_1}`}></div>
          <div className={`${styles.planet} ${styles.planet_2}`}></div>
          <div className={`${styles.planet} ${styles.planet_3}`}></div>
        </div>

        <div className={styles.text_content}>
          <h1 className={styles.error_code}>404</h1>
          <h2 className={styles.error_title}>Houston, We Have a Problem!</h2>
          <p className={styles.error_message}>
            It looks like this page has drifted off into deep space. Our
            astronaut is searching the cosmos, but this destination seems to be
            lost in the void.
          </p>
          <div className={styles.action_buttons}>
            <button
              className={`${styles.btn} ${styles.primary_btn}`}
              onClick={() => window.history.back()}
            >
              🌍 Return to Earth
            </button>
            <button
              className={`${styles.btn} ${styles.secondary_btn}`}
              onClick={() => (window.location.href = "/")}
            >
              🚀 Mission Control
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

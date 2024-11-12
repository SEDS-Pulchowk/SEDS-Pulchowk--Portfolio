"use client";

import { ChangeEvent, useState } from "react";
import styles from "../page.module.css";
import JoinSeds from "../page";

export default function ExecutiveForm() {
  return (
    <div className={`container ${styles.join_seds}`}>
      <section className={styles.application_form}>
        <JoinSeds membershipType="executive"/>
        <div data-bs-theme="dark" className={styles.form_outline}>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              alignItems: "center",
              margin: "150px auto",
              height: "50vh",
            }}
          >
            <h2>Currently There is No Call for Executives.</h2>
            <hr />
            <h4>Thank You for Your Interest</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

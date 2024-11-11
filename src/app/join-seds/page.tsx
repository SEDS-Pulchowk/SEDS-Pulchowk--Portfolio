"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function joinSeds() {
  const [selected, set_selected] = useState<"general" | "executive">("general");

  return (
    <div className={styles.join_seds}>
      <section className={styles.application_form}>
        <div className={styles.navbar}>
          <button
                onClick={() => set_selected("general")}
            className={`${styles.navbar_button} ${
              selected == "general" ? styles.navbar_button_active : ""
            }`}
          >
            General Membership
          </button>
          <button
                onClick={() => set_selected("executive")}
            className={`${styles.navbar_button} ${
              selected == "executive" ? styles.navbar_button_active : ""
            }`}
          >
            Executive Comitee
          </button>
        </div>
        <div className={styles.form_outline}>
          {selected === "general" ? generalForm() : executiveForm()}
        </div>
      </section>
    </div>
  );
}

function generalForm() {
  const [membershipForm, create_membershipForm] = useState(<></>);
  const new_member = "new-member";
  const existing_member = "existing-member";

  const setForm = (memberType: string) => {
    if (memberType == new_member) {
      create_membershipForm(
        <form action="/action_page.php" method="post">
          <div className={`form-group ${styles.form_section}`}>
            <label htmlFor="full-name">Full Name: *</label>
            <input
              type="full-name"
              name="full-name"
              className="form-control"
              id="full-name"
              placeholder="Ram Tiwari"
              required
            />
          </div>
          <div className={`form-group ${styles.form_section}`}>
            <label htmlFor="mobile-no">Mobile Number: *</label>
            <input
              type="number"
              name="mobile-no"
              className="form-control"
              id="mobile-no"
              placeholder="9876543210"
              required
            />
          </div>
          <div className={`form-group ${styles.form_section}`}>
            <label htmlFor="email">Campus Email ID: *</label>
            <input
              type="email"
              name="campus-email"
              className="form-control"
              id="email"
              placeholder="078bct103.ram@pcampus.edu.np"
              required
            />
          </div>
          <div className={`form-group ${styles.form_section}`}>
            <label htmlFor="roll-no">Class Roll Number: *</label>
            <input
              type="text"
              name="class-roll-no"
              className="form-control"
              id="roll-no"
              placeholder="078BCT103"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Default file input example
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    } else {
      create_membershipForm(
        <>
          <form>This is pu.</form>
        </>
      );
    }
  };
  return (
    <>
      <div>
        <p>
          Please fill out the following form to become a General Member of SEDS
          Pulchowk and embark on an exciting journey into the cosmos.
        </p>
        <br />
        <p>
          Being a member of SEDS Pulchowk comes with numerous benefits,
          including:
        </p>
        <ul style={{ marginLeft: "50px" }}>
          <li>
            <strong>Priority Access:</strong> Students will receive first
            priority for all workshops, seminars, and events organized by SEDS
            Pulchowk.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> As a member, you will
            have the opportunity to connect with like-minded individuals, fellow
            space enthusiasts, and professionals in the aerospace and space
            industries.
          </li>
          <li>
            <strong>Project Involvement:</strong> Get the chance to work on
            exciting space-related projects within SEDS Pulchowk.
          </li>
        </ul>
        <br />
        <h4>Membership Fee</h4>
        <div style={{ marginLeft: "50px" }}>
          <em>For New Members: Nrs. 150/-</em>
          <br />
          <em>For Existing Members/Renewal: Nrs. 45/-</em>
        </div>
        <br />
        <p>
          <strong>Note:</strong> This fee includes ID cards and processing fee
          too. It will help SEDS-Pulchowk to grow. We will also provide you with
          certification at end of your membership tenure (1 Year).
        </p>
      </div>
      <br />
      <form>
        <p>
          <strong>Are new or existing member?</strong>
        </p>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="new-member">
          <input
            id="new-member"
            type="radio"
            name="member-type"
            value={new_member}
            onChange={(e) => setForm(e.target.value)}
          />{" "}
          New Member
        </label>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="existing-member">
          <input
            id="existing-member"
            type="radio"
            name="member-type"
            value={existing_member}
            onChange={(e) => setForm(e.target.value)}
          />{" "}
          Existing Member{" "}
        </label>
      </form>
      {membershipForm}
    </>
  );
}

function executiveForm() {
  return (
    <>
      <p>Executives are here</p>
    </>
  );
}

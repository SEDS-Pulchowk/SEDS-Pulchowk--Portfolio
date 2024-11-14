"use client";

import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../joinseds.module.css";
import { JoinSeds } from "../joinseds";

interface OrginalFormProps {
  memberType: string;
}

export default function GeneralForm() {
  const [membership_type, set_membership_type] = useState("");

  return (
    <div className={`container ${styles.join_seds}`}>
      <section className={styles.application_form}>
        <JoinSeds membershipType="general" />
        <div data-bs-theme="dark" className={styles.form_outline}>
          <div>
            <p>
              Please fill out the following form to become a General Member of
              SEDS Pulchowk and embark on an exciting journey into the cosmos.
            </p>
            <br />
            <p>
              Being a member of SEDS Pulchowk comes with numerous benefits,
              including:
            </p>
            <ul style={{ marginLeft: "10px" }}>
              <li>
                <strong>Priority Access:</strong> Students will receive first
                priority for all workshops, seminars, and events organized by
                SEDS Pulchowk.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> As a member, you will
                have the opportunity to connect with like-minded individuals,
                fellow space enthusiasts, and professionals in the aerospace and
                space industries.
              </li>
              <li>
                <strong>Project Involvement:</strong> Get the chance to work on
                exciting space-related projects within SEDS Pulchowk.
              </li>
            </ul>
            <br />
            <h4>Membership Fee</h4>
            <div style={{ marginLeft: "20px" }}>
              <em>For New Members: Nrs. 150/-</em>
              <br />
              <em>For Existing Members/Renewal: Nrs. 45/-</em>
            </div>
            <br />
            <p>
              <strong>Note:</strong> This fee includes ID cards and processing
              fee too. It will help SEDS-Pulchowk to grow. We will also provide
              you with certification at end of your membership tenure (1 Year).
            </p>
          </div>
          <br />
          <form>
            <p>
              <strong>Are you new or existing member?</strong>
            </p>{" "}
            <select
              className={`form-select ${styles.select_dropdown}`}
              name="member-type"
              onChange={(e) => set_membership_type(e.target.value)}
              aria-label="Membership type select"
            >
              <option value="net">Membership Type</option>
              <option id="new-member" value="new-member">
                New Member
              </option>
              <option id="existing-member" value="existing-member">
                Existing Member
              </option>
            </select>
            <hr />
          </form>
          <OrginalForm memberType={membership_type} />
        </div>
      </section>
    </div>
  );
}

function OrginalForm({ memberType }: OrginalFormProps) {
  const [formMain, setFormMain] = useState(<></>);

  useEffect(() => {
    if (memberType == "new-member") {
      setFormMain(<NewGeneralMemberForm />);
    } else if (memberType == "existing-member") {
      setFormMain(<ExistingMemberForm />);
    } else {
      setFormMain(<small>Select membership type to open a form</small>);
    }
  }, [memberType]);

  return formMain;
}

function NewGeneralMemberForm() {
  const [othersSelected, setOthersSelected] = useState(false);

  function toggleSourceType(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value == "Other") {
      setOthersSelected(true); //TODO : Not working why???
      console.log("others is selected and it is " + othersSelected);
    } else {
      setOthersSelected(false);
    }
  }

  return (
    <form action="/action_page.php" method="get" autoComplete="on">
      <div className={styles.form_section}>
        <p>Welcome on board ✨</p>

        <p>
          Be ready to join as general member in SEDS-Pulchowk and start your
          celestial journey.
        </p>
      </div>
      <div
        className={`form-group ${styles.form_section}`}
        style={{ minWidth: "300px", width: "40%" }}
      >
        <label htmlFor="full-name">
          Full Name: <span className="text-danger">*</span>
        </label>
        <input
          type="full-name"
          name="full-name"
          className="form-control"
          id="full-name"
          required
        />
      </div>
      <div
        className={`form-group ${styles.form_section}`}
        style={{ minWidth: "200px", width: "25%" }}
      >
        <label htmlFor="roll-no">
          Class Roll Number: <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="class-roll-no"
          className="form-control"
          id="roll-no"
          placeholder="078BCT077"
          required
        />
      </div>
      <div
        className={`form-group ${styles.form_section}`}
        style={{ minWidth: "200px", width: "25%" }}
      >
        <label htmlFor="mobile-no">
          Mobile Number: <span className="text-danger">*</span>
        </label>
        <input
          type="number"
          name="mobile-no"
          className="form-control"
          id="mobile-no"
          placeholder="9700000000"
          required
        />
      </div>
      <div className={`form-group ${styles.form_section}`}>
        <label htmlFor="email">
          Campus Email ID: <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          name="campus-email"
          className="form-control"
          id="email"
          placeholder="078bct077.sandip@pcampus.edu.np"
          required
        />
      </div>
      <div
        className={`form-group ${styles.form_section}`}
        style={{ minWidth: "200px", width: "20%" }}
      >
        <label htmlFor="dob">
          Your Date of Birth: <span className="text-danger">*</span>
        </label>
        <input
          type="date"
          name="dob"
          className="form-control"
          id="dob"
          required
        />
      </div>
      <div className={styles.form_section}>
        <label>
          How did you hear about SEDS-Pulchowk? &nbsp;
          <span className="text-danger">*</span>
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="source"
            id="socialMedia"
            value="Social Media"
            onChange={(e) => toggleSourceType(e)}
            required
          />
          <label className="form-check-label" htmlFor="socialMedia">
            Social Media (Facebook, Instagram, LinkedIn, News etc)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="source"
            id="workshops"
            value="Workshops"
            onChange={(e) => toggleSourceType(e)}
          />
          <label className="form-check-label" htmlFor="workshops">
            Workshops
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="source"
            id="poster"
            value="Promotional Poster"
            onChange={(e) => toggleSourceType(e)}
          />
          <label className="form-check-label" htmlFor="poster">
            Promotional Poster
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="source"
            id="events"
            value="Events"
            onChange={(e) => toggleSourceType(e)}
          />
          <label className="form-check-label" htmlFor="events">
            Events
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="source"
            id="other"
            value="Other"
            onChange={(e) => toggleSourceType(e)}
          />
          <label className="form-check-label" htmlFor="other"></label>
          <input
            type="text"
            placeholder="Others.."
            disabled={!othersSelected}
          />
        </div>
      </div>
      <div
        className={`form-group ${styles.form_section} ${styles.form_section_text_area}`}
      >
        <label htmlFor="reason-to-join-seds">
          Why do you want to join SEDS-Pulchowk?
        </label>
        <textarea
          className="form-control"
          id="reason-to-join-seds"
          name="reason"
          rows={2}
        ></textarea>
      </div>
      <div
        className={`form-group ${styles.form_section} ${styles.form_section_text_area}`}
      >
        <label htmlFor="expectation-from-seds">
          What are your expectation from SEDS-Pulchowk?
        </label>
        <textarea
          className="form-control"
          id="expectation-from-seds"
          name="expectation"
          rows={2}
        ></textarea>
      </div>
      <div
        className={`form-group ${styles.form_section} ${styles.form_section_text_area}`}
      >
        <label htmlFor="contribution-to-seds">
          How could you contribute in exploration and development of space?
        </label>
        <textarea
          className="form-control"
          id="contribution-to-seds"
          name="contribution"
          rows={2}
        ></textarea>
      </div>
      <div className={styles.form_section}>
        <label>
          Have you ever been member of any other SEDS chapter before? &nbsp;
          &nbsp; <span className="text-danger">*</span>
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="member-of-seds-chapter-before"
            id="member-before"
            value="yes"
            required
          />
          <label className="form-check-label" htmlFor="member-before">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="member-of-seds-chapter-before"
            id="not-member-before"
            value="no"
          />
          <label className="form-check-label" htmlFor="not-member-before">
            No
          </label>
        </div>
      </div>
      <div className={`mb-3 ${styles.form_section}`}>
        <label htmlFor="photo" className="form-label">
          Upload Your Recent Photo: &nbsp;{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          name="member-photo"
          type="file"
          id="photo"
          required
        />
      </div>
      <div
        className={styles.form_section}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Scan to pay your membership fee:</label>
        <Image
          src="/Media/Payment/e-sewa-QR.png"
          alt="Esewa: 9817899305 Siddhant Yadav"
          width={300}
          height={380}
        />
      </div>
      <div className={`mb-3 ${styles.form_section}`}>
        <label htmlFor="receipt" className="form-label">
          Upload Receipt: &nbsp; <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          name="receipt"
          type="file"
          id="receipt"
          required
        />
      </div>
      <button
        type="submit"
        className={`btn btn-normal ${styles.submit_button}`}
      >
        Submit
      </button>
    </form>
  );
}

function ExistingMemberForm() {
  return (
    <form action="/action_page.php" method="get" autoComplete="on">
      <div className={styles.form_section}>
        <p>
          Wanna be part of SEDS-Pulchowk for another tenure, then this page is
          for you.
        </p>

        <p>
          We are glad to see you back working with us, and hope to grow along
          with us again.
        </p>
      </div>
      <div
        className={`form-group ${styles.form_section}`}
        style={{ minWidth: "300px", width: "40%" }}
      >
        <label htmlFor="full-name">Full Name:</label>
        <input
          type="full-name"
          name="full-name"
          className="form-control"
          id="full-name"
        />
      </div>
      <div
        className={`form-group ${styles.form_section}`}
        style={{ minWidth: "200px", width: "25%" }}
      >
        <label htmlFor="roll-no">Class Roll Number:</label>
        <input
          type="text"
          name="class-roll-no"
          className="form-control"
          id="roll-no"
          placeholder="078BCT077"
          required
        />
      </div>
      <div
        className={`form-group ${styles.form_section}`}
        style={{ minWidth: "200px", width: "25%" }}
      >
        <label htmlFor="membership-no">
          Membership Number: <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="membership-no"
          className="form-control"
          id="membership-no"
          placeholder="PUL-081-SEDS-005"
          required
        />
      </div>
      <div className={`form-group ${styles.form_section}`}>
        <label htmlFor="email">
          Campus Email ID: <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          name="campus-email"
          className="form-control"
          id="email"
          placeholder="078bct077.sandip@pcampus.edu.np"
          required
        />
      </div>
      <div
        className={styles.form_section}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Scan to pay your membership fee:</label>
        <Image
          src="/Media/Payment/e-sewa-QR.png"
          alt="Esewa: 9817899305 Siddhant Yadav"
          width={300}
          height={380}
        />
      </div>
      <div className={`mb-3 ${styles.form_section}`}>
        <label htmlFor="receipt" className="form-label">
          Upload Receipt: &nbsp; <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          name="receipt"
          type="file"
          id="receipt"
          required
        />
      </div>
      <button
        type="submit"
        className={`btn btn-normal ${styles.submit_button}`}
      >
        Submit
      </button>
    </form>
  );
}

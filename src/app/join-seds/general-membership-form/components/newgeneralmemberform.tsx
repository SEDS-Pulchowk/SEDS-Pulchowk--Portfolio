"use client";

import { ChangeEvent, useState, FormEvent } from "react";
import Image from "next/image";
import styles from "../../joinseds.module.css";
import { PaperPlaneCheck } from "@/components/Molecules/icons";
import buttonStyles from "@/styles/Atoms/buttonstyles.module.css";

function Submit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const fileInput = form.querySelector(
    'input[type="file"]'
  ) as HTMLInputElement;

  const scriptURL =
    "https://script.google.com/macros/s/AKfycby9RWMzBwGQ7m0FAvakGIn_Nbgyrv7he6sDcEh8JkYhztaUyChjbGme7w-DyaM8MAFfMw/exec";

  const file = fileInput?.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async function () {
      const base64File = reader.result?.toString().split(",")[1]; // Get Base64 part

      const formData = new FormData(form);
      formData.append("fileBase64", base64File || "");
      formData.append("fileName", file.name);

      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          alert(
            "Thank you! Your form has been submitted successfully. Soon You will receive a confirmation email."
          );
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => console.error("Error!", error.message));
    };
    reader.readAsDataURL(file);
  } else {
    alert("No file selected! Submitting without file.");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert(
          "Thank you! Your form has been submitted successfully. Soon You will receive a confirmation email."
        );
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  }
}

export default function NewGeneralMemberForm() {
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
    <form onSubmit={(e) => Submit(e)} name="Googel_Sheet_1" autoComplete="on">
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
          name="Full-Name"
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
          name="Class-Roll-No"
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
          name="Mobile-No"
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
          name="Campus-Email"
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
          name="DOB"
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
            name="Source"
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
            name="Source"
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
            name="Source"
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
            name="Source"
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
            name="Source"
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
          name="Reason-to-Join"
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
          name="Expectation-form-SEDS"
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
          name="Contribution-to-SEDS"
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
            name="Member-of-SEDS-Chapter-Before"
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
            name="Member-of-SEDS-Chapter-Before"
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
          name="Member_Photo"
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
          name="Receipt"
          type="file"
          id="receipt"
          required
        />
      </div>
      <button
        type="submit"
        className={`btn btn-normal ${buttonStyles.click_button}`}
      >
        <PaperPlaneCheck />
        &nbsp; Submit &nbsp; &nbsp; &nbsp;
      </button>
    </form>
  );
}

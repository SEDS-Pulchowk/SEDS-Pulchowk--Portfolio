"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "../../joinseds.module.css";
import { PaperPlaneCheck, RocketLaunch } from "@/components/Molecules/icons";
import buttonStyles from "@/styles/Atoms/buttonstyles.module.css";
import Link from "next/link";

export default function ExistingMemberForm() {
  const [submitted, setSubmitted] = useState(false);

  function Submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    const form = e.currentTarget;
    const fileInput = form.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwayuECDcRsnuE6ATK-KHjHuf7M40O4hlt-EACnRCaPNGSjKzcA9oBr3z_1OzBoQvuC/exec";

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

  return (
    <form onSubmit={(e) => Submit(e)} name="Googel_Sheet_1" autoComplete="on">
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
          name="Full-Name"
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
        <label htmlFor="membership-no">
          Membership Number: <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="Membership-No"
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
          name="Campus-Email"
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
        {submitted ? (
          <RocketLaunch />
        ) : (
          <>
            <PaperPlaneCheck />
            &nbsp; Submit &nbsp; &nbsp; &nbsp;
          </>
        )}
      </button>
      <hr />
      <small className="text-muted">
        If it is taking too long then Space Signal Faltered:
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSDDmtw7h-KzOlTVU8fOvH2CZD8SDXo8erx2OSFHv5Lamesg/viewform?usp=sf_link"
          className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          Click here
        </Link>
        to sync connection
      </small>
    </form>
  );
}

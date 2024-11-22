"use client";

import { useState, FormEvent, useRef } from "react";
import styles from "@/styles/Molecules/directmessage.module.css";
import buttonStyles from "@/styles/Atoms/buttonstyles.module.css";
import formStyles from "@/app/join-seds/joinseds.module.css";
import emailjs from "@emailjs/browser";
import { PaperPlane, InfiniteSpin } from "./icons";

function DirectMessage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    {/*Using EmailJS for sending email*/}
    if (form.current) {
      emailjs
        .sendForm(
          "service_z2wpi45",
          "template_bxujshv",
          form.current,
          "80qygrEzx9GQOJ-wn"
        )
        .then(() => {
          alert(
            "Thank you! 🌟 Your message has been received successfully. Our team is already on it and will get back to you shortly. Have a wonderful day!"
          );
          setSubmitted(true);
        })
        .catch((error) => {
          console.error("Error!", error.message);
          alert("Something went wrong. Please try again later.");
        })
        .finally(() => {
          window.location.reload();
        });
    }
  };

  return (
    <div
      data-bs-theme="dark"
      className={`${styles.direct_message_container}`}
      id="direct-message"
    >
      <hr />
      <h3>
        Space Station:<span className="gradient_text"> Message Bay</span>
      </h3>
      <form ref={form} onSubmit={(e) => sendEmail(e)} autoComplete="on">
        <div
          className={`form-group ${formStyles.form_section}`}
          style={{ minWidth: "300px", width: "40%" }}
        >
          <input
            type="full-name"
            name="Name"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className={`form-group ${formStyles.form_section}`}>
          <input
            type="email"
            name="Email Address"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div
          className={`form-group ${formStyles.form_section}`}
          style={{ minWidth: "200px", width: "25%" }}
        >
          <input
            type="text"
            name="Subject"
            className="form-control"
            placeholder="Subject"
          />
        </div>
        <div
          className={`form-group ${formStyles.form_section} ${styles.form_section_text_area}`}
        >
          <textarea
            className="form-control"
            name="Message"
            rows={3}
            cols={60}
            placeholder="Message..."
            required
          ></textarea>
        </div>
        <div className={`${buttonStyles.click_button} ${styles.messge_button}`}>
          <button id="submit" type="submit">
            {submitted ? (
              <InfiniteSpin />
            ) : (
              <>
                <PaperPlane />
                &nbsp; Submit &nbsp; &nbsp; &nbsp;
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DirectMessage;

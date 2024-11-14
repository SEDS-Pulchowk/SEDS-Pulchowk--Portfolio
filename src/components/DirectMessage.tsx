import styles from "@/styles/directmessage.module.css";
import formStyles from "@/app/join-seds/joinseds.module.css";
import { PaperPlane } from "./icons";


function DirectMessage() {
  return (
    <>
    <div data-bs-theme="dark" className={`${styles.direct_message_container}`}>
    < hr/>
      <h3>Leave a <span className="gradient_text">Message</span></h3>
      <form
        action="https://getform.io/f/ebpdyplb"
        method="POST"
      >
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
        <div className={`${formStyles.submit_button} ${styles.messge_button}`}>
          <button id="submit" type="submit">
            <PaperPlane />
            &nbsp; &nbsp;
            Send Message
          </button>
        </div>
      </form>
    </div></>
  );
}

export default DirectMessage;

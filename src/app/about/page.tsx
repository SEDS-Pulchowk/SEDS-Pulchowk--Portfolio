// About page component

"use client";

import styles from "./page.module.css";
import MemberCard from "@/components/Molecules/MemberCard";
import executives from "./executives";
import Image from "next/image";
import who_we_are from "/public/images/who_we_are.jpg";

export default function About() {
  return (
    <>
      <section className={styles.about_us}>
        <h2 className={styles.about_header}>
          <span className="gradient_text">About </span>
          us
        </h2>
        <div className={styles.about_content}>
          <p className={styles.about_text}>
            Lorem ipsum is the industrial language too be used so that match
            this sentence no to create this site lets go on with the flow Lorem
            ipsum is the industrial language too be used Lorem ipsum is the
            industrial language too be used so that match this sentence no to
            create this site lets go on with the flow Lorem ipsum is the i
            <br />
            <br />
            ndustrial language too be used Lorem ipsum is the industrial
            language too be used so that match this sentence no to create this
            site lets go on with the flow Lorem ipsum is the industrial language
            too be used
          </p>
          <Image
            alt="Picture of SEDS-Pulchowk members and guests during NASA Space Apps Hackathon"
            className={styles.about_image}
            src={who_we_are}
          />
        </div>
      </section>

      <section className={styles.executives_section}>
        <h2 className={styles.executives_header}>
          Meet our <span className="gradient_text">executives</span>
        </h2>

        <div className={styles.executives_wrapper}>
          <div className={styles.executives_container}>
            {executives.map((execs, i) => (
              <div className={styles.executives_row} key={i}>
                {execs.map((exec) => (
                  <div key={exec.name} className={styles.executives_card}>
                    <MemberCard {...exec} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// About page component

"use client";

import styles from "./page.module.css";
import MemberCard from "@/components/Molecules/MemberCard";
import AdvisorCard from "@/components/Molecules/AdvisorCard";
import executives from "./data/executives";
import advisors from "./data/advisors";
import Image from "next/image";
import executives_2081 from "public/images/Executives/executives_2081.jpg";

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
            At SEDS-Pulchowk, collaboration is at the heart of everything we do.
            We bring together enthusiastic students from diverse engineering
            disciplines at IOE Pulchowk, fostering innovation through the unique
            perspectives and talents of our members.
            <br />
            <br />
            As a research-driven community, we continuously strive to learn,
            grow, and push the boundaries of space technology. Beyond
            professional development, we create a supportive and close-knit
            environment where lifelong friendships and meaningful connections
            thrive.
            <br />
            <br />
            By joining SEDS-Pulchowk, you become part of a dynamic family
            committed to advancing space exploration and shaping the future of
            space technology. Together, we aim to inspire each other and leave a
            lasting impact on the global space community.
          </p>
          <Image
            alt="Some Executive Committee members of SEDS 2081"
            className={styles.about_image}
            src={executives_2081}
          />
        </div>
      </section>
      <section className={styles.advisors_section}>
        <h2 className={styles.executives_header}>
          Message From <span className="gradient_text"> Advisors</span>
        </h2>

        <div className={styles.advisors_wrapper}>
          {advisors.map((advisor) => (
            <div key={advisor.name} className={styles.advisors_card}>
              <AdvisorCard {...advisor} />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.executives_section}>
        <h2 className={styles.executives_header}>
          SEDS Executive <span className="gradient_text"> Council</span>
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

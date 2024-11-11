"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Program from "@/components/Program";
import who_we_are from "public/images/who_we_are.jpg";
import SolarSystem from "@/components/SolarSystem";
import { useState } from "react";

export default function Home() {
  let [selected, set_selected] = useState<"programs" | "projects">("programs");

  return (
    <>
      <div className={styles.hero_banner}>
        <div className={styles.solar_system_wrapper}>
          <SolarSystem />
        </div>

        <section className={styles.section}>
          <div className={styles.main_text_wrapper}>
            <h1 className={styles.main_header}>
              To the <span className="gradient_text">stars </span>
              <br />
              by <span className="gradient_text">efforts</span>
            </h1>
            <p className={styles.main_text}>
              Lorem ipsum is the industrial language too be used so that match
              this sentence no to create this site lets go on with the flow
              Lorem ipsum is the industrial language too be used
            </p>
          </div>
          <button className={styles.join_us_button}>Join Us</button>
        </section>
      </div>

      <section
        className={`${styles.section} ${styles.about_section}`}
        id="About Us"
      >
        <h2 className={styles.about_header}>
          <span className="gradient_text">Who </span>
          We Are
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
            too be used{" "}
          </p>
          <Image
            alt="Picture of SEDS-Pulchowk members and guests during NASA Space Apps Hackathon"
            className={styles.about_image}
            src={who_we_are}
          />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.programs_section}`}
        id="Programs"
      >
        <div className={styles.programs_section_inner}>
          <div className={styles.programs_section_background}></div>

          <h2 className={styles.programs_header}>
            Our <span className="gradient_text">Galactic </span>
            {selected == "programs" ? "Programs" : "Projects"}
          </h2>
          <div className={styles.program_buttons_wrapper}>
            <button
              onClick={() => set_selected("programs")}
              className={`${styles.program_button} ${
                selected == "programs" ? styles.active : ""
              }`}
            >
              {/* TODO: Use icons */}
              <span>🎉</span>
              <span>Programs</span>
            </button>
            <button
              onClick={() => set_selected("projects")}
              className={`${styles.program_button} ${
                selected == "projects" ? styles.active : ""
              }`}
            >
              <span>🚀</span>
              <span>Projects</span>
            </button>
          </div>
          {selected == "programs" ? (
            <div className={styles.program_items}>
              <Program
                title="Space A.I Art Challenges"
                description="Space A.I Art chLLWNFWA I targest to wards the yound mind to ecplore the vast ocean of S.i and become the king og the pirates, gum gum, sorry cannon mhhhh, ahhh, ehh, aah, mhh, thing"
                image="images/ai_space_art_cover.png"
                start={new Date(1703163822933)}
                end={new Date(1703163822933)}
                location="Online"
              />

              <Program
                title="Space A.I Art Challenges"
                description="Space A.I Art chLLWNFWA I targest to wards the yound mind to ecplore the vast ocean of S.i and become the king og the pirates, gum gum, sorry cannon mhhhh, ahhh, ehh, aah, mhh, thing"
                image="images/ai_space_art_cover.png"
                start={new Date(1703163822933)}
                end={new Date(1703163822933)}
                location="Online"
              />

              <Program
                title="Space A.I Art Challenges"
                description="Space A.I Art chLLWNFWA I targest to wards the yound mind to ecplore the vast ocean of S.i and become the king og the pirates, gum gum, sorry cannon mhhhh, ahhh, ehh, aah, mhh, thing"
                image="images/ai_space_art_cover.png"
                start={new Date(1703163822933)}
                end={new Date(1703163822933)}
                location="Online"
              />
            </div>
          ) : (
            <div>{/* TODO: */}</div>
          )}
        </div>
      </section>
    </>
  );
}

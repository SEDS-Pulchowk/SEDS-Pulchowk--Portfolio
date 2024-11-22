"use client";

import Image from "next/image";
import styles from "./page.module.css";
import who_we_are from "/public/images/Executives/who_we_are.jpg";
import SolarSystem from "@/components/Atoms/SolarSystem";
import TailStar from "@/components/Atoms/TailStar";
import DirectMessage from "@/components/Molecules/DirectMessage";
import Program from "@/components/Molecules/Program";
import Project from "@/components/Molecules/Project";
import programs from "@/data/programs";
import projects from "@/data/projects";
import { useState, useEffect } from "react";

export default function Home() {
  let [selected, set_selected] = useState<"programs" | "projects">("programs");

  return (
    <>
      <div className={styles.hero_banner}>
        <SolarSystem />
        <TailStar />
        <section className={styles.section}>
          <div className={styles.main_text_wrapper}>
            <h1 className={styles.main_header}>
              To the <span className="gradient_text">stars </span>
              <br />
              by <span className="gradient_text">efforts</span>
            </h1>
            <p className={styles.main_text}>
              <strong>Ready to Launch Ideas?</strong> At SEDS-Pulchowk, we push
              the boundaries of space research, transforming groundbreaking
              concepts into reality. Dive into the future of exploration, where
              cutting-edge innovation meets endless discovery!
            </p>
          </div>
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
            Founded in 2019, SEDS-Pulchowk is a leading partner of SEDS Nepal,
            dedicated to advancing space exploration through cutting-edge
            research, innovation, and outreach programs. We empower the next
            generation of engineers, scientists, and visionaries by pushing the
            boundaries of space technology and fostering a vibrant community of
            space enthusiasts committed to shaping the future of space
            exploration.
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
        id="Programs-and-Projects"
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
              <span>🎉 Programs</span>
            </button>
            <button
              onClick={() => set_selected("projects")}
              className={`${styles.program_button} ${
                selected == "projects" ? styles.active : ""
              }`}
            >
              <span>🚀 Projects</span>
            </button>
          </div>
          <ProgramsAndProjects selected={selected} />
        </div>
      </section>
      <DirectMessage />
    </>
  );
}

function useIsMobile(breakpoint = 720) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

function ProgramsAndProjects({
  selected,
}: {
  selected: "programs" | "projects";
}) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  {
    /*TODO: Make following code efficient with cleanup*/
  }
  const programsToRender =
    isMobile && !isOpen ? programs.slice(0, 2) : programs;
  const projectsToRender =
    isMobile && !isOpen ? projects.slice(0, 2) : projects;

  return (
    <div className={styles.program_items}>
      {selected === "programs"
        ? programsToRender.map((program) => (
            <Program
              key={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
              start={program.start}
              end={program.end}
              location={program.location}
            />
          ))
        : projectsToRender.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              year={project.year}
            />
          ))}
      {isMobile ? (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          {isOpen ? "Show Less..." : "Load More..."}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

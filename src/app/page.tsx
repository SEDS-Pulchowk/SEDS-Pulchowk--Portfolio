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

export default function Home() {
  let [selected, set_selected] = useState<"programs" | "projects">("programs");
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.hero_banner}>
        <SolarSystem />
        <TailStar />
        <section className={styles.section}>
          <div className={styles.main_text_wrapper}>
            <h2 className={styles.main_header}>
              <span className={styles.main_question}>उदेश्य के लिनु?</span>
              <br />
              <span className={`gradient_text ${styles.main_answer}`}>
                उडी छुनु चन्द्र एक
              </span>
            </h2>
            <p className={styles.main_text}>
              Driven by research, collaboration, and innovation, we are pushing
              the boundaries of space exploration to new frontiers. Together, we
              ignite curiosity, inspire progress, and shape the future of space
              technology.
            </p>
          </div>
        </section>
      </div>

      <section
        className={`${styles.section} ${styles.about_section}`}
        id="About Us"
      >
        <h2 className={styles.about_header}>
          <span className="gradient_text">Who </span> Are We?
        </h2>
        <div className={styles.about_content}>
          <div className={styles.about_text}>
            <p className={isMobile && !isOpen ? styles.paragraph_style : ""}>
              Established in 2019, SEDS-Pulchowk serves as a pioneer in space
              exploration and innovation in Nepal. As a leading partner of SEDS
              Nepal, we are dedicated to advancing space technology through
              cutting-edge research, impactful outreach, and collaborative
              projects.
              <br />
              <br />
              Our team of engineers, scientists, and visionaries is united by a
              shared curiosity to explore the universe and contribute to the
              global space community. By embracing continuous learning, we
              strive to foster the next generation of space leaders and
              innovators. From satellite development to groundbreaking space
              science research, our members are actively shaping the future of
              space exploration.
              <br />
              <br />
              Join us on our mission to inspire, innovate, and expand the
              frontiers of human knowledge. Together, we can address global
              challenges through space science and create a brighter future for
              all.
            </p>
            {isMobile ? (
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <small>{isOpen ? "Read Less..." : "Read More..."}</small>
              </button>
            ) : (
              ""
            )}
          </div>
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
    isMobile && !isOpen
      ? programs.slice(0, 2)
      : !isOpen
      ? programs.slice(0, 3)
      : programs;
  const projectsToRender =
    isMobile && !isOpen
      ? projects.slice(0, 2)
      : !isOpen
      ? projects.slice(0, 3)
      : projects;

  return (
    <div className={styles.program_container}>
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
                register_url={program.register_url}
                collection_url={program.collection_url}
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
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
      >
        <small>{isOpen ? "Show Less..." : "Load More..."}</small>
      </button>
    </div>
  );
}

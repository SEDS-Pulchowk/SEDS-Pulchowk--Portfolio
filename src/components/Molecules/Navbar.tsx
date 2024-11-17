"use client";

import Image from "next/image";
import { Star } from "./icons";
import styles from "@/styles/Molecules/navbar.module.css";
import logo from "public/logo.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCode,
  faBlog,
  faInfoCircle,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_border}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo_wrapper}>
            <Image
              alt="Seds-Pulchowk Logo"
              className={styles.logo_image}
              src={logo}
            />
            <h3 className={styles.logo_text}>
              SEDS-<span className="gradient_text">Pulchowk</span>
            </h3>
          </Link>
          <ul className={styles.navbar_large}>
            <NavbarItems />
          </ul>
          <HamburgerButtonItems />
        </nav>
      </div>
    </div>
  );
}

function NavbarItems() {
  return (
    <>
      <li className={styles.navbar_item}>
        <Link href="/#Programs" className={styles.link}>
          <span>Programs</span>
        </Link>
      </li>
      <li className={styles.navbar_item}>
        <Link href="/#Projects" className={styles.link}>
          <span>Projects</span>
        </Link>
      </li>
      <li className={styles.navbar_item}>
        <Link href="/blogs" className={styles.link}>
          <span>Blogs</span>
        </Link>
      </li>
      <li className={styles.navbar_item}>
        <Link href="/about" className={styles.link}>
          <span>About Us</span>
        </Link>
      </li>
      <Link href="/join-seds" className={styles.link}>
        <button className={styles.join_us}>
          <span className={styles.star}>
            <Star />
          </span>
          <span>Join SEDS</span>
          <span className={styles.star}>
            <Star />
          </span>
        </button>
      </Link>
    </>
  );
}

function HamburgerButtonItems() {
  return (
    <div
      data-bs-theme="dark"
      className={`dropdown ${styles.hamburger}`}
      style={{ position: "absolute", top: "15px", right: "40px" }}
    >
      <button
        className="btn"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FontAwesomeIcon
          className={styles.hamburger_btn}
          icon={faBars}
          size="2x"
        />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link href="/#Programs" className="dropdown-item">
          <FontAwesomeIcon icon={faCode} />
          <span>&nbsp; Programs</span>
        </Link>
        <Link href="/#Projects" className="dropdown-item">
          <FontAwesomeIcon icon={faListCheck} />
          <span>&nbsp; Projects</span>
        </Link>
        <Link href="/blogs" className="dropdown-item">
          <FontAwesomeIcon icon={faBlog} />
          <span>&nbsp; Blogs</span>
        </Link>
        <Link href="/about" className="dropdown-item">
          <FontAwesomeIcon icon={faInfoCircle} />
          <span>&nbsp; About Us</span>
        </Link>
        <Link href="/join-seds" className="dropdown-item">
          <button className={styles.join_us}>
            <span className={styles.star}></span>
            <span>Join SEDS</span>
            <span className={styles.star}></span>
          </button>
        </Link>
      </div>
    </div>
  );
}

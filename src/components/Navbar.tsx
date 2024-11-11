"use client";

import Image from "next/image";
import { Circle, Close, Hamburger, Star } from "./icons";
import styles from "@/styles/navbar.module.css";
import logo from "public/logo.svg";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [sideNavShown, setSideNavShown] = useState(false);

  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_border}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo_wrapper}>
            <Image alt="Logo" className={styles.logo_image} src={logo} />
            <h3 className={styles.logo_text}>
              SEDS-<span className="gradient_text">Pulchowk</span>
            </h3>
          </Link>
          <ul className={styles.navbar_large}>
            <NavbarItems />
          </ul>
          <button
            className={styles.hamburger_btn}
            onClick={() => setSideNavShown(true)}
          >
            <Hamburger />
          </button>
        </nav>
      </div>

      <div
        className={`${styles.sidenav_wrapper} ${
          sideNavShown ? styles.sidenav_wrapper_shown : ""
        }`}
      >
        <div
          className={styles.overlay}
          onClick={() => setSideNavShown(false)}
        ></div>
        <button
          onClick={() => setSideNavShown(false)}
          className={styles.sidenav_close_btn}
        >
          <Close />
        </button>
        <ul className={styles.sidenav}>
          <NavbarItems />
        </ul>
      </div>
    </div>
  );
}

function NavbarItems() {
  return (
    <>
      <li className={styles.navbar_item}>
        <Link href="/about" className={styles.link}>
          <span>About Us</span>
          {/* <span className={styles.navbar_circle}><Circle /></span> */}
        </Link>
      </li>
      <li className={styles.navbar_item}>
        <Link href="/#Programs" className={styles.link}>
          <span>Programs</span>
          {/* <span className={styles.navbar_circle}><Circle /></span> */}
        </Link>
      </li>
      {/* TODO: Show projects when clicked */}
      <li className={styles.navbar_item}>
        <Link href="/#Projects" className={styles.link}>
          <span>Projects</span>
          {/* <span className={styles.navbar_circle}><Circle /></span> */}
        </Link>
      </li>
      <Link href="/join-seds" className={styles.link}>
        <button className={styles.join_us}>
          <span className={styles.star}>
            <Star />
          </span>
          <span>Join Us</span>
          <span className={styles.star}>
            <Star />
          </span>
        </button>
      </Link>
    </>
  );
}

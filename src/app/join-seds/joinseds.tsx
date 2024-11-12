"use client";

import { useState } from "react";
import styles from "./joinseds.module.css";
import Link from "next/link";

interface JoinSedsProps {
  membershipType?: "general" | "executive";
}

export function JoinSeds({ membershipType = "general" }: JoinSedsProps) {
  const [selected, set_selected] = useState(membershipType);

  return (
    <div className={`bg-dark ${styles.navbar}`}>
      <Link href="/join-seds/general-membership-form">
        <button
          onClick={() => set_selected("general")}
          className={`${styles.navbar_button} ${
            selected === "general" ? styles.navbar_button_active : ""
          }`}
        >
          General Membership
        </button>
      </Link>
      <Link href="/join-seds/executive-form">
        <button
          onClick={() => set_selected("executive")}
          className={`${styles.navbar_button} ${
            selected === "executive" ? styles.navbar_button_active : ""
          }`}
        >
          Executive Comitee
        </button>
      </Link>
    </div>
  );
}

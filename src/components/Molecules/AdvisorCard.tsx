import { Advisor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Molecules/advisorcard.module.css";

export default function AdvisorCard({
  name,
  message,
  position,
  image,
  url: socialUrl,
}: Advisor) {
  return (
    <div className={styles.advisor_wrapper}>
      <p className={styles.message}>&nbsp; {message}</p>
      <div className={styles.details}>
        <Image
          alt={name}
          src={image || "/images/person.png"}
          className={styles.advisor_image}
          height={100}
          width={100}
        />
        <div>
          <Link href={socialUrl || "#"} target="_blank"><h5 className={styles.name}>{name}</h5></Link>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </div>
  );
}

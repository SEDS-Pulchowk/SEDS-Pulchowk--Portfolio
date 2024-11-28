import { Advisor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Molecules/advisorcard.module.css";

export default function AdvisorCard({
  name,
  message,
  position,
  department,
  workArea,
  image,
  url: socialUrl,
}: Advisor) {
  return (
    <div className={styles.advisor_wrapper}>
      <p className={styles.message}>&nbsp; {message}</p>
      <div className={styles.details_wrapper}>
        <Image
          alt={name}
          src={image || "/images/person.png"}
          className={styles.advisor_image}
          height={100}
          width={100}
        />
        <div className={styles.details}>
          <Link href={socialUrl || "#"} target="_blank"><h5 className={styles.name}>{name}</h5></Link>
          <h6 className={styles.position}>{position}</h6>
          <p>{department}</p>
          <small>{workArea}</small>
        </div>
      </div>
    </div>
  );
}

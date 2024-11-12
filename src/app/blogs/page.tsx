import { Tweet } from "react-tweet";
import styles from "./page.module.css";
import tweetsId from "./data";

export default function Blogs() {
  return (
    <div className={styles.container}>
      {tweetsId.map((id, index) => (
        <Tweet key={index} id={id} />
      ))}
    </div>
  );
}

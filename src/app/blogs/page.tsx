import { Tweet } from "react-tweet";
import styles from "./page.module.css";
import tweetsId from "./data";

export default function Blogs() {
  return (
    <div className={styles.blogs_container}>
      <h3>We are working on it.</h3>
      <small className="text-primary">It is just a test model.</small>
      <hr />
      <div className={styles.container}>
        {tweetsId.map((id, index) => (
          <Tweet key={index} id={id} />
        ))}
      </div>
    </div>
  );
}

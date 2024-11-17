import styles from "@styles/morebutton.module.css";
import buttonStyles from "@styles/atoms/buttonstyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function MoreButton() {
  return (
    <button className={`${styles.more_button} ${buttonStyles.click_button}`}>
      See More
      <div className={styles.arrows}>
        <FontAwesomeIcon icon={faAngleRight} />
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </button>
  );
}

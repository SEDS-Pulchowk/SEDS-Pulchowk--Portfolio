import styles from "@/styles/Atoms/solarsystem.module.css";

export default function SolarSystem() {
  return (
    <div className={styles.solar_system_wrapper}>
      <div className={styles.solar_syst}>
        <div className={styles.sun}></div>
        <div className={styles.mercury}></div>
        <div className={styles.venus}></div>
        <div className={styles.earth}>
          <div className={styles.moon}></div>
        </div>
        <div className={styles.mars}></div>
        <div className={styles.jupiter}></div>
        <div className={styles.saturn}></div>
        <div className={styles.uranus}></div>
        <div className={styles.neptune}></div>
      </div>
    </ div>
  );
}

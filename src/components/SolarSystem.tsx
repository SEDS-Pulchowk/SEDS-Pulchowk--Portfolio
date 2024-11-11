import styles from "@/styles/solarsystem.module.css";

// export default function SolarSystem() {
//     let planets = [
//         styles.mercury,
//         styles.venus,
//         styles.earth,
//         styles.mars,
//         styles.jupiter,
//     ];

//     return (
//         <div className={styles.solar_system}>
//             <div className={styles.sun} />

//             {planets.map((planet, i) => (
//                 <div key={i} className={`${styles.planet_wrapper} ${planet}`}>
//                     <div className={styles.orbit} />
//                     <div className={styles.planet} />
//                 </div>
//             ))}

//             <div className={styles.sunlight} />
//         </div>
//     );
// }

export default function SolarSystem() {
  return (
    <>
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
    </>
  );
}

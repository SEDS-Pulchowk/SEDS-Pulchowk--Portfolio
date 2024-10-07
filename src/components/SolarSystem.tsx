import styles from "@/styles/solarsystem.module.css";

export default function SolarSystem() {
    let planets = [
        styles.mercury,
        styles.venus,
        styles.earth,
        styles.mars,
        styles.jupiter,
    ];

    return (
        <div className={styles.solar_system}>
            <div className={styles.sun} />

            {planets.map((planet, i) => (
                <div key={i} className={`${styles.planet_wrapper} ${planet}`}>
                    <div className={styles.orbit} />
                    <div className={styles.planet} />
                </div>
            ))}

            <div className={styles.sunlight} />
        </div>
    );
}

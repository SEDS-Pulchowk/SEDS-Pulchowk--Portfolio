"use clint";

import { useEffect, useState } from "react";
import styles from "@/styles/tailstar.module.css"

const App = () => {
  interface Star {
    id: number;
    startX: number;
    startY: number;
    flyX: number;
    flyY: number;
    rotation: number;
  }
  
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new star with a unique ID and random position/direction
      setStars((stars) => [
        ...stars,
        {
          id: Date.now(),
          startX: Math.random() * window.innerWidth,
          startY: Math.random() * window.innerHeight,
          flyX: (Math.random() - 0.5) * window.innerWidth,
          flyY: (Math.random() - 0.5) * window.innerHeight,
          rotation: (Math.random() - 0.5) * 360,
        },
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

const handleAnimationEnd = (id: number) => {
    setStars((stars) => stars.filter((star) => star.id !== id));
};

  return (
    <div className={styles.star_container}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            left: `${star.startX}px`,
            top: `${star.startY}px`,
            "--fly-x": `${star.flyX}px`,
            "--fly-y": `${star.flyY}px`,
            "--rotation": `${star.rotation}deg`,
          } as React.CSSProperties}
          onAnimationEnd={() => handleAnimationEnd(star.id)}
        />
      ))}
    </div>
  );
};

export default App;

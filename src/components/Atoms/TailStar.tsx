"use clint";

import { useEffect, useState } from "react";
import styles from "@/styles/Atoms/tailstar.module.css";

const App = () => {
  interface Star {
    id: number;
    startX: number;
    startY: number;
    flyX: number;
    flyY: number;
  }

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new star with a unique ID and random position/direction
      setStars((stars) => [
        ...stars,
        {
          id: Date.now(),
          startX: (Math.random()) * window.innerWidth,
          startY: (Math.random()) * window.innerHeight,
          flyX: (Math.random() - 0.5) * window.innerWidth * 2,
          flyY: (Math.random()  - 0.5) * window.innerHeight * 2,
        },
      ]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (id: number) => {
    setStars((stars) => stars.filter((star) => star.id !== id));
  };

  // stars.map((star) => console.log(Math.atan((star.flyY-star.startY)/(star.flyX-star.startX)) * 180 / Math.PI));

  return (
    <div className={styles.star_container}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={
            {
              left: `${star.startX}px`,
              top: `${star.startY}px`,
              "--fly-x": `${star.flyX}px`,
              "--fly-y": `${star.flyY}px`,
              "--initial-rotation": `${
                (Math.atan2(star.flyY - star.startY, star.flyX - star.startX) *
                  180) /
                Math.PI
              }deg`,
            } as React.CSSProperties
          }
          onAnimationEnd={() => handleAnimationEnd(star.id)}
        />
      ))}
    </div>
  );
};

export default App;

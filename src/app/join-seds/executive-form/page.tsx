// "use client";

// import styles from "../joinseds.module.css";
// import { JoinSeds } from "../joinseds";

// export default function ExecutiveForm() {
//   return (
//     <div className={`container ${styles.join_seds}`}>
//      <section className={styles.application_form}>
//          <JoinSeds membershipType="executive" />
//        <div data-bs-theme="dark" className={styles.form_outline}>
//       <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHwtyH1z9i8FOeZKkOiWIcJcn_yDdU7SZIdvCSQJh5AXU-qg/viewform?usp=header">
//         APPLICATION SEDS-EXECUTIVE COMMITEE-2082
//       </a>
//       <a href="https://docs.google.com/forms/d/e/1FAIpQLSfymoPQRBx2diPAwKhCI4C-gWvf6fxz6GQWNmwNnAp0rihaLg/viewform?usp=header">
//         President and Vice-President Form
//       </a>
//     </div>
//     </section>
//     </div>
//   );
// }

"use client";

import React, { useEffect } from "react";
import { JoinSeds } from "../joinseds";
import styles from "../joinseds.module.css";

export default function ExecutiveForm() {
  useEffect(() => {

    // Add click ripple effect
    const handleRippleEffect = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const ripple = document.createElement("span");
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
      `;

      target.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    // Add ripple animation to CSS
    const rippleStyle = document.createElement("style");
    rippleStyle.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(rippleStyle);

    // Add event listeners to form links
    const formLinks = document.querySelectorAll(`.${styles.formLink}`);
    formLinks.forEach((link) => {
      link.addEventListener("click", handleRippleEffect as EventListener);
    });

    // Cleanup
    return () => {
      formLinks.forEach((link) => {
        link.removeEventListener("click", handleRippleEffect as EventListener);
      });
      if (rippleStyle.parentNode) {
        rippleStyle.parentNode.removeChild(rippleStyle);
      }
    };
  }, []);

  return (
    <div className={`container ${styles.join_seds}`}>
      <section className={styles.application_form}>
        <JoinSeds membershipType="executive" />
        <div data-bs-theme="dark" className={styles.form_outline}>

          <div className={`container ${styles.joinSeds}`}>
            <section className={`${styles.applicationForm} ${styles.fadeInUp}`}>
              <div className={styles.headerSection}>
                <div className={styles.spaceIcon}>🚀</div>
                <h1 className={styles.mainTitle}>SEDS EXECUTIVE</h1>
                <p className={styles.subtitle}>
                  Students for Exploration and Development of Space Pulchowk Campus
                </p>
                <p className={styles.description}>
                  Shape the Future of Space Exploration
                </p>
              </div>

              <div className={styles.formOutline}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfymoPQRBx2diPAwKhCI4C-gWvf6fxz6GQWNmwNnAp0rihaLg/viewform?usp=header"
                  className={`${styles.formLink} ${styles.presidentForm}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  President and Vice-President Position
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfHwtyH1z9i8FOeZKkOiWIcJcn_yDdU7SZIdvCSQJh5AXU-qg/viewform?usp=header"
                  className={`${styles.formLink} ${styles.executiveForm} ${styles.pulse}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  General Evecutive Committee Member
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

// export default function ExecutiveForm() {
//   return (
//     <div className={`container ${styles.join_seds}`}>
//       <section className={styles.application_form}>
//         <JoinSeds membershipType="executive" />
//         <div data-bs-theme="dark" className={styles.form_outline}>
//           <div
//             style={{
//               flex: 1,
//               textAlign: "center",
//               alignItems: "center",
//               margin: "150px auto",
//               height: "50vh",
//             }}
//           >
//             <h2>Currently There is No Call for Executives.</h2>
//             <hr />
//             <h4>Thank You for Your Interest</h4>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

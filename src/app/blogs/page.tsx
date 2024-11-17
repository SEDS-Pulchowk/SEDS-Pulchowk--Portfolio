"use client";
import styles from "./page.module.css";
import Blogs from "./blogs_data";
import Link from "next/link";
import { useEffect } from "react";

export default function MediumEmbed() {
  useEffect(() => {
    // Load the iframely script dynamically
    const script = document.createElement("script");
    script.src = "https://static.medium.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.blogs_main}>
      <div className={styles.main_text}>
        <h2>
          Our Celestial <span className="gradient_text">Chronicles</span>
        </h2>
        <h6 className="text-danger">We are working on it.</h6>
        <hr />
      </div>
      <div className={styles.blogs_container}>
        {Blogs.map((blog, index) => (
          <Link key={index} href={blog.url}>
            <div
              key={index}
              className={`iframely-embed ${styles.content}`}
              dangerouslySetInnerHTML={{
                __html: `<a class="m-story" href=${blog.url} >${blog.headline}</a>  
                         <img src=${blog.imageUrl || "https://miro.medium.com/v2/resize:fit:1400/1*2Ccm1VIYlLt6pMq5snIgwQ.gif"} alt=${blog.headline} class=${styles.content_image} width={300} height={200}/>`,
              }}
            />
          </Link>
        ))}
      </div>
      <div>
        <hr />
        <small>
          Wanna launch your blog into orbit.{" "}
          <Link
            href="/#direct-message"
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Contact us
          </Link>
        </small>
      </div>
    </div>
  );
}

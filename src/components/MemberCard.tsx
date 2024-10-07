import { Member, SocialIcon } from "@/types";
import { Facebook, Instagram, LinkedIn } from "./icons";
import styles from "@/styles/membercard.module.css";
import Link from "next/link";

export default function MemberCard({
    name,
    position,
    image,
    level,
    college,
    links,
}: Member) {
    return (
        <div className={styles.member_wrapper}>
            <img
                alt={name}
                src={image || "images/person.png"}
                className={styles.member_image}
            />
            <div className={styles.details_wrapper}>
                <div className={styles.member_details}>
                    <div>
                        <h3 className={styles.name}>{name}</h3>
                        <p className={styles.position}>{position}</p>
                    </div>
                    <div className={styles.education}>
                        <p>{level}</p>
                        <p>{college}</p>
                    </div>
                </div>
                <div className={styles.links_wrapper}>
                    {links?.map((link) => (
                        <Link href={link.url} key={link.url}>
                            {link_from_name(link.icon)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

function link_from_name(name: SocialIcon) {
    switch (name) {
        case "facebook":
            return <Facebook />;
        case "instagram":
            return <Instagram />;
        case "linkedin":
            return <LinkedIn />;
    }
}

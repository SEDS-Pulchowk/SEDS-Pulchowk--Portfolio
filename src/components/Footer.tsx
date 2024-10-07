import styles from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_upper}>
                <Link href="/" className={styles.logo_wrapper}>
                    <Image
                        alt="Logo"
                        className={styles.logo_image}
                        src={logo}
                    />
                    <div className={styles.logo_text}>
                        SEDS-
                        <span className="gradient_text">Pulchowk</span>
                    </div>
                </Link>
                <ul className={styles.links}>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/#Programs">Programs</Link>
                    </li>
                    <li>
                        <Link href="/#Projects">Projects</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footer_lower}>
                <div className={styles.contact}>
                    <div>IOE Pulchowk Campus, Lalitpur, Nepal</div>
                    <div>
                        Contact: <Link href="tel:00-000000000">00-000000000</Link>,{" "}
                        <Link href="tel:00-000000000">00-0000000</Link>
                    </div>
                </div>
                <div className={styles.socials}>
                    <Link href="https://www.facebook.com/profile.php?id=100094240345334">
                        Facebook
                    </Link>
                    <Link href="https://www.instagram.com/sedspulchowk/">
                        Instagram
                    </Link>
                    <Link href="https://www.linkedin.com/company/seds-pulchowk/">
                        LinkedIn
                    </Link>
                    <Link href="https://discord.gg/UXypmPF9r6">Discord</Link>
                </div>
            </div>
        </footer>
    );
}

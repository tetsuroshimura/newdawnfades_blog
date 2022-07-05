import { AppMeta } from "newt-client-js";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export function Footer({ app }: { app: AppMeta }) {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_Inner}>
        <div className={styles.Footer_Text}>
          <ul className={styles.Footer_Text_Block}>
            <li className={styles.Footer_Text_List}>Typeface : TWK ghost, Noto Serif JP</li>
            <li className={styles.Footer_Text_List}>Framework : Next.js</li>
            <li className={styles.Footer_Text_List}>CMS : Newt</li>
            <li className={styles.Footer_Text_List}>Server : Vercel</li>
            <li className={styles.Footer_Text_List}>Design : Shimura Tetsuro</li>
            <li className={styles.Footer_Text_List}>URL : https://www.newdawnfades.today/</li>
          </ul>
        </div>
        <Link href="/">
          <a href="#" className={styles.SiteName}>
            {app.icon?.type === "emoji" && (
              <span className={styles.SiteName_Icon}>{app.icon.value}</span>
            )}
            {app.icon?.type === "image" && (
              <span className={styles.SiteName_Icon}>
                <img src={app.icon.value} alt="" />
              </span>
            )}
            <div className={styles.SiteName_Text}>
              {app.name || app.uid || ""}
            </div>
          </a>
        </Link>
      </div>
    </footer>
  );
}

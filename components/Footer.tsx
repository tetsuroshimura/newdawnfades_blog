import { AppMeta } from "newt-client-js";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export function Footer({ app }: { app: AppMeta }) {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_Inner}>
        <div className={styles.Footer_Text_block01}>
          <ul className={styles.Footer_Text_Block}>
            <li className={styles.Footer_Text_List}>Typeface : TWK ghost, Noto Serif JP</li>
            <li className={styles.Footer_Text_List}>Framework : Next.js</li>
            <li className={styles.Footer_Text_List}>CMS : Newt</li>
            <li className={styles.Footer_Text_List}>Server : Vercel</li>
          </ul>
        </div>
        <div className={styles.Footer_Text_block02}>
          <ul className={styles.Footer_Text_Block}>
            <li className={styles.Footer_Text_List}>Design : Shimura Tetsuro</li>
            <li className={styles.Footer_Text_List}>URL : https://www.newdawnfades.today/</li>
          </ul>
        </div>
        <div className={styles.Footer_Text_block03}>
          <ul className={styles.Footer_Text_Block}>
            <li className={styles.Footer_Text_List}>Pixies / Debaser</li>
            <li className={styles.Footer_Text_List}>The Strokes / Last Night</li>
            <li className={styles.Footer_Text_List}>DJ seinfeld / U</li>
            <li className={styles.Footer_Text_List}>Jam City / Unhappy</li>
            <li className={styles.Footer_Text_List}>Black Flag / Rise Above</li>
            <li className={styles.Footer_Text_List}>Big Thief / Change</li>
          </ul>
        </div>
        <div className={styles.Footer_Text_block04}>
          <Link href="/">
            <a href="#" className={styles.SiteName}>
              <div className={styles.SiteName_Text}>
                New Dawn Fades
              </div>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

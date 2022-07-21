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
            <li className={styles.Footer_Text_List}>Design/Develop : Shimura Tetsuro</li>
            <li className={styles.Footer_Text_List}>URL : https://www.newdawnfades.today/</li>
          </ul>
        </div>
        <div className={styles.Footer_Text_block03}>
          <ul className={styles.Footer_Text_Block}>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=PVyS9JwtFoQ">
                <a target="_blank" className={styles.Footer_Text_Song}>
                  Pixies / Debaser
                </a>
              </Link>
            </li>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=TOypSnKFHrE">
                <a target="_blank" className={styles.Footer_Text_Song}>
                  The Strokes / Last Night
                </a>
              </Link>
            </li>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=g6eu1Wb8CVE">
                <a target="_blank" className={styles.Footer_Text_Song}>DJ seinfeld / U</a>
              </Link>
            </li>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=yjC4qXiBRu4">
                <a target="_blank" className={styles.Footer_Text_Song}>Black Country, New Road / Concorde</a>
              </Link>
            </li>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=dBuOJF_rX40">
                <a target="_blank" className={styles.Footer_Text_Song}>Hosegirl / Anti-glory</a>
              </Link>
            </li>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=VMD2OGlgAEg">
                <a target="_blank" className={styles.Footer_Text_Song}>Big Thief / Red Moon</a>
              </Link>
            </li>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=ND7sUqIaMIk">
                <a target="_blank" className={styles.Footer_Text_Song}>Rachika Nayar / The Trembling of Glass</a>
              </Link>
            </li>
            <li className={styles.Footer_Text_List}>
              <Link href="https://www.youtube.com/watch?v=8q79xq2aNlU">
                <a target="_blank" className={styles.Footer_Text_Song}>PASOCOM MUSIC CLUB / Panorama</a>
              </Link>
            </li>
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

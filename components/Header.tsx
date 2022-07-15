import { AppMeta } from "newt-client-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/Header.module.css";
import { About } from '../pages/about';

export function Header({ app }: { app: AppMeta }): JSX.Element {
  const router = useRouter();
  const { q } = router.query;
  const searchRef = useRef<HTMLInputElement>();

  const [searchText, setSearchText] = useState(q);

  const focus = useCallback(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchRef]);

  useEffect(() => {
    if (q) {
      setSearchText(q);
    }
  }, [q]);

  return (
    <header className={styles.Header}>
      <div className={styles.Header_Inner}>
        <Link href="/">
          <a href="#" className={styles.Title}>
            <div className={styles.Title_Text}>New Dawn Fades</div>
          </a>
        </Link>
        <div className={styles.Header_About}>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

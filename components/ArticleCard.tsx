import Link from "next/link";
import styles from "../styles/ArticleCard.module.css";
import { formatDate } from "../lib/date";
import { Content } from "newt-client-js";
import { Article } from "../types/article";
import { Category } from "../types/category";

export function ArticleCard({ article }: { article: Content & Article }) {
  return (
    <article className={styles.Article}>
      <div className={styles.Article_Inner}>
        <Link href={`/article/${article.slug}`}>
          <a href="#" className={styles.Article_Link}>
            <h2 className={styles.Article_Title}>{article.title}</h2>
          </a>
        </Link>
        <div className={styles.Article_Data}>
          <div className={styles.Article_DataText}>
            <time
              dateTime={formatDate(article._sys.createdAt)}
              className={styles.Article_Date}
            >
              {formatDate(article._sys.createdAt)}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}

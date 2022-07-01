import { AppMeta, Content } from "newt-client-js";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Cover } from "../components/Cover";
import { Layout } from "../components/Layout";
import { Dropdown } from "../components/Dropdown";
import { Category } from "../types/category";
import { ArticleCard } from "../components/ArticleCard";
import { Article } from "../types/article";
import { Pagination } from "../components/Pagination";

import dynamic from 'next/dynamic'
import p5Types from 'p5'

const Sketch = dynamic(import('react-p5'), {
  loading: () => <></>,
  ssr: false
})

export interface HomeProps {
  app: AppMeta;
  categories: (Content & Category)[];
  articles: (Content & Article)[];
  total: number;
  page?: number;
  categorySlug?: string;
}

export function Home({
  app,
  categories,
  articles,
  total,
  page = 1,
  categorySlug = "",
}: HomeProps) {
  return (
    <Layout app={app}>
      <Head>
        <title>{app?.name || app?.uid || ""}</title>
        <meta name="description" content="BLOG SERVICE" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="NEW DAWN FADES" />
        <meta property="og:description" content="BLOG SERVICE" />
        <meta property="og:image" content="https://www.newdawnfades.today/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Articles}>
        {/* <Dropdown categories={categories} selected={categorySlug} /> */}
        <div className={styles.Articles_Inner_Wrapper}>
          <div className={styles.Index_Text}>INDEX</div>
          <div className={styles.Articles_Inner}>
            {articles.map((article) => (
              <ArticleCard article={article} key={article._id} />
            ))}
          </div>
        </div>
        <Pagination
          total={total}
          current={page}
          basePath={categorySlug ? `/category/${categorySlug}` : ``}
        />
      </div>
    </Layout>
  );
}

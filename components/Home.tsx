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

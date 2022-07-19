import { AppMeta, Content } from "newt-client-js";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Cover } from "../components/Cover";
import { Layout } from "../components/Layout";
import Link from "next/link";
// import styles from "../styles/About.module.css";

import dynamic from 'next/dynamic'
import p5Types from 'p5'

const Sketch = dynamic(import('react-p5'), {
  loading: () => <></>,
  ssr: false
})

export interface HomeProps {
  app: AppMeta;
  total: number;
  page?: number;
  categorySlug?: string;
}

export default function About({
  app,
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
      <div className={styles.Wrapper}>
        About Pages
      </div>
    </Layout>
  );
}


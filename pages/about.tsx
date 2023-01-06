import { AppMeta, Content } from "newt-client-js";
import Head from "next/head";
import { Cover } from "../components/Cover";
import { Layout } from "../components/Layout";
import Link from "next/link";
import Image from 'next/image';
import styles from "../styles/About.module.scss";

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
        <div className={styles.About_Wrapper}>
          <h1 className={styles.Article_Title}>
            ABOUT
          </h1>
          <div className={styles.About_Content_Wrapper}>
            <div className={styles.About_Image_Wrapper}>
              <Image src="/about.jpg" alt="about"  width="2732" height="2048" objectFit='contain' />
            </div>
            <div className={styles.About_Text}>
              <p>普段考えていることや、まとめておきたいもの、自分のためになるものや誰かのためになるもの。日々の生活で忘れ去られてしまうような小さなこと、夕暮れの部屋に差し込む光の粒子の残像のOMOIDEがいつまで経っても忘れられない。一体あれはなんだったんだろうか。
              デザインや漫画やゲームなどその時に興味を持ったものについて書く。日記を書いたりもする。このBLOG自体はweb制作に於ける実験であり、テキストにおける実験でもある。
              自身がデザイナーであることをあまり気にせずに考えていることを書ければ良い。</p>
              <br></br>
              <p>このBLOGはweb designerの志村 徹朗が思いつきで書いた文章をまとめたものである。
              <br></br>
              デザイナーとしての活動は以下のサイトにまとめてあるので興味ある方はどうぞ。
              <br></br>
              <Link href="https://badbadnotgood.design/" >
                <a  className={styles.About_Link} target="_blank">https://badbadnotgood.design/</a>
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


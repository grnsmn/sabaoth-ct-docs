import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/Calendario%20Turni'
          >
            Vai al Calendari dei turni
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
          >
            Perchè questa documentazione?
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/Team Media/Intro'
          >
            Documentazione Team Media
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/Eventi'
          >
            Eventi in Programma
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/DatiDonazione'
          >
            Vai alla pagina di Donazione
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

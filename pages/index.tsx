/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheMythMC</title>
        <meta
          name="description"
          content="High Quality Minecraft Mods for All"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to TheMythMC</h1>

        <p className={styles.description}>
          Creating Minecraft Tools for All, Technical and Casual Players Alike
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="/downloads">
            <h2>Downloads &rarr;</h2>
            <p>For Downloads (of both mods and Installers), click here!</p>
          </a>

          <a className={styles.card} href="/about">
            <h2>About &rarr;</h2>
            <p>Who is the TheMythMC? Find out here!</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Current Projects &rarr;</h2>
            <p>
              Click here for the list of active projects TheMythMC is currently
              working on!
            </p>
          </a>

          <a href="https://github.com/TheMythMC" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>
              Guess what? All our work is open source! You can view it here!
            </p>
          </a>

          <a href="/discord" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Want to speak with the mod makers directly? Head over here!</p>
          </a>
        </div>
      </main>
    </div>
  );
}

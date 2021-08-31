import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheMythMC</title>
        <meta name="description" content="High Quality Minecraft Mods for All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to TheMythMC
        </h1>

        <p className={styles.description}>
         Creating Minecraft mods for All, Technical and Casual Players Alike
        </p>

        <div className={styles.grid}>
          <a href="/downloads" className={styles.card}>
            <h2>Downloads &rarr;</h2>
            <p>For Downloads (of both mods and Installers), click here!</p></a>

          <a href = "/about" className={styles.card}><p>
            <h2>About &rarr;</h2>
            Who is the TheMythMC? Find out here!
            </p></a>

          <a
            href="/projects"
            className={styles.card}
          >
            <h2>Current Projects &rarr;</h2>
            <p>Click here for the list of active projects TheMythMC is currently working on!</p>
          </a>

          <a
            href="https://github.com/TheMythMC"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>
              Guess what? All our work is open source! You can view it here!
            </p>
          </a>

          <a
          href="https://discord.gg/QsFtWTva8q"
          className={styles.card}
          >
            <h2>
              Discord &rarr;
            </h2>
            <p>
              Want to speak with the mod makers directly? Head over here!
            </p>

          </a>
        </div>
      </main>
      <footer>
        Copyright © 2021 TheMythMC. To be used in compliance with AGPLv3.
      </footer>
    </div>
  )
}

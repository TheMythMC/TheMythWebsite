import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Uranium() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Uranium — A fork of Cardboard focused on vanilla parity (WIP)"
        />
        <title>
            TheMythMC — Uranium
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className={styles.main}>
        <h1 className={styles.title}>Uranium</h1>
        <h2>Why?</h2>
        <h3 className={styles.about}>
          I named this mod Uranium because uranium, the element, is very <br/>
          unstable (sometimes), and while this mod&apos;s goal is to be as stable as <br/>
          possible there still might be issues. Also, it wont stop plugins from interfering with <br></br>
          game mechanics so there is still risk there.
        </h3>
        <p>
          <a href="https://github.com/TheMythMC/Uranium">GitHub Link</a>
        </p>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Projects TheMythMC is working on" />
      </Head>
      <main>
        <h1 className={styles.title}>List of Projects</h1>

        <h3 className={styles.description}>
          This is the list of in progress and soon to be in progress projects
          TheMythMC is working on
        </h3>
        <p>
          <h4>
            In Progress Mods
            <ul>
              <li>
                MythicAddons — A carpet extension adding things that
                should(n&apos;t) be in the main game but aren&apos;t
              </li>
            </ul>
          </h4>
        </p>
        <p>
          <h4>
            Soon to be worked on
            <ul>
              <li>
               <a href="/projects/uranium"> Uranium</a> — A fork of <a href="https://github.com/cardboardpowered/cardboard">Cardboard</a>but tuned to be as vanilla as possible.
              </li>
              <li>
                <a href="/projects/potassium">Potassium</a> — A fork of <a href="https://github.com/rizecookey/CombatEdit">CombatEdit</a>, added with more features.
              </li>
            </ul>
          </h4>
        </p>
      </main>
    </div>
  );
}

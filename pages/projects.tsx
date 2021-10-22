import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheMythMC — Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Projects TheMythMC is working on" />
      </Head>
      <main>
        <h1 className="text-center text-5xl">List of Projects</h1>

        <h3 className="text-center text-3xl font-bold">
          This is the list of in progress and soon to be in progress projects
          TheMythMC is working on
        </h3>
        <p>
          <h3 className=" text-xl font-bold">In Progress Mods</h3>
          <h4 className="text-lg">
            <ul>
              <li>
               <a href="/projects/mythic-addons"> MythicAddons — A carpet extension adding things that
                should(n&apos;t) be in the main game but aren&apos;t </a>
              </li>
              <li>
                <a href="projects/barium">Barium</a> — An auto-updater focused on simplicity and speed
              </li>
            </ul>
          </h4>
        </p>
        <p>
          <h3 className="font-bold text-xl">Soon to be worked on</h3>
          <h4 className="text-lg">
            <ul>
              <li>
                <a href="/projects/uranium">Uranium</a> — A fork of 
                <a href="https://github.com/cardboardpowered/cardboard"> Cardboard </a>
                but tuned to be as vanilla and stable as possible.
              </li>
              <li>
                <a href="/projects/potassium">Potassium</a> — A fork of{" "}
                <a href="https://github.com/rizecookey/CombatEdit">
                  CombatEdit
                </a>
                , added with more features.
              </li>
            </ul>
          </h4>
        </p>
      </main>
    </div>
  );
}

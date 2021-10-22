import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Barium() {
    return (
       <div className={styles.container}>
           <Head>
               <title>
                   TheMythMC — Barium
               </title>
               <meta name="description" content="Barium is an auto-updater mod that uses the metadata inside the mod to grab the latest version" />
               <link rel="icon" href="/favicon.ico" />
           </Head>
           <main>
               <div className={styles.main}>
               <h1 className={styles.title}>Barium</h1>
               <p className={styles.description}>Barium is an auto-updater mod that uses what the mod owner has said to update your mods with ease</p>
               <h2>Why?</h2>
               <h3 className={styles.about}>
                    Whenever you download a mod, it stays that version forever, unless you or the mod updated it, the latter being very rare.<br/>
                    Barium fixes this while updating your mods on closing! <br />
                    If it detects a outdated mod, it will download it into a temp folder when the game starts up, and then when you close the game<br />
                    It will auto-update the mods. This solves many issues where modding support servers have their number one response is &quot;Are you using an updated version?&quot;<br />
                    With Barium, this will be no more!
               </h3>
               </div>
           </main>
       </div>
    )
}
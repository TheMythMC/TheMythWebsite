import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Downloads() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Downloads -- TheMythMC
                </title>
                <meta name="description" content = "Download content from TheMythMC, Completely free and open-source!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        Downloads
                    </h1>
                    <p className={styles.description}>Here is a list of the newest downloads:</p>
                    <p className={styles.description}>
                       You can click on the name to view older versions if you wish!
                    </p>
                    <h3>
                    <ul>
                        <li>
                            <u><a href="downloads/mythic-addons"><font color="grey" >Mythic Addons</font></a></u> — <u><a href="jars/mythic-addons/mythic-addons-1.17.1-1.3.1.jar"><font color="e8a7a7">1.3.1</font></a></u>
                        </li>
                        <li>
                            <u><a href="downloads/barium"><font color="grey">Barium</font></a></u> — <u><a href="/"><font color="e8a7a7">NOT AVAILABLE</font></a></u>
                        </li>
                    </ul>
                    </h3>
                </div>
            </main>
        </div>
    )
}


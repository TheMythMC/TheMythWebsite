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
                    <h2>Here is a list of the newest downloads:</h2>
                    <h3>
                       You can click on the name to view older versions if you wish!
                    </h3>
                    <h3>
                    <ul>
                        <li>
                            <u><a href="downloads/mythic-addons"><font color="blue" >Mythic Addons</font></a></u> — <u><a href="jars/mythic-addons/mythic-addons-1.17.1-1.2.2.jar"><font color="red">1.2.2</font></a></u>
                        </li>
                    </ul>
                    </h3>
                </div>
            </main>
        </div>
    )
}


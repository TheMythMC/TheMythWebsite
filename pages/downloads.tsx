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
                    <span className="bg-opacity-60 bg-black rounded">
                        <br />
                    <p className={styles.description}>Here is a list of the newest downloads:</p>
                    <p className={styles.description}>
                        You can click on the name to view older downloads if you wish.
                    </p>
                    <h3 className="text-center text-xl">
                    <ul>
                        <li>
                            <u><a href="downloads/mythic-addons"><span style={{color:'grey'}}>MythicAddons</span></a></u> — <u><a href="jars/mythic-addons/mythic-addons-1.17.1-1.3.1.jar"><span style={{color: '#e8a7a7'}}>1.3.1</span></a></u>
                        </li>
                        <li>
                            <u><a href="downloads/barium"><span style={{color:'grey'}}>Barium</span></a></u> — <u style={{color: 'e8a7a7'}}><a href="/"><span style={{color: '#e8a7a7'}}>NOT AVAILABLE</span></a></u>
                        </li>
                    </ul>
                    </h3>
                    <br />
                    </span>
                </div>
            </main>
        </div>
    )
}


import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Potassium() {
    return(
        <div className={styles.container}>
            <Head>
                <title>
                    TheMythMC — Potassium
                </title>
                <meta name="description" content="Potassium — A mod bringing back 1.8 PvP"></meta>
                <link rel="icon" href="favicon.ico"></link>
            </Head>
            <main className={styles.container}>
                <h1 className={styles.title}>Potassium</h1>

                <h3 className={styles.about}>
                    You ever miss the good old days of 1.8 PVP, yet you never want to go back because you miss all the OP villager trades,<br />
                    the amazing oceans, or just the simplicity of White Concrete?
                    <br></br>
                    Well no more! With Potassium you get (almost) complete 1.8 PVP, with no compromises to the new features whatsoever!
                </h3>
                1.7 Animations are still a work in progress
            </main>

        </div>
    )
}
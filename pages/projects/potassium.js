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
        </div>
    )
}
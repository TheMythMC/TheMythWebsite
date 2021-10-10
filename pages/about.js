import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>TheMythMC — About</title>
                <meta name="description" content="TheMythMC -- About" />
                <link href="/favicon.ico"/>
            </Head>    
            <main>
            

                <div className={styles.main}>
                 <h1 className={styles.title}> About </h1>
                <h3 className={styles.about}>
                    TheMythMC is run by <a href="https://github.com/Mythbusters123">Mythbusters123</a>, but includes members from different portions of the Minecraft community. <br />
                    This includes not only survival players but also PvP players and community managers.<br />
                    It is a collection of contemporary Minecraft Modders and legacy ones. We mostly work with Java and JavaScript, <br />
                    but will be expanding our repertoire to Rust, C++ and possibly Kotlin. <br />
                    It is also a re-brand of PhoenixBotMC; bringing new life to an abandoned project. <br />
                    The current projects are as follows: 
                    <p>
                        Finally finish PhoenixBotMC <br />
                        Server-Sync <br />

                    </p>
                    <br />
                    <p>While it may look like not a ton of activity is going on, just remember that I do not push commits regularly and prefer to get a working version before committing the final product.
                        <br /> Thank you for understanding.
                    </p>
                    </h3>
                </div>
            </main>
        </div>    
    )
}
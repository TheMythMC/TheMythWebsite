import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <link href="favicon.ico"/>     
                <meta name="description" content="TheMythMC -- About" />
            </Head>    
            <main>
                <header>
                </header>

                <div className={styles.main}>
                 <h1 className={styles.title}> About </h1>
                <h3 className={styles.about}>
                    TheMythMC is run by <a href="https://github/Mythbusters123">Mythbusters123</a>, but it was formed to give Myself an area to clone some projects. <br />
                    It then morphed into a project where I want to make everything as vanilla as possible,<br /> so far to fork <a href="https://github.com/cardboardpowered/cardboard">Cardboard </a>
                    to stabilize it and make it more usable. <br />The goal of this project is to make everything Fabric, so you don&apos;t ever need to use Bukkit ever again, <br />and to bring you the features of the past into modern versions of Minecraft!
                </h3>
                </div>
            </main>
        </div>    
    )
}
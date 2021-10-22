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
                <div>
                    <h1 className="text-center text-5xl">
                        About
                    </h1>
                    <br/>
                    <p className = "text-center bg-black bg-opacity-60 rounded-l">
                        <h3 className="text-3xl font-bold">
                            TheMythMC: Bringing a better Fabric experience one mod at a time
                        </h3>
                        <h3 className="text-xl">
                            TheMythMC is a GitHub organization run by Mythbusters123, but includes members from many aspects of the Minecraft community.
                     <br /> This includes the Technical, PvP, and just normal Survival players who like modding. We are a dedicated group of programmers that
                     <br /> strive to make the most of the game without sacrificing huge amounts of performance or server-admin hassle.
                     <br /> Our mods strive to be as easy to use as possible, with no or minimal configuration required to run. 
                     <br /> And if there is a configuration, it should be simple.
                     <br />
                     <br /> We also plan on reviving <u><a href="https://phoenixproject.xyz"><span className=" text-red-500">Project Phoenix</span></a></u>, a Hypixel Guilds moderation and Discord bot, that works as a bridge between Discord
                     <br /> and the Hypixel Minecraft server.
                        </h3>
                    </p>
                </div>
            </main>
        </div>    
    )
}
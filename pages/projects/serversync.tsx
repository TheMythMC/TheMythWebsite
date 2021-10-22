import Head from 'next/head'
import styes from '../../styles/Home.module.css'

export default function ServerSync() {
    return (
        <div className={styes.container}>
            <Head>
                <meta name="description" content="A remake of DisFabric but with Discord4J for an optimized experience." />
                <title>TheMythMC — Server-Sync</title>
                <link rel="/favicon.ico" />
            </Head>
            <main>
                <div className="text-center">
                    <div className="text-5xl">
                        Why another bridge mod?
                    </div>
                    <br />
                    <div className="text-xl bg-black bg-opacity-60 rounded p-4">
                        Most bridge mods on the market are written in JDA, which is considered to be slightly bloated.
                 <br /> Server-Sync tries to get rid of this issue by using Discord4J, which is a much lighter weight and overall
                 <br /> cleaner Discord wrapper.
                 <br /> Server-Sync is still in early development, but there are many more features to come.
                    </div>
                </div>
            </main>
        </div>
    );
}
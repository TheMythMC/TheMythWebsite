import { useEffect, useState } from "react";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios'

export default function MythicAddons() {
  
  const [jars, setJars] = useState([]);

  useEffect(() => {
    axios.get('/api/downloads/mythic-addons').then( (res) => setJars(res.data))
  }, []);


  return (
    <div>
        <Head>
          <meta
            name="description"
            content="Downloads for MythicAddons, all versions"
          />
          <title>Downloads -- MythicAddons</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>MythicAddons Downloads</h1>
          <h3 className={styles.description}>
            <ul>{
              jars.map((jar: string) => <li key={jar.split('/')[3]}><a href={jar}>{jar.split('/')[3]}</a></li>)
              }
              </ul>
          </h3>
        </main>
      </div>
  );
}
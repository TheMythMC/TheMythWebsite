import axios from "axios";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import {useState, useEffect} from 'react'

export default function Barium() {
  
  const [jars, setJars] = useState([]);

  useEffect(() => {
    axios.get('/api/downloads/serversync').then( (res) => setJars(res.data))
  }, []);


  return (
    <div>
        <Head>
          <meta
            name="description"
            content="Downloads for Server-Sync, all versions"
          />
          <title>Downloads -- Barium</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Server-Sync Downloads</h1>
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
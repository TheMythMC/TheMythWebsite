import axios from "axios";
import Head from "next/head";
import { Component } from "react";
import styles from "../../styles/Home.module.css";
export default class MythicAddons extends Component {
  constructor() {
    super({});
    this.json;
    this.state = {
      jars: [],
    };
  }
  

  componentDidMount() {
    this.getJson().then(res => {
      this.setState({jars: res})
    })
  }

  render() {
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
              this.state.jars.map( (jar) => <li key={jar.split('/')[3]}><a href={jar}>{jar.split('/')[3]}</a></li>)
              }
              </ul>
          </h3>
        </main>
      </div>
    );
  }

  async getJson() {
    return await (
      await axios.get("/api/downloads/mythic-addons")
    ).data;
  }

}

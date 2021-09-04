import axios from "axios";
import Head from "next/head";
import { Component } from "react";
import styles from "../../styles/Home.module.css";
export default class MythicAddons extends Component {
  constructor() {
    super({});
    this.json;
    this.state = {
      Jars: new Map(),
    };
  }
  

  componentDidMount() {
    this.convertJson().then((map) => {
      this.setState({ Jars: map });
    });
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
              // Removing this for now, cant figure it out... hard coding
              //  (this.state.Jars.forEach( (k, v) => <li><a href={k}>{v}</a></li>))
              }
              <li>
                <a href="/jars/mythic-addons/mythic-addons-1.17.1-1.2.2.jar">mythic-addons-1.17.1-1.2.2.jar</a>
              </li>
              </ul>
          </h3>
        </main>
      </div>
    );
  }

  async getJson() {
    return await (
      await axios.get("http://localhost:3000/api/downloads/mythic-addons")
    ).data;
  }

  async convertJson() {
    return new Map(Object.entries(await this.getJson()));
  }

  async init() {
    this.convertJson().then((res) => {
      this.setState({ Jars: res });
    });
  }
}

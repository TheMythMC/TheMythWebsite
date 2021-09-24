import axios from "axios";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { Component } from "react";

export default class Barium extends Component {
  constructor() {
    super({});
    this.json;
    this.state = {
      jars: [],
    };
  }

  componentDidMount() {
    this.getJson().then((res) => this.setState({ jars: res }));
  }

  async getJson() {
    return await (
      await axios.get("/api/downloads/barium")
    ).data;
  }

  render() {
    return (
      <div className={styles.main}>
        <Head>
          <title>Download -- Barium</title>
          <meta
            name="Description"
            content="Download the latest versions of barium here"
          />
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>Barium Downloads</h1>
            <h3 className={styles.description}>
              Barium is not currently available to download yet, it is in early
              stages of development. <br />
              Thank you for your understanding.
              <ul>
                {/*
                    this.state.jars.map((jar) => <li key={jar.split("/")[3]}><a href={jar}>{jar.split("/")[3]}</a></li>)*/
                }
              </ul>
            </h3>
        </main>
      </div>
    );
  }
}

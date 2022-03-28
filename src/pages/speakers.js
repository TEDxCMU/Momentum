import { useState, useEffect } from "react";
import { getSpeakers } from "utils/content";
import SpeakersGrid from "components/speakers-grid";
import Layout from "components/layout";
import BGLeft from "assets/speaker_background/speaker_bg-1.svg";
import BGRight from "assets/speaker_background/speaker_bg-2.svg";
import styles from "./speakers.module.css";

function Speakers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    init();
    console.log(data);
  }, []);

  async function init() {
    const content = await getSpeakers();
    console.log(content);
    setData(content);
  }

  return (
    <>
      <div className={styles.bgContainer}>
        <BGLeft />
        <BGRight className={styles.bgRight} />
      </div>
      <Layout title="speakers">
        <SpeakersGrid speakers={data} />
      </Layout>
    </>
  );
}

export default Speakers;

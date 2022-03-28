import { useState, useEffect } from "react";
import { getSpeakers } from "utils/content";
import SpeakersGrid from "components/speakers-grid";
import Page from "components/page";
import BGLeft from "assets/speaker_background/speaker_bg-1.svg";
import BGRight from "assets/speaker_background/speaker_bg-2.svg";
import styles from "./speakers.module.css";

function Speakers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const content = await getSpeakers();
    const speakers = content.map(({ data }) => data);
    console.log(speakers);
    setData(speakers);
  }

  return (
    <>
      <div className={styles.bgContainer}>
        <BGLeft />
        <BGRight className={styles.bgRight} />
      </div>
      <Page title="speakers">
        <SpeakersGrid speakers={data} />
      </Page>
    </>
  );
}

export default Speakers;

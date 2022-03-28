import { useState, useEffect } from "react";
import { getSpeakers } from "utils/content";
import SpeakersGrid from "components/speakers-grid";
import Page from "components/page";

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
    <Page title="speakers">
      <SpeakersGrid speakers={data} />
    </Page>
  );
}

export default Speakers;

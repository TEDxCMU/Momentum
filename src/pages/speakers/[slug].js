import Layout from "components/layout";
import SpeakersGrid from "components/speakers-grid";
import SpeakerSection from "components/speaker-section";
import styles from "../speakers.module.css";
import { getSpeakers } from "utils/content";
import BGLeft from "assets/speaker_background/speaker_bg-1.svg";
import BGRight from "assets/speaker_background/speaker_bg-2.svg";

export default function SpeakerPage({ speakers, speaker }) {
  return (
    <>
      <div className={styles.bgContainer}>
        <BGLeft />
        <BGRight className={styles.bgRight} />
      </div>
      <Layout title="speakers">
        <SpeakersGrid speakers={speakers} />
      </Layout>
      <SpeakerSection speaker={speaker.data} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;
  const speakers = await getSpeakers();
  const speaker = speakers.find((s) => s.uid === slug) || null;

  if (!speaker) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      speakers,
      speaker,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const speakers = await getSpeakers();
  const slugs = speakers.map((s) => ({ params: { slug: s.uid } }));

  return {
    paths: slugs,
    fallback: false,
  };
}

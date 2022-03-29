import { getSpeakers } from 'utils/content';
import Background from 'components/background';
import SpeakersGrid from 'components/speakers-grid';
import SpeakerSection from 'components/speaker-section';
import styles from 'components/speakers.module.css';

export default function SpeakerPage({ speakers, speaker }) {
    return (
        <>
            <Background />
            <main className={styles.container}>
                <h1 className={styles.header}>
                    Speakers
                </h1>
                <SpeakersGrid speakers={speakers} />
            </main>
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

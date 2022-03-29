import { useState, useEffect } from 'react';
import { getSpeakers } from 'utils/content';
import Background from 'components/background';
import SpeakersGrid from 'components/speakers-grid';
import styles from 'components/speakers.module.css';

function Speakers() {
    const [data, setData] = useState(null);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSpeakers();
        setData(content);
    }

    return (
        <>
            <Background />
            <main className={styles.container}>
                <h1 className={styles.header}>
                    Speakers
                </h1>
                <SpeakersGrid speakers={data} />
            </main>
        </>
    );
}

export default Speakers;

import { useState, useEffect } from 'react';
import { getSpeakers } from 'utils/content';
import SpeakersGrid from 'components/speakers-grid';
import styles from 'components/speakers.module.css';
import BGLeft from 'assets/speakers/speaker-bg-1.svg';
import BGRight from 'assets/speakers/speaker-bg-2.svg';

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
            <div className={styles.background}>
                <BGLeft />
                <BGRight className={styles.backgroundRight} />
            </div>
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

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from 'components/speaker-section.module.css';
import Modal from 'components/modal';

export default function SpeakerSection({ speaker }) {
    const router = useRouter();
    const [active, setActive] = useState(true);

    useEffect(() => {
        if (!active) {
            router.push('/speakers');
        }
    }, [active]);

    return (
        <Modal active={active} setActive={setActive} large>
            <div className={styles.overlay}>
                <img
                    className={styles.image}
                    src={speaker.image.url}
                    alt={speaker.image.alt}
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {speaker.name}
                </h2>
                <h3 className={styles.tagline}>
                    {speaker.title}
                </h3>
                <p className={styles.body}>
                    {speaker.description}
                </p>
            </div>
        </Modal>
    );
}

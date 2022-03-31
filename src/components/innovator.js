import Link from 'next/link';
import cn from 'classnames';
import { parseISO, format } from 'date-fns';
import eventStyles from 'components/event.module.css';
import styles from 'components/innovator.module.css';
import logo from 'assets/tedxcmu-logo.svg';

function Innovator({ event }) {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardFiller}>
                    <p>Stay Tuned</p>
                </div>
                <div className={styles.cardContent}>
                    <img
                        className={styles.cardImage}
                        src={event.image.url || 'tedxcmu-logo.svg'}
                        alt={event.image.alt}
                    />
                    <p className={styles.cardTitle}>
                        {event.name}
                    </p>
                    <div className={styles.innovator}>
                        <img
                            className={styles.innovatorImage}
                            src={event.body[0].primary.person_image.url || 'tedxcmu-logo.svg'}
                            alt={event.body[0].primary.person_image.alt || 'Headshot'}
                        />
                        <div>
                            <p className={eventStyles.speakerName}>
                                {event.body[0].primary.person_name}
                            </p>
                            <p className={eventStyles.speakerTitle}>
                                {event.body[0].primary.person_title}
                            </p>
                        </div>
                    </div>
                    <p className={styles.cardDescription}>{event.description}</p>   
                    {event.links.map((external) => (
                        <Link href={external.link.url} key={external.link.url}>
                            <a className={styles.link} target="_blank" rel="noopener noreferrer">
                                {external.text}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        
    )
}

export default Innovator;

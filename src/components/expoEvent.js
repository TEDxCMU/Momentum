import cn from 'classnames';
import { parseISO, format } from 'date-fns';
import eventStyles from 'components/event.module.css';
import styles from 'components/expoEvent.module.css';
import logo from 'assets/tedxcmu-logo.svg';

function InnovationEvent({ event , sidebar}) {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <img
                    className={styles.cardVideo}
                    src="assets/expo/filler.png"
                    alt="Filler Video"
                />
                <div className={styles.cardContent}>
                    <img
                        className={styles.cardImage}
                        src={event.image.url || 'tedxcmu-logo.svg'}
                        alt={event.image.alt}
                    />
                    <p className={styles.cardTitle}>
                        {event.name}
                    </p>
                    <p className={styles.cardDescription}>{event.description}</p>   
                    <div className={styles.innovator}>
                        <img
                            className={styles.innovatorImage}
                            src={event.image.url || 'tedxcmu-logo.svg'} 
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
                </div>
            </div>
        </section>
        
    )
}

export default InnovationEvent;

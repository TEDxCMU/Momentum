import cn from 'classnames';
import { parseISO, format } from 'date-fns';
import styles from 'components/event.module.css';
import logo from 'assets/tedxcmu-logo.svg';

function formatDate(date) {
    // https://github.com/date-fns/date-fns/issues/946
    return format(parseISO(date), `h:mmaaaaa'm'`) || '';
}

function Event({ event, sidebar }) {
    return (
        <section className={styles.container}>
            <p className={styles.time}>
                {formatDate(event.time)}
            </p>
            <div className={styles.card}>
                <div className={cn(styles.cardContent, { [styles.sidebarCardContent]: sidebar })}>
                    <p className={cn(styles.cardTitle, { [styles.sidebarCardTitle]: sidebar })}>
                        {event.title}
                    </p>
                    {event.speaker.data && (
                        <div className={styles.speaker}>
                            {!sidebar && (
                                <img
                                    className={styles.speakerImage}
                                    src={event.speaker.data.image.url || 'tedxcmu-logo.svg'}
                                />
                            )}
                            <div>
                                <p className={styles.speakerName}>
                                    {event.speaker.data.name}
                                </p>
                                <p className={styles.speakerTitle}>
                                    {event.speaker.data.title}
                                </p>
                            </div>
                        </div>
                    )}
                    {event.description && !sidebar && (
                        <p className={cn(styles.cardDescription, { [styles.sidebarCardDescription]: sidebar })}>
                            {event.description}
                        </p>
                    )}
                </div>
                {event.image.url && !sidebar && (
                    <img
                        className={styles.cardImage}
                        src={event.image.url}
                        alt={event.image.alt}
                    />
                )}
            </div>
        </section>
    )
}

export default Event;

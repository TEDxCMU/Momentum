import cn from 'classnames';
import { parseISO, format } from 'date-fns';
import eventStyles from 'components/event.module.css';
import expoStyles from 'components/expoEvent.module.css'
import logo from 'assets/tedxcmu-logo.svg';

function InnovationEvent({ event , sidebar}) {
    return (
        <section className={eventStyles.container}>
            <div className={eventStyles.card}>
                <div className={expoStyles.cardContent}>
                    <div className={expoStyles.cardImage}>
                        <img src={event.image.url || 'tedxcmu-logo.svg'}></img>
                    </div>
                    <p className={expoStyles.cardTitle}>
                        {event.name}
                    </p>
                    <p className={eventStyles.cardDescription}>{event.description}</p>   
                    <div className={eventStyles.speaker}>
                        <img
                            className={eventStyles.speakerImage}
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

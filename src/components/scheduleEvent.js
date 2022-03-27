import styles from 'components/scheduleEvent.module.css';
import cn from 'classnames';
import { parseISO, format } from "date-fns";
import logo from 'assets/tedxcmu-logo.svg';

const formatDate = (date) => {
  // https://github.com/date-fns/date-fns/issues/946
  if (date == null) {
    return "";
  }
  return format(parseISO(date), "h:mmaaaaa'm'");
};

function ScheduleEvent({ event }) {
  return (
    // event should have:
    // photo
    // name
    // speaker
    // time
    // description
    // link
    // image?
    <div className={styles.event}>
      <p className={styles.eventTime}>{formatDate(event.data.time)}</p>
      <div className={cn(styles.eventBox, { [styles.eventBoxSmall]: !!!(event.data.image.url) })}>

        <div className={cn(styles.eventText, { [styles.eventTextSmall]: !!!(event.data.image.url) })}>

          <div className={cn(styles.eventTitle, { [styles.eventTitleSmall]: !!!(event.data.image.url) })}>
            <p>{event.data.title}</p>
          </div>
          {
            event.data.speaker.data != null && (
              <div className={styles.eventSpeaker}>
                <div className={styles.speakerImgWrapper}>

                  <img src={event.data.speaker.data.image.url || "tedxcmu-logo.svg"}></img>
                </div>
                <div>
                  <p className={styles["speaker-name"]}>{event.data.speaker.data.name}</p>
                  <p className={styles["speaker-title"]}>{event.data.speaker.data.title}</p>
                </div>
              </div>
            )
          }
          {
            event.data.description != null &&
            (<p className={styles.eventDesc}>{event.data.description}</p>)
          }
        </div>
        {event.data.image.url && (
          <img className={styles['schedule-img']} src={event.data.image.url} />
        )} 
      </div>
    </div>
  )
}

export default ScheduleEvent;
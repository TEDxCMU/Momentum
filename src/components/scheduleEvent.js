import styles from 'components/scheduleEvent.module.css';
import { parseISO, format } from "date-fns";
//import schedulePlaceholder from 'assets/schedulePlaceholder.png';
//import speakerPlaceholder from 'assets/scheduleSpeakerPlaceholder.jpeg';
import logo from 'assets/tedxcmu-logo.svg';

const formatDate = (date) => {
  // https://github.com/date-fns/date-fns/issues/946
  if (date == null) {
    return "";
  }
  return format(parseISO(date), "h:mmaaaaa'm'");
};

function ScheduleEvent({event}) {
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
      <div className={styles.eventBox}>

        <div className={styles.eventText}>

          <div className={styles.eventTitle}>
            <p>{event.data.title}</p>
          </div>
          {
            event.data.speaker.data != null && (
              <div className={styles.eventSpeaker}>
                <div className={styles.speakerImgWrapper}>

                  <img src={event.data.speaker.data.image || "tedxcmu-logo.svg"}></img>
                  {console.log(event.data.speaker)}
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
        <img className={styles['schedule-img']} src={event.data.image.url || "tedxcmu-logo.svg"}></img>       
        

      </div>
    </div>
  )
}

export default ScheduleEvent;
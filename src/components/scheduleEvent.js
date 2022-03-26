import styles from 'components/scheduleEvent.module.css';
import { parseISO, format } from "date-fns";
import schedulePlaceholder from 'assets/schedulePlaceholder.png'

const formatDate = (date) => {
  // https://github.com/date-fns/date-fns/issues/946
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
          <p className={styles.eventDesc}>{event.data.description}</p>
          {/*<p>{event.data.speaker}</p>  not sure how to get speaker data */}
        </div>
        
        <div>
          <img src={schedulePlaceholder.src}></img> {/* is there an img for this? */}
        </div>

      </div>
    </div>
  )
}

export default ScheduleEvent;
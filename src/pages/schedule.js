import { useState, useEffect } from 'react';
import { getSchedule } from 'utils/content';
import { parseISO } from "date-fns";
import ScheduleEvent from 'components/scheduleEvent'
import scheduleStyles from 'components/schedule.module.css'

function Schedule() {
    const [data, setData] = useState([]);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSchedule();
        console.log(content);
        const sortedEvents = content.sort((a, b) => parseISO(a.data.time) - parseISO(b.data.time))
        console.log(sortedEvents)
        setData(sortedEvents);
    }

    return (
        <div>
            <div className={scheduleStyles.centerAlignment + " " + scheduleStyles.header}>Schedule</div>
            <div className={scheduleStyles.centerAlignment}>
                {data.map((event) => 
                    <div key={event.id}>
                        <ScheduleEvent event={event} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Schedule;

import { useState, useEffect } from 'react';
import { getSchedule } from 'utils/content';
import ScheduleEvent from 'components/scheduleEvent'

import scheduleStyles from 'components/schedule.module.css'

function Schedule() {
    const [data, setData] = useState([]);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSchedule();
        setData(content);
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

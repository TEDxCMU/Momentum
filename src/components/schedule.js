import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { parseISO } from 'date-fns';
import { getSchedule } from 'utils/content';
import Background from 'components/background';
import Event from 'components/event';
import styles from 'components/schedule.module.css';

function Schedule({ sidebar }) {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSchedule();
        const sortedEvents = content.sort((a, b) => parseISO(a.data.time) - parseISO(b.data.time));
        setData(sortedEvents);
    }

    return (
        <>
            {router.pathname !== '/stage' && <Background />}
            <main className={cn(styles.container, { [styles.sidebarContainer]: sidebar })}>
                {!sidebar && (
                    <h1 className={styles.header}>
                        Schedule
                    </h1>
                )}
                {data.map((event) => (
                    <Event
                        key={event.id}
                        event={event.data}
                        sidebar={sidebar}
                    />
                ))}
            </main>
        </>
    );
}

export default Schedule;

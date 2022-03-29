import { useState, useEffect } from 'react';
import cn from 'classnames';
import { parseISO } from 'date-fns';
import { getInnovators } from 'utils/content';
import Background from 'components/background';
import Event from 'components/expoEvent';
import styles from 'components/schedule.module.css';

function Expo({ sidebar }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        setData(content)
    }

    return (
        <> 
            <Background />
            <main className={styles.container}>
                <h1 className={styles.header}>
                    Innovation Expo
                </h1>
                {data.map((event) => (
                    <Event
                        key={event.id}
                        event={event.data}
                        sidebar={false}
                    />
                ))}
            </main>
        </>
    );
}

export default Expo;

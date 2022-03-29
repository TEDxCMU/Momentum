import { useState, useEffect } from 'react';
import cn from 'classnames';
import { parseISO } from 'date-fns';
import { getInnovators } from 'utils/content';
import Background from 'components/background';
import Innovator from 'components/innovator';
import styles from 'components/schedule.module.css';

function Expo() {
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
                {data.map((event) => <Innovator key={event.id} event={event.data} />)}
            </main>
        </>
    );
}

export default Expo;

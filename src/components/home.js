import styles from 'components/home.module.css'
import { useEffect, useRef, useState } from 'react';

import HomeGraphic1 from 'assets/home/home-1.svg';
import HomeGraphic2 from 'assets/home/home-2.svg';
import HomeGraphic3 from 'assets/home/home-3.svg';
import HomeGraphic4 from 'assets/home/home-4.svg';
import HomeGraphic5 from 'assets/home/home-5.svg';
import HomeGraphic6 from 'assets/home/home-6.svg';

function Home() {
    const containerRef = useRef(null);
    const [imageIndex, setImageIndex] = useState(null);

    // Width, Height, Top, Left
    const dimensions = [[2289.43, 1797.36, 142.06, 2223.4], [1263.81, 1486.9, -427.26, 336.84], [1226.88, 869.04, 177.09, -50], [1180.37, 1041.85, 1011.36, 324.88], [1448.71, 1722.85, 507.03, 1452.29], [1297.62, 1157.84, -545, 471.65]];
    const colors = ['#C1FFBF', '#FF2F54', '#FF8A00', '#4A5CFF', '#E370DF'];

    function handleColorChange(event) {
        const paths = containerRef.current.querySelectorAll('path');
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (const path of paths) {
            path.setAttribute('stroke', color);
        }
    }

    useEffect(() => {
        setImageIndex(Math.floor(Math.random() * 6) + 1);

        document.body.addEventListener('click', handleColorChange, true);

        return () => {
            document.body.removeEventListener('click', handleColorChange, true);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.container}>
            {imageIndex === 1 && <HomeGraphic1 className={styles.image} top={dimensions[imageIndex - 1][2]} left={dimensions[imageIndex - 1][3]} />}
            {imageIndex === 2 && <HomeGraphic2 className={styles.image} top={dimensions[imageIndex - 1][2]} left={dimensions[imageIndex - 1][3]} />}
            {imageIndex === 3 && <HomeGraphic3 className={styles.image} top={dimensions[imageIndex - 1][2]} left={dimensions[imageIndex - 1][3]} />}
            {imageIndex === 4 && <HomeGraphic4 className={styles.image} top={dimensions[imageIndex - 1][2]} left={dimensions[imageIndex - 1][3]} />}
            {imageIndex === 5 && <HomeGraphic5 className={styles.image} top={dimensions[imageIndex - 1][2]} left={dimensions[imageIndex - 1][3]} />}
            {imageIndex === 6 && <HomeGraphic6 className={styles.image} top={dimensions[imageIndex - 1][2]} left={dimensions[imageIndex - 1][3]} />}
            <h1 className={styles.verticalHeadline}>momentum</h1>
            <div className={styles.content}>
                <div className={styles.details}>
                    <h2 className={styles.time}>
                        April 2, 10 am EST
                    </h2>
                    <h3 className={styles.time}>
                        Location: Mellon Institute
                    </h3>
                </div>
                <div className={styles.heading}>
                    <h1>momentum</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;

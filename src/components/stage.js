import cn from 'classnames';
import styles from 'components/stage.module.css';
import Schedule from 'components/schedule';

function Stage() {
    return (
        <main className={styles.container}>
            <section className={styles.leftPanel}>
                <iframe
                    className={styles.stream}
                    allow='autoplay; picture-in-picture'
                    allowFullScreen
                    frameBorder='0'
                    src="https://youtube.com/embed/RPsJRCHiIsA?autoplay=1&mute=1"
                    title="Main Stage"
                    width='100%'
                />
                <h2 className={cn(styles.heading, styles.inline)}>
                    Main Stage
                </h2>
            </section>
            <section className={styles.rightPanel}>
                <h2 className={styles.heading}>
                    Main Stage
                </h2>
                <Schedule sidebar />
            </section>
        </main>
    );
}

export default Stage;

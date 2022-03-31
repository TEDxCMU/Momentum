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
                    src="https://mediaservices.cmu.edu/embed/secure/iframe/entryId/1_o0zmugn8/uiConfId/32384181/st/0"
                    title="Main Stage"
                    width='100%'
                />
                <div className={styles.bottomPanel}>
                    <h2 className={cn(styles.heading, styles.inline)}>
                        Main Stage
                    </h2>
                </div>
            </section>
            <section className={styles.rightPanel}>
                <h2 className={cn(styles.heading, styles.rightHeading)}>
                    Schedule
                </h2>
                <Schedule sidebar />
            </section>
        </main>
    );
}

export default Stage;

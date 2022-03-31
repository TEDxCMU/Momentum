import styles from 'components/background.module.css';
import BGLeft from 'assets/background/background-1.svg';
import BGRight from 'assets/background/background-2.svg';

function Background() {
    return (
        <div className={styles.background}>
            <div className={styles.backgroundOverlay}></div>
            <BGLeft />
            <BGRight className={styles.backgroundRight} />
        </div>
    );
}

export default Background;

import styles from "./hero.module.css"
import ImagePool from "../components/imagepool"

function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentOffset}>
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
                    <ImagePool />
                </div>
            </div>
        </>
    );
}

export default Home;

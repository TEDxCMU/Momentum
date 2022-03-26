import styles from "./carousel.module.css"

export default function Carousel({ images }) {
    return (
        <div className={styles.container}>
            <div className={styles["row-wrapper"]}>
                <div className={styles.row}>
                    <div className={styles.images}>
                        <Image/>
                    </div>
                </div>
            </div>
        </div>
    );
}
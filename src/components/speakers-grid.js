import Link from "next/link";
import styles from "components/speakers-grid.module.css";

export default function SpeakersGrid({ speakers }) {
    return (
        <section className={styles.grid}>
            {speakers?.map(({ data, uid }, index) => (
                <Link key={data.name} href={`/speakers/${uid}`}>
                    <a role="button" tabIndex={0} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
                                className={styles.image}
                                src={data.image.url}
                                alt={data.name}
                                loading="lazy"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.name}>
                                {data.name}
                            </h2>
                            <p className={styles.tagline}>
                                {data.title}
                            </p>
                            <p className={styles.index}>
                                {`0${index + 1}`}
                            </p>
                        </div>
                    </a>
                </Link>
            ))}
        </section>
    );
}

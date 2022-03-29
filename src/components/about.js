import Link from 'next/link';
import styles from 'components/about.module.css';
import Twitter from 'assets/twitter.svg';
import Linkedin from 'assets/linkedin.svg';
import Blob from 'assets/aboutBlob.svg'

function About() {
    return (
        <main className={styles.container}>
            <h1 className={styles.header}>About</h1>

            <section>
                <div className={styles.cardWrapper}>
                    <div className={styles.aboutText}>
                        <p>Momentum is what drives something still into an unstoppable force of motion, power, energy and most importantly, change. It fuels motivation, defies stagnancy and demands the spurring of action. People who are constantly in momentum are those that make change, those that pursue something more and those that see in the world the potential for something better.</p>
                        <p>Momentum pushes us to keep moving in spite of the challenges we face. TEDxCMU Momentum hopes to teach the power of striving for more and taking the step that allows momentum to thrive—the first one forward.</p>
                        <div className={styles.links}>
                            <div className={styles.tedButton}>
                                <Link href="https://www.tedxcmu.org/">
                                    <a>
                                        TEDxCMU.ORG
                                    </a>
                                </Link>
                            </div>
                            <div className={styles["socials-wrapper"]}>
                                <Link href="https://twitter.com/tedxcmu"><a><Twitter /></a></Link>
                                <Link href="https://www.linkedin.com/company/tedxcmu/"><a><Linkedin /></a></Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.aboutImg}>
                        <img src='tedxcmu-logo.svg'></img>
                        {/*<Blob />  can't figure out how to put in blob svg as part of the bg*/}
                    </div>
                </div>

            </section>
        </main>
    );
}

export default About;

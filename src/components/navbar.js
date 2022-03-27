import Link from 'next/link';
import styles from 'components/navbar.module.css';
import Logo from 'assets/tedxcmu-logo.svg';

function NavBar() {
    return (
        <nav className={styles.container}>
            <Link href="https://tedxcmu.org/">
                <a target="_blank" rel="noopener noreferrer">
                    <Logo className={styles.logo} />
                </a>
            </Link>
            <div className={styles.links}>
                <Link href="/">
                    <a className={styles.link}>
                        Home
                    </a>
                </Link>
                <Link href="/stage">
                    <a className={styles.link}>
                        Stage
                    </a>
                </Link>
                <Link href="/schedule">
                    <a className={styles.link}>
                        Schedule
                    </a>
                </Link>
                <Link href="/speakers">
                    <a className={styles.link}>
                        Speakers
                    </a>
                </Link>
                <Link href="/expo">
                    <a className={styles.link}>
                        Innovation Expo
                    </a>
                </Link>
                <Link href="/about">
                    <a className={styles.link}>
                        About
                    </a>
                </Link>
            </div>
            {/* Empty div for spacing. */}
            <div />
        </nav>
    );
}

export default NavBar;

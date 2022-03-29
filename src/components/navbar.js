import { useRef } from 'react';
import Link from 'next/link';
import Menu from 'components/menu';
import styles from 'components/navbar.module.css';
import Logo from 'assets/tedxcmu-logo.svg';

function NavBar() {
    const parentRef = useRef(null);
    const itemsRef = useRef(null);

    return (
        <nav ref={parentRef} className={styles.container}>
            <Link href="/">
                <a>
                    <Logo className={styles.logo} />
                </a>
            </Link>
            <div ref={itemsRef} className={styles.links}>
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
            <Menu parent={parentRef} items={itemsRef} />
        </nav>
    );
}

export default NavBar;

import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import Menu from 'components/menu';
import styles from 'components/navbar.module.css';
import Logo from 'assets/tedxcmu-logo.svg';

function NavBar() {
    const router = useRouter();
    const parentRef = useRef(null);
    const itemsRef = useRef(null);

    return (
        <nav ref={parentRef} className={cn(styles.container, { [styles.fixedContainer]: router.pathname === '/' })}>
            <Link href="/">
                <a>
                    <span className={styles.logo}>
                        <Logo />
                    </span>
                </a>
            </Link>
            <div ref={itemsRef} className={styles.links}>
                <Link href="/">
                    <a className={cn(styles.link, { [styles.active]: router.pathname === '/' })}>
                        Home
                    </a>
                </Link>
                <Link href="/stage">
                    <a className={cn(styles.link, { [styles.active]: router.pathname === '/stage' })}>
                        Stage
                    </a>
                </Link>
                <Link href="/schedule">
                    <a className={cn(styles.link, { [styles.active]: router.pathname === '/schedule' })}>
                        Schedule
                    </a>
                </Link>
                <Link href="/speakers">
                    <a className={cn(styles.link, { [styles.active]: router.pathname === '/speakers' })}>
                        Speakers
                    </a>
                </Link>
                <Link href="/expo">
                    <a className={cn(styles.link, { [styles.active]: router.pathname === '/expo' })}>
                        Innovation Expo
                    </a>
                </Link>
                <Link href="/about">
                    <a className={cn(styles.link, { [styles.active]: router.pathname === '/about' })}>
                        About
                    </a>
                </Link>
                <Link href="https://tinyurl.com/tedxcmu2022">
                    <a className={styles.button} target="_blank" rel="noopener noreferrer">
                        Purchase Tickets
                    </a>
                </Link>
            </div>
            <Link href="https://tinyurl.com/tedxcmu2022">
                <a className={styles.button} target="_blank" rel="noopener noreferrer">
                    Purchase Tickets
                </a>
            </Link>
            <Menu parent={parentRef} items={itemsRef} />
        </nav>
    );
}

export default NavBar;

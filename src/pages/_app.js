import 'styles/globals.css';
import NavBar from 'components/navbar';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    console.log(router.pathname)

    return (
        <>
            {router.pathname !== '/' && <NavBar />}
            <Component {...pageProps} />
            {router.pathname === '/' && <NavBar />}
        </>
    );
}

export default MyApp;

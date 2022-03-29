import 'styles/globals.css';
import NavBar from 'components/navbar';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

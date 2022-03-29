import 'styles/globals.css';
import Metadata from 'components/metadata';
import NavBar from 'components/navbar';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <Metadata />
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

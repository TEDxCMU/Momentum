// import 'styles/globals.css';
import styles from "./hero.module.css"
import ImagePool from "../components/imagepool"

// const images = importAll(require.context('static/UniLogo/', false, /\.(png|jpe?g|svg)$/)); 
// const imageArray = images.map(function(image) {
//     return <img key={image} src={image} />;
// });

function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h1>momentum</h1>
                    </div>
                    {/* <div className={styles.content}> */}
                    <div className={styles.images}>
                        <ImagePool/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

import styles from "./hero.module.css"
import { useEffect, useRef, useState, Suspense, lazy } from "react";

function Home() {
    const [imageIndex, setImageIndex] = useState(null);
    const [mounted, setMounted] = useState(false);
    const clicked = useRef(false);
    // width, height, top, left
    var dimensionArray = [[2289.43, 1797.36, 142.06, 2223.4], [1263.81, 1486.9, -427.26, 336.84], [1226.88, 869.04, 177.09, -50], [1180.37, 1041.85, 1011.36, 324.88], [1448.71, 1722.85, 507.03, 1452.29], [1297.62, 1157.84, -545, 471.65]];
    var colorArray = ['#C1FFBF', '#FF2F54', '#FF8A00', '#4A5CFF', '#E370DF']

    const changeImageColor = (color) => {
        var svg = document.getElementById("color-change-svg").contentDocument;
        var elements = svg.getElementsByClassName("primaryColor");
        for (var i = 0; i < elements.length; i++) elements[i].style.fill = color;
    }

    const handleColorChange = (event) => {
        console.log("clicked");
        if (!clicked.current) return false;
        changeImageColor("#E370DF");
    }

    useEffect(() => {
        setMounted(true);
        setImageIndex(Math.floor(Math.random() * 6) + 1);
      }, []);

    return (
        <>
            {imageIndex && (<div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentOffset}>
                        <div className={styles.details}>
                            <h2 className={styles.time}>
                                April 2, 10 am EST
                            </h2>
                            <h3 className={styles.time}>
                                Location: Mellon Institute
                            </h3>
                        </div>
                        <div className={styles.heading}>
                            <h1>momentum</h1>
                        </div>
                    </div>
                    <object
                        className={styles.img}
                        data={`/visuals/home-${imageIndex}.svg`}
                        type="image/svg+xml"
                        width={`${dimensionArray[imageIndex-1][0]}`}
                        height={`${dimensionArray[imageIndex-1][1]}`}
                        position="absolute"
                        top={`${dimensionArray[imageIndex-1][2]}`}
                        left={`${dimensionArray[imageIndex-1][3]}`}
                    ></object>
                    {/* <img
                        className={styles.img}
                        src={`/visuals/home-${imageIndex}.svg`}
                        width={`${dimensionArray[imageIndex-1][0]}`}
                        height={`${dimensionArray[imageIndex-1][1]}`}
                        position="relative"
                        top={`${dimensionArray[imageIndex-1][2]}`}
                        left={`${dimensionArray[imageIndex-1][3]}`}
                    /> */}
                </div>
            </div>)}
        </>
    );
}

export default Home;

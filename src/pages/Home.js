import style from "./Home.module.scss";
import Page from "../components/Page";
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgroundImages = [
        require('../static/images/background/background_01.jpg'),
        require('../static/images/background/background_02.jpg'),
        require('../static/images/background/background_03.jpg'),
        require('../static/images/background/background_04.jpg'),
        require('../static/images/background/background_05.jpg'),
        require('../static/images/background/background_06.jpg'),
        require('../static/images/background/background_07.jpg')
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [backgroundImages.length]);

    document.documentElement.setAttribute('data-mode', "dark");

    const glowingSignature = require('../static/images/icons/signature-glow.png');

    return (
        <div className={style.defaultBackground}>
            <div className={style.background} style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
                <Page forceMode="dark">
                    <div className={style.signatureWrapper}>
                        <img src={glowingSignature} className={style.glowingSignature} draggable="false"/>
                    </div>
                </Page>
            </div>
        </div>
    );
};
  
export default Home;
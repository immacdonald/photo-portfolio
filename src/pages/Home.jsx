import React, { useState, useEffect } from 'react';
import style from './Home.module.scss';
import Page from '../components/Page';
import glowingSignature from '../static/images/icons/signature-glow.png';
import background01 from '../static/images/background/background_01.jpg';
import background02 from '../static/images/background/background_02.jpg';
import background03 from '../static/images/background/background_03.jpg';
import background04 from '../static/images/background/background_04.jpg';
import background05 from '../static/images/background/background_05.jpg';
import background06 from '../static/images/background/background_06.jpg';
import background07 from '../static/images/background/background_07.jpg';
import background08 from '../static/images/background/background_08.jpg';
import background09 from '../static/images/background/background_09.jpg';
import background10 from '../static/images/background/background_10.jpg';

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgroundImages = [
        background01,
        background02,
        background03,
        background04,
        background05,
        background06,
        background07,
        background08,
        background09,
        background10,
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [backgroundImages.length]);

    document.documentElement.setAttribute('data-mode', 'dark');

    return (
        <div className={style.defaultBackground}>
            <div className={style.background} style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
                <Page forceTheme="dark" altFooter>
                    <div className={style.signatureWrapper}>
                        <img src={glowingSignature} className={style.glowingSignature} draggable="false" alt="Kam's Signature, Glowing" />
                    </div>
                </Page>
            </div>
        </div>
    );
}

export default Home;

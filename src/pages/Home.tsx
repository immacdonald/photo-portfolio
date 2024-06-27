import { useEffect, useState } from 'react';
import { Page, Section, useInterval, useResponsiveContext } from 'phantom-library';
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
import glowingSignature from '../static/images/icons/signature-glow.png';
import style from './Home.module.scss';

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgroundImages = [background01, background02, background03, background04, background05, background06, background07, background08, background09, background10];

    const { setTheme } = useResponsiveContext();

    useEffect(() => {
        setTheme('dark');
    }, []);

    useInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return (
        <Page className={style.background} cssProperties={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
            <Section transparent>
                <div className={style.signature}>
                    <img src={glowingSignature} draggable="false" alt="Kam's signature, glowing" />
                </div>
            </Section>
        </Page>
    );
}

export { Home };

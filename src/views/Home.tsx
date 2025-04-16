import { useState, type FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Column, Section, useInterval } from 'phantom-library';
import { backgroundImages, glowingSignature } from '@assets/images';
import { Footer } from '@components/Footer';
import style from './Home.module.scss';

const Home: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return (
        <main className={style.background} style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
            <Helmet>
                <title>Kam Lin</title>
            </Helmet>
            <Section data-theme="dark">
                <Column stretch>
                    <Column className={style.signature} block verticalAlign="center">
                        <img src={glowingSignature} draggable="false" alt="Kam's signature" />
                    </Column>
                </Column>
                <Footer transparent />
            </Section>
        </main>
    );
};

export { Home };

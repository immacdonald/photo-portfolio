import { useState } from 'react';
import { Column, Section, Typography, useInterval } from 'phantom-library';
import { backgroundImages, glowingSignature } from '@assets/images';
import { Footer } from '@components/Footer';
import style from './Home.module.scss';

const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return (
        <main className={style.background} style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
            <Section data-theme="dark">
                <Column stretch>
                    <Column className={style.signature} block verticalAlign="center">
                        <Typography.Text>Kam Lin</Typography.Text>
                        <img src={glowingSignature} draggable="false" alt="Kam's signature" />
                    </Column>
                </Column>
                <Footer transparent />
            </Section>
        </main>
    );
};

export { Home };

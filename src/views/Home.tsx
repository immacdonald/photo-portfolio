import { useEffect, useState } from 'react';
import { Page, Section, useInterval, useResponsiveContext } from 'phantom-library';
import { backgroundImages, glowingSignature } from '@assets/images';
import style from './Home.module.scss';

const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
};

export { Home };

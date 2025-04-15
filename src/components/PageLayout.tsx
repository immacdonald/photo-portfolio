import type { ReactNode, FC } from 'react';
import { Footer } from './Footer';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
    children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <>
            <main className={styles.page}>
                {children}
                <Footer />
            </main>
        </>
    );
};

export { PageLayout };

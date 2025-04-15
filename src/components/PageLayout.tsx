import type { ReactNode, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Footer } from './Footer';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
    title?: string;
    children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
    return (
        <>
            {title && (
                <Helmet>
                    <title>{title}</title>
                </Helmet>
            )}
            <main className={styles.page}>
                {children}
                <Footer />
            </main>
        </>
    );
};

export { PageLayout };

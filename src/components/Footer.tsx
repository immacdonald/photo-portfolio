import { useMemo, type CSSProperties, type FC } from 'react';
import { StyledFooter, Typography } from 'phantom-library';
import styles from './Footer.module.scss';

interface FooterProps {
    transparent?: boolean;
}

const Footer: FC<FooterProps> = ({ transparent }) => {
    const year = useMemo(() => new Date().getFullYear(), []);

    const properties: CSSProperties = transparent ? { backgroundColor: 'transparent' } : {};

    return (
        <StyledFooter height="36px" className={styles.footer} style={properties}>
            <Typography.Text>&copy; Kam Lin 2022-{year} </Typography.Text>
        </StyledFooter>
    );
};

export { Footer };

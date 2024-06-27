import React from 'react';
import style from './Footer.module.scss';

const Footer: React.FC = () => {

    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <span>&copy; Kam Lin 2024 </span>
            </div>
        </footer>
    );
};

export { Footer };

import React from 'react';
import classNames from 'classnames';
import style from './Footer.module.scss';

function Footer(props) {
    const { alt = false } = props;

    const footerClases = classNames(
        style.footer,
        {
            [style.alt]: alt,
        },
    );

    return (
        <footer>
            <div className={footerClases}>
                <div className={style.footerContent}>
                    <p>&copy; Kam Lin 2023 & Website by Ian MacDonald </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className={style.footer}>
                <div className={style.footerContent}>
                    <p>&copy; Kam Lin 2023 & Website by Ian MacDonald </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
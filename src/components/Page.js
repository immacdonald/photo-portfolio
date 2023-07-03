import style from "./Page.module.scss";

const Page = (props) => {
    const { children, forceMode = false} = props;
    if(forceMode) {
        document.documentElement.setAttribute('data-mode', forceMode);
    } else {
        document.documentElement.setAttribute('data-mode', "light");
    }
    return (
        <div>
            <div className={style.main}>
                <div className={style.responsiveWrapper}>
                    <main className={style.mainContent}>
                        {children}
                    </main>
                    <footer>
                        <div className={style.footer}>
                            <div className={style.footerContent}>
                                <p>&copy; Kam Lin 2023 & Website by Ian MacDonald </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};
  
export default Page;
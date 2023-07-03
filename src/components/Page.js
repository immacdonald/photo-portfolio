import style from "./Page.module.scss";

const Page = (props) => {
    return (
        <div>
            <div className={style.main}>
                <div className={style.responsiveWrapper}>
                    <main className={style.mainContent}>
                        {props.children}
                    </main>
                    <footer>
                        <div className={style.footer}>
                            <div className={style.footerContent}>
                                <p>&copy; Ian MacDonald 2023</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};
  
export default Page;
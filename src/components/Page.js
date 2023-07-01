import style from "./Page.module.scss";

const Page = (props) => {
    return (
        <div>
            <main className={style.main}>
                <div className={style.responsiveWrapper}>
                    {props.children}
                </div>
            </main>
            <footer>
                <div className={style.responsiveWrapper}>
                    <div className={style.footer}>
                        <div className={style.footerContent}>
                            <p>&copy; Ian MacDonald 2023</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
  
export default Page;
import style from "./Page.module.scss";

const Page = (props) => {
    return (
        <main className={style.main}>
            <div className={style.responsiveWrapper}>
                {props.children}
            </div>
        </main>
    );
};
  
export default Page;
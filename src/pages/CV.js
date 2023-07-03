import style from "./CV.module.scss";
import Page from "../components/Page";

const CV = () => {
    return (
        <Page>
            <h1>Curriculum Vitae</h1>
            <div className={style.bodyText}>
                <div>
                    <p><b>Education</b></p>
                    <p><i>College of William & Mary</i>, 2023</p>
                    <p>Bachelor of Arts in History</p>
                    <p>Minor in Studio Arts and Art History</p>
                </div>
                <div>
                    <p><b>Exhibitions</b></p>
                    <p>2023 Non-Majors Art Show at William & Mary</p>
                </div>
            </div>
        </Page>
    );
};
  
export default CV;
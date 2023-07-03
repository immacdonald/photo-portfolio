import style from "./Orion.module.scss"
import Page from "../components/Page";
import Gallery from "../components/Gallery";

const Orion = () => {
    return (
        <Page>
            <h1>Orion</h1>
            <Gallery/>
            <div className={style.bodyText}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Amet nulla facilisi morbi tempus iaculis urna. 
                    Ac auctor augue mauris augue neque gravida in fermentum et. Interdum varius sit amet mattis. Nunc mi ipsum faucibus vitae aliquet. 
                    Non diam phasellus vestibulum lorem. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. 
                    Sit amet nisl purus in mollis nunc sed. Nibh sit amet commodo nulla. 
                    Purus non enim praesent elementum facilisis leo. In egestas erat imperdiet sed euismod.
                </div>
            </div>
        </Page>
    );
};
  
export default Orion;
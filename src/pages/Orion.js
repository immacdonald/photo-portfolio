import style from "./Orion.module.scss"
import Page from "../components/Page";
import Gallery from "../components/Gallery";

const Orion = () => {
    const photos =  [
        { "title": "Car Frame", "file": "untitled_01" },
        { "title": "Reverse 01", "file": "untitled_02" },
        { "title": "Untitled", "file": "untitled_03" },
        { "title": "Tire", "file": "untitled_04" },
        { "title": "Electric", "file": "untitled_05" },
        { "title": "Me", "file": "untitled_06" },
        { "title": "Reverse 02", "file": "untitled_07" },
        { "title": "Ribs", "file": "untitled_08" },
        { "title": "Shopping Carts", "file": "untitled_09" },
        { "title": "Reverse 03", "file": "untitled_10" },
        { "title": "Kentucky", "file": "untitled_11" },
        { "title": "Station", "file": "untitled_12" },
        { "title": "Current", "file": "untitled_13" },
        { "title": "Shake", "file": "untitled_14" },
        { "title": "Grip", "file": "untitled_15" },
        { "title": "Untitled", "file": "untitled_16" },
        { "title": "Reverse 04", "file": "untitled_17" },
        { "title": "Untitled", "file": "untitled_18" },
        { "title": "Grind", "file": "untitled_19" },
        { "title": "Knees", "file": "untitled_20" },
        { "title": "Reverse 05", "file": "untitled_21" },
        { "title": "Release", "file": "untitled_22" },
        { "title": "Projected", "file": "untitled_23" },
        { "title": "Reverse 06", "file": "untitled_24" },
        { "title": "Silhouette", "file": "untitled_25" },
        { "title": "Reverse 07", "file": "untitled_26" },
        { "title": "Light Tunnel", "file": "untitled_27" },
        { "title": "Reverse 08", "file": "untitled_28" },
        { "title": "Reflection", "file": "untitled_29" },
        { "title": "Wrung", "file": "untitled_30" }
    ];

    return (
        <Page>
            <h1>Orion</h1>
            <Gallery photos={photos} path="works/orion" description="Silver Gelatin Print"/>
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
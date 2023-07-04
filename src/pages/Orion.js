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
            <h1>Orion, 2023</h1>
            <Gallery photos={photos} path="works/orion" description="Silver Gelatin Print" exactLayout={true}/>
            <br/>
            <h3>About the Series</h3>
            <div className={style.bodyText}>
                <div>
                    This series has been my attempt to share with my audience the serendipitous feeling of having emotions at their 
                    fullest at any given moment. Throughout my interactions with this work, I have time and time again insisted on not giving a 
                    specific explanation for any of my pieces. That is because I want the audience to be able to find their own meaning and 
                    emotion in my work, and while I hope they draw similar conclusions to what I attempt to convey, I am happy just letting 
                    them riddle it out themselves. 
                </div>
                <div>
                    In this series, I look at the car as a metaphor. For me, for my body, as my shell, or on a grander scale, the car serves as 
                    some sort of vessel from which both I am looking outward and inward. While the work is very subjective in what the car 
                    represents, and should vary from person to person, my main focus was to illustrate, without directly outlining, what it is 
                    like to be both inside looking in, and inside looking out of this car. To me, my car is a safe space- a haven where I am 
                    free to explore the full range of my emotions. I sing louder in the car than anywhere else, but I cry harder too. It is 
                    where I welcome the negative thoughts and allow them to overcome me, just as it is where I have some of my most fond 
                    memories of trips where the destinations are long forgotten. The car as a vessel serves for a space in which I can 
                    entertain friends, sit alone with myself, go on journeys of self-discovery just on the way to the nearest McDonalds, 
                    and travel across the country to learn more about the world than anyone else could ever teach me. The car is everything and 
                    yet, it is just a machine. I am what gives the car meaning, but without the car I would not freely be able to give myself meaning. 
                </div>
                <div>
                    Throughout this work, my only goal has been to capture these fleeting moments, the thoughts and emotions that I may never 
                    witness again, and share them with my audience. By looking inward, I have chased emotions that I associate with my mental 
                    health, but I believe that these feelings are ones that can be felt by anyone. Thus, to me, this work may be about the 
                    liminal space of my car and the varying degrees to which my mental health shines through. However, I hope that to others, 
                    it is just an opportunity for them to experience emotion, to pull something from my images. The car is a metaphor, yes, 
                    but what it is a metaphor for should remain undetermined. This work is meant to be subjective, but I hope that it leaves 
                    a lasting impression on those who come in contact with it, and encourages them to look inwards and allow their emotions 
                    to exist a little more than they did before. 
                </div>
            </div>
        </Page>
    );
};
  
export default Orion;
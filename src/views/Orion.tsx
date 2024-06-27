import { Page, Section } from 'phantom-library';
import { tubSeries } from '@assets/images';
import { Gallery } from '@components/Gallery';

const Orion: React.FC = () => {
    return (
        <Page>
            <Section transparent>
                <h1>Orion, 2023</h1>
                <Gallery
                    photos={tubSeries.photos}
                    description="35mm Film, Silver Gelatin Print"
                    layout={{ base: { exact: false, columns: 6 }, md: { exact: false, columns: 3 }, xs: { exact: false, columns: 1 } }}
                />
                <br />
                <h3>About the Series</h3>
                <p>
                    This series has been my attempt to share with my audience the serendipitous feeling of having emotions at their fullest at any given moment. Throughout my interactions with this
                    work, I have time and time again insisted on not giving a specific explanation for any of my pieces. That is because I want the audience to be able to find their own meaning and
                    emotion in my work, and while I hope they draw similar conclusions to what I attempt to convey, I am happy just letting them riddle it out themselves.
                </p>
                <p>
                    In this series, I look at the car as a metaphor. For me, for my body, as my shell, or on a grander scale, the car serves as some sort of vessel from which both I am looking outward
                    and inward. While the work is very subjective in what the car represents, and should vary from person to person, my main focus was to illustrate, without directly outlining, what
                    it is like to be both inside looking in, and inside looking out of this car. To me, my car is a safe space- a haven where I am free to explore the full range of my emotions. I sing
                    louder in the car than anywhere else, but I cry harder too. It is where I welcome the negative thoughts and allow them to overcome me, just as it is where I have some of my most
                    fond memories of trips where the destinations are long forgotten. The car as a vessel serves for a space in which I can entertain friends, sit alone with myself, go on journeys of
                    self-discovery just on the way to the nearest McDonalds, and travel across the country to learn more about the world than anyone else could ever teach me. The car is everything and
                    yet, it is just a machine. I am what gives the car meaning, but without the car I would not freely be able to give myself meaning.
                </p>
                <p>
                    Throughout this work, my only goal has been to capture these fleeting moments, the thoughts and emotions that I may never witness again, and share them with my audience. By looking
                    inward, I have chased emotions that I associate with my mental health, but I believe that these feelings are ones that can be felt by anyone. Thus, to me, this work may be about
                    the liminal space of my car and the varying degrees to which my mental health shines through. However, I hope that to others, it is just an opportunity for them to experience
                    emotion, to pull something from my images. The car is a metaphor, yes, but what it is a metaphor for should remain undetermined. This work is meant to be subjective, but I hope
                    that it leaves a lasting impression on those who come in contact with it, and encourages them to look inwards and allow their emotions to exist a little more than they did before.
                </p>
            </Section>
        </Page>
    );
};

export { Orion };

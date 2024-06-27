import { Gallery } from '../components/Gallery';
import { Page, Section } from 'phantom-library';
import { photos } from '../static/images/works/tub/index';

function Tub() {
    return (
        <Page>
            <Section transparent>
                <h1>Tub, 2022</h1>
                <Gallery photos={photos} path="works/tub" description="Large Format Film, Silver Gelatin Print" />
                <br />
                <h3>About the Series</h3>
                <p>
                    This series has been my attempt to explore the emotions that have occurred for me over the course of the past two critiques, and convey them to my audience without directly exhibiting
                    what I want to convey. The inspiration for this series came from the dramatic appearance of the developed film photos. With numerous comparisons to ideas such as the “film noir,” I
                    felt inspired to explore something just as dramatic as the photos I was already producing, and to employ this drama to my advantage. Thus, I searched for something dramatic in my life,
                    and decided upon exploring my emotions as a good place to start. While it began within the parameters of my bathroom alone, because that is where I have experienced some of my
                    strongest emotional moments, I have since expanded into my bedroom as well.
                </p>
                <p>
                    In the recent media, there has been a lot of discourse surrounding stronger emotions and the diagnosed bipolar disorder (and consequently, borderline personality disorder as well). As
                    someone who has been diagnosed with both disorders and has suffered at the hands of stereotypes and the recent characterization of these disorders in the media, I wanted to try my hand
                    at illustrating these emotions as they truly appear to me, rather than what everyone else is sharing and receiving. Unfortunately, a large part of this disorder means that these
                    emotions are fleeting, and when I am not currently feeling them, I do not remember that they exist, nor can I recall how they feel. Thus, my aim with this series was to capture the
                    emotions as I felt them, and do my best to convey these emotions through my photographs. Oftentimes, they were feelings I could not give words to anyways, but something that hopefully
                    anyone could grasp, such as the overwhelming feeling of giant piles of laundry, or sitting haunted in an empty bathtub.
                </p>
                <p>
                    Vulnerability, strong emotions, and feelings I cannot literally describe were the themes of the explorations in this series. While I ran into limitations wherein it could be difficult
                    to capture an emotion while I was experiencing it, I hope that I was able to convey what I have been feeling throughout this past semester in a way that leaves a lasting impact on
                    those who view this series. My intentions were to cause similar emotions, or feelings of one`s own at least, to stir at the viewing of these photos, and I hope that this series will
                    convey my emotions where I cannot.
                </p>
            </Section>
        </Page>
    );
}

export { Tub };

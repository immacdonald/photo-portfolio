import React from 'react';
import style from './Tub.module.scss';
import Page from '../components/Page';
import Gallery from '../components/Gallery';

function Tub() {
    const photos = [
        { title: 'Untitled 1', file: 'Tub_01' },
        { title: 'Untitled 2', file: 'Tub_02' },
        { title: 'Untitled 3', file: 'Tub_03' },
        { title: 'Untitled 4', file: 'Tub_04' },
        { title: 'Untitled 5', file: 'Tub_05' },
        { title: 'Untitled 6', file: 'Tub_06' },
        { title: 'Untitled 7', file: 'Tub_07' },
        { title: 'Untitled 8', file: 'Tub_08' },
        { title: 'Untitled 9', file: 'Tub_09' },
        { title: 'Untitled 10', file: 'Tub_10' },
        { title: 'Untitled 11', file: 'Tub_11' },
        { title: 'Untitled 12', file: 'Tub_12' },
        { title: 'Untitled 13', file: 'Tub_13' },
        { title: 'Untitled 14', file: 'Tub_14' },
        { title: 'Untitled 15', file: 'Tub_15' },
        { title: 'Untitled 16', file: 'Tub_16' },
        { title: 'Untitled 17', file: 'Tub_17' },
        { title: 'Untitled 18', file: 'Tub_18' },
        { title: 'Untitled 19', file: 'Tub_19' },
        { title: 'Untitled 20', file: 'Tub_20' },
        { title: 'Untitled 21', file: 'Tub_21' },
        { title: 'Untitled 22', file: 'Tub_22' },
        { title: 'Untitled 23', file: 'Tub_23' },
        { title: 'Untitled 24', file: 'Tub_24' },
        { title: 'Untitled 25', file: 'Tub_25' },
        { title: 'Untitled 26', file: 'Tub_26' },
        { title: 'Untitled 27', file: 'Tub_27' },
        { title: 'Untitled 28', file: 'Tub_28' },
        { title: 'Untitled 29', file: 'Tub_29' },
    ];

    return (
        <Page>
            <h1>Tub, 2022</h1>
            <Gallery photos={photos} path="works/tub" description="Large Format Film, Silver Gelatin Print" />
            <br />
            <h3>About the Series</h3>
            <div className={style.bodyText}>
                <div>
                    This series has been my attempt to explore the emotions that have occurred for me over the course of the past two critiques,
                    and convey them to my audience without directly exhibiting what I want to convey. The inspiration for this series
                    came from the dramatic appearance of the developed film photos. With numerous comparisons to ideas such
                    as the “film noir,” I felt inspired to explore something just as dramatic as the photos I was already
                    producing, and to employ this drama to my advantage. Thus, I searched for something dramatic in my life,
                    and decided upon exploring my emotions as a good place to start. While it began within the parameters of my
                    bathroom alone, because that is where I have experienced some of my strongest emotional moments, I have
                    since expanded into my bedroom as well.
                </div>
                <div>
                    In the recent media, there has been a lot of discourse surrounding stronger emotions and the diagnosed
                    bipolar disorder (and consequently, borderline personality disorder as well). As someone who has been
                    diagnosed with both disorders and has suffered at the hands of stereotypes and the recent characterization
                    of these disorders in the media, I wanted to try my hand at illustrating these emotions as they
                    truly appear to me, rather than what everyone else is sharing and receiving. Unfortunately, a large
                    part of this disorder means that these emotions are fleeting, and when I am not currently feeling
                    them, I do not remember that they exist, nor can I recall how they feel. Thus, my aim with this
                    series was to capture the emotions as I felt them, and do my best to convey these emotions
                    through my photographs. Oftentimes, they were feelings I could not give words to anyways,
                    but something that hopefully anyone could grasp, such as the overwhelming feeling of giant piles
                    of laundry, or sitting haunted in an empty bathtub.
                </div>
                <div>
                    Vulnerability, strong emotions, and feelings I cannot literally describe were the themes of the explorations in this series.
                    While I ran into limitations wherein it could be difficult to capture an emotion while I was experiencing it,
                    I hope that I was able to convey what I have been feeling throughout this past semester in a way that leaves a
                    lasting impact on those who view this series. My intentions were to cause similar emotions, or feelings of one`s
                    own at least, to stir at the viewing of these photos, and I hope that this series will convey my emotions where I cannot.
                </div>
            </div>
        </Page>
    );
}

export default Tub;

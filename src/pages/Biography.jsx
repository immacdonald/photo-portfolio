import React from 'react';
import style from './Biography.module.scss';
import Page from '../components/Page';

function Biography() {
    const selfPortrait = require('../static/images/kam.jpg');

    return (
        <Page>
            <h1>Biography</h1>
            <div className={style.bodyText}>
                <div>
                    Kam Lin is an analog photographer who explores her emotions in tandem with what exists around her through her work.
                    She is a 2023 graduate of William & Mary with a Bachelor of Arts in History with a minor in Studio Arts and Art History,
                    and is now attending William & Mary’s School of Education in pursuit of a Masters in Elementary Education.
                    Although her career trajectory does not line up with photography, it has always been a passion of hers that
                    she intends to continue throughout her life. Kam grapples with a variety of topics surrounding the inner self and
                    emotions, and has explored numerous forms of art as a means of expressing herself.
                </div>
                <div>
                    As someone who has been diagnosed with a plethora of mental health disorders, she seeks to explore how these diagnoses
                    impact her everyday life, and capture the idea of emotions through her photographs. Her main intention is not to share
                    her own emotions with her audiences, but instead to evoke something (anything, really) within them.
                    She aims to convey something of power, but hopes that the power is found within
                    her audience rather than from her own statements about the work.
                </div>
            </div>
            <div className={style.photoContainer}>
                <img src={selfPortrait} className={style.photo} alt="Kam with a flower" />
            </div>
        </Page>
    );
}

export default Biography;

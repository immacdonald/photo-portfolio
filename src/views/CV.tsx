import { Page, Section } from 'phantom-library';

export const CV: React.FC = () => {
    return (
        <Page>
            <Section transparent>
                <h1>Curriculum Vitae</h1>
                <p>
                    <b>Education</b>
                </p>
                <p>
                    <i>College of William & Mary</i>, 2023
                </p>
                <p>Bachelor of Arts in History</p>
                <p>Minor in Studio Arts and Art History</p>
                <br />
                <p>
                    <b>Exhibitions</b>
                </p>
                <p>2023 Non-Majors Art Show at William & Mary</p>
            </Section>
        </Page>
    );
};

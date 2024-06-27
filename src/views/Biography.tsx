import { Flex, Page, Section, StyledImage } from 'phantom-library';
import { selfPortrait } from '@assets/images';

const Biography: React.FC = () => {
    return (
        <Page>
            <Section transparent>
                <h1>Biography</h1>
                <Flex flex={{ base: 'row', md: 'column' }} verticalAlign="start">
                    <div style={{ width: '100%' }}>
                        <p>
                            Kam Lin is an analog photographer who explores her emotions in tandem with what exists around her through her work. She is a 2023 graduate of William & Mary with a Bachelor
                            of Arts in History with a minor in Studio Arts and Art History, and is now attending William & Mary’s School of Education in pursuit of a Masters in Elementary Education.
                            Although her career trajectory does not line up with photography, it has always been a passion of hers that she intends to continue throughout her life. Kam grapples with a
                            variety of topics surrounding the inner self and emotions, and has explored numerous forms of art as a means of expressing herself.
                        </p>
                        <p>
                            As someone who has been diagnosed with a plethora of mental health disorders, she seeks to explore how these diagnoses impact her everyday life, and capture the idea of
                            emotions through her photographs. Her main intention is not to share her own emotions with her audiences, but instead to evoke something (anything, really) within them. She
                            aims to convey something of power, but hopes that the power is found within her audience rather than from her own statements about the work.
                        </p>
                    </div>
                    <StyledImage image={selfPortrait} alt="Kam with a flower" maxWidth={400} />
                </Flex>
            </Section>
        </Page>
    );
};

export { Biography };

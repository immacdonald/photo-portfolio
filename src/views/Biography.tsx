import { Box, Flex, Heading, Section, StyledImage, tokens, Typography } from 'phantom-library';
import { selfPortrait } from '@assets/images';
import { PageLayout } from '@components/PageLayout';

const Biography: React.FC = () => {
    return (
        <PageLayout>
            <Section>
                <Heading size="hero">Biography</Heading>
                <Flex flex={{ base: 'row', md: 'column' }} verticalAlign="start" gap={tokens.space.xl}>
                    <Box block>
                        <Typography.Paragraph>
                            Kam Lin is an analog photographer who explores her emotions in tandem with what exists around her through her work. She is a 2023 graduate of William & Mary with a Bachelor
                            of Arts in History with a minor in Studio Arts and Art History, and is now attending William & Mary’s School of Education in pursuit of a Masters in Elementary Education.
                            Although her career trajectory does not line up with photography, it has always been a passion of hers that she intends to continue throughout her life. Kam grapples with a
                            variety of topics surrounding the inner self and emotions, and has explored numerous forms of art as a means of expressing herself.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            As someone who has been diagnosed with a plethora of mental health disorders, she seeks to explore how these diagnoses impact her everyday life, and capture the idea of
                            emotions through her photographs. Her main intention is not to share her own emotions with her audiences, but instead to evoke something (anything, really) within them. She
                            aims to convey something of power, but hopes that the power is found within her audience rather than from her own statements about the work.
                        </Typography.Paragraph>
                    </Box>
                    <StyledImage image={selfPortrait} alt="Kam with a flower" maxWidth="sm" />
                </Flex>
            </Section>
        </PageLayout>
    );
};

export { Biography };

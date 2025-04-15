import type { FC } from 'react';
import { Heading, Section, tokens, Typography } from 'phantom-library';
import { PageLayout } from '@components/PageLayout';

export const CV: FC = () => {
    return (
        <PageLayout title="Kam Lin | CV">
            <Section>
                <Heading size="hero">Curriculum Vitae</Heading>
                <Heading size="minor">Education</Heading>
                <Typography.Paragraph>
                    <i>College of William & Mary</i>, 2023
                </Typography.Paragraph>
                <Typography.Paragraph>Bachelor of Arts in History</Typography.Paragraph>
                <Typography.Paragraph>Minor in Studio Arts and Art History</Typography.Paragraph>
                <Heading size="minor" style={{ marginTop: tokens.space.xl }}>
                    Exhibitions
                </Heading>
                <Typography.Paragraph>2023 Non-Majors Art Show at William & Mary</Typography.Paragraph>
            </Section>
        </PageLayout>
    );
};

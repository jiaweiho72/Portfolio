'use client'
import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { person, about, social, baseURL } from '@/app/resources'
import TableOfContents from '@/app/about/components/TableOfContents';
import styles from '@/app/about/about.module.scss'
import { generateMetadata } from './metadata'; // Import metadata


const structure = [
    { 
        title: about.work.title,
        display: about.work.display,
        items: about.work.experiences.map(experience => experience.company)
    },
    { 
        title: about.studies.title,
        display: about.studies.display,
        items: about.studies.institutions.map(institution => institution.name)
    },
    { 
        title: about.technical.title,
        display: about.technical.display,
        items: about.technical.skills.map(skill => skill.title)
    },
    { 
        title: about.leadership.title,
        display: about.leadership.display,
        items: about.leadership.experiences.map(experience => experience.company)
    },
    { 
        title: about.additional.title,
        display: about.additional.display,
        items: about.work.experiences.map(experience => experience.company)
    },
]

export default function About() {
    return (
        <Flex
            fillWidth 
            // maxWidth="m"
            direction="row"
            // alignItems="start"
            justifyContent="center"
            // background="brand-medium"
        >
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />

            

            <Flex
                // Avatar sidebar with a fixed height and variable width
                minWidth="160" // Set a minimum width to prevent collapsing too small
                maxWidth="xl"   // Set a maximum width to maintain layout
                // height="xl"   // Make it fill the full height of the viewport
                fillHeight
                direction="column"
                position="fixed"  // Keep it fixed on scroll
                style={{
                    left: 0,  // Align to the left
                    overflowY: 'auto',  // Allow vertical scrolling if content exceeds height
                    padding: '16px', // Add some padding for aesthetics
                }}
                flex={9}
                // background="brand-medium"
            >
                {/* Avatar display */}
                {about.avatar.display && (
                    <Flex
                        gap="m"
                        direction="column"
                        alignItems="center"
                    >
                        <Avatar
                            src={person.avatar}
                            size="xl" />
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe" />
                            {person.location}
                        </Flex>
                        {person.languages.length > 0 && (
                            <Flex
                                wrap
                                gap="8">
                                {person.languages.map((language, index) => (
                                    <Tag
                                        key={index}
                                        size="l">
                                        {language}
                                    </Tag>
                                ))}
                            </Flex>
                        )}
                        {about.tableOfContent.display && (
                            <Flex paddingTop='24'>
                                <TableOfContents
                                    structure={structure}
                                    about={about}
                                />
                            </Flex>
                        )}
                    </Flex>
                )}
            </Flex>

            {/* Resume Content */}
            <Flex
                className={styles.blockAlign}
                fillWidth 
                flex={9} 
                maxWidth={55} 
                // maxWidth={60} 
                style={{
                    marginLeft: '200px', // Apply left margin directly for spacing from sidebar
                }}
                paddingX="12" // Optional: Add padding for aesthetics

                direction="column" 
                // style={{
                //     // left: 150,
                //     // left:100,
                //     right: '100%',

                //     // left: 130,
                // }}
                // paddingLeft='160'

                // paddingLeft='128'
                // paddingLeft='104'

                // paddingRight="xl"
                // background="brand-medium"
            >
                <Flex
                    id={about.intro.title}
                    fillWidth minHeight="160"
                    direction="column" 
                    justifyContent="center"
                    marginBottom="32"
                >
                    <Heading
                        className={styles.textAlign}
                        variant="display-strong-xl">
                        {person.name}
                    </Heading>
                    <Text
                        className={styles.textAlign}
                        variant="display-default-xs"
                        onBackground="neutral-weak">
                        {person.role}
                    </Text>
                    {social.length > 0 && (
                        <Flex
                            className={styles.blockAlign}
                            paddingTop="20" paddingBottom="8" gap="8" wrap>
                            {social.map((item) => (
                                item.link && (
                                    <Button
                                        key={item.name}
                                        href={item.link}
                                        prefixIcon={item.icon}
                                        label={item.name}
                                        size="s"
                                        variant="tertiary"/>
                                )
                            ))}
                        </Flex>
                    )}
                </Flex>

                { about.intro.display && (
                    <Flex
                        direction="column"
                        textVariant="body-default-l"
                        fillWidth gap="m" marginBottom="xl">
                        {about.intro.description}
                    </Flex>
                )}

                { about.work.display && (
                    <>
                        <Heading
                            as="h2"
                            id={about.work.title}
                            variant="display-strong-s"
                            marginBottom="m">
                            {about.work.title}
                        </Heading>
                        <Flex
                            direction="column"
                            fillWidth gap="l" marginBottom="40">
                            {about.work.experiences.map((experience, index) => (
                                <Flex
                                    key={`${experience.company}-${experience.role}-${index}`}
                                    fillWidth
                                    direction="column">
                                    <Flex
                                        fillWidth
                                        justifyContent="space-between"
                                        alignItems="flex-end"
                                        marginBottom="4">
                                        <Text
                                            id={experience.company}
                                            variant="heading-strong-l">
                                            {experience.company}
                                        </Text>
                                        <Text
                                            variant="heading-default-xs"
                                            onBackground="neutral-weak">
                                            {experience.timeframe}
                                        </Text>
                                    </Flex>
                                    <Text
                                        variant="body-default-s"
                                        onBackground="brand-weak"
                                        marginBottom="m">
                                        {experience.role}
                                    </Text>
                                    <Flex
                                        as="ul"
                                        direction="column" gap="16">
                                        {experience.achievements.map((achievement, index) => (
                                            <Text
                                                as="li"
                                                variant="body-default-m"
                                                key={`${experience.company}-${index}`}>
                                                {achievement}
                                            </Text>
                                        ))}
                                    </Flex>
                                    {experience.images.length > 0 && (
                                        <Flex
                                            fillWidth paddingTop="m" paddingLeft="40"
                                            wrap>
                                            {experience.images.map((image, index) => (
                                                <Flex
                                                    key={index}
                                                    border="neutral-medium"
                                                    borderStyle="solid-1"
                                                    radius="m"
                                                    minWidth={image.width} height={image.height}>
                                                    <SmartImage
                                                        enlarge
                                                        radius="m"
                                                        sizes={image.width.toString()}
                                                        alt={image.alt}
                                                        src={image.src}/>
                                                </Flex>
                                            ))}
                                        </Flex>
                                    )}
                                </Flex>
                            ))}
                        </Flex>
                    </>
                )}

                { about.studies.display && (
                    <>
                        <Heading
                            as="h2"
                            id={about.studies.title}
                            variant="display-strong-s"
                            marginBottom="m">
                            {about.studies.title}
                        </Heading>
                        <Flex
                            direction="column"
                            fillWidth gap="l" marginBottom="40">
                            {about.studies.institutions.map((institution, index) => (
                                <Flex
                                    key={`${institution.name}-${index}`}
                                    fillWidth gap="16"
                                    direction="column">
                                    <Text
                                        id={institution.name}
                                        variant="heading-strong-l">
                                        {institution.name}
                                    </Text>
                                    <Flex
                                        as="ul"
                                        direction="column" 
                                        gap="16"
                                    >
                                        {institution.descriptions.map((description, index) => (
                                            <Text
                                                as="li"
                                                variant="body-default-m"
                                                key={`${description}-${index}`}>
                                                {description}
                                            </Text>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>


                    </>
                )}

                { about.technical.display && (
                    <>
                        <Heading
                            as="h2"
                            id={about.technical.title}
                            variant="display-strong-s" marginBottom="40">
                            {about.technical.title}
                        </Heading>
                        <Flex
                            direction="column"
                            fillWidth gap="l"
                            // marginBottom="m"
                            marginBottom="40"
                        >
                            {about.technical.skills.map((skill, index) => (
                                <Flex
                                    key={`${skill}-${index}`}
                                    fillWidth gap="4"
                                    direction="column">
                                    <Text
                                        variant="heading-strong-l">
                                        {skill.title}
                                    </Text>
                                    <Text
                                        variant="body-default-m"
                                        onBackground="neutral-weak">
                                        {skill.description}
                                    </Text>
                                </Flex>
                            ))}
                        </Flex>
                        <Flex
                            fillWidth gap="4"
                            direction="column"
                            marginBottom='l'
                        >
                            <Text
                                variant="heading-strong-l">
                                Coursework
                            </Text>
                            <Text
                                variant="body-default-m"
                                onBackground="neutral-weak"
                            >
                                {about.technical.coursework}
                            </Text>
                        </Flex>
                    </>
                )}
                { about.leadership.display && (
                    <>
                        <Heading
                            as="h2"
                            id={about.leadership.title}
                            variant="display-strong-s"
                            marginBottom="m">
                            {about.leadership.title}
                        </Heading>
                        <Flex
                            direction="column"
                            fillWidth gap="l" marginBottom="40">
                            {about.leadership.experiences.map((experience, index) => (
                                <Flex
                                    key={`${experience.company}-${experience.role}-${index}`}
                                    fillWidth
                                    direction="column">
                                    <Flex
                                        fillWidth
                                        justifyContent="space-between"
                                        alignItems="flex-end"
                                        marginBottom="4">
                                        <Text
                                            id={experience.company}
                                            variant="heading-strong-l">
                                            {experience.company}
                                        </Text>
                                        <Text
                                            variant="heading-default-xs"
                                            onBackground="neutral-weak">
                                            {experience.timeframe}
                                        </Text>
                                    </Flex>
                                    <Text
                                        variant="body-default-s"
                                        onBackground="brand-weak"
                                        marginBottom="m">
                                        {experience.role}
                                    </Text>
                                    <Flex
                                        as="ul"
                                        direction="column" gap="16">
                                        {experience.achievements.map((achievement, index) => (
                                            <Text
                                                as="li"
                                                variant="body-default-m"
                                                key={`${experience.company}-${index}`}>
                                                {achievement}
                                            </Text>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </>
                )}

                { about.additional.display && (
                    <>
                        <Heading
                            as="h2"
                            id={about.additional.title}
                            variant="display-strong-s"
                            marginBottom="m">
                            {about.additional.title}
                        </Heading>
                        <Flex
                            direction="column"
                            fillWidth gap="l" marginBottom="40">
                            <Flex
                                as="ul"
                                direction="column" gap="16">
                                {about.additional.descriptions.map((description, index) => (
                                    <Text
                                        as="li"
                                        variant="body-default-m"
                                        key={`${description}-${index}`}>
                                        {description}
                                    </Text>
                                ))}
                            </Flex>
                        </Flex>
                    </>
                )}
            </Flex>
        </Flex>
    );
}
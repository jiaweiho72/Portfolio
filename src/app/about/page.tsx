import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { person, about, social, baseURL } from '@/app/resources'
import TableOfContents from '@/app/about/components/TableOfContents';
import styles from '@/app/about/about.module.scss'

export function generateMetadata() {
	const title = about.title;
	const description = about.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

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
            direction="column"
            // alignItems="start"
            // justifyContent="start"
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
                fillWidth
                mobileDirection="column" justifyContent="end"
                // paddingLeft='128'
                // paddingX='xl'
                paddingX="12"
                // background="brand-medium"
            >
                {/* Avatar display */}
                { about.avatar.display && (
                    <Flex
                        minWidth="160"   
                        gap="m"
                        // flex={3} 
                        // paddingX="l"
                        paddingBottom="xl"
                        // background="brand-medium"
                        // paddingRight="128"
                        style={{
                            // left: 150,
                            // left:100,
                            left: '10%',

                            // left: 130,
                            // transform: 'translateY(-50%)',
                            whiteSpace: 'nowrap',
                        }}
                        hide="m"
                        position="fixed"
                        direction="column" 
                        alignItems="center"
                    >
                        <Avatar
                            src={person.avatar}
                            size="xl"/>
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe"/>
                            {person.location}
                        </Flex>
                        { person.languages.length > 0 && (
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

                        { about.tableOfContent.display && (
                            <Flex paddingTop='24'>
                                <TableOfContents
                                    structure={structure}
                                    about={about} 
                                />
                            </Flex>
                        )}


                        
                    </Flex>
                )}
                
                {/* Resume Content */}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} 
                    maxWidth={55} 
                    // maxWidth={60} 


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
        </Flex>
    );
}
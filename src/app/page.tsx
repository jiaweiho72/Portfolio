import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Background } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, newsletter, person, routes } from '@/app/resources'
import { Mailchimp } from '@/app/components';
import { Posts } from '@/app/blog/components/Posts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
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

export default function Home() {
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			{/* <video
				autoPlay
				loop
				muted
				style={{
					position: "fixed",
					top: "50%",
					left: "50%",
					width: "100vw",  // Set width to 100% of the viewport width
					height: "100vh", // Set height to 100% of the viewport height
					transform: "translate(-50%, -50%)", // Center the video
					zIndex: -1,
					objectFit: "cover",  // Cover the screen completely
				}}
				playsInline
			>
				<source src="/bg-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video> */}
			{/* <img
				src="/bg-image.jpg" // Replace with the path to your image
				alt="Background"
				style={{
					position: "fixed",
					top: "50%",
					left: "50%",
					width: "100vw",       // Set width to 100% of the viewport width
					height: "100vh",      // Set height to 100% of the viewport height
					transform: "translate(-50%, -50%)", // Center the image
					zIndex: -1,
					objectFit: "cover",  // Ensures the image covers the screen completely
				}}
			/> */}
			<Background
                gradient={true}
                dots={true}
                lines={false}
                style={{
                    zIndex: -1
                }}
            />
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
				
					<Flex
						direction="column"
						fillWidth 
						maxWidth="s" 
						gap="m"
					>
						<RevealFx 
							translateY="4"
						>
							<Heading
								wrap="balance"
								variant="display-strong-l"
								paddingY='s'
							>
								{home.headline}

							</Heading>
						</RevealFx>
						<RevealFx 
							translateY="8" 
							delay={0.1}
						>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-l">
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4}>
							<Button
								data-border="rounded"
								href="/about"
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"/>
										)}
										About me
								</Flex>
							</Button>
						</RevealFx>
					</Flex>
				
			</Flex>
			<RevealFx translateY="16" delay={0.6} speed="fast">
				<Projects range={[1,1]}/>
			</RevealFx>
			{/* {routes['/blog'] && (
				<Flex fillWidth paddingX="20">
					<Posts range={[1,2]} columns="2"/>
				</Flex>
			)}
			<Projects range={[2]}/>
			{ newsletter.display &&
				<Mailchimp/>
			} */}
		</Flex>
	);
}

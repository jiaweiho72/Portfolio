import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getPosts } from '@/app/utils'
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text, Background } from '@/once-ui/components'
import { baseURL, person } from '@/app/resources';

interface WorkParams {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
	let posts = getPosts(['src', 'app', 'work', 'projects']);

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export function generateMetadata({ params }: WorkParams) {
	let post = getPosts(['src', 'app', 'work', 'projects']).find((post) => post.slug === params.slug)
	
	if (!post) {
		return
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		images,
		image,
		team,
	} = post.metadata
	let ogImage = image
		? `https://${baseURL}${image}`
		: `https://${baseURL}/og?title=${title}`;

	return {
		title,
		description,
		images,
		team,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://${baseURL}/work/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function Project({ params }: WorkParams) {
	let post = getPosts(['src', 'app', 'work', 'projects']).find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const avatars = post.metadata.team?.map((person) => ({
        src: person.avatar,
    })) || [];

	return (
		<Flex as="section"
			fillWidth maxWidth="m"
			direction="column" alignItems="center"
			gap="l">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://${baseURL}${post.metadata.image}`
							: `https://${baseURL}/og?title=${post.metadata.title}`,
							url: `https://${baseURL}/work/${post.slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
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
				fillWidth maxWidth="xs" gap="16"
				direction="column">
				<Button
					href="/work"
					variant="tertiary"
					size="s"
					prefixIcon="chevronLeft">
					Projects
				</Button>
				<Heading
					variant="display-strong-s">
					{post.metadata.title}
				</Heading>
			</Flex>
			{post.metadata.images.length > 0 && (
				<SmartImage
					aspectRatio="16 / 9"
					radius="m"
					alt="image"
					src={post.metadata.images[0]}/>
			)}
			<Flex style={{margin: 'auto'}}
				as="article"
				maxWidth="xs" fillWidth
				direction="column">
				<Flex
					gap="12" marginBottom="24"
					alignItems="center">
					{ post.metadata.team && (
						<AvatarGroup
							reverseOrder
							avatars={avatars}
							size="m"/>
					)}
					<Text
						variant="body-default-s"
						onBackground="neutral-weak">
						{formatDate(post.metadata.publishedAt)}
					</Text>
				</Flex>
				<CustomMDX source={post.content} />
			</Flex>
		</Flex>
	)
}
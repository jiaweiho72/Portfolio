import { getPosts } from '@/app/utils';
import { Flex, Background } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';
import { baseURL, person, work } from '../resources';

export function generateMetadata() {
	const title = work.title;
	const description = work.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/work`,
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

export default function Work() {
    let allProjects = getPosts(['src', 'app', 'work', 'projects']);

    return (
        <Flex
			fillWidth maxWidth="m"
			direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: work.title,
                        description: work.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        hasPart: allProjects.map(project => ({
                            '@type': 'CreativeWork',
                            headline: project.metadata.title,
                            description: project.metadata.summary,
                            url: `https://${baseURL}/projects/${project.slug}`,
                            image: `${baseURL}/${project.metadata.image}`,
                        })),
                    }),
                }}
            />
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
            <Background
                gradient={true}
                dots={true}
                lines={false}
                style={{
                    zIndex: -1
                }}
            />
            <Projects/>
        </Flex>
    );
}
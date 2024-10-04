import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Ho',
    lastName:  'Jia Wei',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Singapore',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Chinese']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/jiaweiho72',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ho-jia-wei-29126922b/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:jiaweiho@u.nus.edu',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineer and Data Enthusiast</>,
    subline: <>
    Hi, I'm Jia Wei, a final-year student at the National University of Singapore <InlineCode> (NUS)</InlineCode>, majoring in
    Business Analytics with a specialization in Machine Learning. I have a strong interest in 
    data and enjoy working through each stage of the software development lifecycle, from design to deployment.
    </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>
        Hi, I'm Jia Wei, a final-year Business Analytics student at the National University of Singapore, specializing in Machine Learning. With hands-on experience in AI software engineering, full-stack development, and data analysis, I'm passionate about leveraging technology to solve real-world problems.
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'HTX',
                timeframe: 'Jun 2024 - Present',
                role: 'AI Software Engineer',
                achievements: [
                    <>Built a full-stack geospatial web application, utilising Next.js, Tailwind CSS, TypeScript, and Leaflet.js for the frontend, and FastAPI, PostgreSQL, and ORM for the backend, coordinating with a team of six developers for technical guidance and liaising with stakeholders to ensure alignment with user requirements</>,
                    <>Integrated Large Vision Models (LVMs) such as LLaVA for object detection and image captioning, enhancing surveillance of key access points</>,
                    <>Orchestrated deployment processes employing AWS services such as CodePipeline, EC2, RDS, and S3, with a focus on containerisation, continuous integration, and adherence to security best practices</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/blockfinder-dashboard-light-concise.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Invigilo Technologies',
                timeframe: 'Dec 2023 - Jan 2024',
                role: 'Software Engineer',
                achievements: [
                    <>Co-developed real-time Flutter dashboard for monitoring 40 construction site servers, integrating new API endpoints for seamless data retrieval</>,
                    <>Engineered Python backend infrastructure to retrieve real-time system health data from each server, incorporating encrypted Tailscale communication for secure and efficient data transmission</>
                ],
                images: [ ]
            },
            {
                company: 'SAFRA',
                timeframe: 'May 2023 - Aug 2023',
                role: 'Business Analyst',
                achievements: [
                    <>Managed deployment of four new enhancement modules for SAFRA mobile application</>,
                    <>Performed functional, integration, and regression testing for applications and database systems</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'NUS',
                description: <>School of Computing <br/> Major in Business Analytics with Specialisation in Machine Learning </>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
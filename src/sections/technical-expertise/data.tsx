import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';
import { LiaReact } from 'react-icons/lia';
import { RiJavaLine, RiJavascriptLine } from 'react-icons/ri';
import { SiApachekafka, SiCsswizardry, SiDocker, SiExpress, SiNestjs, SiPostgresql, SiRabbitmq, SiSpringboot } from 'react-icons/si';
import { TbBrandFigma, TbBrandGit, TbBrandHtml5, TbBrandMongodb, TbBrandSass, TbBrandTypescript } from 'react-icons/tb';

export interface TechItem {
    title: string;
    icon: React.ReactNode;
}

export interface BentoCardData {
    id: string;
    title: string;
    badge: string;
    icon: React.ReactNode;
    tech: TechItem[];
    pills: string[];
}

export const BENTO_CARDS: BentoCardData[] = [
    {
        id: 'languages',
        title: 'Languages & Core Runtimes',
        badge: 'Core Foundation',
        icon: <FiCode />,
        tech: [
            { title: 'Java', icon: <RiJavaLine /> },
            { title: 'TypeScript', icon: <TbBrandTypescript /> },
            { title: 'JavaScript', icon: <RiJavascriptLine style={{ fontSize: '1.1em' }} /> },
            { title: 'Node.js', icon: <FaNodeJs /> },
            { title: 'HTML5', icon: <TbBrandHtml5 /> },
            { title: 'CSS3', icon: <SiCsswizardry style={{ transform: 'scale(.75)' }} /> },
            { title: 'Sass', icon: <TbBrandSass /> }
        ],
        pills: [
            'Node.js Event Loop & Runtimes',
            'SOLID Principles & Design Patterns',
            'Object-Oriented Programming',
            'Functional Programming',
            'Type Safety',
            'Performance Optimization'
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend & Web UI',
        badge: 'Client Architecture',
        icon: <FiLayout />,
        tech: [
            { title: 'React', icon: <LiaReact /> },
            { title: 'Figma', icon: <TbBrandFigma /> },
            { title: 'HTML5', icon: <TbBrandHtml5 /> },
            { title: 'CSS3', icon: <SiCsswizardry style={{ transform: 'scale(.75)' }} /> },
            { title: 'Sass', icon: <TbBrandSass /> }
        ],
        pills: [
            'Component Architecture',
            'UI/UX Prototyping',
            'State Management',
            'Single-Page Applications',
            'Responsive UI/UX'
        ]
    },
    {
        id: 'backend',
        title: 'Backend Services & Systems',
        badge: 'Server Architecture & DevOps',
        icon: <FiServer />,
        tech: [
            { title: 'Spring Boot', icon: <SiSpringboot style={{ transform: 'scale(.9)' }} /> },
            { title: 'Nest.js', icon: <SiNestjs style={{ transform: 'scale(.85)' }} /> },
            { title: 'Express', icon: <SiExpress /> },
            { title: 'Apache Kafka', icon: <SiApachekafka /> },
            { title: 'RabbitMQ', icon: <SiRabbitmq /> },
            { title: 'Docker', icon: <SiDocker /> }
        ],
        pills: [
            'Distributed Systems',
            'Microservices Architecture',
            'Containerization & Docker',
            'Event-Driven Architecture',
            'RESTful API Design',
            'Message Queuing & Streaming'
        ]
    },
    {
        id: 'database',
        title: 'Databases & Storage',
        badge: 'Data Layer & Workflow',
        icon: <FiDatabase />,
        tech: [
            { title: 'PostgreSQL', icon: <SiPostgresql /> },
            { title: 'MongoDB', icon: <TbBrandMongodb /> },
            { title: 'Redis', icon: <DiRedis style={{ transform: 'scale(1.3)' }} /> },
            { title: 'Git', icon: <TbBrandGit /> }
        ],
        pills: [
            'Database Management',
            'Schema Normalization',
            'Query Optimization',
            'In-Memory Caching',
            'Version Control (Git)',
            'ACID Transactions'
        ]
    }
];





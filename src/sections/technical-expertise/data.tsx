import { DiRedis } from 'react-icons/di';
import { LiaReact } from 'react-icons/lia';
import { RiJavaLine, RiJavascriptLine } from 'react-icons/ri';
import { SiCsswizardry, SiExpress, SiNestjs, SiPostgresql, SiSpringboot } from 'react-icons/si';
import { TbBrandFigma, TbBrandGit, TbBrandHtml5, TbBrandMongodb, TbBrandNextjs, TbBrandSass, TbBrandTypescript } from 'react-icons/tb';

export const SKILL_POINTS = [
    {
        title: 'Full-Stack Development',
        description: 'Capable of handling both server-side and client-side development, integrating backend services with modern front-end frameworks.'
    },
    {
        title: 'API Design & Development',
        description: 'Skilled in designing, developing, and maintaining RESTful APIs, ensuring scalability and high performance.'
    },
    {
        title: 'Database Management',
        description: 'Experienced in crafting and optimizing database schemas, ensuring well-structured, normalized, and efficient data storage.'
    },
    {
        title: 'System Architecture',
        description: 'Proficient in creating detailed architecture, flow, and class diagrams, facilitating streamlined development and clear communication.'
    },
    {
        title: 'Code Quality & Best Practices',
        description: 'Strong focus on writing clean, maintainable code, adhering to SOLID principles, software design patterns, and industry best practices.'
    },
    {
        title: 'Performance Optimization',
        description: 'Experienced in conducting in-depth performance analysis and implementing optimizations to enhance system efficiency.'
    },
    {
        title: 'Version Control & Collaboration',
        description: 'Proficient in using Git for version control, adept at managing branches, resolving conflicts, and maintaining a structured workflow.'
    }
];

const LANGUAGES = [
    {
        title: 'Java',
        icon: <RiJavaLine />
    },
    {
        title: 'JavaScript',
        icon: <RiJavascriptLine size="4.4rem" />
    },
    {
        title: 'TypeScript',
        icon: <TbBrandTypescript />
    },
    {
        title: 'HTML',
        icon: <TbBrandHtml5 />
    },
    {
        title: 'CSS',
        icon: <SiCsswizardry style={{ transform: 'scale(.75)' }} />
    },
    {
        title: 'Sass',
        icon: <TbBrandSass />
    }
];
const FRAMEWORKS = [
    {
        title: 'React',
        icon: <LiaReact />
    },
    {
        title: 'Next.js',
        icon: <TbBrandNextjs />
    },
    {
        title: 'Spring Boot',
        icon: <SiSpringboot style={{ transform: 'scale(.9)' }} />
    },
    {
        title: 'Nest.js',
        icon: <SiNestjs style={{ transform: 'scale(.85)' }} />
    },
    {
        title: 'Express',
        icon: <SiExpress />
    }
];

const TOOLS = [
    {
        title: 'Git',
        icon: <TbBrandGit />
    },
    {
        title: 'Figma',
        icon: <TbBrandFigma />
    }
];

const DATABASES = [
    {
        title: 'PostgreSQL',
        icon: <SiPostgresql />
    },
    {
        title: 'MongoDB',
        icon: <TbBrandMongodb />
    },
    {
        title: 'Redis',
        icon: <DiRedis style={{ transform: 'scale(1.3)' }} />
    }
];

export const KNOWN_TECH = [
    {
        title: 'Languages',
        items: LANGUAGES
    },
    {
        title: 'Frameworks & Libraries',
        items: FRAMEWORKS
    },
    {
        title: 'Databases & Tools',
        items: DATABASES.concat(TOOLS)
    }
];
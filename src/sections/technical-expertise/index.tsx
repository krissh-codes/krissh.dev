import type { ReactNode } from 'react';
import { DiRedis } from 'react-icons/di';
import { FiChevronRight } from 'react-icons/fi';
import { LiaReact } from 'react-icons/lia';
import { RiJavaLine, RiJavascriptLine } from 'react-icons/ri';
import { SiCsswizardry, SiExpress, SiNestjs, SiPostgresql, SiSpringboot } from 'react-icons/si';
import {
    TbBrandFigma,
    TbBrandGit,
    TbBrandHtml5,
    TbBrandMongodb,
    TbBrandNextjs,
    TbBrandSass,
    TbBrandTypescript
} from 'react-icons/tb';
import classes from './skills.module.scss';

function SkillDescription({ title, children }: { title: string; children: ReactNode }): JSX.Element {
    return (
        <li className={classes.skills_desc__item}>
            <h5 className={classes.skills_desc__item__title}>
                <FiChevronRight className={classes.skills_desc__item__title__bullet} /> {title}:
            </h5>
            <div className={classes.skills_desc__item__text}>{children}</div>
        </li>
    );
}

export default function TechnicalExpertise() {
    return (
        <section id="technical-expertise">
            <h2>Technical Expertise</h2>
            <div className={classes.skills_container}>
                <ul className={classes.skills_desc}>
                    <SkillDescription title="Full-Stack Development">
                        Capable of handling both server-side and client-side development, integrating backend services
                        with modern front-end frameworks.
                    </SkillDescription>

                    <SkillDescription title="API Design & Development">
                        Skilled in designing, developing, and maintaining RESTful APIs, ensuring scalability and high
                        performance.
                    </SkillDescription>

                    <SkillDescription title="Database Management">
                        Experienced in crafting and optimizing database schemas, ensuring well-structured, normalized,
                        and efficient data storage.
                    </SkillDescription>

                    <SkillDescription title="System Architecture">
                        Proficient in creating detailed architecture, flow, and class diagrams, facilitating streamlined
                        development and clear communication.
                    </SkillDescription>

                    <SkillDescription title="Code Quality & Best Practices">
                        Strong focus on writing clean, maintainable code, adhering to SOLID principles, software design
                        patterns, and industry best practices.
                    </SkillDescription>

                    <SkillDescription title="Performance Optimization">
                        Experienced in conducting in-depth performance analysis and implementing optimizations to
                        enhance system efficiency.
                    </SkillDescription>

                    <SkillDescription title="Version Control & Collaboration">
                        Proficient in using Git for version control, adept at managing branches, resolving conflicts,
                        and maintaining a structured workflow.
                    </SkillDescription>
                </ul>
                <aside>
                    <h4>Languages</h4>
                    <div className={classes.tech_icons}>
                        <RiJavaLine />
                        <RiJavascriptLine size="4.4rem" />
                        <TbBrandTypescript />
                        <TbBrandHtml5 />
                        <SiCsswizardry style={{ transform: 'scale(.75)' }} />
                        <TbBrandSass />
                    </div>
                    <h4>Frameworks & Libraries</h4>
                    <div className={classes.tech_icons}>
                        <LiaReact />
                        <TbBrandNextjs />
                        <SiSpringboot style={{ transform: 'scale(.9)' }} />
                        <SiNestjs style={{ transform: 'scale(.85)' }} />
                        <SiExpress />
                    </div>

                    <h4>Databases & Tools</h4>
                    <div className={classes.tech_icons}>
                        <SiPostgresql />
                        <TbBrandMongodb />
                        <DiRedis style={{ transform: 'scale(1.3)' }} />
                        <TbBrandGit />
                        <TbBrandFigma />
                    </div>
                </aside>
            </div>
        </section>
    );
}

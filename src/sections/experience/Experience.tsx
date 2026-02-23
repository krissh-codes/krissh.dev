import type { ReactNode } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { GoOrganization } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { TbCalendarSmile } from 'react-icons/tb';
import { SlideUp } from '@animations';
import CompanyLogo from './CompanyLogo';
import classes from './experience.module.scss';

function ExperiencePoint({ children }: { children: ReactNode }) {
    return (
        <li className={classes.experience__point}>
            <FiChevronRight className={classes.experience__point_bullet} /> <span>{children}</span>
        </li>
    );
}

export function Experience() {
    return (
        <section id="experience" className="section__boxed">
            <SlideUp cascade={true}>
                <div className={classes.experience}>
                    <header>
                        <p className="section__eyebrow">
                            <MdWorkOutline />
                            The Stack Trace
                        </p>
                        <h2>Experience</h2>
                    </header>

                    <div className={classes.experience__container}>
                        <figure className={classes.experience__left}>
                            <CompanyLogo companyName="zoho" className={classes.experience__logo} />
                            <figcaption className={classes.experience__caption}>
                                <div className={classes.experience__caption__details}>
                                    <TbCalendarSmile className={classes.experience__caption__details_icon} /> <time>2022</time> to <time>Present</time>
                                </div>
                                <div className={classes.experience__caption__details}>
                                    <HiOutlineLocationMarker className={classes.experience__caption__details_icon} /> Chennai, India
                                </div>
                            </figcaption>
                        </figure>

                        <div className={classes.experience__description}>
                            <h3 className={classes.experience__title}>Member Technical Staff (Software Engineer)</h3>
                            <div className={classes.experience__company}>
                                <GoOrganization /> Zoho Corporation, Private Limited.
                            </div>

                            <ul className={classes.experience__points}>
                                <SlideUp cascade={true} damping={0.1} delay={0}>
                                    <ExperiencePoint>
                                        <strong>Designed and optimized database schemas</strong> for scalable product features, with a focus on clean data modeling and long-term
                                        maintainability.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Created architecture, flow, and class diagrams</strong> to align teams early, reduce implementation ambiguity, and speed up
                                        delivery.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Enhanced and maintained complex product modules</strong> by shipping feature upgrades and reliability improvements across release
                                        cycles.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Collaborated with cross-functional teams</strong> to deliver new capabilities, resolve production issues, and support critical
                                        customer use cases.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Modernized legacy code paths</strong> by adopting current frameworks and coding standards, improving developer velocity and code
                                        health.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Built and maintained RESTful APIs and background services</strong>, including scheduled cleanup flows and bulk export operations.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Performed performance investigations</strong> using profiling techniques such as heap dump and flame graph analysis to identify and
                                        resolve bottlenecks.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Revamped UI components and built reusable front-end modules</strong> to improve consistency, scalability, and maintainability of
                                        client-facing workflows.
                                    </ExperiencePoint>
                                </SlideUp>
                            </ul>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </section>
    );
}

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
                        <h5>
                            <MdWorkOutline />
                            The Stack Trace
                        </h5>
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
                                        <strong>Designed and optimized database schemas</strong> to support scalable, high-performance features, ensuring well-structured and
                                        normalized data organization.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Crafted detailed Architecture, Flow, and Class Diagrams</strong> to provide clear blueprints for new features and enhance
                                        development efficiency.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Enhanced and maintained complex features</strong>, implementing major upgrades and performance improvements to meet evolving
                                        requirements.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Collaborated with cross-functional teams</strong> to drive new feature development, quickly resolve bugs, and address customer
                                        support tickets, ensuring smooth operation and high user satisfaction.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Modernized legacy codebases</strong>, transitioning to modern frameworks and coding standards for increased maintainability and
                                        performance.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Developed robust RESTful APIs and service methods</strong>, including scheduled data cleanup and bulk export functionalities.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Conducted in-depth performance analysis</strong> using tools like heap dumps and flame graphs to evaluate API efficiency, leading to
                                        significant performance optimizations.
                                    </ExperiencePoint>
                                    <ExperiencePoint>
                                        <strong>Revamped UI components and built reusable modules</strong>, enhancing the functionality and scalability of client-facing
                                        applications.
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

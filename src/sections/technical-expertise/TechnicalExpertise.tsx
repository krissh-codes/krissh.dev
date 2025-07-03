import { Fade } from 'react-awesome-reveal';
import { FiChevronRight } from 'react-icons/fi';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { SlideUp } from '@animations';
import { WithTooltip } from '@components';
import { KNOWN_TECH, SKILL_POINTS } from '@sections/technical-expertise/data';
import classes from './skills.module.scss';

export function TechnicalExpertise() {
    return (
        <section id="technical-expertise">
            <header>
                <h5>
                    <LiaLaptopCodeSolid /> Skills
                </h5>
                <h2>Technical Expertise</h2>
            </header>

            <div className={classes.skills_container}>
                <ul className={classes.skills_desc}>
                    <SlideUp damping={0.1} delay={0} cascade={true} triggerOnce={true}>
                        {SKILL_POINTS.map(item => (
                            <li key={item.title} className={classes.skills_desc__item}>
                                <h5 className={classes.skills_desc__item__title}>
                                    <FiChevronRight className={classes.skills_desc__item__title__bullet} /> {item.title}:
                                </h5>
                                <div className={classes.skills_desc__item__text}>{item.description}</div>
                            </li>
                        ))}
                    </SlideUp>
                </ul>
                <aside>
                    <Fade cascade={true} damping={0.1} delay={0.5} triggerOnce={true}>
                        {KNOWN_TECH.map(item => (
                            <div key={item.title} className={classes.tech_container}>
                                <h4>{item.title}</h4>
                                <div className={classes.tech_icons}>
                                    {item.items.map(tech => (
                                        <WithTooltip key={tech.title} tooltipText={tech.title}>
                                            {tech.icon}
                                        </WithTooltip>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Fade>
                </aside>
            </div>
        </section>
    );
}

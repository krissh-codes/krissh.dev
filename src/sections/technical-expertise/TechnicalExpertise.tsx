import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { SlideUp } from '@animations';
import { WithTooltip } from '@components';
import { BENTO_CARDS } from './data';
import classes from './skills.module.scss';

export function TechnicalExpertise() {
    return (
        <section id="skills" className="section__plain">
            <header>
                <p className="section__eyebrow">
                    <LiaLaptopCodeSolid /> Skills
                </p>
                <h2>Technical Expertise</h2>
            </header>

            <SlideUp damping={0.1} delay={0} triggerOnce={true}>
                <div className={classes.bento_grid}>
                    {BENTO_CARDS.map(card => (
                        <div key={card.id} className={`${classes.bento_card} ${classes[`bento_card__${card.id}`]}`}>
                            <div className={classes.bento_card__header}>
                                <div className={classes.bento_card__icon_box}>
                                    {card.icon}
                                </div>
                                <div className={classes.bento_card__title_group}>
                                    <span className={classes.bento_card__badge}>{card.badge}</span>
                                    <h3 className={classes.bento_card__title}>{card.title}</h3>
                                </div>
                            </div>

                            <div className={classes.bento_card__tech_section}>
                                <span className={classes.bento_card__section_label}>Technologies & Tools</span>
                                <div className={classes.bento_card__tech_icons}>
                                    {card.tech.map(tech => (
                                        <WithTooltip key={tech.title} tooltipText={tech.title}>
                                            <div className={classes.tech_icon_tile}>
                                                {tech.icon}
                                            </div>
                                        </WithTooltip>
                                    ))}
                                </div>
                            </div>

                            <div className={classes.bento_card__pills_section}>
                                <span className={classes.bento_card__section_label}>Core Capabilities</span>
                                <div className={classes.bento_card__pills}>
                                    {card.pills.map(pill => (
                                        <span key={pill} className={classes.bento_card__pill}>
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SlideUp>
        </section>
    );
}



import { GrContactInfo } from 'react-icons/gr';
import { SlideUp } from '@animations';
import { Emoji, SocialLinks, TimeSince } from '@components';
import classes from './about.module.scss';

export function About() {
    return (
        <section className={`section__boxed ${classes.about}`} id="about">
            <SlideUp>
                <div className={classes.container}>
                    <header>
                        <p className="section__eyebrow">
                            <GrContactInfo /> Get to know
                        </p>
                        <h2 className={classes.heading}>About me</h2>
                    </header>

                    <div className={classes.about__content}>
                        <figure className={classes.profile}>
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet="/images/Krissh-320.webp 320w, /images/Krissh-480.webp 480w, /images/Krissh-605.webp 605w"
                                    sizes="(max-width: 768px) 80vw, 30vw"
                                />
                                <img
                                    src="/images/Krissh.png"
                                    srcSet="/images/Krissh.png 605w"
                                    sizes="(max-width: 768px) 80vw, 30vw"
                                    alt="Portrait of Krishna Moorthy"
                                    width={605}
                                    height={659}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </picture>
                        </figure>

                        <div className={classes.about__text}>
                            <SlideUp>
                                <p className={classes.description}>
                                    <Emoji character="👋🏽" label="wave" />
                                    Hello, world! I am Krissh, a dedicated Software Engineer with <TimeSince date={new Date('03-Aug-2018')} tooltip /> of programming experience and{' '}
                                    <TimeSince date={new Date('04-Apr-2022')} tooltip /> of professional expertise in developing enterprise web applications.
                                </p>
                                <p className={classes.description}>
                                    I build scalable and reliable software solutions, with expertise in full-stack web development. My experience spans designing complex systems,
                                    database structures and optimizing performance across the board.
                                </p>
                                <p className={classes.description}>
                                    I&#39;m focused on maintaining strict coding standards — ensuring clean, maintainable code from clean code principles, implementing design
                                    patterns to precise commit messages. I find great satisfaction in creating features that thousands of users interact with, and I constantly look
                                    for innovative ways to tackle complex problems.
                                </p>
                                <p className={classes.description}>
                                    In my spare time, I love working on side projects. I also enjoy exploring physics, astronomy <Emoji character="🌌" label="stars" />, and music{' '}
                                    <Emoji character="🎶" label="music" /> as ways to unwind. I&#39;m also a fan of cricket <Emoji character="🏏" label="cricket" /> and soccer{' '}
                                    <Emoji character="⚽" label="soccer" />, catching matches when I can.
                                </p>
                            </SlideUp>
                        </div>
                    </div>

                    <SocialLinks />
                </div>
            </SlideUp>
        </section>
    );
}

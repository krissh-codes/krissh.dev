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
                                    Hello, world! I am Krissh, a Software Engineer with <TimeSince date={new Date('01-Feb-2020')} tooltip /> of programming experience and{' '}
                                    <TimeSince date={new Date('04-Apr-2022')} tooltip /> of professional experience building enterprise web applications.
                                </p>
                                <p className={classes.description}>
                                    I build scalable, reliable software solutions across the stack. My work includes designing system architecture, modeling efficient database
                                    schemas, and improving application performance for real-world product workloads.
                                </p>
                                <p className={classes.description}>
                                    I care deeply about code quality and maintainability, from clean architecture and design patterns to meaningful commit history and review-ready
                                    implementation. I enjoy solving complex product problems and shipping features that deliver clear user value.
                                </p>
                                <p className={classes.description}>
                                    In my spare time, I enjoy building side projects and exploring physics, astronomy <Emoji character="🌌" label="stars" />, and music{' '}
                                    <Emoji character="🎶" label="music" />. I&#39;m also a fan of cricket <Emoji character="🏏" label="cricket" /> and soccer{' '}
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

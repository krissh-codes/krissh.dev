import { FaArrowRight } from 'react-icons/fa6';
import { Button, Emoji, HyperLink, NavBar, TimeSince } from '@components';
import classes from './hero.module.scss';

export function Hero() {
    return (
        <section className={classes.hero}>
            <NavBar />
            <div className={classes.container}>
                <p className={classes.intro}>
                    <Emoji character="👋" label="wave emoji" />
                    Hi, this is
                </p>
                <h1 className={classes.hero__name}>
                    <span className={classes.emphasize}>Krishna</span> Moorthy
                </h1>
                <div className={classes.hero__info}>
                    A passionate{' '}
                    <HyperLink to="#experience" style={{ fontWeight: 600, display: 'inline' }} lone noUnderLine>
                        Software Engineer with <TimeSince date={new Date('04-Apr-2022')} /> of professional experience
                    </HyperLink>{' '}
                    building performant and scalable enterprise web applications.
                </div>
                <div className={classes.hero__cta}>
                    <Button link="#contact" variant="sm">
                        Get in touch
                    </Button>

                    <HyperLink to="#skills" lone noUnderLine>
                        <span className={classes.hero__cta__more}>
                            Learn more
                            <FaArrowRight />
                        </span>
                    </HyperLink>
                </div>
            </div>

            <div role="img" className={classes.waterMark}>
                Krissh
            </div>

            <div className={classes.quickContact}>
                <HyperLink to="mailto: me@krissh.dev" lone target="_blank">
                    me@krissh.dev
                </HyperLink>
                <HyperLink to="/twitter" lone target="_blank">
                    x/@krissh_tweets
                </HyperLink>
            </div>
        </section>
    );
}

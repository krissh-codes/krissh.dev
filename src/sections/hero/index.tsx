import { Emoji, HyperLink, NavBar, TimeSince } from '@components';
import classes from './hero.module.scss';

export default function HeroSection() {
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
                <div className={classes.info}>
                    A passionate{' '}
                    <HyperLink to="#experience" style={{ fontWeight: 600 }} lone noUnderLine>
                        Software Engineer with <TimeSince date={new Date('04-Apr-2022')} /> of professional experience
                    </HyperLink>{' '}
                    building performant and scalable enterprise web applications.
                </div>
            </div>

            <div role="img" className={classes.waterMark}>
                KRISSH
            </div>

            <div className={classes.quickContact}>
                <HyperLink to="mailto: me@krissh.dev" lone>
                    me@krissh.dev
                </HyperLink>
                <HyperLink to="https://x.com/krissh_tweets" lone>
                    x/@krissh_tweets
                </HyperLink>
            </div>
        </section>
    );
}

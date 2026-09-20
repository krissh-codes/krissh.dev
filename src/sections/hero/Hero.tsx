import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import { Button, Emoji, HyperLink, NavBar } from '@components';
import classes from './hero.module.scss';

const PUNCHLINES = [
    'I don’t fix systems, I make them unbreakable',
    'I don’t wait for scale, I’m already ahead of it',
    'Problems don’t reach production if I’ve seen them',
    'I don’t optimize, I eliminate the need to',
    'I don’t fix things, I make them bulletproof',
    'I don’t fight fires, I prevent them',
    'I don’t second-guess, I course-correct',
    'If my name’s on it, it lands',
    'I make clarity the default',
    'I don’t consider it done until each pixel is right where it belongs'
];

export function Hero() {
    const [punchlineIndex, setPunchlineIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setPunchlineIndex(prev => (prev + 1) % PUNCHLINES.length);
                setIsFading(false);
            }, 300);
        }, 3800);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`section__plain ${classes.hero}`}>
            <NavBar />
            <div className={classes.container}>
                <p className={classes.intro}>
                    <Emoji character="👋" label="wave emoji" />
                    Hi, this is
                </p>
                <h1 className={classes.hero__name}>
                    <span className={classes.emphasize}>Krishna</span> Moorthy
                </h1>
                <div className={classes.hero__info} aria-live="polite">
                    <span className={classes.hero__punchline} data-fading={isFading}>
                        {PUNCHLINES[punchlineIndex]}
                    </span>
                </div>
                <div className={classes.hero__cta}>
                    <Button link="#contact" variant="sm" specialIcon={<LuMail />}>
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

            <div aria-hidden={true} className={classes.waterMark}>
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

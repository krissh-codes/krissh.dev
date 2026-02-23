import { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BiStats } from 'react-icons/bi';
import { GrContactInfo } from 'react-icons/gr';
import { LuMail } from 'react-icons/lu';
import { MdWorkOutline } from 'react-icons/md';
import { Button } from '@components';
import classes from './navbar.module.scss';
import { FaRegFileLines } from 'react-icons/fa6';

declare global {
    interface Window {
        oldScroll: number;
    }
}

const navItems = [
    {
        icon: <GrContactInfo />,
        label: 'About',
        href: '#about'
    },
    {
        icon: <MdWorkOutline />,
        label: 'Experience',
        href: '#experience'
    },
    {
        icon: <BiStats />,
        label: 'Statistics',
        href: '#statistics'
    },
    {
        icon: <LuMail />,
        label: 'Contact',
        href: '#contact'
    }
];

export function NavBar() {
    const [customNavAttr, setCustomNavAttr] = useState('top');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY <= 5) {
                setCustomNavAttr('top');
            } else if (window.oldScroll > window.scrollY) {
                setCustomNavAttr('visible');
            } else {
                setCustomNavAttr('hidden');
            }

            window.oldScroll = window.scrollY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const handleHamClose = () => setIsMenuOpen(false);
    const handleHamToggle = () => setIsMenuOpen(previous => !previous);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <nav className={classes.nav} nav-style={customNavAttr} aria-label="Primary navigation">
            <Fade duration={500}>
                <div className={classes.container}>
                    <a href="#main-content" className={classes.nav__skip}>
                        Skip to main content
                    </a>

                    <a href="#" className={classes.nav__brand}>
                        <img className={classes.nav__logo} src={`/images/logos/krissh/logo-thumb.svg`} alt="Krissh" />
                    </a>

                    <div className={classes.nav__list_container} data-open={isMenuOpen}>
                        <button
                            ref={menuButtonRef}
                            type="button"
                            className={classes.nav__toggle}
                            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-controls="site-navigation"
                            aria-expanded={isMenuOpen}
                            onClick={handleHamToggle}
                        >
                            <span className={classes.nav__toggle_bar} aria-hidden="true"></span>
                        </button>
                        <button
                            type="button"
                            className={classes.nav__backdrop}
                            aria-label="Close navigation menu"
                            onClick={handleHamClose}
                        ></button>

                        <ul className={classes.nav__list} id="site-navigation">
                            {navItems.map(item => {
                                return (
                                    <li key={item.label} className={classes.nav__item}>
                                        <a className={classes.nav__link} onClick={handleHamClose} href={item.href}>
                                            {item.icon}
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <Button link="/resume" target="blank" specialIcon={<FaRegFileLines />}>Résumé</Button>
                </div>
            </Fade>
        </nav>
    );
}

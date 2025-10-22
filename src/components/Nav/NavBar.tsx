import { useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BiStats } from 'react-icons/bi';
import { GrContactInfo } from 'react-icons/gr';
import { LuMail } from 'react-icons/lu';
import { MdWorkOutline } from 'react-icons/md';
import { Button } from '@components';
import classes from './navbar.module.scss';

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

    window.onscroll = () => {
        if (window.scrollY <= 5) {
            // top of the page
            setCustomNavAttr('top');
        } else if (window.oldScroll > window.scrollY) {
            // scrolled up
            setCustomNavAttr('visible');
        } else {
            // scrolled down
            setCustomNavAttr('hidden');
        }
        window.oldScroll = window.scrollY;
    };

    const check = useRef<HTMLInputElement>(null);
    const handleHamClose = () => {
        check.current!.checked = false;
    };

    return (
        <nav className={classes.nav} nav-style={customNavAttr}>
            <Fade duration={500}>
                <div className={classes.container}>
                    <a href="#about" className={classes.nav__skip}>
                        Skip to main content
                    </a>

                    <a href="#" className={classes.nav__brand}>
                        <img className={classes.nav__logo} src={`/images/logos/krissh/logo-thumb.svg`} alt="Krissh" />
                    </a>

                    <div className={classes.nav__list_container}>
                        <input ref={check} type="checkbox" className={classes.nav__check} id="nav__check" />
                        <label htmlFor="nav__check" className={classes.nav__toggle}>
                            &nbsp;
                        </label>

                        <ul className={classes.nav__list}>
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

                            <li className={classes.hamCloseBtn} onClick={handleHamClose}>
                                <span className="icon icon-arrow-thin-right"></span>
                                Close
                            </li>
                        </ul>
                    </div>

                    <Button link="/resume">Résumé</Button>
                </div>
            </Fade>
        </nav>
    );
}

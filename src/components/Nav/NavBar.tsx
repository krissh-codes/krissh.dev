import { useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button } from '@components/Button';
import classes from './navbar.module.scss';

declare global {
    interface Window {
        oldScroll: number;
    }
}

const navItems = [
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Experience',
        href: '#experience'
    },
    {
        label: 'Projects',
        href: '#projects'
    },
    {
        label: 'Statistics',
        href: '#statistics'
    },
    {
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

                    <Button link="https://1drv.ms/b/c/bdfd7be85b755174/EXRRdVvoe_0ggL3DCAAAAAABgp5y7wgUU4wn0ixgCIeeHw?e=P1Ra5l">Résumé</Button>
                </div>
            </Fade>
        </nav>
    );
}

import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ClickableButton } from '@components/Button';
import classes from './navbar.module.scss';

declare global {
    interface Window {
        oldScroll: number;
    }
}

const navItems = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Experience',
        href: '#experience',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Statistics',
        href: '#statistics',
    },
    {
        label: 'Contact',
        href: '#contact',
    }
];

export default function NavBar() {
    const [navStyle, setNavStyle] = useState<CSSProperties>({
        boxShadow: 'none',
        background: 'transparent',
        backdropFilter: 'none'
    });

    window.onscroll = () => {
        if (window.scrollY <= 5) {
            // top of the page
            setNavStyle({ boxShadow: 'none', background: 'none', backdropFilter: 'none' });
        } else if (window.oldScroll > window.scrollY) {
            // scrolled up
            setNavStyle({ transform: 'translateY(0)', background: '#0000010', backdropFilter: 'blur(10px)' });
        } else {
            // scrolled down
            setNavStyle({ boxShadow: 'none', transform: 'translateY(-100%)' });
        }
        window.oldScroll = window.scrollY;
    };

    useEffect(() => setNavStyle({ boxShadow: 'none', background: 'transparent' }), []);

    const check = useRef<HTMLInputElement>(null);
    const handleHamClose = () => {
        check.current!.checked = false;
    };

    return (
        <nav className={classes.nav} style={navStyle}>
            <Fade duration={500}>
                <div className={classes.container}>
                    <a href="#about" className={classes.nav__skip}>
                        Skip to main content
                    </a>

                    <a href="#" className={classes.nav__brand}>
                        <img className={classes.nav__logo} src={`/images/logos/krissh/logo-thumb.png`} alt="Krish" />
                    </a>

                    <div className={classes.nav__list_container}>
                        <input ref={check} type="checkbox" className={classes.nav__check} id="nav__check" />
                        <label htmlFor="nav__check" className={classes.nav__toggle}>
                            &nbsp;
                        </label>

                        <ul className={classes.nav__list}>
                            {
                                navItems.map(item => {
                                    return <li className={classes.nav__item}>
                                        <a className={classes.nav__link} onClick={handleHamClose} href={item.href}>
                                            { item.label }
                                        </a>
                                    </li>
                                })
                            }

                            <li className={classes.hamCloseBtn} onClick={handleHamClose}>
                                <span className="icon icon-arrow-thin-right"></span>
                                Close
                            </li>
                        </ul>
                    </div>

                    <ClickableButton label="Résumé" link="https://1drv.ms/b/c/bdfd7be85b755174/EXRRdVvoe_0ggL3DCAAAAAABgp5y7wgUU4wn0ixgCIeeHw?e=P1Ra5l"></ClickableButton>
                </div>
            </Fade>
        </nav>
    );
}

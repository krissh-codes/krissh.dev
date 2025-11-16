import type { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent, MouseEventHandler } from 'react';
import classes from './button.module.scss';

export function Button({ onClick, link, children, variant, target }: ButtonProps) {
    const openLink = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.open(link, `_${target ?? 'self'}`);
    };

    return (
        <button className={`${classes.button} ${variant === 'sm' ? classes.button__small : classes.button__medium}`} onClick={link ? openLink : onClick}>
            {children}
        </button>
    );
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    link?: string;
    variant?: 'sm' | 'md';
    target?: 'self' | 'blank'
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

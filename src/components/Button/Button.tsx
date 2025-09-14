import { type ButtonHTMLAttributes, type DetailedHTMLProps, type MouseEventHandler } from 'react';
import classes from './button.module.scss';

export function Button({ onClick, link, children, variant }: ButtonProps) {
    return (
        <button
            className={`${classes.button} ${variant === 'sm' ? classes.button__small : classes.button__medium}`}
            onClick={link ? () => window.open(link) : onClick}
        >
            {children}
        </button>
    );
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    link?: string;
    variant?: 'sm' | 'md';
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

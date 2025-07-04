import { type ButtonHTMLAttributes, type DetailedHTMLProps, type MouseEventHandler } from 'react';
import classes from './button.module.scss';

export function Button({ onClick, link, children, variant }: ButtonProps) {
    const verticalPadding = `var(--text-size-${variant === 'sm' ? 'xs' : 'sm'})`;
    const horizontalPadding = `var(--text-size-${variant === 'sm' ? 'sm' : 'md'})`;

    return (
        <button
            className={classes.button}
            style={{ padding: `${verticalPadding} ${horizontalPadding}`, fontSize: `var(--text-size-${variant === 'sm' ? 'sm' : 'msm'})` }}
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

import type { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, ReactNode } from 'react';
import classes from './button.module.scss';

export function Button({ onClick, link, children, variant, target, type, disabled }: ButtonProps) {
    const classesName = `${classes.button} ${variant === 'sm' ? classes.button__small : classes.button__medium}`;

    if (link) {
        return (
            <a
                href={link}
                target={`_${target ?? 'self'}`}
                rel={target === 'blank' ? 'noopener noreferrer' : undefined}
                className={classesName}
                aria-disabled={disabled}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={classesName} onClick={onClick} type={type ?? 'button'} disabled={disabled}>
            {children}
        </button>
    );
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    link?: string;
    variant?: 'sm' | 'md';
    target?: 'self' | 'blank';
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

import { type MouseEventHandler, type ReactNode } from 'react';
import classes from './button.module.scss';

export function Button(props: ButtonProps) {
    return (
        <button className={classes.button} type={props.type} onClick={props.link ? () => window.open(props.link) : props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    );
}

interface ButtonProps {
    type?: 'submit' | 'reset';
    link?: string;
    children: ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

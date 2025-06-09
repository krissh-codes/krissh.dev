import { type MouseEventHandler } from 'react';
import classes from './button.module.scss';

export function ClickableButton(props: ButtonProps) {
    return (
        <button
            className={classes.button}
            type={props.type}
            onClick={props.link ? () => window.open(props.link) : props.onClick}
            disabled={props.disabled}>
            {props.label}
        </button>
    );
}

interface ButtonProps {
    type?: 'submit' | 'reset';
    link?: string;
    label: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

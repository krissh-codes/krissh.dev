import type { ChangeEventHandler } from 'react';
import classes from './inputs.module.scss';

export function TextInput(props: InputProps<HTMLInputElement>) {
    return (
        <div className={classes.input}>
            <input
                id={props.id}
                type={props.type}
                className={classes.input__field}
                name={props.name}
                placeholder={props.placeholder || props.label}
                value={props.value}
                onChange={props.onChange}
            />
            <label className={classes.input__label} htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
}

interface InputProps<ET extends HTMLElement> {
    name: string;
    id: string;
    label: string;
    value?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<ET>;
    type?: string;
}

export function TextArea(props: InputProps<HTMLTextAreaElement>) {
    return (
        <div className={classes.input}>
            <textarea
                id={props.id}
                className={classes.input__textarea}
                name={props.name}
                placeholder={props.placeholder || props.label}
                value={props.value}
                onChange={props.onChange}
            ></textarea>
            <label className={classes.input__label} htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
}

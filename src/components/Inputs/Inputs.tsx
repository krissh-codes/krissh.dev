import type { ChangeEventHandler, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import classes from './inputs.module.scss';

export function TextInput(props: TextInputProps) {
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
                autoComplete={props.autoComplete}
                required={props.required}
                minLength={props.minLength}
                maxLength={props.maxLength}
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

type TextInputProps = InputProps<HTMLInputElement> &
    Pick<InputHTMLAttributes<HTMLInputElement>, 'autoComplete' | 'required' | 'minLength' | 'maxLength'>;
type TextAreaProps = InputProps<HTMLTextAreaElement> &
    Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'autoComplete' | 'required' | 'minLength' | 'maxLength'>;

export function TextArea(props: TextAreaProps) {
    return (
        <div className={classes.input}>
            <textarea
                id={props.id}
                className={classes.input__textarea}
                name={props.name}
                placeholder={props.placeholder || props.label}
                value={props.value}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                required={props.required}
                minLength={props.minLength}
                maxLength={props.maxLength}
            ></textarea>
            <label className={classes.input__label} htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
}

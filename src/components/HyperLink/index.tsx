import { CSSProperties, ReactNode } from 'react';
import classes from './hyperlink.module.scss';

type LinkProps = {
    to: string;
    lone?: boolean;
    noUnderLine?: boolean;
    style?: CSSProperties;
    children: ReactNode;
    className?: string;
};

export default function HyperLink({ to, lone, noUnderLine, style, children, ...rest }: LinkProps) {
    return (
        <a
            href={to}
            rel="noopener noreferrer"
            target="_blank"
            data-style-modifier={noUnderLine && 'noUnderLine'}
            style={lone ? { color: 'inherit', ...style } : (style ?? {})}
            {...rest}
            className={rest.className ? rest.className : classes.link}
        >
            {children}
        </a>
    );
}

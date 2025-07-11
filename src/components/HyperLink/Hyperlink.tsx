import { type AnchorHTMLAttributes, CSSProperties, type DetailedHTMLProps, ReactNode } from 'react';
import classes from './hyperlink.module.scss';

type LinkProps = {
    to: string;
    lone?: boolean;
    noUnderLine?: boolean;
    style?: CSSProperties;
    children: ReactNode;
    label?: string;
    className?: string;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function HyperLink({ to, lone, noUnderLine, style, children, label, ...rest }: LinkProps) {
    return (
        <a
            href={to}
            rel="noopener noreferrer"
            data-style-modifier={noUnderLine && 'noUnderLine'}
            style={lone ? { color: 'inherit', ...style } : (style ?? {})}
            aria-label={label}
            {...rest}
            className={rest.className ? rest.className : classes.link}
        >
            {children}
        </a>
    );
}

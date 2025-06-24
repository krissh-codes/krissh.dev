import type { ReactNode } from 'react';
import classes from './with-tooltip.module.scss';

export function WithTooltip({ tooltipText, children }: { tooltipText?: string; children: ReactNode }) {
    return <span className={classes.withTooltip}>
        {children}
        <span className={classes.tooltip}>{tooltipText}</span>
    </span>;
}
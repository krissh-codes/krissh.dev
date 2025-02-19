'use client';

import classes from './time-since.module.scss';

interface TimeSinceProps {
    date: Date;
    tooltip?: boolean;
}

export default function TimeSince({ date, tooltip }: TimeSinceProps) {
    const currentDate = new Date();
    let years = currentDate.getFullYear() - date.getFullYear();
    let months = currentDate.getMonth() - date.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const monthsDecimal = Math.round((months / 12) * 10);
    return (
        <time className={tooltip ? classes.tooltip : ''}>
            {monthsDecimal > 0 ? `${years}.${monthsDecimal}` : years} years
            <span className={classes.tooltip__text}>Since {date.getFullYear()}</span>
        </time>
    );
}

import classes from './statcard.module.scss';

export default function StatsCard({ data, caption }: { data: number; caption: string }) {
    return (
        <div className={classes.card}>
            <span className={classes.card__data}>{data}</span>
            <span className={classes.card__caption}>{caption}</span>
        </div>
    );
}

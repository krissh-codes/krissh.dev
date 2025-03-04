import { SocialLinks } from '@components';
import classes from './footer.module.scss';

export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__social}>
                <SocialLinks />
            </div>
            <span className={classes.colorize}>Designed</span> and <span className={classes.colorize}>built</span> with <span className={classes.colorize}>passion</span> <br />
            by Krissh
        </div>
    );
}
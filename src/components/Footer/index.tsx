import { IoCodeSlashSharp } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbBrandReact } from 'react-icons/tb';
import { TiHeartOutline } from 'react-icons/ti';
import { SocialLinks } from '@components';
import classes from './footer.module.scss';

export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__social}>
                <SocialLinks />
            </div>
            <div className={classes.footer__line1}>
                <MdOutlineDesignServices /> &amp; <IoCodeSlashSharp /> with <TiHeartOutline /> &amp; <TbBrandReact />
            </div>
            <div className={classes.footer__line2}>
                by <strong>Krissh</strong>
            </div>
        </div>
    );
}

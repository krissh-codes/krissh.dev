import { TbBrandBluesky, TbBrandInstagram, TbBrandLinkedin, TbBrandReddit, TbBrandTwitter } from 'react-icons/tb';
import { HyperLink } from '@components';
import classes from './social-links.module.scss';

export default function SocialLinks() {
    return (
        <div className={classes.socials}>
            <HyperLink to="/bluesky" noUnderLine lone style={{ margin: 0 }} label="Bluesky">
                <TbBrandBluesky />
            </HyperLink>

            <HyperLink to="/x" noUnderLine lone style={{ margin: 0 }} label="Twitter">
                <TbBrandTwitter />
            </HyperLink>

            <HyperLink to="/linkedin" noUnderLine lone style={{ margin: 0 }} label="LinkedIn">
                <TbBrandLinkedin />
            </HyperLink>

            <HyperLink to="/reddit" noUnderLine lone style={{ margin: 0 }} label="Reddit">
                <TbBrandReddit />
            </HyperLink>

            <HyperLink to="/instagram" noUnderLine lone style={{ margin: 0 }} label="Instagram">
                <TbBrandInstagram />
            </HyperLink>
        </div>
    );
}

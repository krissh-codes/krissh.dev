import { TbBrandBluesky, TbBrandInstagram, TbBrandLinkedin, TbBrandReddit, TbBrandTwitter } from 'react-icons/tb';
import { HyperLink } from '@components';
import classes from './social-links.module.scss';

export default function SocialLinks() {
    return (
        <div className={classes.socials}>
            <HyperLink to="/bluesky" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandBluesky />
            </HyperLink>

            <HyperLink to="/x" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandTwitter />
            </HyperLink>

            <HyperLink to="/linkedin" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandLinkedin />
            </HyperLink>

            <HyperLink to="/reddit" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandReddit />
            </HyperLink>

            <HyperLink to="/instagram" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandInstagram />
            </HyperLink>
        </div>
    );
}

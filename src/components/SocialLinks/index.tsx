import { TbBrandBluesky, TbBrandInstagram, TbBrandLinkedin, TbBrandReddit, TbBrandTwitter } from 'react-icons/tb';
import { HyperLink } from '@components';
import classes from './social-links.module.scss';

export default function SocialLinks() {
    return (
        <div className={classes.socials}>
            <HyperLink to="https://bsky.app/profile/krissh.dev" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandBluesky />
            </HyperLink>

            <HyperLink to="https://x.com/krissh_tweets" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandTwitter />
            </HyperLink>

            <HyperLink to="https://linkedin.com/in/krissh-connects" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandLinkedin />
            </HyperLink>

            <HyperLink to="https://reddit.com/user/krissh_speaks" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandReddit />
            </HyperLink>

            <HyperLink to="https://instagram.com/krissh_posts" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandInstagram />
            </HyperLink>
        </div>
    );
}

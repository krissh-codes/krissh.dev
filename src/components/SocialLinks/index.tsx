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

            <HyperLink to="https://www.linkedin.com/in/krissh-connects" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandLinkedin />
            </HyperLink>

            <HyperLink to="https://www.reddit.com/user/krissh_speaks" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandReddit />
            </HyperLink>

            <HyperLink to="https://www.instagram.com/krissh_posts" noUnderLine lone style={{ margin: 0 }}>
                <TbBrandInstagram />
            </HyperLink>
        </div>
    );
}

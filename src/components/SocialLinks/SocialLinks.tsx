import { RiTwitterXFill } from 'react-icons/ri';
import { TbBrandBluesky, TbBrandInstagram, TbBrandLinkedin, TbBrandReddit } from 'react-icons/tb';
import { HyperLink, WithTooltip } from '@components';
import classes from './social-links.module.scss';

const SOCIAL_LINKS = [
    {
        label: 'Bluesky',
        url: '/bluesky',
        icon: <TbBrandBluesky />
    },
    {
        label: 'Twitter',
        url: '/x',
        icon: <RiTwitterXFill />
    },
    {
        label: 'LinkedIn',
        url: '/linkedin',
        icon: <TbBrandLinkedin />
    },
    {
        label: 'Reddit',
        url: '/reddit',
        icon: <TbBrandReddit />
    },
    {
        label: 'Instagram',
        url: '/instagram',
        icon: <TbBrandInstagram />
    }
];

export function SocialLinks() {
    return (
        <div className={classes.socials}>
            {SOCIAL_LINKS.map(link => (
                <HyperLink key={link.label} to={link.url} noUnderLine lone style={{ margin: 0 }} label={link.label}>
                    <WithTooltip tooltipText={link.label}>{link.icon}</WithTooltip>
                </HyperLink>
            ))}
        </div>
    );
}

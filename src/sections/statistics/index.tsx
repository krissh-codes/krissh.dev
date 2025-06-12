import { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { SlideUp } from '@animations';
import type { IGitHubStats } from '@common-types/IGitHubStats';
import { ClickableButton } from '@components';
import { Graph, StatsCard } from './components';
import classes from './statistics.module.scss';

async function fetchGitHubStats() {
    const response = await fetch('/api/github-stats');
    const json = await response.json();
    return json.details;
}

export default function Statistics() {
    const [stats, setStats] = useState<IGitHubStats>({
        followers: { count: 0 },
        following: { count: 0 },

        contributions: {
            repositories: 0,
            past_year: {
                total: 0,
                monthly: new Array(12).fill(0),
                weekly: new Array(53).fill(0)
            },
            past_month: { total: 0, weekly: new Array(4).fill(0), daily: new Array(31).fill(0) },
            past_week: { total: 0, daily: new Array(7).fill(0) }
        }
    });

    useEffect(() => {
        fetchGitHubStats().then(setStats);
    }, []);

    return (
        <SlideUp fraction={.5} cascade={true} damping={.3}>
            <section id="statistics" className={classes.statistics}>
                <div className={classes.container}>
                    <h5>My GitHub profile</h5>
                    <h3 className={classes.heading}>Statistics</h3>
                    <div className={classes.statistics__container}>
                        <div className={classes.visualization}>
                            <Graph
                                data={stats.contributions.past_year.monthly.map((value, idx) => ({ contributions: value, name: `Month ${idx+1}` }))}
                            />
                        </div>
                        <div className={classes.data}>
                            <div className={classes.contributions}>
                                <StatsCard
                                    data={stats.contributions.past_year.total}
                                    caption={'contributions this year'}
                                />
                                <StatsCard
                                    data={stats.contributions.past_week.total}
                                    caption={'contributions this week'}
                                />
                            </div>
                            <div className={classes.stats}>
                                <StatsCard
                                    data={stats.contributions.repositories}
                                    caption={'contributed repositories'}
                                />
                                <StatsCard data={stats.followers.count} caption={'followers'} />
                                <StatsCard data={stats.following.count} caption={'following'} />
                            </div>
                        </div>
                    </div>

                    <div className={classes.cta}>
                        <ClickableButton link="https://github.com/krissh-codes">
                            <div className={classes.cta__button}>
                                <FiGithub />
                                <label>@krissh-codes</label>
                            </div>
                        </ClickableButton>
                    </div>
                </div>
            </section>
        </SlideUp>
    );
}
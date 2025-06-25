import { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { SlideUp } from '@animations';
import type { IGitHubStats } from '@common-types/IGitHubStats';
import { ButtonGroup, type ButtonItem, ClickableButton } from '@components';
import { Graph, StatsCard } from './components';
import classes from './statistics.module.scss';

async function fetchGitHubStats() {
    const response = await fetch('/api/github-stats');
    const json = await response.json();
    return json.details;
}

const StatsCalendar = ['past_year', 'past_month', 'past_week'] as const;

type TStatsCalendar = (typeof StatsCalendar)[number];

const buttonItems: ButtonItem[] = [
    { id: 'past_year', label: 'Year' },
    { id: 'past_month', label: 'Month' },
    { id: 'past_week', label: 'Week' }
];

const getDescriptor = (statsCal: TStatsCalendar) => {
    switch (statsCal) {
        case 'past_year':
            return 'Week';
        case 'past_month':
            return 'Day';
        case 'past_week':
            return 'Day';
    }
};

const getStatsCalendarCountKey = (statsCal: TStatsCalendar) => {
    switch (statsCal) {
        case 'past_year':
            return 'weekly';
        case 'past_month':
            return 'daily';
        case 'past_week':
            return 'daily';
    }
};

const EMPTY_STATS: IGitHubStats = {
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
};

export default function Statistics() {
    const [fetchedStats, setFetchedStats] = useState<IGitHubStats>(EMPTY_STATS);
    const [stats, setStats] = useState<IGitHubStats>(EMPTY_STATS);

    const [selectedStatsCalendar, setSelectedStatsCalendar] = useState<TStatsCalendar>(StatsCalendar[0]);

    const statsMapper = (value: number, idx: number, cal: TStatsCalendar) => ({
        contributions: value,
        name: `${getDescriptor(cal)} ${idx + 1}`
    });

    useEffect(() => {
        fetchGitHubStats().then(setFetchedStats);
    }, []);

    const changeSelectedStatsCalendar = (selectedButtonItem: ButtonItem) => {
        setSelectedStatsCalendar(selectedButtonItem.id as TStatsCalendar);
    };

    return (
        <SlideUp
            fraction={0.5}
            cascade={true}
            damping={0.3}
            onVisibilityChange={(isVisible: boolean) => {
                setStats(isVisible ? fetchedStats! : EMPTY_STATS);
            }}
        >
            <section id="statistics" className={classes.statistics}>
                <div className={classes.container}>
                    <header className={classes.head}>
                        <div className={classes.head__left}>
                            <h5>My GitHub profile</h5>
                            <h2 className={classes.heading}>Statistics</h2>
                        </div>
                        <div className={classes.stats_control}>
                            <ButtonGroup buttonItems={buttonItems} onSelectedOptionChanged={changeSelectedStatsCalendar} />
                        </div>
                    </header>

                    <div className={classes.statistics__container}>
                        <div className={classes.visualization}>
                            <Graph
                                data={stats.contributions[selectedStatsCalendar][getStatsCalendarCountKey(selectedStatsCalendar)]!.map((value, idx) =>
                                    statsMapper(value, idx, selectedStatsCalendar)
                                )}
                            />
                        </div>
                        <div className={classes.data}>
                            <div className={classes.contributions}>
                                <StatsCard data={stats.contributions.past_year.total} caption={'contributions this year'} />
                                <StatsCard data={stats.contributions.past_week.total} caption={'contributions this week'} />
                            </div>
                            <div className={classes.stats}>
                                <StatsCard data={stats.contributions.repositories} caption={'contributed repositories'} />
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

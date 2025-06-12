import type { ContributionDay, ContributionWeek, GitHubContributionCalendar } from './types';

export type ContributionCalendar = { date: string; count: number }[];

export class ContributionsAdapter {
    private contributionCalendar: ContributionCalendar;

    constructor(githubStats: GitHubContributionCalendar) {
        this.contributionCalendar = this.getContributionCalendar(githubStats.weeks);
    }

    private getContributionCalendar(weeks: ContributionWeek[]): ContributionCalendar {
        return weeks.flatMap(week =>
            week.contributionDays.map((day: ContributionDay) => ({
                date: day.date,
                count: day.contributionCount
            }))
        );
    }

    public getContributionsSince(since: Date): ContributionCalendar {
        return this.contributionCalendar.filter(({ date }) => new Date(date) >= since);
    }

    public static getGroupedContributions(
        contributions: ContributionCalendar,
        groupBy: 'month' | 'week' | 'day'
    ): number[] {
        const map = new Map<string, number>();

        contributions.forEach(({ date, count }) => {
            const d = new Date(date);
            let key;

            if (groupBy === 'month') {
                key = `${d.getFullYear()}-${d.getMonth() + 1}`;
            } else if (groupBy === 'week') {
                const year = d.getFullYear();
                const start = new Date(year, 0, 1);
                const week = Math.ceil(((+d - +start) / 86400000 + 1) / 7);
                key = `${year}-W${week}`;
            } else {
                key = date;
            }

            map.set(key, (map.get(key) || 0) + count);
        });

        return Array.from(map.values());
    }
}
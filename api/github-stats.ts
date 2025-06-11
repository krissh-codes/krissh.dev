import 'dotenv/config';
import type { IGitHubStats } from '@common-types/IGitHubStats';
import { ContributionsAdapter } from './github-stats/contributions-adapter';
import { fetchGitHubStats } from './github-stats/query-maker';
import ResponseBuilder from './utils/ResponseBuilder';

async function getAllStats(): Promise<IGitHubStats> {
    const {
        data: {
            user: {
                followers,
                following,
                contributionsCollection: { totalRepositoriesWithContributedCommits, contributionCalendar }
            }
        }
    } = await fetchGitHubStats();

    const githubStatsAdapter = new ContributionsAdapter(contributionCalendar);

    const now = new Date();

    const yearAgo = new Date(now);
    yearAgo.setFullYear(now.getFullYear() - 1);

    const monthAgo = new Date(now);
    monthAgo.setMonth(now.getMonth() - 1);

    const weekAgo = new Date(now);
    weekAgo.setDate(now.getDate() - 7);

    const yearly = githubStatsAdapter.getContributionsSince(yearAgo);
    const monthly = githubStatsAdapter.getContributionsSince(monthAgo);
    const weekly = githubStatsAdapter.getContributionsSince(weekAgo);

    return {
        followers: { count: followers.totalCount },
        following: { count: following.totalCount },
        contributions: {
            repositories: totalRepositoriesWithContributedCommits,
            past_year: {
                total: yearly.reduce((acc, c) => acc + c.count, 0),
                monthly: ContributionsAdapter.getGroupedContributions(yearly, 'month'),
                weekly: ContributionsAdapter.getGroupedContributions(yearly, 'week')
            },
            past_month: {
                total: monthly.reduce((acc, c) => acc + c.count, 0),
                weekly: ContributionsAdapter.getGroupedContributions(monthly, 'week'),
                daily: ContributionsAdapter.getGroupedContributions(monthly, 'day')
            },
            past_week: {
                total: weekly.reduce((acc, c) => acc + c.count, 0),
                daily: ContributionsAdapter.getGroupedContributions(weekly, 'day')
            }
        }
    };
}

export default async function GithubStatsController(req: Request) {
    if (req.method !== 'GET') {
        return ResponseBuilder.constructResponse(405, 'method not allowed');
    }

    const body = await getAllStats();
    return ResponseBuilder.constructResponse(200, 'stats fetched successfully', body);
}

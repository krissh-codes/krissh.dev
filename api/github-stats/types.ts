export interface GitHubGraphQLResponse {
    data: {
        user: {
            followers: { totalCount: number };
            following: { totalCount: number };
            contributionsCollection: ContributionsCollection;
        };
    };
}

export interface ContributionsCollection {
    totalRepositoriesWithContributedCommits: number;
    totalCommitContributions?: number;
    totalIssueContributions?: number;
    totalPullRequestContributions?: number;
    contributionCalendar: GitHubContributionCalendar;
}

export interface GitHubContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

export interface ContributionWeek {
    contributionDays: ContributionDay[];
}

export interface ContributionDay {
    contributionCount: number;
    date: string;
}

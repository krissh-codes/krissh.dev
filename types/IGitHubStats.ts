export interface IGitHubStats {
    followers: { count: number };
    following: { count: number };

    contributions: {
        repositories: number;
        past_year: IGitHubContributionCount;
        past_month: IGitHubContributionCount;
        past_week: IGitHubContributionCount;
    };
}

export default interface IGitHubContributionCount {
    total: number;
    monthly?: number[];
    weekly?: number[];
    daily?: number[];
};
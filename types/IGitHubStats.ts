export interface IGitHubStats {
    followers: { count: number };
    following: { count: number };

    contributions: {
        repositories: number;
        past_year: { total: number; monthly: number[], weekly: number[]; };
        past_month: { total: number; weekly: number[], daily: number[] };
        past_week: { total: number; daily: number[] };
    };
}

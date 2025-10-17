import type { GitHubGraphQLResponse } from './types';

const token = process.env.GITHUB_TOKEN;

const graphQuery = `query {
  user(login: "krissh-codes") {
    followers {
      totalCount
    }
    following {
      totalCount
    }
    contributionsCollection {
      totalRepositoriesWithContributedCommits
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}`;

export async function fetchGitHubStats(): Promise<GitHubGraphQLResponse> {
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify({ query: graphQuery }),
        headers: { Authorization: `bearer ${token}` }
    });
    return response.json() as Promise<GitHubGraphQLResponse>;
}

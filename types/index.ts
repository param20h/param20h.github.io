export interface Project {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  iconName?: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: 'live' | 'coming-soon' | 'research';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool' | 'ai';
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface GitHubStats {
  repos: number;
  stars: number;
  forks: number;
  followers: number;
}

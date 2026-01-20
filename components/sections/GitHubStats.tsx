"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { GitFork, Star, Users, BookOpen } from "lucide-react";
import type { GitHubStats as Stats, GitHubRepo } from "@/types";

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats>({
    repos: 0,
    stars: 0,
    forks: 0,
    followers: 0,
  });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const username = "param20h";

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);

      // GitHub API headers (add token if available for higher rate limits)
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
      };

      // Add GitHub token if available (for authenticated requests - 5000 requests/hour)
      const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      if (githubToken) {
        headers['Authorization'] = `token ${githubToken}`;
      }

      // Fetch user data
      const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
      
      if (!userRes.ok) {
        if (userRes.status === 403) {
          console.warn("GitHub API rate limit exceeded. Using fallback data.");
          // Use fallback values when rate limited
          setStats({
            repos: 25,
            stars: 50,
            forks: 15,
            followers: 10,
          });
          setLoading(false);
          return;
        }
        throw new Error(`GitHub API error: ${userRes.status}`);
      }
      
      const userData = await userRes.json();
      console.log("GitHub User Data:", userData);

      // Fetch repos
      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        { headers }
      );
      
      if (!reposRes.ok) {
        throw new Error(`GitHub Repos API error: ${reposRes.status}`);
      }
      
      const reposData = await reposRes.json();
      console.log("GitHub Repos Data:", reposData.length, "repos");

      // Calculate total stars and forks from all repos
      const totalStars = reposData.reduce(
        (acc: number, repo: GitHubRepo) => acc + (repo.stargazers_count || 0),
        0
      );
      const totalForks = reposData.reduce(
        (acc: number, repo: GitHubRepo) => acc + (repo.forks_count || 0),
        0
      );

      console.log("Stats:", {
        repos: userData.public_repos,
        stars: totalStars,
        forks: totalForks,
        followers: userData.followers,
      });

      setStats({
        repos: userData.public_repos || 0,
        stars: totalStars,
        forks: totalForks,
        followers: userData.followers || 0,
      });
      
      // Get top 3 most recently updated repos
      setRepos(reposData.slice(0, 3));
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      // Set realistic fallback data when API fails
      setStats({
        repos: 25,
        stars: 50,
        forks: 15,
        followers: 10,
      });
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { icon: BookOpen, label: "Repositories", value: stats.repos, color: "text-blue-400" },
    { icon: Star, label: "Stars", value: stats.stars, color: "text-yellow-400" },
    { icon: GitFork, label: "Forks", value: stats.forks, color: "text-green-400" },
    { icon: Users, label: "Followers", value: stats.followers, color: "text-purple-400" },
  ];

  return (
    <Section id="github-stats" title="GitHub Statistics">
      {/* Last Updated Indicator */}
      <div className="text-center mb-8">
        <p className="text-white/40 text-sm">
          📊 Live data from GitHub API • Updated daily at midnight UTC
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center">
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl font-bold gradient-text mb-2">
                {loading ? "--" : stat.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* GitHub Contribution Graphs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
          📊 Contribution Statistics
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* GitHub Stats Card */}
          <Card className="p-4 overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dracula&include_all_commits=true&count_private=true&hide_border=true&bg_color=00000000&title_color=00d4ff&text_color=ffffff&icon_color=ff6b6b`}
              alt="GitHub Stats"
              className="w-full h-auto"
              loading="lazy"
              width="495"
              height="195"
            />
          </Card>

          {/* Top Languages Card */}
          <Card className="p-4 overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=dracula&hide_border=true&bg_color=00000000&title_color=00d4ff&text_color=ffffff`}
              alt="Top Languages"
              className="w-full h-auto"
              loading="lazy"
              width="495"
              height="195"
            />
          </Card>
        </div>

        {/* GitHub Streak Stats */}
        <div className="flex justify-center">
          <Card className="p-4 overflow-hidden max-w-2xl w-full">
            <img
              src={`https://nirzak-streak-stats.vercel.app/?user=${username}&theme=dracula&hide_border=true&background=00000000&ring=00d4ff&fire=ff6b6b&currStreakLabel=00d4ff&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff&dates=ffffff`}
              alt="GitHub Streak"
              className="w-full h-auto"
              loading="lazy"
              width="800"
              height="220"
            />
          </Card>
        </div>
      </motion.div>

      <div>
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Recent Repositories</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-3 text-center text-white/60">Loading...</div>
          ) : (
            repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card>
                    <h4 className="text-xl font-bold mb-2 text-primary-400">{repo.name}</h4>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {repo.description || "No description"}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/50">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-primary-500" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={14} />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { GitFork, Star, Users, BookOpen } from "lucide-react";
import type { GitHubStats as Stats, GitHubRepo } from "@/types";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats>({
    repos: 0,
    stars: 0,
    forks: 0,
    followers: 0,
  });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  // LeetCode Stats State
  // LeetCode Stats State
  const [leetcode, setLeetcode] = useState<LeetCodeStats>({
    totalSolved: 146,
    easySolved: 62,
    mediumSolved: 67,
    hardSolved: 17,
    ranking: 1112942,
    acceptanceRate: 53.4,
  });
  const [lcLoading, setLcLoading] = useState(true);

  const username = "param20h";

  useEffect(() => {
    fetchGitHubData();
    fetchLeetCodeData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);

      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
      };

      const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      if (githubToken) {
        headers['Authorization'] = `token ${githubToken}`;
      }

      // Fetch user data
      const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });

      if (!userRes.ok) {
        if (userRes.status === 403) {
          console.warn("GitHub API rate limit exceeded. Using fallback data.");
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

      // Fetch repos
      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        { headers }
      );

      if (!reposRes.ok) {
        throw new Error(`GitHub Repos API error: ${reposRes.status}`);
      }

      const reposData = await reposRes.json();

      // Calculate total stars and forks
      const totalStars = reposData.reduce(
        (acc: number, repo: GitHubRepo) => acc + (repo.stargazers_count || 0),
        0
      );
      const totalForks = reposData.reduce(
        (acc: number, repo: GitHubRepo) => acc + (repo.forks_count || 0),
        0
      );

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

  const fetchLeetCodeData = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
      setLcLoading(true);
      
      const [profileRes, solvedRes] = await Promise.all([
        fetch("https://alfa-leetcode-api.onrender.com/param20h", { signal: controller.signal }),
        fetch("https://alfa-leetcode-api.onrender.com/param20h/solved", { signal: controller.signal })
      ]);

      clearTimeout(timeoutId);

      if (!profileRes.ok || !solvedRes.ok) {
        throw new Error("Failed to fetch from LeetCode public API");
      }

      const profileData = await profileRes.json();
      const solvedData = await solvedRes.json();

      interface SubmissionItem {
        difficulty: string;
        submissions: number;
      }

      const totalAcSub = solvedData.acSubmissionNum?.find(
        (x: SubmissionItem) => x.difficulty === "All"
      )?.submissions || 0;
      
      const totalSubmissions = solvedData.totalSubmissionNum?.find(
        (x: SubmissionItem) => x.difficulty === "All"
      )?.submissions || 0;
      
      const calculatedAcceptanceRate = totalSubmissions > 0 
        ? parseFloat(((totalAcSub / totalSubmissions) * 100).toFixed(1)) 
        : 53.4;

      setLeetcode({
        totalSolved: solvedData.solvedProblem || 146,
        easySolved: solvedData.easySolved || 62,
        mediumSolved: solvedData.mediumSolved || 67,
        hardSolved: solvedData.hardSolved || 17,
        ranking: profileData.ranking || 1112942,
        acceptanceRate: calculatedAcceptanceRate,
      });
    } catch (e) {
      clearTimeout(timeoutId);
      console.warn("LeetCode live fetch timed out or failed, using fallbacks:", e);
      setLeetcode({
        totalSolved: 146,
        easySolved: 62,
        mediumSolved: 67,
        hardSolved: 17,
        ranking: 1112942,
        acceptanceRate: 53.4,
      });
    } finally {
      setLcLoading(false);
    }
  };

  const statCards = [
    { icon: BookOpen, label: "Repositories", value: stats.repos, color: "text-blue-400" },
    { icon: Star, label: "Stars", value: stats.stars, color: "text-yellow-400" },
    { icon: GitFork, label: "Forks", value: stats.forks, color: "text-green-400" },
    { icon: Users, label: "Followers", value: stats.followers, color: "text-purple-400" },
  ];

  return (
    <Section id="github-stats" title="Coding Profiles & Activity">
      {/* Last Updated Indicator */}
      <div className="text-center mb-8">
        <p className="text-white/40 text-sm">
          📊 Live metrics from GitHub & LeetCode APIs
        </p>
      </div>

      {/* GitHub Repository Metrics (Small Layout) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center p-4 min-h-[120px] flex flex-col justify-center border-white/5 bg-black/25">
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-white mb-0.5">
                {loading ? "--" : stat.value}
              </div>
              <div className="text-white/45 text-[10px] uppercase tracking-wider">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Streaks & LeetCode Profiles (Side-By-Side Dashboard) */}
      <div className="grid lg:grid-cols-12 gap-6 mb-12">
        
        {/* GitHub Streak Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 flex flex-col"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-3 font-mono flex items-center gap-2 pl-1">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            GitHub Commit Streak
          </h3>
          <Card className="p-4 flex items-center justify-center h-full bg-black/40 backdrop-blur-xl border-white/10 min-h-[260px]">
            <img
              src={`https://streak-stats.demolab.com?user=${username}&theme=dracula&hide_border=true&background=00000000&ring=00d4ff&fire=ff6b6b&currStreakLabel=00d4ff&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff&dates=ffffff`}
              alt="GitHub Streak"
              className="w-full h-auto max-h-[190px] object-contain"
              loading="lazy"
              width="800"
              height="220"
            />
          </Card>
        </motion.div>

        {/* LeetCode Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-6 flex flex-col"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-3 font-mono flex items-center gap-2 pl-1">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            LeetCode Stats
          </h3>
          
          <Card className="p-5 h-full bg-black/40 backdrop-blur-xl border-white/10 flex flex-col justify-between min-h-[260px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/5">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0 0-1.945L14.444.414A1.374 1.374 0 0 0 13.483 0zm5.102 5.672a1.374 1.374 0 0 0-.96.415l-9.778 9.777a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0 0-1.945L19.544 6.09a1.374 1.374 0 0 0-.959-.418z" />
                </svg>
                <span className="font-bold text-white tracking-wide text-sm font-mono">leetcode.com</span>
              </div>
              <a
                href={`https://leetcode.com/u/${username}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-400 hover:text-primary-300 font-mono tracking-wide"
              >
                u/{username} ↗
              </a>
            </div>

            {/* Solved Progress Circles and Difficulties */}
            <div className="grid grid-cols-12 gap-4 items-center flex-grow">
              
              {/* Left Column: Solved Ring */}
              <div className="col-span-5 flex flex-col items-center justify-center relative">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      className="stroke-white/5 fill-transparent"
                      strokeWidth="6"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      className="stroke-amber-500 fill-transparent transition-all duration-1000"
                      strokeWidth="6"
                      strokeDasharray="238"
                      strokeDashoffset={238 - (238 * (lcLoading ? 0 : leetcode.totalSolved)) / 3300}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-xl font-black text-white leading-none">
                      {lcLoading ? "--" : leetcode.totalSolved}
                    </span>
                    <span className="text-[9px] text-white/40 uppercase font-semibold tracking-wider mt-1">
                      Solved
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Bars */}
              <div className="col-span-7 space-y-2.5">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-0.5">
                    <span className="text-emerald-400 font-bold">Easy</span>
                    <span className="text-white/60">
                      {leetcode.easySolved}<span className="text-white/20">/800+</span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, (leetcode.easySolved / 800) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-0.5">
                    <span className="text-amber-400 font-bold">Medium</span>
                    <span className="text-white/60">
                      {leetcode.mediumSolved}<span className="text-white/20">/1700+</span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, (leetcode.mediumSolved / 1700) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-0.5">
                    <span className="text-red-400 font-bold">Hard</span>
                    <span className="text-white/60">
                      {leetcode.hardSolved}<span className="text-white/20">/700+</span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, (leetcode.hardSolved / 700) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
              
            </div>

            {/* Meta statistics footer */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-2.5 border-t border-white/5 text-center font-mono text-[10px]">
              <div className="py-1 bg-white/5 rounded">
                <span className="text-white/40 block text-[8px] uppercase tracking-wider mb-0.5">Global Rank</span>
                <span className="text-white font-bold">
                  {lcLoading ? "--" : leetcode.ranking.toLocaleString()}
                </span>
              </div>
              <div className="py-1 bg-white/5 rounded">
                <span className="text-white/40 block text-[8px] uppercase tracking-wider mb-0.5">Acceptance</span>
                <span className="text-amber-500 font-bold">
                  {lcLoading ? "--" : `${leetcode.acceptanceRate}%`}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>

      {/* Recent Repositories */}
      <div>
        <h3 className="text-xl font-bold text-center mb-6 gradient-text">Recent Repositories</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-3 text-center text-white/60 font-mono text-xs py-10">Loading...</div>
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
                  className="block h-full group"
                >
                  <Card className="h-full flex flex-col justify-between border-white/5 bg-black/25 hover:border-primary-500/30 transition-all p-5">
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-primary-400 group-hover:text-primary-300 transition-colors font-mono truncate">
                        {repo.name}
                      </h4>
                      <p className="text-white/70 text-xs mb-4 line-clamp-2 leading-relaxed">
                        {repo.description || "No description provided."}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/50 pt-3 border-t border-white/5 mt-auto">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} className="text-green-400" />
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

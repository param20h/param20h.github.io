"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { GitFork, Star, Users, BookOpen, Github, Flame } from "lucide-react";
import type { GitHubStats as Stats, GitHubRepo } from "@/types";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
}

interface StreakStats {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
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

  // GitHub Streak State
  const [streak, setStreak] = useState<StreakStats>({
    totalContributions: 2672,
    currentStreak: 1,
    longestStreak: 405,
  });

  // LeetCode Stats State
  // LeetCode Stats State
  const [leetcode, setLeetcode] = useState<LeetCodeStats>({
    totalSolved: 260,
    easySolved: 99,
    mediumSolved: 124,
    hardSolved: 37,
    ranking: 610828,
    acceptanceRate: 79.4,
  });
  const [lcLoading, setLcLoading] = useState(true);

  const username = "param20h";

  useEffect(() => {
    fetchGitHubData();
    fetchLeetCodeData();
    fetchStreakData();
  }, []);

  const fetchStreakData = async () => {
    try {
      const res = await fetch(`https://streak-stats.demolab.com?user=${username}`, { cache: "no-store" });
      if (res.ok) {
        const svg = await res.text();
        const totalMatch = svg.match(/Total Contributions[\s\S]*?<text[^>]*>([0-9,]+)<\/text>/i);
        const currentMatch = svg.match(/Current Streak[\s\S]*?<text[^>]*>([0-9,]+)<\/text>/i);
        const longestMatch = svg.match(/Longest Streak[\s\S]*?<text[^>]*>([0-9,]+)<\/text>/i);

        setStreak({
          totalContributions: totalMatch ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 2672,
          currentStreak: currentMatch ? parseInt(currentMatch[1].replace(/,/g, ""), 10) : 1,
          longestStreak: longestMatch ? parseInt(longestMatch[1].replace(/,/g, ""), 10) : 405,
        });
      }
    } catch {
      // Use fallback defaults
    }
  };

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
            repos: 77,
            stars: 258,
            forks: 105,
            followers: 66,
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
        repos: 77,
        stars: 258,
        forks: 105,
        followers: 66,
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
        totalSolved: 260,
        easySolved: 99,
        mediumSolved: 124,
        hardSolved: 37,
        ranking: 610828,
        acceptanceRate: 79.4,
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
            <Card className="text-center p-4 min-h-[120px] flex flex-col justify-center">
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-slate-800 mb-0.5">
                {loading ? "--" : stat.value}
              </div>
              <div className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">{stat.label}</div>
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
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-3 font-mono flex items-center gap-2 pl-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)]" />
            GitHub Commit Streak
          </h3>
          <Card className="p-6 h-full flex flex-col justify-between min-h-[280px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#e2e8f0] shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.95)] flex items-center justify-center border border-white/60">
                  <Github className="w-4 h-4 text-slate-800" />
                </div>
                <span className="font-extrabold text-slate-800 tracking-wide text-sm font-mono">github.com</span>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#e2e8f0] rounded-full text-xs text-slate-700 hover:text-black font-mono font-bold shadow-[2px_2px_5px_rgba(163,177,198,0.5),-2px_-2px_5px_rgba(255,255,255,0.95)] hover:shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] transition-all flex items-center gap-1 border border-white/60"
              >
                u/{username} ↗
              </a>
            </div>

            {/* Streak Progress Circles and Metrics */}
            <div className="grid grid-cols-12 gap-5 items-center flex-grow">
              {/* Left Column: Tactile Neumorphic Dial Meter */}
              <div className="col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 rounded-full bg-[#e2e8f0] shadow-[inset_3px_3px_7px_rgba(163,177,198,0.6),inset_-3px_-3px_7px_rgba(255,255,255,0.95)] flex items-center justify-center p-2 border border-white/40">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90 p-1.5">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-[rgba(163,177,198,0.25)] fill-transparent"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-amber-500 fill-transparent transition-all duration-1000"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="251"
                      strokeDashoffset={251 - (251 * Math.min(streak.currentStreak, 30)) / 30}
                    />
                  </svg>
                  {/* Center Extruded Dial Knob */}
                  <div className="relative w-16 h-16 rounded-full bg-[#e2e8f0] shadow-[3px_3px_7px_rgba(163,177,198,0.55),-3px_-3px_7px_rgba(255,255,255,0.95)] flex flex-col items-center justify-center text-center border border-white/60">
                    <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mb-0.5" />
                    <span className="text-xl font-black text-slate-800 leading-none">
                      {loading ? "--" : streak.currentStreak}
                    </span>
                    <span className="text-[7px] text-slate-500 uppercase font-bold tracking-wider mt-0.5">
                      Day Streak
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Tactile Sunken Sliders */}
              <div className="col-span-7 space-y-3">
                {/* Current Streak */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-amber-600 font-extrabold">Current Streak</span>
                    <span className="text-slate-700 font-bold">
                      {streak.currentStreak} <span className="text-slate-400 font-normal">/ Days</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] overflow-hidden p-0.5 border border-white/30">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-1000 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]"
                      style={{ width: `${Math.min(100, Math.max(12, (streak.currentStreak / 30) * 100))}%` }}
                    />
                  </div>
                </div>

                {/* Longest Streak */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-cyan-600 font-extrabold">Longest Streak</span>
                    <span className="text-slate-700 font-bold">
                      {streak.longestStreak} <span className="text-slate-400 font-normal">/ Days</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] overflow-hidden p-0.5 border border-white/30">
                    <div
                      className="h-full bg-cyan-500 rounded-full transition-all duration-1000 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]"
                      style={{ width: `${Math.min(100, (streak.longestStreak / 405) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Contributions */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-emerald-600 font-extrabold">Contributions</span>
                    <span className="text-slate-700 font-bold">
                      {streak.totalContributions.toLocaleString()} <span className="text-slate-400 font-normal">/ Total</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] overflow-hidden p-0.5 border border-white/30">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Meta statistics footer: Tactile Sunken Dual Wells */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/40">
              <div className="py-2.5 px-3 bg-[#e2e8f0] rounded-2xl shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 text-center">
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-bold mb-0.5 font-mono">TOTAL CONTRIBUTIONS</span>
                <span className="text-slate-800 font-black text-sm md:text-base font-mono">
                  {loading ? "--" : streak.totalContributions.toLocaleString()}
                </span>
              </div>
              <div className="py-2.5 px-3 bg-[#e2e8f0] rounded-2xl shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 text-center">
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-bold mb-0.5 font-mono">LONGEST STREAK</span>
                <span className="text-cyan-600 font-black text-sm md:text-base font-mono">
                  {streak.longestStreak} DAYS
                </span>
              </div>
            </div>
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
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-3 font-mono flex items-center gap-2 pl-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)]" />
            LeetCode Stats
          </h3>

          <Card className="p-6 h-full flex flex-col justify-between min-h-[280px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#e2e8f0] shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.95)] flex items-center justify-center border border-white/60">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0 0-1.945L14.444.414A1.374 1.374 0 0 0 13.483 0zm5.102 5.672a1.374 1.374 0 0 0-.96.415l-9.778 9.777a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0 0-1.945L19.544 6.09a1.374 1.374 0 0 0-.959-.418z" />
                  </svg>
                </div>
                <span className="font-extrabold text-slate-800 tracking-wide text-sm font-mono">leetcode.com</span>
              </div>
              <a
                href={`https://leetcode.com/u/${username}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#e2e8f0] rounded-full text-xs text-slate-700 hover:text-black font-mono font-bold shadow-[2px_2px_5px_rgba(163,177,198,0.5),-2px_-2px_5px_rgba(255,255,255,0.95)] hover:shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] transition-all flex items-center gap-1 border border-white/60"
              >
                u/{username} ↗
              </a>
            </div>

            {/* Solved Progress Circles and Difficulties */}
            <div className="grid grid-cols-12 gap-5 items-center flex-grow">

              {/* Left Column: Tactile Neumorphic Solved Ring Meter */}
              <div className="col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 rounded-full bg-[#e2e8f0] shadow-[inset_3px_3px_7px_rgba(163,177,198,0.6),inset_-3px_-3px_7px_rgba(255,255,255,0.95)] flex items-center justify-center p-2 border border-white/40">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90 p-1.5">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-[rgba(163,177,198,0.25)] fill-transparent"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-amber-500 fill-transparent transition-all duration-1000"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="251"
                      strokeDashoffset={251 - (251 * (lcLoading ? 0 : leetcode.totalSolved)) / 3300}
                    />
                  </svg>
                  {/* Center Extruded Dial Knob */}
                  <div className="relative w-16 h-16 rounded-full bg-[#e2e8f0] shadow-[3px_3px_7px_rgba(163,177,198,0.55),-3px_-3px_7px_rgba(255,255,255,0.95)] flex flex-col items-center justify-center text-center border border-white/60">
                    <span className="text-xl font-black text-slate-800 leading-none">
                      {lcLoading ? "--" : leetcode.totalSolved}
                    </span>
                    <span className="text-[8px] text-slate-500 uppercase font-bold tracking-wider mt-1">
                      Solved
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Tactile Sunken Sliders */}
              <div className="col-span-7 space-y-3">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-emerald-600 font-extrabold">Easy</span>
                    <span className="text-slate-700 font-bold">
                      {leetcode.easySolved} <span className="text-slate-400 font-normal">/ 800+</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] overflow-hidden p-0.5 border border-white/30">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]"
                      style={{ width: `${Math.min(100, (leetcode.easySolved / 800) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-amber-600 font-extrabold">Medium</span>
                    <span className="text-slate-700 font-bold">
                      {leetcode.mediumSolved} <span className="text-slate-400 font-normal">/ 1700+</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] overflow-hidden p-0.5 border border-white/30">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-1000 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]"
                      style={{ width: `${Math.min(100, (leetcode.mediumSolved / 1700) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-rose-600 font-extrabold">Hard</span>
                    <span className="text-slate-700 font-bold">
                      {leetcode.hardSolved} <span className="text-slate-400 font-normal">/ 700+</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] overflow-hidden p-0.5 border border-white/30">
                    <div
                      className="h-full bg-rose-500 rounded-full transition-all duration-1000 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]"
                      style={{ width: `${Math.min(100, (leetcode.hardSolved / 700) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Meta statistics footer: Tactile Sunken Dual Wells */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/40">
              <div className="py-2.5 px-3 bg-[#e2e8f0] rounded-2xl shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 text-center">
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-bold mb-0.5 font-mono">GLOBAL RANK</span>
                <span className="text-slate-800 font-black text-sm md:text-base font-mono">
                  {lcLoading ? "--" : leetcode.ranking.toLocaleString()}
                </span>
              </div>
              <div className="py-2.5 px-3 bg-[#e2e8f0] rounded-2xl shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 text-center">
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-bold mb-0.5 font-mono">ACCEPTANCE</span>
                <span className="text-amber-600 font-black text-sm md:text-base font-mono">
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

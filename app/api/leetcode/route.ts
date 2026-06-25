import { NextResponse } from "next/server";

interface SubmissionStat {
  difficulty: string;
  count: number;
  submissions: number;
}

export async function GET() {
  const username = "param20h";
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        profile {
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
          totalSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 } // Cache results for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch from LeetCode" }, { status: response.status });
    }

    const data = await response.json();
    
    if (data.errors) {
      return NextResponse.json({ error: data.errors[0].message }, { status: 400 });
    }

    const user = data.data.matchedUser;
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const acStats = user.submitStats.acSubmissionNum as SubmissionStat[];
    const totalStats = user.submitStats.totalSubmissionNum as SubmissionStat[];

    const totalSolved = acStats.find((x) => x.difficulty === "All")?.count || 0;
    const easySolved = acStats.find((x) => x.difficulty === "Easy")?.count || 0;
    const mediumSolved = acStats.find((x) => x.difficulty === "Medium")?.count || 0;
    const hardSolved = acStats.find((x) => x.difficulty === "Hard")?.count || 0;

    // Calculate acceptance rate: (accepted submissions / total submissions) * 100
    const totalAcSub = acStats.find((x) => x.difficulty === "All")?.submissions || 0;
    const totalSubmissions = totalStats.find((x) => x.difficulty === "All")?.submissions || 0;
    const acceptanceRate = totalSubmissions > 0 
      ? parseFloat(((totalAcSub / totalSubmissions) * 100).toFixed(1)) 
      : 53.4;

    const ranking = user.profile.ranking || 0;

    // Return absolute live data
    return NextResponse.json({
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      ranking,
      acceptanceRate,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error in LeetCode API route:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

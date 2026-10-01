import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/RedamJaswanth/repos?sort=updated&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },

        // Cache GitHub data for 1 hour
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub repositories" },
        { status: response.status }
      );
    }

    const repositories = await response.json();

    const projects = repositories
      .filter((repo: { fork: boolean }) => !repo.fork)
      .map(
        (repo: {
          id: number;
          name: string;
          description: string | null;
          html_url: string;
          language: string | null;
          stargazers_count: number;
          topics?: string[];
        }) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
          topics: repo.topics ?? [],
        })
      );

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GitHub API error:", error);

    return NextResponse.json(
      { error: "Unable to connect to GitHub" },
      { status: 500 }
    );
  }
}
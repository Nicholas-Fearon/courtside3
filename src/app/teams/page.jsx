import { BalldontlieAPI } from "@balldontlie/sdk";
import Link from "next/link";

export default async function Teams() {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });

  const teams = await api.nba.getTeams();

  console.log("This is my teams log:", teams);
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          NBA Teams
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teams.data
            .filter((team) => team.id <= 30)
            .map((team) => (
              <Link key={team.id} href={`/teams/${team.id}`}>
                <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:bg-gray-50 transition duration-300 cursor-pointer flex flex-col items-center">
                  {/* Team Logo */}
                  <img
                    src={`https://a.espncdn.com/i/teamlogos/nba/500/${team.abbreviation}.png`}
                    alt={`${team.full_name} logo`}
                    className="w-20 h-20 mb-4 object-contain"
                  />
                  {/* Team Name */}
                  <p className="text-lg font-semibold text-gray-700 text-center">
                    {team.full_name}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

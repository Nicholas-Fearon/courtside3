/*import { BalldontlieAPI } from "@balldontlie/sdk";
import Link from "next/link";
import Image from "next/image";
export default async function Teams() {
  const api = new BalldontlieAPI({
    apiKey: process.env.NEXT_PUBLIC_BALLDONTLIE_API,
  });

  const teams = await api.nba.getTeams();

  const formatAbbreviation = (abbr) => {
    const abbreviationMap = {
      NOP: "NO",
      UTA: "UTH",
    };
    return abbreviationMap[abbr] || abbr; // Return mapped value or original abbreviation
  };

  const getTeamLogo = (abbreviation) =>
    `https://a.espncdn.com/i/teamlogos/nba/500/${abbreviation}.png`;

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
                  {//Team Logo}
                  <Image
                    src={getTeamLogo(formatAbbreviation(team.abbreviation))}
                    width={80}
                    height={80}
                    alt={`${team.full_name} logo`}
                    className="w-20 h-20 mb-4 object-contain"
                  />
                  {/* Team Name}
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
*/
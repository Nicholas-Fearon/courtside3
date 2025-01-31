import { BalldontlieAPI } from "@balldontlie/sdk";
import Image from "next/image";

export default async function SingleTeam({ params }) {
  const api = new BalldontlieAPI({
    apiKey: process.env.NEXT_PUBLIC_BALLDONTLIE_API_KEY,
  });

  const id = (await params).id;
  const team = await api.nba.getTeam(id);
  const teamAbbr = team.data.abbreviation;
  console.log("This is my id log:", id);
  console.log("This is my team log", team);

  const formatAbbreviation = (abbr) => {
    const abbreviationMap = {
      NOP: "NO",
      UTA: "UTH",
    };
    return abbreviationMap[abbr] || abbr; // Return mapped value or original abbreviation
  };

  const getTeamLogo = (abbreviation) =>
    `https://a.espncdn.com/i/teamlogos/nba/500/${abbreviation}.png`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        {/* Team Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src={getTeamLogo(formatAbbreviation(teamAbbr))}
            width={80}
            height={80}
            alt={`${team.full_name} logo`}
            className="w-20 h-20 mb-4 object-contain"
          />
        </div>

        {/* Team Info */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {team.data.full_name}
        </h1>
        <div className="mt-4 space-y-2 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Conference:</span>{" "}
            {team.data.conference}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Division:</span>{" "}
            {team.data.division}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">City:</span> {team.data.city}
          </p>
        </div>
      </div>
    </main>
  );
}

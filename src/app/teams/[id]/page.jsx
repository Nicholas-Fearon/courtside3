import { BalldontlieAPI } from "@balldontlie/sdk";
import Image from "next/image";

async function fetchAllPlayers(api) {
  let players = [];
  let page = 1;
  let perPage = 100;
  let totalPages = 1;

  while (page <= totalPages) {
    const res = await api.nba.getPlayers({ page, per_page: perPage });

    players = players.concat(res.data);

    totalPages = res.meta.total_pages;
    page++;
  }

  return players;
}

export default async function SingleTeam({ params }) {
  const api = new BalldontlieAPI({
    apiKey: process.env.NEXT_PUBLIC_BALLDONTLIE_API,
  });

  const id = (await params).id;
  const team = await api.nba.getTeam(id);
  const teamAbbr = team.data.abbreviation;

  // Fetch all players
  const allPlayers = await fetchAllPlayers(api);
  const teamPlayers = allPlayers.filter(player => player.team.id === team.data.id);

  const formatAbbreviation = (abbr) => {
    const abbreviationMap = {
      NOP: "NO",
      UTA: "UTH",
    };
    return abbreviationMap[abbr] || abbr;
  };

  const getTeamLogo = (abbreviation) =>
    `https://a.espncdn.com/i/teamlogos/nba/500/${abbreviation}.png`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="flex justify-center mb-4">
          <Image
            src={getTeamLogo(formatAbbreviation(teamAbbr))}
            width={80}
            height={80}
            alt={`${team.full_name} logo`}
            className="w-20 h-20 mb-4 object-contain"
          />
        </div>

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

        <h2 className="text-xl font-semibold mt-6 mb-2">Roster</h2>
        {teamPlayers.length === 0 ? (
          <p>No players found for this team.</p>
        ) : (
          teamPlayers.map((player) => (
            
            <p key={player.id}>
              {player.first_name} {player.last_name}
            </p>
          ))
        )}
      </div>
    </main>
  );
}
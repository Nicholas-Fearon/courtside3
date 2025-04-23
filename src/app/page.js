import Image from "next/image";
import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function Home() {
  const api = new BalldontlieAPI({
    apiKey: process.env.NEXT_PUBLIC_BALLDONTLIE_API,
  });

  const date = new Date();
  const today = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const todaysDate = `${year}-${month}-${today}`;
  const yesterdayDate = new Date();
yesterdayDate.setDate(date.getDate() - 1);
const yesterday = `${yesterdayDate.getFullYear()}-${(yesterdayDate.getMonth() + 1)
  .toString()
  .padStart(2, "0")}-${yesterdayDate.getDate().toString().padStart(2, "0")}`;

  const games = await api.nba.getGames({ dates: [todaysDate] });
  const previousGames = await api.nba.getGames({ dates: [yesterday] });

  const todaysGames = games.data.filter((game) => game.date === todaysDate);
  const lastNightsGames = previousGames.data.filter(
    (game) => game.date === yesterday
  );

  const formatAbbreviation = (abbr) => {
    const abbreviationMap = {
      NOP: "NO",
      UTA: "UTH"
    };
    return abbreviationMap[abbr] || abbr; // Return mapped value or original abbreviation
  };

  const getTeamLogo = (abbreviation) =>
    `https://a.espncdn.com/i/teamlogos/nba/500/${abbreviation}.png`;

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Today's Games */}
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Today&apos;s NBA Games
          </h1>
          <div className="space-y-6">
            {todaysGames.length > 0 ? (
              todaysGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    {/* Home Team */}
                    <div className="text-center">
                    <Image
                        src={getTeamLogo(
                          formatAbbreviation(game.home_team.abbreviation)
                        )}
                        width={80}
                        height={80}
                        alt={game.home_team.full_name}
                        className="mx-auto"
                      />
                      <h2 className="text-lg font-bold text-gray-700 mt-2">
                        {game.home_team.full_name}
                      </h2>
                    </div>

                    <span className="text-xl font-bold">VS</span>

                    {/* Visitor Team */}
                    <div className="text-center">
                    <Image
                        src={getTeamLogo(
                          formatAbbreviation(game.visitor_team.abbreviation)
                        )}
                        width={80}
                        height={80}
                        alt={game.visitor_team.full_name}
                        className="mx-auto"
                      />
                      <h2 className="text-lg font-bold text-gray-700 mt-2">
                        {game.visitor_team.full_name}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      <strong>Home Score:</strong> {game.home_team_score} |{" "}
                      <strong>Visitor Score:</strong> {game.visitor_team_score}
                    </p>
                    <p className="text-gray-600">
                      <strong>Game Time: </strong> {game.status.slice(11, 16)}{" "}
                      (GMT)
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <p className="text-center text-gray-600 text-lg">
                  No games happening today.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Last Night's Games */}
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Last Night&apos;s Scores
          </h1>
          <div className="space-y-6">
            {lastNightsGames.length > 0 ? (
              lastNightsGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    {/* Home Team */}
                    <div className="text-center">
                    <Image
                        src={getTeamLogo(
                          formatAbbreviation(game.home_team.abbreviation)
                        )}
                        width={80}
                        height={80}
                        alt={game.visitor_team.full_name}
                        className="mx-auto"
                      />

                      <h2 className="text-lg font-bold text-gray-700 mt-2">
                        {game.home_team.full_name}
                      </h2>
                    </div>

                    <span className="text-xl font-bold">VS</span>

                    {/* Visitor Team */}
                    <div className="text-center">
                      <Image
                        src={getTeamLogo(
                          formatAbbreviation(game.visitor_team.abbreviation)
                        )}
                        width={80}
                        height={80}
                        alt={game.visitor_team.full_name}
                        className="mx-auto"
                      />
                      <h2 className="text-lg font-bold text-gray-700 mt-2">
                        {game.visitor_team.full_name}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      <strong>Home Score:</strong> {game.home_team_score} |{" "}
                      <strong>Visitor Score:</strong> {game.visitor_team_score}
                    </p>
                    <p className="text-gray-600">
                      <strong></strong> {game.status}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <p className="text-center text-gray-600 text-lg">
                  No games played last night.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function Home() {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });

  // Get today's date in the correct format (YYYY-MM-DD)
  const date = new Date();
  const today = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const todaysDate = `${year}-${month}-${today}`;

  // Fetch games
  const games = await api.nba.getGames({ dates: [todaysDate] });

  // Filter games that are happening today
  const todaysGames = games.data.filter((game) => game.date === todaysDate);

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Today's NBA Games
        </h1>
        <div className="space-y-6">
          {todaysGames.length > 0 ? (
            todaysGames.map((game) => (
              <div
                key={game.id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-700">
                    {game.home_team.full_name} vs {game.visitor_team.full_name}
                  </h2>
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      game.status === "Final"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {game.status.slice(0,10)}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    <strong>Home Score:</strong> {game.home_team_score} |{" "}
                    <strong>Visitor Score:</strong> {game.visitor_team_score}
                  </p>
                  <p className="text-gray-600">
                    <strong>Game Time:</strong> {game.status.slice(11, 16)}
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
    </main>
  );
}
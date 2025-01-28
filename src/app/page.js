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
console.log("Todays games:", todaysGames)
  return (
    <>
    <h1>Todays Games</h1>
    <div>
      {todaysGames.length > 0 ? (
        todaysGames.map((game) => (
          <div key={game.id} className="game">
            
            <p>
              <strong>{game.home_team.full_name}</strong> vs{" "}
              <strong>{game.visitor_team.full_name}</strong>
            </p>
            <p>
              <strong>Home Score:</strong> {game.home_team_score} |{" "}
              <strong>Visitor Score:</strong> {game.visitor_team_score}
            </p>
            <h2>Game Time: {game.status.slice(11,16)}</h2>
          </div>
        ))
      ) : (
        <p>No games happening today.</p>
      )}
    </div>
    </>
  );
}
import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function Players() {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });


  // Search for players
  const players = await api.nba.getPlayers();


  console.log("This is my players log:",players);
  return <>
    <h1>NBA Players</h1>
    <div>
      {players.data.map((player) => (
        <div key={player.id}>

          <p>{player.first_name} {player.last_name}</p>
        </div>
      )
      
      )}
    </div>
  </>;
}

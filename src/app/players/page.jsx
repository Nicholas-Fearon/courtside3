import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function Players() {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });


  // Search for players
  const players = await api.nba.getPlayers({
    search: "James",
  });


  console.log("This is my players log:",players.data);
  return <></>;
}

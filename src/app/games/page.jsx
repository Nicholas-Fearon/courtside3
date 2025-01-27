import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function Games() {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });

 
  // Get season averages
  const games = await api.nba.getGames(2024);

  console.log("This is my games log:",games.data);
  return <></>;
}

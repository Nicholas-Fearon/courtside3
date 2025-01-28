import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function SinglePlayer({ params }) {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });
  const id = (await params).id;
  const player = await api.nba.getPlayer(id);

  console.log("This is my single player log:", id);
  console.log("This is my player log:", player);
  return (
    <>
      <h1>
        {player.data.first_name} {player.data.last_name}
      </h1>
      <p>Team: {player.data.team.full_name}</p>
      <p>Position: {player.data.position}</p>
      <p>Height: {player.data.height}</p>
      <p>Weight: {player.data.weight}</p>
      <p>Jersey No: {player.data.jersey_number}</p>
      <p>College: {player.data.college}</p>
      <p>Country: {player.data.country}</p>
      <p>Drafted: {player.data.draft_year}</p>
      <p>Draft Round: {player.data.draft_round}</p>
      <p>Draft Year: {player.data.draft_year}</p>
      








    </>
  );
}

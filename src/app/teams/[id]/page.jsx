import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function SingleTeam({ params }) {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });

  const  id  = (await params).id;
  const team = await api.nba.getTeam(id);

  console.log("This is my id log:", id);
  console.log("This is my team log", team);

  return (
    <>
      
      <h1>{team.data.full_name}</h1>
      <p>Conference: {team.data.conference}</p>
      <p>Division: {team.data.division}</p>
      <p>City: {team.data.city}</p>


    </>
  );
}

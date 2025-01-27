import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function Teams() {
  const api = new BalldontlieAPI({
    apiKey: "b7d5cd00-820e-4af3-9729-e12084bb6f29",
  });

  const teams = await api.nba.getTeams();

  console.log("This is my teams log:", teams.data);
  return (
    <div>
      {teams.data.map((team) => (
        <div key={team.id}>
          <p>{team.full_name}</p>
        </div>
      ))}
    </div>
  );
}

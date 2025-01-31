import { BalldontlieAPI } from "@balldontlie/sdk";
import Link from "next/link";

export default async function Players() {
  const api = new BalldontlieAPI({
    apiKey: process.env.NEXT_PUBLIC_BALLDONTLIE_API_KEY,
  });

  // Fetch players
  const players = await api.nba.getPlayers();

  console.log("This is my players log:", players);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">NBA Players</h1>

        {/* Player Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {players.data.map((player) => (
            <Link href={`/players/${player.id}`} key={player.id} className="group">
              <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 transform group-hover:scale-105">
                <p className="text-lg font-semibold text-gray-700 text-center">
                  {player.first_name} {player.last_name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
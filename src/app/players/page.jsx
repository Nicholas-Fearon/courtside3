import { BalldontlieAPI } from "@balldontlie/sdk";
import Link from "next/link";

export default async function Players({ searchParams }) {
  const api = new BalldontlieAPI({
    apiKey: process.env.NEXT_PUBLIC_BALLDONTLIE_API_KEY,
  });

  const cursor = (await searchParams?.cursor)
    ? searchParams.cursor.toString()
    : undefined; // Ensure cursor is a string or undefined

  const players = await api.nba.getPlayers({
    per_page: 50,
    ...(cursor && { cursor }), // Only add cursor if it exists
  });

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">NBA Players</h1>

        <div>{}</div>

        {/* Player Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {players.data.map((player) => (
            <Link
              href={`/players/${player.id}`}
              key={player.id}
              className="group"
            >
              <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 transform group-hover:scale-105">
                <p className="text-lg font-semibold text-gray-700 text-center">
                  {player.first_name} {player.last_name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-4">
          {players.meta.next_cursor && (
            <Link
              href={`?cursor=${players.meta.next_cursor}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

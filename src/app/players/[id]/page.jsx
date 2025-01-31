import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function SinglePlayer({ params }) {
  const api = new BalldontlieAPI({
    apiKey: process.env.NEXT_PUBLIC_BALLDONTLIE_API_KEY,
  });

  const id = (await params).id;
  const player = await api.nba.getPlayer(id);

  console.log("This is my single player log:", id);
  console.log("This is my player log:", player);

  return (
    <main className="min-h-screen bg-white text-black py-10 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white text-black shadow-lg rounded-xl p-8 border border-gray-300">
        {/* Player Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-4xl font-bold">
            {player.data.first_name[0]}
            {player.data.last_name[0]}
          </div>
        </div>

        {/* Player Name */}
        <h1 className="text-4xl font-bold text-center mt-4">
          {player.data.first_name} {player.data.last_name}
        </h1>
        <p className="text-center text-gray-600 text-lg">
          {player.data.team.full_name} | {player.data.position || "N/A"}
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 mt-6 text-lg">
        
          <div className="border-b border-gray-300 pb-2">
            <span className="text-gray-600 font-semibold">Jersey No:</span>
            <p>{player.data.jersey_number || "N/A"}</p>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="text-gray-600 font-semibold">Height:</span>
            <p>{player.data.height || "N/A"}</p>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="text-gray-600 font-semibold">Weight:</span>
            <p>{player.data.weight || "N/A"} lbs</p>
          </div>
          
          <div className="border-b border-gray-300 pb-2">
            <span className="text-gray-600 font-semibold">College:</span>
            <p>{player.data.college || "N/A"}</p>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="text-gray-600 font-semibold">Country:</span>
            <p>{player.data.country || "N/A"}</p>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="text-gray-600 font-semibold">Draft Year:</span>
            <p>{player.data.draft_year || "N/A"}</p>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="text-gray-600 font-semibold">Draft Round:</span>
            <p>{player.data.draft_round || "N/A"}</p>
          </div>
         

        </div>
      </div>
    </main>
  );
}
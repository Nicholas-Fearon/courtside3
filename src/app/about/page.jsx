export default function About() {
    return (
      <div className="container mx-auto p-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">About Courtside3</h1>
  
        {/* About Content */}
       <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg border border-gray-700 max-w-3xl mx-auto">
  <div className="mb-8 bg-yellow-500/10 border border-yellow-500 rounded-lg p-4">
    <h3 className="text-2xl font-bold text-yellow-500 mb-2">UPDATE</h3>
    <p className="text-lg text-gray-300 mb-2">
      Due to recent changes in the API, I have had to modify the site to focus solely on game score updates. In the future, I plan to reintroduce team and roster information once the API restrictions are lifted or an alternative data source is found.
    </p>
    <p className="text-lg text-gray-300">
      Additionally, I will be implementing <strong className="text-yellow-500">user authentication using Clerk</strong> to provide a more personalized and secure experience.
    </p>
  </div>

  <p className="text-lg text-gray-300 mb-6">
    Welcome to <strong className="text-yellow-500">Courtside3</strong>, an enhancement of my previous two web applications, Courtside and Courtside2, both of which I developed during my Software Development Bootcamp. 
    The aim behind this project is to bring fans closer to the players and teams they admire.
  </p>
  <p className="text-lg text-gray-300 mb-6">
    After gaining a deeper understanding of key concepts such as dynamic routes and <code className="bg-gray-900 p-1 rounded text-yellow-500">{`{params}`}</code> from Courtside2, I wanted to explore how to integrate an API rather than relying on my own Supabase database. To achieve this, I used the BalldontlieAPI to retrieve live game data, including today's games and last night's final scores. 
    Rebuilding this web app has greatly expanded my knowledge of how APIs work and how to manipulate the data to suit my specific needs.
  </p>
  <p className="text-lg text-gray-300">
    Looking ahead, I plan to enhance Courtside3 further by adding features such as user authentication and the ability for users to post about past and live games, 
    making it even more engaging for basketball fans.
  </p>
</div>
      </div>
    );
  }
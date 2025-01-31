export default function Contact() {
    return (
      <div className="container mx-auto p-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h1>
  
        {/* Contact Content */}
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg border border-gray-700 max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            I’d love to hear from you! Whether it’s feedback, questions, or collaboration opportunities, feel free to reach out.
          </p>
  
          {/* View My Projects Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-yellow-500">View My Projects:</h2>
            <a
              href="https://github.com/Nicholas-Fearon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-all"
            >
              https://github.com/Nicholas-Fearon
            </a>
          </div>
  
          {/* Contact Me via Email Section */}
          <div>
            <h2 className="text-xl font-semibold text-yellow-500">Contact Me via Email:</h2>
            <a
              href="mailto:nejfearon@gmail.com"
              className="text-blue-500 hover:text-blue-400 transition-all"
            >
              nejfearon@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
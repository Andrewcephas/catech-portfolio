
import { Music, Play, Heart, Award } from "lucide-react";

const GuitarPage = () => {
  const guitarJourney = [
    {
      year: "2015",
      title: "First Guitar",
      description: "Started my musical journey with an acoustic guitar, learning basic chords and strumming patterns.",
      milestone: "Learned first song"
    },
    {
      year: "2017", 
      title: "Skill Development",
      description: "Advanced to fingerpicking techniques and started playing more complex pieces.",
      milestone: "First performance"
    },
    {
      year: "2019",
      title: "Creative Expression",
      description: "Began writing original compositions and exploring different musical genres.",
      milestone: "Original compositions"
    },
    {
      year: "2022",
      title: "Digital Integration",
      description: "Combined my tech skills with music, creating digital recordings and music-related projects.",
      milestone: "Tech + Music fusion"
    }
  ];

  const musicalSkills = [
    { skill: "Acoustic Guitar", level: 85 },
    { skill: "Fingerpicking", level: 80 },
    { skill: "Chord Progressions", level: 90 },
    { skill: "Music Theory", level: 75 },
    { skill: "Composition", level: 70 },
    { skill: "Recording", level: 65 }
  ];

  const favoriteGenres = [
    "Classical", "Fingerstyle", "Folk", "Blues", "Contemporary", "Ambient"
  ];

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <div className="relative w-40 h-28 mx-auto mb-4 transform rotate-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20 rounded-lg border-2 border-[#ff9900] border-opacity-100"></div>
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop"
            alt="Acoustic guitar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Musical Journey
        </h2>
        <p className="text-gray-600">Where creativity meets melody</p>
      </div>

      {/* Creative Balance */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-6 border border-[#ff9900]/20 animate-slide-up">
        <div className="flex items-start space-x-4">
          <div className="relative w-24 h-24 transform -rotate-3">
            <div className="absolute inset-0 bg-gradient-to-br from-[#017020]/20 to-[#ff9900]/20 rounded-lg border-2 border-[#017020] border-opacity-100"></div>
            <img 
              src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=150&h=150&fit=crop"
              alt="Guitar and creativity"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#017020] mb-3 flex items-center gap-2">
              <Heart className="text-[#ff9900]" size={24} />
              Music & Design Harmony
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Music and design share a beautiful relationship in my life. Both require creativity, rhythm, 
              and attention to detail. The patience and precision I've developed through guitar playing 
              directly enhances my design work.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Whether I'm crafting a melody or designing a logo, the same creative principles apply: 
              balance, harmony, and emotional resonance.
            </p>
          </div>
        </div>
      </div>

      {/* Musical Journey Timeline */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Music className="text-[#ff9900]" size={24} />
          Musical Evolution
        </h3>
        <div className="space-y-4">
          {guitarJourney.map((item, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ff9900] to-[#017020] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.year}
                </div>
                {index < guitarJourney.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-[#ff9900] to-[#017020] mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <span className="px-3 py-1 bg-[#ff9900]/10 text-[#ff9900] rounded-full text-xs font-medium">
                  {item.milestone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Musical Skills */}
      <div className="bg-gradient-to-r from-[#017020]/5 to-[#ff9900]/5 rounded-xl p-6 border border-[#017020]/20 animate-slide-up">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Musical Skills</h3>
        <div className="space-y-3">
          {musicalSkills.map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">{item.skill}</span>
                <span className="text-[#ff9900] font-bold">{item.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#ff9900] to-[#017020] h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Favorite Genres & Inspiration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Play className="text-[#ff9900]" size={20} />
            Favorite Genres
          </h4>
          <div className="flex flex-wrap gap-2">
            {favoriteGenres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 text-gray-700 rounded-full text-sm border border-[#ff9900]/20"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Award className="text-[#017020]" size={20} />
            Musical Philosophy
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            "Music is the universal language that connects hearts. Every chord tells a story, 
            every melody carries emotion, and every song has the power to inspire."
          </p>
        </div>
      </div>

      {/* Music & Work Integration */}
      <div className="text-center p-6 bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl border border-[#ff9900]/20 animate-fade-in">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Synergy</h3>
        <p className="text-gray-600 mb-4">
          My musical background enhances my design sensibility, bringing rhythm and harmony to visual compositions
        </p>
        <div className="flex justify-center space-x-4">
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            🎵 Melody → Design Flow
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            🎸 Patience → Precision
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuitarPage;

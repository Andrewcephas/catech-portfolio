
import { Music, Play, Heart, Award } from "lucide-react";

const GuitarPage = () => {
  const guitarJourney = [
    {
      year: "2015",
      title: "First Guitar",
      description: "Started my musical journey with an acoustic guitar, learning basic chords.",
      milestone: "First song learned"
    },
    {
      year: "2017", 
      title: "Skill Development",
      description: "Advanced to fingerpicking techniques and complex pieces.",
      milestone: "First performance"
    },
    {
      year: "2019",
      title: "Creative Expression",
      description: "Began writing original compositions and exploring genres.",
      milestone: "Original compositions"
    },
    {
      year: "2022",
      title: "Digital Integration",
      description: "Combined tech skills with music for digital recordings.",
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
    <div className="h-full space-y-4 md:space-y-6 overflow-y-auto p-2 md:p-0">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <div className="relative w-32 h-24 md:w-40 md:h-28 mx-auto mb-3 md:mb-4 transform rotate-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/20 to-[#017020]/20 rounded-lg border-2 border-[#ff9900] border-opacity-100"></div>
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop"
            alt="Acoustic guitar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Musical Journey
        </h2>
        <p className="text-gray-600 text-sm md:text-base">Where creativity meets melody</p>
      </div>

      {/* Creative Balance */}
      <div className="bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl p-4 md:p-6 border border-[#ff9900]/20 animate-slide-up">
        <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4">
          <div className="relative w-20 h-20 md:w-24 md:h-24 transform -rotate-3 mx-auto md:mx-0 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#017020]/20 to-[#ff9900]/20 rounded-lg border-2 border-[#017020] border-opacity-100"></div>
            <img 
              src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=150&h=150&fit=crop"
              alt="Guitar and creativity"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-[#017020] mb-2 md:mb-3 flex items-center gap-2 justify-center md:justify-start">
              <Heart className="text-[#ff9900]" size={20} />
              Music & Design Harmony
            </h3>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-2 md:mb-3 text-wrap">
              Music and design share a beautiful relationship in my life. Both require creativity, rhythm, 
              and attention to detail.
            </p>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-wrap">
              The patience developed through guitar playing directly enhances my design work, creating harmony 
              between melody and visual composition.
            </p>
          </div>
        </div>
      </div>

      {/* Musical Journey Timeline */}
      <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 animate-slide-up">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
          <Music className="text-[#ff9900]" size={20} />
          Musical Evolution
        </h3>
        <div className="space-y-3 md:space-y-4">
          {guitarJourney.map((item, index) => (
            <div key={index} className="flex space-x-3 md:space-x-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#ff9900] to-[#017020] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">
                  {item.year}
                </div>
                {index < guitarJourney.length - 1 && (
                  <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-[#ff9900] to-[#017020] mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-6 md:pb-8">
                <h4 className="font-bold text-gray-800 mb-1 text-sm md:text-base text-wrap">{item.title}</h4>
                <p className="text-gray-600 text-xs md:text-sm mb-2 text-wrap line-clamp-2">{item.description}</p>
                <span className="px-2 md:px-3 py-1 bg-[#ff9900]/10 text-[#ff9900] rounded-full text-xs font-medium">
                  {item.milestone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Musical Skills */}
      <div className="bg-gradient-to-r from-[#017020]/5 to-[#ff9900]/5 rounded-xl p-4 md:p-6 border border-[#017020]/20 animate-slide-up">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Musical Skills</h3>
        <div className="space-y-2 md:space-y-3">
          {musicalSkills.map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-1 md:mb-2">
                <span className="text-gray-700 font-medium text-sm md:text-base text-wrap">{item.skill}</span>
                <span className="text-[#ff9900] font-bold text-sm md:text-base">{item.level}%</span>
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
      <div className="grid grid-cols-1 gap-3 md:gap-4 animate-fade-in">
        <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
            <Play className="text-[#ff9900]" size={18} />
            Favorite Genres
          </h4>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {favoriteGenres.map((genre) => (
              <span
                key={genre}
                className="px-2 md:px-3 py-1 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 text-gray-700 rounded-full text-xs md:text-sm border border-[#ff9900]/20"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
            <Award className="text-[#017020]" size={18} />
            Musical Philosophy
          </h4>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-wrap line-clamp-3">
            "Music is the universal language that connects hearts. Every chord tells a story, 
            every melody carries emotion, and every song has the power to inspire."
          </p>
        </div>
      </div>

      {/* Music & Work Integration */}
      <div className="text-center p-4 md:p-6 bg-gradient-to-r from-[#ff9900]/5 to-[#017020]/5 rounded-xl border border-[#ff9900]/20 animate-fade-in">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Creative Synergy</h3>
        <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm text-wrap">
          My musical background enhances my design sensibility, bringing rhythm and harmony to visual compositions
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <span className="px-3 md:px-4 py-2 bg-white rounded-full text-xs md:text-sm font-medium text-gray-700 border border-gray-200">
            🎵 Melody → Design Flow
          </span>
          <span className="px-3 md:px-4 py-2 bg-white rounded-full text-xs md:text-sm font-medium text-gray-700 border border-gray-200">
            🎸 Patience → Precision
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuitarPage;

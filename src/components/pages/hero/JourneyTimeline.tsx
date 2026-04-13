
const JourneyTimeline = () => {
  const timelineData = [
    { year: "2018", label: "Photoshop Foundation", color: "#ff9900" },
    { year: "2019-2022", label: "Adobe Suite Mastery", color: "#ff9900" },
    { year: "2022", label: "University Started", color: "#017020" },
    { year: "2023-2024", label: "Skills Development", color: "#017020" },
  ];

  return (
    <div className="mb-6 max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-[#017020] mb-3">My Growth Journey</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm text-gray-600">
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-3 rounded text-center"
          >
            <span className="block font-bold" style={{ color: item.color }}>
              {item.year}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;


const JourneyTimeline = () => {
  const timelineData = [
    { year: "2018", label: "Design Start", color: "var(--brand-primary)" },
    { year: "2022", label: "University", color: "var(--brand-secondary)" },
    { year: "2024", label: "CATECH Solutions", color: "var(--brand-primary)" },
    { year: "Now", label: "100+ Clients", color: "var(--brand-secondary)" },
  ];

  return (
    <div className="mb-6 max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">My Journey</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm text-gray-600">
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className="bg-[var(--brand-primary)]/5 p-3 rounded text-center"
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

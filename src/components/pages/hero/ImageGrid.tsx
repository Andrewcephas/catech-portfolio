const ImageGrid = ({ images }: { images: string[] }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto h-[500px]">
      {/* Main large image */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10">
        <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-xl border-8 border-white bg-gray-50 transform hover:scale-105 transition-transform duration-500">
          <img src={images[0]} alt="Andrew Cephas Ngumbau" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Second image */}
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 z-20">
        <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-xl border-8 border-white bg-gray-50 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-500">
          <img src={images[1]} alt="Work sample 1" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Third image */}
      <div className="absolute top-12 left-0 w-1/3 h-1/3 z-30">
        <div className="relative w-full h-full overflow-hidden shadow-xl rounded-xl border-4 border-white bg-gray-50 transform rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-500">
          <img src={images[2]} alt="Work sample 2" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Fourth image */}
      <div className="absolute bottom-12 right-[-10%] w-1/3 h-1/3 z-0">
        <div className="relative w-full h-full overflow-hidden shadow-xl rounded-xl border-4 border-white bg-gray-50 transform rotate-12 hover:rotate-0 hover:scale-105 transition-transform duration-500">
          <img src={images[3]} alt="Work sample 3" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Solid classic badge instead of floating bubble */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--brand-primary)] text-white shadow-2xl px-6 py-4 z-40 rounded-sm border-2 border-white text-center">
        <div className="text-2xl font-bold">4+</div>
        <div className="text-sm font-medium uppercase tracking-widest">Years Exp.</div>
      </div>
    </div>
  );
};

export default ImageGrid;
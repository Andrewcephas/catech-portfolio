import { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mb-4">
      <div className="absolute -left-10 -top-10 w-36 h-36 rounded-full bg-[#e85d04]/10 blur-3xl animate-float" />
      <div className="absolute right-4 top-16 w-24 h-24 rounded-full bg-[#007520]/10 blur-3xl animate-glow" />
      <div className="w-full max-w-[420px] h-[540px] mx-auto overflow-hidden rounded-[36px] border-4 border-white shadow-[0_35px_80px_rgba(0,0,0,0.16)] bg-gray-50">
        <img
          src={images[currentIndex]}
          alt="Profile"
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'w-5 bg-[#e85d04]' 
                : 'w-2.5 bg-gray-300 hover:bg-[#e85d04]'
            } h-2.5 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
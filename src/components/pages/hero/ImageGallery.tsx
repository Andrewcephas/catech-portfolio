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
    <div className="relative mb-2">
      <div className="w-24 h-28 sm:w-28 sm:h-36 mx-auto overflow-hidden rounded-lg border-2 border-[#ff9900] shadow-md">
        <img
          src={images[currentIndex]}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex justify-center gap-1 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'w-4 bg-[#ff9900]' 
                : 'w-1.5 bg-gray-300 hover:bg-[#ff9900]'
            } h-1.5 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
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
      <div className="w-full max-w-[420px] aspect-[4/5] mx-auto overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-gray-50">
        <img
          src={images[currentIndex]}
          alt="Profile"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'w-5 bg-[var(--brand-primary)]' 
                : 'w-2.5 bg-gray-300 hover:bg-[var(--brand-primary)]'
            } h-2.5 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
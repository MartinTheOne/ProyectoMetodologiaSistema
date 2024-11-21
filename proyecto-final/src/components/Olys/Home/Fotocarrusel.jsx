import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PhotoCarousel = () => {
  const images = [
    { url: "/img/Ensalada1.webp", alt: "Ensalada Cesar", title: "Ensalada Cesar" },
    { url: "/img/ensalada2.webp", alt: "Ensalada Waldorf", title: "Ensalada Waldorf" },
    { url: "/img/ensalada3.webp", alt: "Ensalada Filipa", title: "Ensalada Filipa" },
    { url: "/img/ensalada4.webp", alt: "Ensalada Vegetariana", title: "Ensalada Vegetariana" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalSlides = images.length;

  const changeSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + direction;

      if (nextIndex >= totalSlides) {
        setDirection(-1);
        return totalSlides - 2;
      }

      if (nextIndex < 0) {
        setDirection(1);
        return 1;
      }

      return nextIndex;
    });
  }, [direction, totalSlides]);

  const goToNextSlide = () => {
    setDirection(1);
    changeSlide();
  };

  const goToPreviousSlide = () => {
    setDirection(-1);
    changeSlide();
  };

  useEffect(() => {
    const timer = setInterval(changeSlide, 3500);
    return () => clearInterval(timer);
  }, [changeSlide]);

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <div
        className="relative flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[60vh] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;

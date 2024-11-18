import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PhotoCarousel = () => {
  const images = [
    {
      url: "images.unsplash.com/photo-1546069901-d5bfd2cbfb1f",
      alt: "Ensalada Cesar",
      title: "Ensalada Cesar"
    },
    {
      url: "images.unsplash.com/photo-1512621776951-a57141f2eefd",
      alt: "Ensalada Waldorf",
      title: "Ensalada Waldorf"
    },
    {
      url: "images.unsplash.com/photo-1540420773420-3366772f4999",
      alt: "Ensalada Filipa",
      title: "Ensalada Filipa"
    },
    {
      url: "images.unsplash.com/photo-1561043433-aaf687c4cf04",
      alt: "Ensalada Vegetariana",
      title: "Ensalada Vegetariana"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 2000);
    return () => clearInterval(timer);
  }, [goToNextSlide]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") goToPreviousSlide();
      if (event.key === "ArrowRight") goToNextSlide();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [goToNextSlide]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    let moved = false;

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const diff = startX - touch.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToNextSlide();
        else goToPreviousSlide();
        moved = true;
      }
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="relative max-w-4xl 700-md:max-w-2xl movil-m:max-w-[600px] movil-s:max-w-[526px] movil-sm:max-w-[446px] movil-smm:max-w-[300px] mx-auto overflow-hidden rounded-xl shadow-lg" onTouchStart={handleTouchStart}>
      <div className="relative h-[60vh] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out transform ${index === currentIndex ? "opacity-100 translate-x-0" : index < currentIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"}`}
            onClick={() => setIsLightboxOpen(true)}
          >
            <img
              src={`https://${image.url}`}
              alt={image.alt}
              className="w-full h-full object-cover cursor-pointer"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f";
                e.target.alt = "Fallback image";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-bold">{image.title}</h3>
            </div>
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <img
            src={`https://${images[currentIndex].url}`}
            alt={images[currentIndex].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default PhotoCarousel;
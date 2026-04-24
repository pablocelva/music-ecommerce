import { useState, useEffect } from "react";
import { musicProducts } from "../data/products";

const Carousel = () => {
    // Tomamos los primeros 5 productos para el carousel (o los que tengan una propiedad 'featured')
    const slides = musicProducts.slice(0, 5); 
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    if (slides.length === 0) return null;

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden bg-gray-100 mb-8 group">
            {/* Contenedor de las diapositivas */}
            <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((product, index) => (
                    <div key={product.id} className="w-full flex-shrink-0 relative h-full">
                        <img 
                            src={product.img} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay oscuro para leer el texto */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div className="text-center text-white p-4">
                                <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{product.name}</h2>
                                <p className="text-lg md:text-xl drop-shadow-md">{product.desc}</p>
                                <p className="text-xl md:text-2xl font-bold mt-2 text-yellow-400">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botón Anterior */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Botón Siguiente */}
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicadores (puntos) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentIndex === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselItem from "@/components/carousel/components/carousel-item";

interface Technology {
  icon: JSX.Element;
  name: string;
}

interface CarouselProps {
  technologies: Technology[];
  timing?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ technologies, timing }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3); // Define quantos itens são visíveis com base no tamanho da tela

  // Atualiza o número de itens visíveis conforme a largura da tela
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width >= 1550) {
        setVisibleItems(5); // 5 itens para telas maiores
      } else if (width >= 768) {
        setVisibleItems(3); // 3 itens para telas médias
      } else {
        setVisibleItems(1); // 1 item para telas menores
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        handleNext();
      },
      timing ? timing : 5000
    );
    return () => clearInterval(interval);
  }, [activeIndex, handleNext, timing]);
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleItems; i++) {
      const index =
        (activeIndex + i - Math.floor(visibleItems / 2) + technologies.length) %
        technologies.length;
      items.push(
        <CarouselItem
          key={index}
          icon={technologies[index].icon}
          name={technologies[index].name}
          isMain={i === Math.floor(visibleItems / 2)}
          isSide={i !== Math.floor(visibleItems / 2)}
          position={
            i < Math.floor(visibleItems / 2)
              ? "left"
              : i === Math.floor(visibleItems / 2)
              ? "center"
              : "right"
          }
        />
      );
    }
    return items;
  };

  return (
    <div className="relative flex items-center justify-center">
      <button onClick={handlePrev} className="absolute left-0 z-10">
        <FaChevronLeft className="w-8 h-8 text-gray-800 dark:text-gray-300" />
      </button>

      <div className="flex items-center justify-center space-x-12">
        {getVisibleItems()}
      </div>

      <button onClick={handleNext} className="absolute right-0 z-10">
        <FaChevronRight className="w-8 h-8 text-gray-800 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default Carousel;

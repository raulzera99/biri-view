import React from 'react';

interface CarouselItemProps {
  icon: JSX.Element;
  name: string;
  isMain: boolean;
  isSide: boolean;
  position: 'left' | 'center' | 'right';
}

const CarouselItem: React.FC<CarouselItemProps> = ({ icon, name, isMain, isSide, position }) => {
  const positionClasses = {
    left: 'order-first',
    center: 'order-none',
    right: 'order-last',
  };

  return (
    <div
      className={`flex flex-col items-center justify-center mx-4 transition-all duration-300 transform ${
        isMain ? 'scale-125 opacity-100' : isSide ? 'scale-100 opacity-80' : 'scale-75 opacity-60'
      } ${positionClasses[position]}`}
      style={{
        minWidth: isMain ? '200px' : '150px', // Largura mínima para centralizar o item principal
        maxWidth: isMain ? '200px' : '150px',
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
        {icon}
      </div>
      {isMain && <p className="text-lg font-medium mt-2 text-gray-800 dark:text-white">{name}</p>}
    </div>
  );
};

export default CarouselItem;

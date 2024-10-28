// pages/shopping.tsx
import React, { useState } from "react";

const mockShoes = [
  {
    id: 1,
    name: "Tênis Esportivo",
    image: "/assets/imgs/tenis-esportivo.jpg",
    factory: "Klin",
    price: 149.99,
    sizes: [36, 37, 38, 39, 40],
  },
  {
    id: 2,
    name: "Sapatilha Casual",
    image: "/assets/imgs/sapatilha-casual.jpg",
    factory: "Pampili",
    price: 89.99,
    sizes: [34, 35, 36, 37],
  },
  {
    id: 3,
    name: "Sandália Infantil",
    image: "/assets/imgs/sandalia-infantil.jpg",
    factory: "Dedinho do Pé",
    price: 59.99,
    sizes: [28, 29, 30, 31],
  },
  {
    id: 4,
    name: "Chinelo Conforto",
    image: "/assets/imgs/chinelo-conforto.jpg",
    factory: "Sporteen",
    price: 29.99,
    sizes: [38, 39, 40, 41],
  },
  {
    id: 5,
    name: "Bota Fashion",
    image: "/assets/imgs/bota-fashion.jpg",
    factory: "Mili",
    price: 199.99,
    sizes: [35, 36, 37, 38],
  },
];

const uniqueFactories = Array.from(
  new Set(mockShoes.map((shoe) => shoe.factory))
);

export default function Shopping() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedFactory, setSelectedFactory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 200]);

  const filteredShoes = mockShoes.filter((shoe) => {
    const matchesSize = selectedSize ? shoe.sizes.includes(selectedSize) : true;
    const matchesFactory = selectedFactory
      ? shoe.factory === selectedFactory
      : true;
    const matchesPrice =
      shoe.price >= priceRange[0] && shoe.price <= priceRange[1];
    return matchesSize && matchesFactory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Shopping de Calçados
        </h1>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row justify-between mb-12 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Tamanho</label>
            <div className="flex space-x-2">
              {[28, 29, 30, 31, 34, 35, 36, 37, 38, 39, 40, 41].map((size) => (
                <label key={size} className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                    className="text-blue-500"
                  />
                  <span>{size}</span>
                </label>
              ))}
              <button
                className="ml-2 text-sm text-blue-500 hover:underline"
                onClick={() => setSelectedSize(null)}
              >
                Limpar
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Faixa de Preço</label>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
              className="slider"
            />
            <span className="text-sm mt-1">
              Até R$ {priceRange[1].toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Fabricante</label>
            <select
              value={selectedFactory || ""}
              onChange={(e) => setSelectedFactory(e.target.value || null)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-2"
            >
              <option value="">Todos</option>
              {uniqueFactories.map((factory) => (
                <option key={factory} value={factory}>
                  {factory}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Listagem de Calçados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{shoe.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Fabricante: {shoe.factory}
                </p>
                <p className="text-lg font-semibold text-blue-500 mb-2">
                  R$ {shoe.price.toFixed(2)}
                </p>
                <p className="text-sm">
                  Tamanhos disponíveis: {shoe.sizes.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Limpar Filtros */}
        <div className="text-center mt-12">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
            onClick={() => {
              setSelectedSize(null);
              setSelectedFactory(null);
              setPriceRange([0, 200]);
            }}
          >
            Limpar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}

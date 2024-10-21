// pages/comercio.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Comercio() {
  const featuredStores = [
    {
      name: "Loja Pampili",
      description:
        "Especializada em calçados infantis, com design moderno e conforto para as crianças.",
      image: "/assets/imgs/loja-pampili.jpg",
    },
    {
      name: "Klin Calçados",
      description:
        "Uma das principais marcas de calçados infantis da região, com produção local.",
      image: "/assets/imgs/loja-klin.jpg",
    },
    {
      name: "Dedinho do Pé",
      description:
        "Líder na produção de sandálias e chinelos infantis com materiais sustentáveis.",
      image: "/assets/imgs/loja-dedinho.jpg",
    },
  ];

  const factories = [
    { name: "Fábrica Klin", location: "Rua das Indústrias, 120" },
    { name: "Fábrica Pampili", location: "Avenida Calçadista, 98" },
    { name: "Fábrica Sporteen", location: "Rua dos Calçados, 85" },
  ];

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Comércio Local de Birigui
        </h1>
        <p className="text-lg mb-8 text-center">
          Birigui é um dos maiores polos comerciais da região, especialmente na
          indústria de calçados. A cidade abriga diversas lojas e fábricas de
          renome, oferecendo produtos de alta qualidade e com grande foco no
          público infantil.
        </p>

        {/* Seção de Lojas em Destaque */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Lojas em Destaque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStores.map((store, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={store.image}
                  alt={store.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{store.name}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {store.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Fábricas Locais */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Fábricas Locais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {factories.map((factory, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-2">{factory.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Localização: {factory.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Produtos em Destaque */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Produtos de Destaque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Tênis Infantil Klin</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Tênis esportivo para crianças, leve e confortável, ideal para
                atividades ao ar livre.
              </p>
              <p className="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                Saiba mais
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Sandália Pampili</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Sandália elegante e confortável, perfeita para ocasiões casuais
                e formais.
              </p>
              <p className="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                Saiba mais
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Chinelo Dedinho do Pé</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Chinelo leve e durável, feito com materiais recicláveis e design
                anatômico.
              </p>
              <p className="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                Saiba mais
              </p>
            </div>
          </div>
        </div>

        {/* Botão de Voltar */}
        <div className="text-center">
          <Link href="/">
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700">
              Voltar à página inicial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// pages/comercio.tsx
import React from "react";
import Link from "next/link";

const commerceData = [
  {
    category: "Lojas",
    items: [
      {
        name: "Loja Pampili",
        description:
          "Especializada em calçados infantis, com design moderno e conforto para as crianças.",
        image: "/assets/imgs/logo-pampili.png",
        url: "https://www.pampili.com.br",
      },
      {
        name: "Klin Calçados",
        description:
          "Uma das principais marcas de calçados infantis da região, com produção local.",
        image: "/assets/imgs/logo-klin.png",
        url: "https://www.klin.com.br",
      },
      {
        name: "Dedinho do Pé",
        description:
          "Líder na produção de sandálias e chinelos infantis com materiais sustentáveis.",
        image: "/assets/imgs/logo-dedinho.webp",
        url: "https://www.dedinho.com.br",
      },
    ],
  },
  {
    category: "Fábricas",
    items: [
      {
        name: "Fábrica Klin",
        description: "Rua das Indústrias, 120",
        image: "/assets/imgs/logo-klin.png",
        url: "https://www.klin.com.br",
      },
      {
        name: "Fábrica Pampili",
        description: "Avenida Calçadista, 98",
        image: "/assets/imgs/logo-pampili.png",
        url: "https://www.pampili.com.br",
      },
      {
        name: "Fábrica Sporteen",
        description: "Rua dos Calçados, 85",
        image: "/assets/imgs/logo-sporteen.webp",
        url: "https://www.sporteen.com.br",
      },
    ],
  },
  {
    category: "Produtos",
    items: [
      {
        name: "Tênis Infantil Klin",
        description:
          "Tênis esportivo para crianças, leve e confortável, ideal para atividades ao ar livre.",
        image: "/assets/imgs/tenis-klin.webp",
        url: "https://www.klin.com.br",
      },
      {
        name: "Sandália Pampili",
        description:
          "Sandália elegante e confortável, perfeita para ocasiões casuais e formais.",
        image: "/assets/imgs/sandalia-pampili.jpg",
        url: "https://www.pampili.com.br",
      },
      {
        name: "Tenis Dedinho do Pé",
        description:
          "Tênis Infantil Meninos Calce Fácil. Confortável feito com materiais de primeira qualidade.",
        image: "/assets/imgs/tenis-dedinhonope.webp",
        url: "https://www.dedinho.com.br",
      },
    ],
  },
];

export default function Comercio() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Comércio Local de Birigui
        </h1>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
          Birigui é um dos maiores polos comerciais da região, especialmente na
          indústria de calçados. A cidade abriga diversas lojas e fábricas de
          renome, oferecendo produtos de alta qualidade com foco no público
          infantil.
        </p>

        {/* Seções de Comércio */}
        {commerceData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-contain p-4"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Botão de Voltar */}
        <div className="text-center">
          <Link href="/">
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
              Voltar à página inicial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

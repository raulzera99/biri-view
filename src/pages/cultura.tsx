// pages/cultura.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cultura() {
  const upcomingEvents = [
    {
      name: "Festival de Inverno",
      date: "20 de Julho, 2024",
      description:
        "O Festival de Inverno de Birigui é um evento anual que celebra a música e a arte, com apresentações de bandas regionais, exposições de arte e oficinas culturais.",
    },
    {
      name: "Semana da Cultura",
      date: "10 a 17 de Agosto, 2024",
      description:
        "A Semana da Cultura traz uma série de eventos culturais para a cidade, incluindo apresentações de teatro, dança, feiras de artesanato e atividades para todas as idades.",
    },
    {
      name: "Feira de Arte e Artesanato",
      date: "12 de Setembro, 2024",
      description:
        "A feira é uma oportunidade para artistas e artesãos locais exporem e venderem suas criações, além de oferecer workshops e oficinas para o público.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800 dark:text-white">
          Cultura e Eventos de Birigui
        </h1>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Birigui é uma cidade vibrante, rica em tradição cultural. Ao longo do
          ano, a cidade realiza diversos eventos culturais que promovem a
          integração da comunidade, incluindo feiras, festivais e apresentações
          artísticas.
        </p>

        {/* Seção de Eventos Futuros */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
            Próximos Eventos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {event.name}
                </h3>
                <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                  {event.date}
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Galeria de Eventos Anteriores */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
            Galeria de Eventos Anteriores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <Image
                src="/assets/imgs/evento1.jpg"
                alt="Festival de Música"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <p className="text-center mt-4 text-gray-800 dark:text-gray-300">
                Festival de Música - 2023
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/imgs/evento2.jpg"
                alt="Feira Cultural"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <p className="text-center mt-4 text-gray-800 dark:text-gray-300">
                Feira Cultural - 2022
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/imgs/evento3.jpg"
                alt="Teatro ao Ar Livre"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <p className="text-center mt-4 text-gray-800 dark:text-gray-300">
                Teatro ao Ar Livre - 2021
              </p>
            </div>
          </div>
        </section>

        {/* Tabela de Eventos Passados */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
            Eventos Anteriores
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-left">
                    Evento
                  </th>
                  <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-left">
                    Data
                  </th>
                  <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-left">
                    Descrição
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="py-4 px-6">Festival de Verão</td>
                  <td className="py-4 px-6">15 de Janeiro, 2023</td>
                  <td className="py-4 px-6">
                    Um evento anual com shows e atividades culturais.
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="py-4 px-6">Mostra de Teatro</td>
                  <td className="py-4 px-6">05 de Março, 2023</td>
                  <td className="py-4 px-6">
                    Apresentações de peças teatrais de grupos locais.
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="py-4 px-6">Feira Literária</td>
                  <td className="py-4 px-6">22 de Abril, 2023</td>
                  <td className="py-4 px-6">
                    Celebrando a literatura com autores locais e nacionais.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Botão de Voltar */}
        <div className="text-center">
          <Link href="/">
            <button className="mt-10 px-8 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
              Voltar à página inicial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

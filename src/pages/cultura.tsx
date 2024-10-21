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
        "Um evento anual que celebra a música e a arte local com apresentações de bandas regionais e exposições de arte.",
    },
    {
      name: "Semana da Cultura",
      date: "10 a 17 de Agosto, 2024",
      description:
        "Uma semana de atividades culturais incluindo teatro, dança, e feiras de artesanato. Organizado pela Secretaria de Cultura de Birigui.",
    },
    {
      name: "Feira de Arte e Artesanato",
      date: "12 de Setembro, 2024",
      description:
        "Exposição e venda de peças de arte e artesanato feitas por artistas locais. Inclui workshops e oficinas criativas.",
    },
  ];

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Cultura e Eventos de Birigui
        </h1>
        <p className="text-lg mb-8 text-center">
          Birigui é uma cidade vibrante com uma rica tradição cultural. Ao longo
          do ano, a cidade celebra diversos eventos que trazem a comunidade
          junta, incluindo feiras culturais, festivais e apresentações
          artísticas.
        </p>

        {/* Seção de Eventos Futuros */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Próximos Eventos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {event.date}
                </p>
                <p className="text-lg">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galeria de Eventos Anteriores */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Galeria de Eventos Anteriores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative">
              <Image
                src="/assets/imgs/evento1.jpg"
                alt="Festival de Música"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-2">Festival de Música - 2023</p>
            </div>
            <div className="relative">
              <Image
                src="/assets/imgs/evento2.jpg"
                alt="Feira Cultural"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-2">Feira Cultural - 2022</p>
            </div>
            <div className="relative">
              <Image
                src="/assets/imgs/evento3.jpg"
                alt="Teatro ao Ar Livre"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-2">Teatro ao Ar Livre - 2021</p>
            </div>
          </div>
        </div>

        {/* Tabela de Eventos Passados */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Eventos Anteriores
          </h2>
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold">
                  Evento
                </th>
                <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold">
                  Data
                </th>
                <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 dark:bg-gray-900">
                <td className="py-4 px-6">Festival de Verão</td>
                <td className="py-4 px-6">15 de Janeiro, 2023</td>
                <td className="py-4 px-6">
                  Um evento que celebrou a música e arte da cidade com várias
                  bandas locais.
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="py-4 px-6">Mostra de Teatro</td>
                <td className="py-4 px-6">05 de Março, 2023</td>
                <td className="py-4 px-6">
                  Peças teatrais apresentadas por artistas e companhias locais.
                </td>
              </tr>
              <tr className="bg-gray-100 dark:bg-gray-900">
                <td className="py-4 px-6">Feira Literária</td>
                <td className="py-4 px-6">22 de Abril, 2023</td>
                <td className="py-4 px-6">
                  Uma celebração da literatura com a participação de autores
                  locais e nacionais.
                </td>
              </tr>
            </tbody>
          </table>
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

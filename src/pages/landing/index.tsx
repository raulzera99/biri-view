import { Carousel } from "@/components/carousel";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importar Link do Next.js
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export const automationTechnologies = [
  {
    name: "Klin",
    icon: <Image src="/assets/imgs/logo-klin.png" alt="Klin Logo" width={90} height={90} />,
  },
  {
    name: "Pampili",
    icon: <Image src="/assets/imgs/logo-pampili.png" alt="Pampili Logo" width={90} height={90} />,
  },
  {
    name: "Mile",
    icon: <Image src="/assets/imgs/logo-mili.jpeg" alt="Mile Logo" width={90} height={90} />,
  },
  {
    name: "Sporteen",
    icon: <Image src="/assets/imgs/logo-sporteen.webp" alt="Sporteen Logo" width={90} height={90} />,
  },
  {
    name: "Dedinho do Pé",
    icon: <Image src="/assets/imgs/logo-dedinho.webp" alt="Dedinho do Pé Logo" width={90} height={90} />,
  },
  {
    name: "Somileve",
    icon: <Image src="/assets/imgs/logo-somileve.webp" alt="Somileve Logo" width={90} height={90} />,
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      {/* Header */}
      <header
        className="relative p-6 bg-cover bg-center text-white h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/imgs/image-home.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-5xl font-bold drop-shadow-lg">BiriView</h1>
          <p className="mt-3 text-xl drop-shadow-lg">
            Explore o comércio e a história da cidade de Birigui de forma interativa.
          </p>
        </div>
      </header>

      <div className="py-12">
        <Carousel technologies={automationTechnologies} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-6">
        {/* Card Section: História da Cidade */}
        <Link href="/historia">
          <div className="my-12 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center">
              <HistoryEduIcon fontSize="large" className="mr-4" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">História de Birigui</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Conheça as histórias, monumentos e esculturas que fazem parte da cultura local.
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Card Section: Comércio Local */}
        <Link href="/comercio">
          <div className="my-12 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center">
              <StorefrontIcon fontSize="large" className="mr-4" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Comércio Local</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Explore as lojas e conheça os produtos que fazem de Birigui um polo comercial de destaque.
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Card Section: Cultura e Eventos */}
        <Link href="/cultura">
          <div className="my-12 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center">
              <TheaterComedyIcon fontSize="large" className="mr-4" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Cultura e Eventos</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Fique por dentro das celebrações e participe das iniciativas culturais de Birigui.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
}

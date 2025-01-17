// pages/home.tsx
import { Carousel } from "@/components/carousel";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

export const automationTechnologies = [
  {
    name: "Klin",
    icon: (
      <Image
        src="/assets/imgs/logo-klin.png"
        alt="Klin Logo"
        width={90}
        height={90}
      />
    ),
  },
  {
    name: "Pampili",
    icon: (
      <Image
        src="/assets/imgs/logo-pampili.png"
        alt="Pampili Logo"
        width={90}
        height={90}
      />
    ),
  },
  {
    name: "Meli",
    icon: (
      <Image
        src="/assets/imgs/logo-mili.jpeg"
        alt="Mile Logo"
        width={90}
        height={90}
      />
    ),
  },
  {
    name: "Sporteen",
    icon: (
      <Image
        src="/assets/imgs/logo-sporteen.webp"
        alt="Sporteen Logo"
        width={90}
        height={90}
      />
    ),
  },
  {
    name: "Dedinho do Pé",
    icon: (
      <Image
        src="/assets/imgs/logo-dedinho.webp"
        alt="Dedinho do Pé Logo"
        width={90}
        height={90}
      />
    ),
  },
  {
    name: "Somileve",
    icon: (
      <Image
        src="/assets/imgs/logo-somileve.webp"
        alt="Somileve Logo"
        width={90}
        height={90}
      />
    ),
  },
];

export default function Home() {
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  // };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
  };

  const [modelUrl, setModelUrl] = React.useState(
    "https://rte-web-viewer.substance3d.com/model/https%3A%2F%2Fcdn.substance3d.com%2Fv2%2Ffiles%2Fsource%2F1ec31534-0574-4a25-b011-fc244e6a4363%3Fencrypted%3Dtrue"
  );

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      {/* Header */}
      <motion.header
        className="relative p-6 bg-cover bg-center text-white h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/imgs/image-home.png')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-5xl font-bold drop-shadow-lg">BiriView</h1>
          <p className="mt-3 text-xl drop-shadow-lg">
            Explore o comércio, a história e a cultura da cidade de Birigui de
            forma interativa.
          </p>
        </div>
      </motion.header>

      <div className="py-12">
        <Carousel technologies={automationTechnologies} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-6">
        {/* Section: Indicação Geográfica de Birigui */}
        <motion.section
          className="my-16 p-8 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="pb-5">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Indicação Geográfica de Birigui
            </h2>
          </motion.div>
          <motion.div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              src="/assets/imgs/logo-ig-birigui.png"
              alt="Indicação Geográfica de Birigui"
              width={220}
              height={220}
              className="mb-6 md:mb-0 md:mr-6"
            />
            <div>
              <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                A Indicação Geográfica (IG) de Birigui reconhece a região como
                um polo de excelência na produção de calçados infantis. Este
                selo valoriza a tradição e a qualidade dos produtos fabricados,
                destacando Birigui no cenário nacional e internacional como a
                Capital do Calçado Infantil.
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300">
                Com a IG, as fábricas locais têm um selo que garante a
                autenticidade e a excelência de seus produtos, reforçando o
                compromisso com a qualidade e o desenvolvimento da economia
                local.
              </p>
            </div>
          </motion.div>
        </motion.section>
        {/* Card Section: História da Cidade */}
        <Link href="/historia">
          <motion.div
            className="my-12 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer animate-pulse"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={scaleUp}
          >
            <div className="flex items-center ">
              <HistoryEduIcon fontSize="large" className="mr-4" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                  História de Birigui
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Conheça as histórias, monumentos e esculturas que fazem parte
                  da cultura local.
                </p>
              </div>
            </div>
          </motion.div>
        </Link>
        {/* Card Section: Comércio Local */}
        <Link href="/comercio">
          <motion.div
            className="my-12 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer animate-pulse"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={scaleUp}
          >
            <div className="flex items-center">
              <StorefrontIcon fontSize="large" className="mr-4" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                  Comércio Local
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Explore as lojas e conheça os produtos que fazem de Birigui um
                  polo comercial de destaque.
                </p>
              </div>
            </div>
          </motion.div>
        </Link>
        {/* Card Section: Cultura e Eventos */}
        <Link href="/cultura">
          <motion.div
            className="my-12 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer animate-pulse"
            // whileHover={{ scale: 1.05 }}
            variants={scaleUp}
          >
            <div className="flex items-center">
              <TheaterComedyIcon fontSize="large" className="mr-4" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                  Cultura e Eventos
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Fique por dentro das celebrações e participe das iniciativas
                  culturais de Birigui.
                </p>
              </div>
            </div>
          </motion.div>
        </Link>
        {/* Section: Sobre o Projeto */}
        <motion.section
          className="my-16 p-8 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="pb-5 text-center">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
              Sobre o Projeto
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              Nossa missão é conectar moradores e turistas à riqueza cultural e
              comercial de Birigui, valorizando suas tradições e produtos
              únicos.
            </p>
          </motion.div>
          <motion.div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              src="/assets/imgs/logo.png"
              alt="BiriView Logo"
              width={200}
              height={200}
              className="mb-6 md:mb-0 md:mr-6 rounded-full border-4 border-blue-500"
            />
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                BiriView é uma plataforma que visa promover o comércio, a
                cultura e a identidade de Birigui através de experiências
                digitais. Conectamos o público aos tesouros escondidos da
                cidade, desde suas lojas tradicionais até histórias de moradores
                locais.
              </p>
            </div>
          </motion.div>
          <motion.div className="mt-8 grid md:grid-cols-2 gap-4 text-center">
            <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                Missão
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Inspirar a valorização de Birigui, proporcionando uma
                experiência única que conecta cultura, história e inovação.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                Visão
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tornar Birigui uma referência cultural e comercial digitalmente
                interativa, fortalecendo sua identidade no Brasil e no mundo.
              </p>
            </div>
          </motion.div>
        </motion.section>
        {/* Section: Desenvolvedores */}
        <motion.section
          className="my-16 p-8 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="pb-8 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
              Desenvolvedores
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              Conheça os talentos por trás do projeto
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Desenvolvedor: Raul Dantas */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              // whileHover={{ translateY: -10 }}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src="/assets/imgs/raul_dantas.png"
                    alt="Raul Dantas"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
                    Raul Dantas
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Desenvolvedor Full Stack & Especialista em IA
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Apaixonado por tecnologia e inovação, Raul atua na área de
                desenvolvimento de software desde 2020, criando soluções que
                transformam ideias em experiências digitais de impacto.
              </p>
              <div className="flex mt-4 space-x-3">
                <Link
                  href="https://github.com/raulzera99"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 flex items-center"
                >
                  <GitHubIcon className="mr-1" />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/raul-dantas-761175202/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 flex items-center"
                >
                  <LinkedInIcon className="mr-1" />
                  LinkedIn
                </Link>
              </div>
            </motion.div>
            {/* Desenvolvedor: Diogo Alcarde */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              // whileHover={{ translateY: -10 }}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                  src="/assets/imgs/diogo_alcarde.png"
                  alt="Diogo Alcarde"
                  // width={64}
                  // height={64}
                    layout="fill"
                  objectFit="cover"
                  className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
                    Diogo Alcarde
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Desenvolvedor Full Stack & Especialista em IPA
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
              Sua abordagem combina habilidades técnicas e estratégicas, o que permite liderar projetos desafiadores e buscar inovações contínuas para solucionar problemas complexos.
              </p>
              <div className="flex mt-4 space-x-3">
                <Link
                  href="https://github.com/Alcarde1704"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 flex items-center"
                >
                  <GitHubIcon className="mr-1" />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/diogo-lima-alcarde/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 flex items-center"
                >
                  <LinkedInIcon className="mr-1" />
                  LinkedIn
                </Link>
              </div>
            </motion.div>

            {/* Desenvolvedor: João Ribeiro */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              // whileHover={{ translateY: -10 }}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src="/assets/imgs/joao_ribeiro.png"
                    alt="João Ribeiro"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
                    João Ribeiro
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Desenvolvedor Full Stack & DevOps
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Entusiasta de novas tecnologias, João atua desde 2019,
                combinando desenvolvimento e práticas DevOps para entregar
                soluções digitais de alta performance.
              </p>
              <div className="flex mt-4 space-x-3">
                <Link
                  href="https://github.com/Raulens"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 flex items-center"
                >
                  <GitHubIcon className="mr-1" />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jvrdl/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 flex items-center"
                >
                  <LinkedInIcon className="mr-1" />
                  LinkedIn
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section: Modelo 3D Interativo */}
        <motion.section
          className="my-16 p-8 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="pb-5">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
              Modelo 3D Interativo
            </h2>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300">
              Explore um modelo 3D interativo de um calçado.
            </p>
          </motion.div>
          <motion.div className="flex justify-center mb-4">
            <select
              className="p-2 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              onChange={(e) => setModelUrl(e.target.value)}
            >
              <option value="https://rte-web-viewer.substance3d.com/model/https%3A%2F%2Fcdn.substance3d.com%2Fv2%2Ffiles%2Fsource%2F1ec31534-0574-4a25-b011-fc244e6a4363%3Fencrypted%3Dtrue">
                Salto alto
              </option>
              <option value="https://rte-web-viewer.substance3d.com/model/https%3A%2F%2Fcdn.substance3d.com%2Fv2%2Ffiles%2Fsource%2Fda0392fe-6372-48f3-982c-763b1ad7cc26%3Fencrypted%3Dtrue">
                Sapatênis
              </option>
              <option value="https://rte-web-viewer.substance3d.com/model/https%3A%2F%2Fcdn.substance3d.com%2Fv2%2Ffiles%2Fsource%2F51375b4d-75cb-426a-b7c5-0882739f8bd7%3Fencrypted%3Dtrue">
                Tênis
              </option>
              <option value="https://rte-web-viewer.substance3d.com/model/https%3A%2F%2Fcdn.substance3d.com%2Fv2%2Ffiles%2Fsource%2Fbf671bcb-2cf6-4b5f-8300-259220025848%3Fencrypted%3Dtrue">
                Botina
              </option>
              {/* <option value="https://rte-web-viewer.substance3d.com/model/https%3A%2F%2Fcdn.substance3d.com%2Fv2%2Ffiles%2Fsource%2F51375b4d-75cb-426a-b7c5-0882739f8bd7%3Fencrypted%3Dtrue">
                Textura
              </option> 
              https://substance3d.adobe.com/assets/collections/75de54fe9647dd2f34bcb05ed3b468a6e800a751/asset/6b7521932055859fe0e7f39a7c7e316ddb7c0f9e
              */}
            </select>
          </motion.div>
            <motion.div className="flex justify-center">
            <iframe
              src={modelUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="fullscreen"
              className="w-full max-w-4xl h-96 md:h-[560px] rounded-lg shadow-lg"
            ></iframe>
            </motion.div>
        </motion.section>

        {/* Section: Futuras Implementações */}
        <motion.section
          className="my-16 p-8 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="pb-5">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
              Futuras Implementações
            </h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                Roteiros Turísticos Personalizados
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Explore Birigui com roteiros personalizados e informações sobre
                monumentos, cultura e a história por trás de cada lugar.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                ChatBot Inteligente
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Receba recomendações e tire dúvidas sobre comércios e eventos
                locais com um assistente virtual sempre disponível.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                Jornadas Imersivas
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Participe de experiências imersivas que simulam eventos
                históricos ou a produção de calçados, promovendo um aprendizado
                divertido e interativo.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                Plataforma de Comércio Eletrônico
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Adquira produtos locais diretamente de lojas de Birigui, com
                entrega em todo o Brasil e pagamento seguro.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                Hub de Eventos, Cursos, Workshops, Jogos e Lives
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Participe de eventos culturais, cursos, workshops, jogos e lives
                que promovem a cultura e a economia local.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                Inteligência Artificial Generativa para Criação de Conteúdo
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Crie conteúdos exclusivos e personalizados com a ajuda de
                algoritmos de inteligência artificial generativa. Desde posts
                para redes sociais, vídeos, até auxílio na criação e estilização
                de calçados.
              </p>
            </div>
          </motion.div>
        </motion.section>
        {/* Section: Explore Nossa Galeria */}
        <motion.section
          className="my-16 p-8 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="pb-5">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
              Explore Nossa Galeria
            </h2>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300">
              Veja fotos dos pontos mais bonitos e históricos da cidade de
              Birigui.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition"
              >
                <Image
                  src={`/assets/imgs/galeria${item}.jpg`}
                  alt={`Galeria de Birigui ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute
                              inset-0
                              bg-black bg-opacity-50
                              flex items-center justify-center
                              opacity-0
                              transition-opacity
                              duration-300
                              hover:opacity-100"
                >
                  <p className="text-white text-lg font-bold">Foto {item}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}

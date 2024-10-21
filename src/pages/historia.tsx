// pages/historia.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Historia() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-6 text-center">
          História de Birigui
        </h1>
        <p className="text-lg mb-8 text-center">
          Birigui é uma cidade rica em cultura e história. Conhecida como a
          Capital do Calçado Infantil, sua trajetória é marcada por crescimento
          industrial, desenvolvimento econômico, e uma comunidade vibrante.
          Explore os eventos, figuras e monumentos que moldaram sua identidade.
        </p>

        {/* Seção de Linha do Tempo */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Linha do Tempo
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1911</div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">Fundação de Birigui</h3>
                <p>
                  Em 1911, Birigui foi oficialmente fundada, e logo começou a se
                  destacar como um polo industrial no setor calçadista.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1950</div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">Crescimento Industrial</h3>
                <p>
                  Durante a década de 1950, a cidade se firmou como a Capital do
                  Calçado Infantil, com inúmeras fábricas produzindo para o
                  mercado interno e externo.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2000</div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">Expansão Econômica</h3>
                <p>
                  No início dos anos 2000, Birigui passou por um novo ciclo de
                  crescimento econômico, com o fortalecimento de sua indústria e
                  comércio local.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Galeria de Imagens de Monumentos */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Monumentos Históricos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative">
              <Image
                src="/assets/imgs/monumento1.jpg"
                alt="Monumento 1"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-2">Monumento à Independência</p>
            </div>
            <div className="relative">
              <Image
                src="/assets/imgs/monumento2.jpg"
                alt="Monumento 2"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-2">Estátua do Trabalhador</p>
            </div>
            <div className="relative">
              <Image
                src="/assets/imgs/monumento3.jpg"
                alt="Monumento 3"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-2">Memorial do Calçado Infantil</p>
            </div>
          </div>
        </div>

        {/* Seção de Figuras Históricas */}
        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Figuras Icônicas de Birigui
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold">José Carlos Teodoro</h3>
              <p className="mt-2">
                Pioneiro na indústria calçadista, José Carlos foi um dos
                primeiros empreendedores a abrir fábricas de calçados na cidade.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold">Maria Clara Silva</h3>
              <p className="mt-2">
                Importante figura política e social, Maria Clara foi uma das
                primeiras mulheres a ocupar cargos públicos em Birigui.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold">Antônio Mendes Filho</h3>
              <p className="mt-2">
                Um dos maiores defensores da preservação histórica da cidade,
                Antônio foi responsável por várias iniciativas de restauração de
                monumentos.
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

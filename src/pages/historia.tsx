// pages/historia.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Historia() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-6 py-12">
        {/* Cabeçalho */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            História de Birigui
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Birigui é uma cidade rica em cultura e história. Conhecida como a
            Capital do Calçado Infantil, sua trajetória é marcada por
            crescimento industrial, desenvolvimento econômico e uma comunidade
            vibrante. Explore os eventos, figuras e monumentos que moldaram sua
            identidade.
          </p>
        </header>

        {/* Linha do Tempo */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Linha do Tempo
          </h2>
          <div className="relative  pl-8">
            {[
              {
                year: "1911",
                title: "Fundação de Birigui",
                description:
                  "Em 1911, Birigui foi oficialmente fundada, e logo começou a se destacar como um polo industrial no setor calçadista.",
              },
              {
                year: "1950",
                title: "Crescimento Industrial",
                description:
                  "Durante a década de 1950, a cidade se firmou como a Capital do Calçado Infantil, com inúmeras fábricas produzindo para o mercado interno e externo.",
              },
              {
                year: "2000",
                title: "Expansão Econômica",
                description:
                  "No início dos anos 2000, Birigui passou por um novo ciclo de crescimento econômico, com o fortalecimento de sua indústria e comércio local.",
              },
            ].map((event, index) => (
              <div key={index} className="mb-12 flex items-start relative">
                <div className="flex items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12 font-bold text-lg relative z-10">
                  {event.year}
                </div>
                {event.year !== "2000" && (
                  <div className="w-1 bg-blue-500 h-28 absolute left-6 top-6 z-0"></div>
                )}
                <div className="ml-12">
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Monumentos Históricos */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Monumentos Históricos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                src: "/assets/imgs/calcado-gigante.png",
                title: "O Calçado Gigante – 2018",
                description:
                  "A arte do monumento traz para a realidade todo o conceito que o polo calçadista deseja entregar ao mundo: alegria, espontaneidade e cor. Com seus 2 metros e meio de altura, possui belos detalhes que contam parte da história dos 60 anos do polo.",
              },
              {
                src: "/assets/imgs/o-sapateiro.jpg",
                title: "O Sapateiro – 2020",
                description:
                  "Este monumento homenageia os protagonistas da revolução calçadista que transformaram Birigui na Capital Brasileira do Calçado Infantil.",
              },
              {
                src: "/assets/imgs/a-pespontadeira.jpg",
                title: "A Pespontadeira – 2021",
                description:
                  "Uma homenagem a todas as mulheres da indústria calçadista de Birigui que, com dedicação e talento, levam proteção aos pés do mundo todo através de seu trabalho artesanal e valioso.",
              },
              {
                src: "/assets/imgs/passo-sustentavel.jpeg",
                title: "Passo Sustentável – 2022",
                description:
                  "O propósito deste memorial é criar uma cultura de sustentabilidade e conscientizar sobre a importância de cuidar do meio ambiente para um futuro mais sustentável.",
              },
              {
                src: "/assets/imgs/calcando-com-arte.jpeg",
                title: "Calçando com Arte – 2023",
                description:
                  "Este monumento expressa gratidão a todos que contribuem para o desenvolvimento econômico e social da cidade, levando o nome de Birigui aos quatro cantos do mundo.",
              },
            ].map((monumento, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <Image
                  src={monumento.src}
                  alt={monumento.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {monumento.title}
                  </h3>
                  <p className="text-sm md:text-base text-justify">
                    {monumento.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Figuras Icônicas */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Figuras Icônicas de Birigui
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Euclides Bueno Miragaia",
                description:
                  "Herói da Revolução Constitucionalista de 1932 e um dos 'M' do movimento MMDC. Seu legado é lembrado na avenida que leva seu nome em Birigui.",
              },
              {
                name: "Joaquim Miragaia",
                description:
                  "Parte importante da história esportiva local, contribuindo para o desenvolvimento do time de futebol da cidade.",
              },
              {
                name: "Flávio Miragaia Perri",
                description:
                  "Embaixador e ex-Cônsul brasileiro, teve papel significativo em diversas missões diplomáticas e representações do Brasil.",
              },
              {
                name: "Waldir Moyses Simão",
                description:
                  "Ex-presidente do INSS, responsável por modernizar o instituto e melhorar o atendimento ao público em todo o Brasil.",
              },
              {
                name: "Dr. Marco Antonio Zago",
                description:
                  "Presidente do CNPq e médico renomado, liderou o projeto de Células-Tronco, um dos mais avançados do mundo.",
              },
              {
                name: "Professor José Luis Fiorin",
                description:
                  "Autoridade em gramática da língua portuguesa e membro da comissão de reforma ortográfica, com diversos livros publicados.",
              },
              {
                name: "Dario Miguel Pedro",
                description:
                  "Advogado e inventor do Biribol, o único esporte genuinamente brasileiro com regras e campeonatos oficiais.",
              },
              {
                name: "Renata Colombo",
                description:
                  "Atleta de voleibol, acumulou títulos importantes, incluindo o tricampeonato da Superliga Feminina.",
              },
              {
                name: "Reynaldo Gianecchini",
                description:
                  "Ator renomado, nasceu em Birigui e é conhecido por seus trabalhos na TV Globo.",
              },
              {
                name: "Paulo Trevisan",
                description:
                  "Diretor de criação da Rede Globo, conhecido por criar e dirigir especiais como 'AMIGOS'.",
              },
              {
                name: "Valdir Birigui",
                description:
                  "Jogador de futebol que atuou pelo São Paulo e Botafogo, e técnico de times como Guarani e Santa Cruz.",
              },
              {
                name: "Benedito Teixeira (Birigui)",
                description:
                  "Dirigente esportivo que foi presidente do América de Rio Preto por 23 anos.",
              },
              {
                name: "Marcos Gomes (Birigui)",
                description:
                  "Goleiro e treinador, teve destaque no Santa Cruz e Guarani.",
              },
              {
                name: "Márcio Rogério de Andrade",
                description:
                  "Ex-jogador e empresário, atuou pelo Bandeirante e no futebol japonês.",
              },
              {
                name: "Renata Colombo (Renatinha)",
                description:
                  "Jogadora de voleibol que se destacou com a Seleção Brasileira e ganhou inúmeros títulos.",
              },
            ].map((figura, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-blue-500 h-20 w-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">
                    {figura.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{figura.name}</h3>
                <p className="text-sm md:text-base">{figura.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Botão Voltar */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Voltar à Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

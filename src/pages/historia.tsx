// pages/historia.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Historia() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          História de Birigui
        </h1>
        <p className="text-base md:text-lg mb-12 text-center max-w-2xl mx-auto">
          Birigui é uma cidade rica em cultura e história. Conhecida como a
          Capital do Calçado Infantil, sua trajetória é marcada por crescimento
          industrial, desenvolvimento econômico e uma comunidade vibrante.
          Explore os eventos, figuras e monumentos que moldaram sua identidade.
        </p>

        {/* Seção de Linha do Tempo */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Linha do Tempo
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
              <div className="md:w-1/3 text-center md:text-right">
                <span className="block text-lg font-bold">1911</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold">Fundação de Birigui</h3>
                <p className="mt-2">
                  Em 1911, Birigui foi oficialmente fundada, e logo começou a se
                  destacar como um polo industrial no setor calçadista.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
              <div className="md:w-1/3 text-center md:text-right">
                <span className="block text-lg font-bold">1950</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold">Crescimento Industrial</h3>
                <p className="mt-2">
                  Durante a década de 1950, a cidade se firmou como a Capital do
                  Calçado Infantil, com inúmeras fábricas produzindo para o
                  mercado interno e externo.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
              <div className="md:w-1/3 text-center md:text-right">
                <span className="block text-lg font-bold">2000</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold">Expansão Econômica</h3>
                <p className="mt-2">
                  No início dos anos 2000, Birigui passou por um novo ciclo de
                  crescimento econômico, com o fortalecimento de sua indústria e
                  comércio local.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Monumentos Históricos */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Monumentos Históricos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/assets/imgs/monumento1.jpg",
                title: "O Calçado Gigante – 2018",
                description:
                  "A arte do monumento traz para a realidade todo o conceito que o polo calçadista deseja entregar ao mundo: alegria, espontaneidade e cor. Com seus 2 metros e meio de altura, possui belos detalhes que contam parte da história dos 60 anos do polo.",
              },
              {
                src: "/assets/imgs/sapateiro.jpg",
                title: "O Sapateiro – 2020",
                description:
                  "Incontáveis corajosos homens e mulheres lançaram-se nesta jornada, enfrentando enormes dificuldades. Os sapateiros, com muita determinação e criatividade, tornaram-se prósperos industriais. Este monumento homenageia os protagonistas da revolução calçadista que transformaram Birigui na Capital Brasileira do Calçado Infantil.",
              },
              {
                src: "/assets/imgs/pespontadeira.jpg",
                title: "A Pespontadeira – 2021",
                description:
                  "Uma homenagem a todas as mulheres da indústria calçadista de Birigui que, com dedicação e talento, levam proteção aos pés do mundo todo através de seu trabalho artesanal e valioso.",
              },
              {
                src: "/assets/imgs/passo-sustentável.jpg",
                title: "Passo Sustentável – 2022",
                description:
                  "O propósito deste memorial é criar uma cultura de sustentabilidade e conscientizar sobre a importância de cuidar do meio ambiente para um futuro mais sustentável.",
              },
              {
                src: "/assets/imgs/calçando-com-arte.jpg",
                title: "Calçando com Arte – 2023",
                description:
                  "Celebrando Birigui como a Capital Brasileira do Calçado Infantil desde 1958, este monumento expressa gratidão a todos que contribuem para o desenvolvimento econômico e social da cidade, levando o nome de Birigui aos quatro cantos do mundo.",
              },
            ].map((monumento, index) => (
              <div
                key={index}
                className="relative p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
              >
                <Image
                  src={monumento.src}
                  alt={monumento.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <h3 className="text-2xl font-bold mt-4 text-center">
                  {monumento.title}
                </h3>
                <p className="text-center mt-2">{monumento.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galeria de Imagens de Monumentos */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Monumentos Históricos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/assets/imgs/monumento1.jpg",
                title: "Monumento à Independência",
              },
              {
                src: "/assets/imgs/monumento2.jpg",
                title: "Estátua do Trabalhador",
              },
              {
                src: "/assets/imgs/monumento3.jpg",
                title: "Memorial do Calçado Infantil",
              },
            ].map((monumento, index) => (
              <div key={index} className="relative">
                <Image
                  src={monumento.src}
                  alt={monumento.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-center mt-2">{monumento.title}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Seção de Figuras Icônicas */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Figuras Icônicas de Birigui
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Euclides Bueno Miragaia",
                description:
                  "Herói da Revolução Constitucionalista de 1932 e um dos 'M' do movimento MMDC. Seu legado é lembrado na avenida que leva seu nome em Birigui.",
              },
              {
                name: "Joaquim Miragaia",
                description:
                  "Jogador e diretor do Bandeirante, ele foi parte importante da história esportiva local, contribuindo para o desenvolvimento do time de futebol da cidade.",
              },
              {
                name: "Flávio Miragaia Perri",
                description:
                  "Embaixador e ex-Cônsul brasileiro, teve papel significativo em diversas missões diplomáticas e representações do Brasil na ONU e outros órgãos internacionais.",
              },
              {
                name: "Waldir Moyses Simão",
                description:
                  "Ex-presidente do INSS, responsável por modernizar o instituto e melhorar o atendimento ao público em todo o Brasil.",
              },
              {
                name: "Dr. Marco Antonio Zago",
                description:
                  "Presidente do CNPq e médico renomado no Hospital das Clínicas de Ribeirão Preto, liderou o projeto de Células-Tronco, um dos mais avançados do mundo.",
              },
              {
                name: "Professor José Luis Fiorim",
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
                  "Atleta de voleibol, acumulou títulos importantes, incluindo o tricampeonato da Superliga Feminina e o título da Copa do Imperador no Japão.",
              },
              {
                name: "Reynaldo Gianecchini",
                description:
                  "Ator renomado, nasceu em Birigui e é conhecido por seus trabalhos na TV Globo. Também participou da abertura dos Jogos Regionais, representando a cidade.",
              },
              {
                name: "Paulo Trevisan",
                description:
                  "Diretor de criação da Rede Globo, conhecido por criar e dirigir especiais como 'AMIGOS', com as principais duplas sertanejas do país.",
              },
              {
                name: "Valdir Birigui",
                description:
                  "Jogador de futebol que atuou pelo São Paulo e Botafogo, e técnico de times como Guarani e Santa Cruz.",
              },
              {
                name: "Benedito Teixeira (Birigui)",
                description:
                  "Dirigente esportivo que foi presidente do América de Rio Preto por 23 anos, com o estádio Teixeirão em sua homenagem.",
              },
              {
                name: "Marcos Gomes (Birigui)",
                description:
                  "Goleiro e treinador, teve destaque no Santa Cruz e Guarani. Como técnico, conquistou o título estadual pelo Cacerense.",
              },
              {
                name: "Márcio Rogério de Andrade",
                description:
                  "Ex-jogador e empresário, atuou pelo Bandeirante e no futebol japonês. Infelizmente, foi uma das vítimas do acidente aéreo de Congonhas em 2007.",
              },
              {
                name: "Renata Colombo (Renatinha)",
                description:
                  "Jogadora de voleibol que se destacou com a Seleção Brasileira e ganhou inúmeros títulos, incluindo o tricampeonato da Superliga.",
              },
            ].map((figura, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center"
              >
                <h3 className="text-2xl font-bold mb-2">{figura.name}</h3>
                <p className="text-sm md:text-base">{figura.description}</p>
              </div>
            ))}
          </div>
        </section>

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

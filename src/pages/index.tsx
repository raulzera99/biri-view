import React from "react";
import { RootLayout } from "@/layout/root";
export default function Home() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
        {/* Header */}
        <header className="p-6 bg-light-primary-500 dark:bg-dark-primary-500">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold">BiriView</h1>
            <p className="mt-3 text-xl">
              Explore o comércio e a história da cidade de Birigui de forma
              interativa.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-6">
          {/* Section 1: História da Cidade */}
          <section className="my-12">
            <h2 className="text-3xl font-semibold mb-4">História de Birigui</h2>
            <p className="text-lg">
              Birigui, conhecida por seu comércio e rica história, possui
              diversos marcos importantes para o desenvolvimento do estado de
              São Paulo. Conheça as histórias, monumentos e esculturas que fazem
              parte da cultura local.
            </p>
          </section>

          {/* Section 2: Comércio Local */}
          <section className="my-12">
            <h2 className="text-3xl font-semibold mb-4">Comércio Local</h2>
            <p className="text-lg">
              O comércio local de Birigui é famoso pela sua inovação,
              especialmente na indústria calçadista. Explore as lojas e conheça
              os produtos que fazem de Birigui um polo comercial de destaque.
            </p>
          </section>

          {/* Section 3: Cultura e Eventos */}
          <section className="my-12">
            <h2 className="text-3xl font-semibold mb-4">Cultura e Eventos</h2>
            <p className="text-lg">
              A cidade oferece uma ampla gama de eventos culturais ao longo do
              ano. Fique por dentro das celebrações e participe das iniciativas
              que promovem a arte e a cultura de Birigui.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="p-6 bg-light-secondary dark:bg-dark-secondary text-light-accent dark:text-dark-accent">
          <div className="container mx-auto">
            <p>&copy; 2024 BiriView. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </RootLayout>
  );
}

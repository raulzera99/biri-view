import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center text-center p-6 bg-light-secondary dark:bg-dark-secondary text-light-accent dark:text-dark-accent">
            <div className="container mx-auto">
                <nav className="mb-4">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#about" className="hover:text-light-primary dark:hover:text-dark-primary">Sobre</a></li>
                        <li><a href="#services" className="hover:text-light-primary dark:hover:text-dark-primary">Serviços</a></li>
                        <li><a href="#contact" className="hover:text-light-primary dark:hover:text-dark-primary">Contato</a></li>
                        <li><a href="#privacy" className="hover:text-light-primary dark:hover:text-dark-primary">Política de Privacidade</a></li>
                    </ul>
                </nav>
                <div className="text-sm">
                    <p>&copy; {new Date().getFullYear()} BiriView. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}


import React from "react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-primary-900 dark:text-dark-primary-100">
            <div className="container mx-auto px-6 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold mb-4">Contato</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Entre em contato conosco para dúvidas, sugestões ou informações. Estamos aqui para ajudar!
                    </p>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Envie uma mensagem</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2" htmlFor="name">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Seu nome"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Seu e-mail"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2" htmlFor="subject">
                                    Assunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Assunto da mensagem"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2" htmlFor="message">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Escreva sua mensagem aqui..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </section>
                    <section className="space-y-6">
                        <h2 className="text-3xl font-semibold mb-6">Informações de Contato</h2>
                        <p className="text-lg">
                            Você também pode nos contatar diretamente:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Telefone</h3>
                                <p>+55 (14) 98803-7621</p>
                                <p>+55 (11) 95343-3211</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">E-mail</h3>
                                <p>raul.prado.9999@gmail.com</p>
                                <p>joao20874@hotmail.com</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Endereço</h3>
                                <p>Rua Exemplo, 123, Bairro, Cidade, Estado</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29747.23366454412!2d-50.315264!3d-21.255461750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496157aebf1a10d%3A0x62e75a1db69a1e82!2sIFSP%20-%20Instituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20Birigui!5e0!3m2!1spt-BR!2sbr!4v1730117363600!5m2!1spt-BR!2sbr"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
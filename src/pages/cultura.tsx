// pages/cultura.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Cultura() {
  interface Event {
    url: string;
    name: string;
    date: string;
    location: string;
  }

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/assets/eventos.json");
        const data = await response.json();

        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-light-primary-900 dark:text-dark-primary-100">
      <div className="container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-800 dark:text-white tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Cultura e Eventos de Birigui
        </motion.h1>
        <motion.p
          className="text-lg mb-12 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Descubra a riqueza cultural de Birigui através de eventos vibrantes
          que conectam a comunidade, desde feiras e festivais a apresentações
          artísticas ao ar livre.
        </motion.p>

        {loading ? (
          <motion.p
            className="text-center text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Carregando eventos...
          </motion.p>
        ) : events && events.length > 0 ? (
          <section className="my-12">
            <motion.h2
              className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Próximos Eventos
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl cursor-pointer overflow-hidden transform transition duration-500"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {event.name}
                  </h3>
                  <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                    {event.date}
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    Local: {event.location}
                  </p>
                  <Link href={event.url} target="_blank">
                    <motion.a
                      className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-200 underline"
                      whileHover={{ color: "#2563EB" }}
                    >
                      Mais informações
                    </motion.a>
                  </Link>
                  {/* Background Decorative Element */}
                  <div className="absolute -top-5 -right-5 text-blue-200 dark:text-blue-600 opacity-20 text-9xl font-extrabold">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ) : (
          <motion.p
            className="text-center text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Nenhum evento encontrado.
          </motion.p>
        )}
      </div>
    </div>
  );
}

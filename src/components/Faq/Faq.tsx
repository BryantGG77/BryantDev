"use client";

import { useState } from "react";
import { dataFaq } from "./Faq.data";
import { Reveal } from "../Reveal";

export function Faq() {
    // Guarda el ID de la pregunta actualmente abierta
    const [activeId, setActiveId] = useState<number | null>(null);

    // Función para manejar el clic en cada botón
    const handleToggle = (id: number) => {
        // Alterna entre abrir/cerrar la pregunta seleccionada
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className="px-6 py-20 md:py-40" id="faq">
            <section>
                <section className="grid max-w-5xl gap-36 mx-auto text-center p-6">
                    <div>
                        <h2 className="text-4xl font-semibold pb-5 md:text-5xl">
                            Preguntas frecuentes
                        </h2>
                    </div>
                    <div>
                        {dataFaq.map(({ id, question, answer }) => (
                            <Reveal key={id}>
                                <div className="mb-5">
                                    <div className="relative flex justify-between items-center bg-blueLight p-5 pl-20 rounded-md transition">
                                        <h3 className="text-black font-semibold text-lg max-sm:text-sm">
                                            {question}
                                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-4xl opacity-50">Q</span>
                                        </h3>
                                        <button
                                            className="w-8 h-8 bg-white rounded-full text-center text-black transition duration-400 hover:bg-black hover:text-white"
                                            onClick={() => handleToggle(id)}
                                        >
                                            {activeId === id ? "-" : "+"}
                                        </button>
                                    </div>
                                    <div
                                        className={`${activeId === id ? "h-auto" : "h-0"
                                            } relative pl-20 pr-5 text-left overflow-hidden`}
                                    >
                                        <p className="text-lg p-5 max-sm:text-sm">
                                            {answer}
                                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-4xl opacity-50">A</span>
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            </section>
        </section>
    );
}

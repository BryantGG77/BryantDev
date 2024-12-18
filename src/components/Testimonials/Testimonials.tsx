"use client";

import { Reveal } from "../Reveal";
import { Slide } from "./Slide";

export function Testimonials() {
    return (
        <section className="p-8 md:py-64" id="testimonials">
            <section className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold">
                        Que dicen los clientes de nosotros
                    </h2>
                </Reveal>

                <Reveal>
                    <div className="self-center">
                        <p className="text-primaryDark">
                            Todo lo que necesitas saber para tener un sitio web profesionaly promocionarte por todo el mundo.
                        </p>
                    </div>
                </Reveal>
            </section>
            <Slide />
        </section>
    )
}

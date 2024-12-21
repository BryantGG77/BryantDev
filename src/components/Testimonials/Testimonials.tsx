"use client";

import { Reveal } from "../Reveal";
import { Slide } from "./Slide";

export function Testimonials() {
    return (
        <section className="p-8 md:py-64" id="testimonials">
            <section className="grid max-w-5xl gap-8 mx-auto place-items-center my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold max-sm:text-4xl">
                        Que dicen los clientes de nosotros
                    </h2>
                </Reveal>

                <Reveal>
                    <div>
                        <p className="text-primaryDark">
                            Todo lo que necesitas saber para tener un sitio web profesional y promocionarte por todo el mundo.
                        </p>
                    </div>
                </Reveal>
            </section>
            <Slide />
        </section>
    )
}

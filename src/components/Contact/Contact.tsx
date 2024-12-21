"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";

export function Contact() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [clicked, setClicked] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setIsRedirecting(true);


        setTimeout(() => {
            window.location.href = "mailto:brayespro@gmail.com?subject=Propuesta de desarrollo&body=¡Hola! Estoy interesado en recibir una propuesta.";
        }, 1000);


        setTimeout(() => {
            setIsRedirecting(false);
        }, 3000);
    };

    return (
        <section className="relative px-6 py-20 md:py-64" id="contact">
            <BackgroundRadialLeft />
            <section className="grid max-w-5xl mx-auto md:grid-cols-2">
                <MotionTransition className="flex items-center justify-center">
                    <Image
                        src="/assets/contact.png"
                        alt="Contact"
                        width={600}
                        height={600}
                        className="rounded-b-lg h-auto w-72 md:w-full object-contain"
                    />
                </MotionTransition>

                <section className="max-sm:flex max-sm:flex-col max-sm:justify-center max-md:order-first">
                    <Reveal>
                        <h2 className="text-5xl font-semibold py-3">
                            ¡Contacta y camina hacia el
                            <span className="block degradedBlue bg-blueLight lg:text-6xl break-all-sm">
                                exito!
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal>
                        <p className="max-w-md mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis accusantium distinctio, provident perferendis tempore reiciendis minus quaerat ad iure consequuntur doloremque.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className="my-8">
                            <button
                                onClick={handleClick}
                                className="px-4 py-3 rounded-md bg-blueRadial hover:text-black hover:bg-blueLight"
                            >
                                {isRedirecting ? "Redireccionando..." : "¡Si! Quiero una propuesta"}
                            </button>
                        </div>
                    </Reveal>
                </section>
            </section>
        </section>
    );
}

"use client";

import Image from "next/image"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import Link from "next/link"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"

export default function AboutUs() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <section className="grid max-w-5xl mx-auto md:grid-cols-2" id="about">
                <section>

                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            El mejor
                            <span className="block break-all degradedBlue bg-blueLight md:text-6xl">
                                desarrollador
                            </span>
                            del pais
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className="max-w-md mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum iusto dolore. Sit voluptates culpa suscipit, tempore sapiente maxime perferendis in explicabo ex cumque error soluta consequatur nisi recusandae placeat.</p>
                    </Reveal>

                    <Reveal>
                        <div className="my-8">
                            <Link href="#contact" className="px-4 py-3 rounded-md bg-blueRadial hover:text-black hover:bg-blueLight">
                                Empieza ahora
                            </Link>
                        </div>
                    </Reveal>
                </section>
                <MotionTransition className="flex items-center justify-center">
                    <Image className="rounded-b-lg h-auto w-72 md:w-full object-contain" src="/assets/about.png" width={450} height={450} alt="Junta Directiva" />
                </MotionTransition>
            </section>
        </div>
    )
}

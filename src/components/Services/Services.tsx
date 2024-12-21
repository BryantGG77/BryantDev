"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesServices } from "./Services.data";
import Image from "next/image";

export function Services() {
    return (
        <section className="relative px-6 py-20 md:py-64" id="services">
            <BackgroundRadialLeft />
            <section className="grid max-w-5xl mx-auto md:grid-cols-2" >
                <section className="max-sm:flex max-sm: flex-col max-sm: justify-center ">
                    <Reveal>
                        <h2 className=" text-5xl font-semibold py-3">
                            <span className="block degradedBlue bg-blueLight">
                                Tu te encargas del negocio
                            </span>
                            y yo de
                            <br />
                            <span className="break-all-sm">

                                la tecnología
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
                            <Link href="#contact" className="px-4 py-3 rounded-md bg-blueRadial hover:text-black hover:bg-blueLight">
                                Elige tu plan
                            </Link>
                        </div>
                    </Reveal>
                </section>

                <div className="grid items-center py-5 md:p-8">
                    {dataFeaturesServices.map(({ id, title, description, icon }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <Image src={`/assets/${icon}.png`} width={40} height={40} alt={title} />
                                <div>
                                    <h4>{title}</h4>
                                    <p className="text-primaryDark"
                                    >{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </section >
    )
}

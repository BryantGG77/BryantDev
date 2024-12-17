import Image from "next/image"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import Link from "next/link"

export default function AboutUs() {
    return (
        <section className="relative p-4 md: py-20 ">
            <BackgroundRadialRight />
            <section className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <h1 className="text-5xl font-semibold">El mejor <span className="block text-primary">
                        Front End
                    </span>
                        del mercado</h1>
                    <p className="max-w-md mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum iusto dolore. Sit voluptates culpa suscipit, tempore sapiente maxime perferendis in explicabo ex cumque error soluta consequatur nisi recusandae placeat.</p>
                    <div className="my-8">
                        <Link href="#about" className="px-4 py-3 rounded-md bg-blueRadial">
                            Go now
                        </Link>
                    </div>
                </div>
                <div className="">
                    <Image className="rounded-b-lg" src="/assets/junta.png" width={250} height={250} alt="Junta Directiva" />
                </div>
            </section>
        </section>
    )
}

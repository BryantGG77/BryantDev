"use client";
import 'swiper/css';

import { dataPaymentMethods } from "./PaymentMethods.data";
import Image from "next/image";
import { BackgroundRadialLeft } from '../BackgroundRadialLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Reveal } from '../Reveal';
export function PaymentsMethods() {
    return (
        <div className='relative py-20 md:py-64'>
            <BackgroundRadialLeft />
            <div className='relative w-full overflow-hidden'>
                <div className='flex items-center justify-center py-20 p-8 md:py-64'>
                    <Reveal>
                        <h2 className="text-5xl pb-5 font-semibold break-all-sm degradedBlue bg-blueLight">
                            Metodos de pago
                        </h2>
                    </Reveal>
                </div>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 8,
                            spaceBetween: 15
                        },
                    }}

                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}

                    grabCursor={true}
                    loop={true}
                    speed={2000}
                >
                    <div className='absolute flex'>
                        {dataPaymentMethods.map(({ id, image }) => (
                            <SwiperSlide key={id} className='flex items-center slider-horizontal'>
                                <Image src={`/assets/${image}`} alt="payment" width={70} height={70} className='h-[60px] w-[120px] object-contain mr-5' />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>

        </div>
    )
}

"use client";

import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";

export function Services() {
    return (
        <div className="relative px-6 py-20 md:py-64">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>

                    </Reveal>
                </div>
            </div>
        </div>
    )
}

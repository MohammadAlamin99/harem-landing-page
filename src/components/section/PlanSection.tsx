"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlanCard from "../plan/PlanCard";

const plans = [
    {
        name: "Single Use",
        price: 49,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        popular: false,
    },
    {
        name: "Multiple Use",
        price: 89,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        popular: false,
    },
    {
        name: "Extended Use",
        price: 299,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        popular: true,
    },
    {
        name: "Unlimited Use",
        price: 499,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        popular: false,
    },
];

export default function PlanSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out",
            once: true,
        });
    }, []);

    return (
        <section className="w-full bg-[#ECEBFF] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header (NO Animation) */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#635BFF] font-manrope leading-tight">
                        Plans for every stage <br /> of your salon
                    </h2>
                    <p className="mt-4 text-[#526B7A] text-sm md:text-[18px]">
                        Choose the right tools today and scale effortlessly tomorrow.
                    </p>
                </div>

                {/* Pricing Cards (ONLY cards animated) */}
               <PlanCard plans={plans}/>
            </div>
        </section>
    );
}

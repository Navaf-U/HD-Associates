'use client'
import { useState } from "react";
import Image from "next/image";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
const services = [
    { title: "Advisory & Consulting Services", img: "/assets/service-pic-1.jpg" },
    { title: "Services for Startup", img: "/assets/service-pic-2.jpg" },
    { title: "Company law services for doing business in india", img: "/assets/service-pic-3.jpg" },
    { title: "Services for approvals & Appearances", img: "/assets/service-pic-4.jpg" },
];

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : services.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < services.length - 1 ? prevIndex + 1 : 0));
    };

    const rotatedServices = [...services.slice(currentIndex), ...services.slice(0, currentIndex)];

    return (
        <section className="py-20">
            <div className="mx-4 md:mx-10 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-semibold text-center md:text-left mb-6 md:mb-0">
                        Our Services
                    </h2>
                    <button className="border border-blue-800 text-blue-950 text-lg md:text-2xl font-semibold px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-800 hover:text-white transition">
                        View All Services
                    </button>
                </div>

                <div className="relative">
                    <div className="flex overflow-hidden transition-transform">
                        {rotatedServices.map((service, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-full md:w-1/4 px-4"
                            >
                                <div className="flex flex-col bg-white rounded shadow hover:shadow-lg transition overflow-hidden h-full">
                                    <div className="relative h-60 md:h-96 w-full">
                                        <Image
                                            src={service.img}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col p-6 gap-6 flex-grow">
                                        <h3 className="text-xl font-semibold text-start line-clamp-2">{service.title}</h3> {/* Added line-clamp to limit text overflow */}
                                        <div className="mt-auto">
                                            <button className="w-32 text-center text-blue-600 font-semibold border border-blue-800 py-3 px-6 hover:bg-blue-800 hover:text-white transition">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={handlePrev}
                            className="text-black border border-blue-950 w-14 h-14 flex justify-center items-center rounded-full shadow-md hover:bg-blue-950 hover:text-white transition"
                        >
                            <TiArrowLeft size={40} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="text-black border border-blue-950 w-14 h-14 flex justify-center items-center rounded-full shadow-md hover:bg-blue-950 hover:text-white transition"
                        >
                            <TiArrowRight size={40} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

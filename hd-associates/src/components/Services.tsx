import Image from "next/image"

const services = [
    { title: "Advisory & Consulting Services", img: "/assets/service-pic-1.jpg" },
    { title: "Services for Startup", img: "/assets/service-pic-2.jpg" },
    { title: "Company law services for doing business in india", img: "/assets/service-pic-3.jpg" },
    { title: "Services for approvals & Appearances", img: "/assets/service-pic-4.jpg" },
]

export default function Services() {
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <div className="relative h-60 md:h-96 w-full">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col flex-grow p-6 gap-6">
                                <h3 className="text-xl font-semibold text-start">
                                    {service.title}
                                </h3>

                                <div className="mt-auto">
                                    <button className="w-32 text-center text-blue-600 font-semibold border border-blue-800 py-3 px-6 hover:bg-blue-800 hover:text-white transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

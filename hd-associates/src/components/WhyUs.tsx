import Image from "next/image";

const features = [
  { icon: '/assets/commitment.png', title: "Commitment to Excellence", description: "We are dedicated to delivering exceptional services tailored to meet your unique requirements." },
  { icon: '/assets/convenience.png', title: "Convenience", description: "Simplifying complex processes, we ensure seamless and hassle-free solutions." },
  { icon: '/assets/speed.png', title: "Speed and Efficiency", description: "Our quick turnaround times help you stay ahead in a fast-paced business environment." },
  { icon: '/assets/commitment.png', title: "Reliability", description: "Depend on us for accurate and consistent support every step of the way." },
  { icon: '/assets/trustworthy.png', title: "Trustworthy Partnership", description: "Built on integrity, our relationships are anchored in mutual trust and transparency." },
  { icon: '/assets/uncompromising.png', title: "Uncompromising Quality", description: "We uphold the highest standards in every service we provide, ensuring superior outcomes for our clients." },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white text-black" id="why-us">
      <div className="mx-6 md:mx-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">Why US</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white px-6 py-10 md:px-8 md:py-20 rounded-xl shadow transition-all duration-300 hover:bg-[#001e60] hover:text-white flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="mb-5">
                  <Image width={40} height={40} src={feature.icon} alt="icon" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base mb-6 pt-5">{feature.description}</p>
              </div>
              <button className="w-full md:w-56 mt-auto py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 rounded">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

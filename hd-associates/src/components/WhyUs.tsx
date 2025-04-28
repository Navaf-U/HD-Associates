const features = [
    { title: "Commitment to Excellence", description: "We are dedicated to delivering exceptional services tailored to meet your unique requirements." },
    { title: "Convenience", description: "Simplifying complex processes, we ensure seamless and hassle-free solutions." },
    { title: "Speed and Efficiency", description: "Our quick turnaround times help you stay ahead in a fast-paced business environment." },
    { title: "Reliability", description: "Depend on us for accurate and consistent support every step of the way." },
    { title: "Trustworthy Partnership", description: "Built on integrity, our relationships are anchored in mutual trust and transparency." },
    { title: "Uncompromising Quality", description: "We uphold the highest standards in every service we provide, ensuring superior outcomes for our clients." },
  ];
  
  export default function WhyUs() {
    return (
      <section className="py-20 bg-white text-black" id="why-us">
        <div className="mx-20">
          <h2 className="text-3xl font-bold mb-12">Why US</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 py-28 rounded-xl shadow transition-all duration-300 hover:bg-[#001e60] hover:text-white flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="mb-6 pb-20 pt-5">{feature.description}</p>
                </div>
                <button className="mt-auto p-10 px-4 py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 rounded">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
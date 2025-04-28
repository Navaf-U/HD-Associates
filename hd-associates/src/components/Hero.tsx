export default function Hero() {
    return (
      <div
        className="h-screen flex items-end justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white bg-[#0000006b] py-8 md:py-20 px-6 md:px-44 text-center md:text-right w-full md:w-auto">
          Welcome to HD and Associates
        </h1>
      </div>
    );
  }
  
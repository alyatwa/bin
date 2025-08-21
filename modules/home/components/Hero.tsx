'use client';

import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const currentHero = {
    title: 'Welcome to BinHindi Law',
    description:
      'Your trusted legal partner providing exceptional legal services',
    image: [{ url: '/person.png' }],
  };

  return (
    <section
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat`}
    >
      {/* Brown overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(75, 38, 21, 0.5)',
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 items-center   `}>
            {/* Text Content */}
            <div className={` lg:order-1 space-y-6`}>
              {currentHero ? (
                <>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {currentHero.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                    {currentHero.description}
                  </p>

                  <div className="pt-4">
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-brown-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                      Read More
                    </button>
                  </div>
                </>
              ) : (
                // Fallback content
                <>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Welcome to BinHindi Law
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                    Your trusted legal partner providing exceptional legal
                    services
                  </p>

                  <div className="pt-4">
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-brown-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                      Read More
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Image Content */}
            <div className={` 'lg:order-2  flex justify-center lg:justify-end`}>
              {currentHero && currentHero.image && currentHero.image[0] ? (
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  <Image
                    src={'/person.png'}
                    alt={currentHero.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>
              ) : (
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gray-300 flex items-center justify-center">
                  <Image
                    alt="Placeholder Image"
                    src="/person.png"
                    width={300}
                    height={400}
                    className="size-[400px] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Text content with overflow background */}
        <div className="relative w-full lg:w-[60%] min-h-[400px] lg:min-h-[600px] flex items-center">
          {/* Background that overflows - using the secondary background color */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(to right, var(--color-secondary-background) 0%, var(--color-secondary-background) 85%, transparent 100%)',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 px-8 lg:px-16 py-12 lg:py-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--color-primary-text)] mb-6">
              Welcome to <span className="text-[var(--color-highlight)]">Epworth</span>
            </h1>
            <p className="text-lg lg:text-xl text-[var(--color-secondary-text)] mb-8 max-w-lg">
              A place where faith, community, and hope come together. Join us as we grow in love and service to one another.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[var(--color-highlight)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Learn More
              </button>
              <button className="px-6 py-3 border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] font-semibold rounded-lg hover:bg-[var(--color-highlight)] hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative w-full lg:w-[60%] lg:absolute lg:right-0 lg:top-0 lg:h-full min-h-[300px] lg:min-h-[600px]">
          <Image
            src="/home/1.jpg"
            alt="Church community"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

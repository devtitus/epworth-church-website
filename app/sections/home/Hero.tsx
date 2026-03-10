import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
      aria-label="Welcome to Epworth Methodist Tamil Church"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/1.jpg"
          alt="Epworth Methodist Tamil Church - Our church building and congregation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Sophisticated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <header className="text-center lg:text-left">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-highlight)] mb-6"
                style={{ background: 'rgba(211, 213, 215, 0.2)', backdropFilter: 'blur(8px)' }}
                role="status"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--color-highlight)] animate-pulse" aria-hidden="true" />
                <span className="text-white/90 text-sm font-medium">
                  Est. 1874 • A Heritage of Faith
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-[1.15] mb-5">
                Epworth Methodist{' '}
                <span className="block mt-2">
                  <span className="inline-block">
                    <span className='text-[var(--accent-4)]'>Tamil </span>Church
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-base text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Find your place in our story. At Epworth MTC, faith, community, and hope converge. We are a vibrant family dedicated to following Christ and serving our city with love. We invite you to join our Sunday worship and discover a community where you are known, loved, and encouraged to grow. You aren’t just a visitor here—you’re family.
              </p>

              {/* CTA Buttons */}
              <nav aria-label="Hero actions">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="secondary" className="px-8 py-4 text-base font-semibold flex items-center justify-center gap-2">
                    Learn More About Us
                  </Button>
                </div>
              </nav>
            </header>

            {/* Right Column - Stats Card */}
            <aside className="hidden lg:block" aria-label="Church statistics and service information">
              <article 
                className="relative rounded-3xl border border-[var(--border-highlight)] p-8"
                style={{ background: 'rgba(211, 213, 215, 0.15)', backdropFilter: 'blur(20px)' }}
              >
                {/* Welcome Text */}
                <div className="text-center mb-8">
                  <h2 className="text-white text-2xl font-bold mb-2">Welcome to Our</h2>
                  <p className="text-white/60">Church Family</p>
                </div>

                {/* Simple Stats Row */}
                <dl className="flex justify-center gap-8 mb-8">
                  <div className="text-center">
                    <dt className="sr-only">Years of heritage</dt>
                    <dd className="text-4xl font-bold text-white mb-1">150+</dd>
                    <dd className="text-sm text-white/50">Years</dd>
                  </div>
                  <div className="w-px h-12 bg-white/20" aria-hidden="true" />
                  <div className="text-center">
                    <dt className="sr-only">Total members</dt>
                    <dd className="text-4xl font-bold text-white mb-1">500+</dd>
                    <dd className="text-sm text-white/50">Members</dd>
                  </div>
                  <div className="w-px h-12 bg-white/20" aria-hidden="true" />
                  <div className="text-center">
                    <dt className="sr-only">Active ministries</dt>
                    <dd className="text-4xl font-bold text-white mb-1">5+</dd>
                    <dd className="text-sm text-white/50">Ministries</dd>
                  </div>
                </dl>

                {/* Service Info */}
                <address className="flex items-center justify-center gap-8 p-4 rounded-2xl not-italic" style={{ background: 'rgba(211, 213, 215, 0.1)' }}>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-highlight)]" aria-hidden="true" />
                    <time className="text-white font-medium" dateTime="2024-01-07T08:30">8:30 AM</time>
                  </div>
                  <div className="w-px h-6 bg-white/20" aria-hidden="true" />
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-highlight)]" aria-hidden="true" />
                    <span className="text-white font-medium">Navi Mumbai, Maharashtra</span>
                  </div>
                </address>
              </article>
            </aside>
          </div>

          {/* Mobile Stats (visible only on small screens) */}
          <div className="lg:hidden mt-10" aria-label="Church statistics and service information">
            <article 
              className="relative rounded-2xl border border-[var(--border-highlight)] p-6"
              style={{ background: 'rgba(211, 213, 215, 0.15)', backdropFilter: 'blur(20px)' }}
            >
              <div className="text-center mb-6">
                <h2 className="text-white text-xl font-bold mb-1">Welcome to Our Church Family</h2>
              </div>
              
              {/* Simple Stats Row */}
              <dl className="flex justify-center gap-6 mb-6">
                <div className="text-center">
                  <dt className="sr-only">Years of heritage</dt>
                  <dd className="text-3xl font-bold text-white mb-1">150+</dd>
                  <dd className="text-xs text-white/50">Years</dd>
                </div>
                <div className="w-px h-10 bg-white/20" aria-hidden="true" />
                <div className="text-center">
                  <dt className="sr-only">Total members</dt>
                  <dd className="text-3xl font-bold text-white mb-1">500+</dd>
                  <dd className="text-xs text-white/50">Members</dd>
                </div>
                <div className="w-px h-10 bg-white/20" aria-hidden="true" />
                <div className="text-center">
                  <dt className="sr-only">Active ministries</dt>
                  <dd className="text-3xl font-bold text-white mb-1">5+</dd>
                  <dd className="text-xs text-white/50">Ministries</dd>
                </div>
              </dl>
              
              <address className="flex items-center justify-center gap-6 text-sm not-italic">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--color-highlight)]" aria-hidden="true" />
                  <time className="text-white" dateTime="2024-01-07T09:00">9:00 AM</time>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-highlight)]" aria-hidden="true" />
                  <span className="text-white">Chennai</span>
                </div>
              </address>
            </article>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

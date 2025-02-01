import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="p-3 sm:p-4 lg:p-6 h-screen">
      <div className="relative w-full h-full min-h-[calc(100vh-3rem)] rounded-2xl overflow-hidden flex items-center justify-center bg-black/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Abstract waves background"
            className="object-cover object-center"
            fill
            priority
            src="/hero-bg.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20 mt-16">
          <div className="flex flex-col items-center text-center text-white space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-balance max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white animate-gradient">
              Experience every detail of life
            </h1>
            <p className="text-xl sm:text-2xl font-light tracking-wide text-white/80 uppercase">
              LASIK | REFRACTIVE | CATARACTS
            </p>
            <div className="mt-8">
              <p className="text-lg sm:text-xl text-white/90">
                Medical and Surgical Ophthalmology located in{" "}
                <a href="#" className="underline underline-offset-4 hover:text-white/70 transition-colors">
                  Culver City, CA
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-white text-black hover:bg-white/90 border-0 transition-colors"
              >
                310-838-0202
              </Button>
              <Button
                size="lg"
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white border-0 transition-colors"
              >
                SCHEDULE APPOINTMENT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
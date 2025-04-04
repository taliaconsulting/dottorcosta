import Image from "next/image"
import { Button } from "@/components/ui/button"

type HeroSectionProps = {
  data: {
    headline: string
    specialties: string
    locationText: string
    ctaButtonText: string
    backgroundImage?: string
    backgroundVideo?: string
    useVideo?: boolean
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="hero" className="p-2 sm:p-3 lg:p-4 h-screen">
      <div className="relative w-full h-full min-h-[calc(100vh-2rem)] rounded-2xl overflow-hidden flex items-center justify-center bg-none">
        {/* Background Image or Video */}
        <div className="absolute inset-0 z-0">
          {data?.useVideo && data?.backgroundVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover h-full w-full absolute"
            >
              <source src={data.backgroundVideo} type="video/mp4" />
              Tu browser non supporta i video HTML5.
            </video>
          ) : (
            <Image
              alt="Abstract waves background"
              className="object-cover object-center"
              fill
              priority
              src={data?.backgroundImage || "/hero-bg.jpg"}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-blu-notte/60 via-blu-notte/30 to-blu-notte/60" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20 mt-16">
          <div className="flex flex-col items-center text-center text-white space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-balance max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-bianco-perla via-bianco-perla/90 to-bianco-perla animate-gradient">
              {data?.headline || "Experience every detail of life"}
            </h1>
            <p className="text-lg sm:text-xl font-light tracking-wide text-bianco-perla/80 uppercase">
              {data?.specialties || "LASIK | REFRACTIVE | CATARACTS"}
            </p>
            <div className="mt-8">
              <p className="text-lg sm:text-xl text-bianco-perla/90">
                {data?.locationText || "Medical and Surgical Ophthalmology located in"}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="h-12 px-8 bg-blu-polvere hover:bg-blu-polvere/90 text-blu-notte border-0 transition-colors"
              >
                {data?.ctaButtonText || "SCHEDULE APPOINTMENT"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
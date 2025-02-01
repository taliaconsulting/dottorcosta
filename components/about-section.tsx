import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const credentials = [
  {
    title: "Board Certified",
    description: "American Board of Ophthalmology",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300" />
      </div>
    ),
  },
  {
    title: "Fellowship Trained",
    description: "Cornea and Refractive Surgery",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-200/20 to-emerald-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-200 to-emerald-300" />
      </div>
    ),
  },
  {
    title: "20+ Years Experience",
    description: "Surgical Excellence",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-200/20 to-amber-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-amber-200 to-amber-300" />
      </div>
    ),
  },
]

export function AboutSection() {
  return (
    <section className="p-3 sm:p-4 lg:p-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-white">About Dr. Eduardo Besser</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Dr. Eduardo Besser is a board-certified ophthalmologist specializing in cornea, cataract, and refractive surgery. With over two decades of experience, he has helped thousands of patients achieve their best possible vision through advanced surgical techniques and personalized care.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {credentials.map((credential) => (
                  <Card 
                    key={credential.title}
                    className="bg-white/5 hover:bg-white/10 border-white/10 transition-all duration-300"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-3">
                        <credential.icon />
                      </div>
                      <h3 className="text-white font-medium mb-1">{credential.title}</h3>
                      <p className="text-white/70 text-sm">{credential.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 text-white border-white/10"
                >
                  Learn More
                </Button>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                alt="Dr. Eduardo Besser"
                className="object-cover object-center"
                fill
                src="/doctor-portrait.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
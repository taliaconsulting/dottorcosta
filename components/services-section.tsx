import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Laser refractive surgery",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-200/20 to-orange-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-orange-200 to-orange-300" />
      </div>
    ),
  },
  {
    title: "Cataracts and lens replacement",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-200/20 to-cyan-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-cyan-200 to-cyan-300 border-4 border-cyan-200/20" />
      </div>
    ),
  },
  {
    title: "Medical eye care",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-200/20 to-purple-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-purple-200 to-purple-300 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-5 w-px bg-purple-100 rotate-45" />
            <div className="h-px w-5 bg-purple-100 rotate-45" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Eyelid lesions",
    icon: () => (
      <div className="h-10 w-10 flex items-center">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-200 to-purple-300" />
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-200 to-purple-300" />
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-200 to-purple-300" />
        </div>
      </div>
    ),
  },
  {
    title: "Glaucoma",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300 border-4 border-blue-200/20" />
      </div>
    ),
  },
  {
    title: "Ocular Allergy Testing",
    icon: () => (
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-200/20 to-orange-300/20 p-1">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-amber-200 to-orange-300">
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-amber-100/20" />
          </div>
        </div>
      </div>
    ),
  },
]

export function ServicesSection() {
  return (
    <section className="p-3 sm:p-4 lg:p-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
          <h2 className="text-4xl font-light text-white mb-16">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className="bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 border-slate-700/50 hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <service.icon />
                  <h3 className="text-lg text-blue-200 mt-6 mb-4 font-light leading-tight">{service.title}</h3>
                  <div className="text-blue-300/70 hover:text-blue-200 transition-colors">
                    <span className="inline-block transform rotate-45">→</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
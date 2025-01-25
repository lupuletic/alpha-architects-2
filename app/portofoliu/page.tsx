import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Casa Modernă Valea Verde",
    category: "Arhitectură Rezidențială",
    year: "2023",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Design modern pentru o casă unifamilială în zona Valea Verde.",
  },
  {
    title: "Birouri Tech Hub",
    category: "Design Interior Comercial",
    year: "2023",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Amenajare spațiu de birouri pentru o companie de tehnologie.",
  },
  {
    title: "Apartament Luxury Residence",
    category: "Design Interior Rezidențial",
    year: "2023",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Design interior pentru un apartament de lux în centrul orașului.",
  },
  {
    title: "Restaurant Fusion",
    category: "Arhitectură Comercială",
    year: "2022",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Design și arhitectură pentru un restaurant modern.",
  },
  {
    title: "Vila Mediterranean",
    category: "Arhitectură Rezidențială",
    year: "2022",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Vilă în stil mediteranean cu accent pe sustenabilitate.",
  },
  {
    title: "Centrul Cultural Aurora",
    category: "Arhitectură Publică",
    year: "2022",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Centru cultural multifuncțional cu design modern.",
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Portofoliu AlphaArchitects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">Portofoliul Nostru</h1>
          <p className="text-xl text-gray-200 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Explorează proiectele noastre și descoperă cum transformăm viziunea în realitate.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium text-brand-yellow">
                        {project.category} • {project.year}
                      </p>
                      <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                      <p className="text-gray-200 mt-2">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600">
                    {project.category} • {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ai un Proiect în Minte?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hai să discutăm despre cum putem aduce proiectul tău la viață.
          </p>
          <Button asChild className="bg-brand-yellow text-black hover:bg-brand-yellow/90">
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </section>
    </>
  )
}


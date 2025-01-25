import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transformăm Spațiul în Experiențe Memorabile
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Creăm design interior și arhitectură care inspiră, funcționează și durează.
            </p>
            <Button asChild className="bg-brand-yellow text-black hover:bg-brand-yellow/90">
              <Link href="/contact">Programează o Consultație</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Serviciile Noastre</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Interior",
                description: "Transformăm spațiile interioare în medii funcționale și estetice.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Arhitectură",
                description: "Proiectăm clădiri care îmbină forma cu funcționalitatea.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Consultanță",
                description: "Oferim expertiză în toate fazele proiectului tău.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proiecte Recente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Project ${project}`}
                    width={600}
                    height={400}
                    className="w-full transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Proiect {project}</h3>
                <p className="text-gray-600">Design Interior • 2023</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/portofoliu">Vezi Toate Proiectele</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pregătit să Începi Proiectul Tău?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru o consultație gratuită și transformă-ți visul în realitate.
          </p>
          <Button asChild className="bg-brand-yellow text-black hover:bg-brand-yellow/90">
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </section>
    </>
  )
}


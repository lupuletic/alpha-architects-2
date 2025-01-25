import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Design Interior Rezidențial",
      description: "Transformăm casele în cămine primitoare și funcționale, adaptate stilului tău de viață.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Consultanță în design",
        "Planificare spațială",
        "Selecție mobilier și materiale",
        "Supervizare implementare",
      ],
    },
    {
      title: "Design Interior Comercial",
      description: "Creăm spații comerciale care inspiră și maximizează potențialul afacerii tale.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Amenajare magazine", "Design birouri", "Spații HoReCa", "Optimizare flux clienți"],
    },
    {
      title: "Arhitectură Rezidențială",
      description: "Proiectăm case care îmbină perfect forma cu funcționalitatea.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Case unifamiliale", "Ansambluri rezidențiale", "Renovări și extinderi", "Documentație tehnică"],
    },
    {
      title: "Arhitectură Comercială",
      description: "Dezvoltăm proiecte comerciale care se remarcă și aduc valoare.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Clădiri de birouri", "Centre comerciale", "Hoteluri și restaurante", "Spații industriale"],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Servicii AlphaArchitects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">Serviciile Noastre</h1>
          <p className="text-xl text-gray-200 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Oferim o gamă completă de servicii de design și arhitectură, adaptate nevoilor tale specifice.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 text-brand-blue flex-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                    <Link href="/contact">Solicită o Ofertă</Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden group">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Procesul Nostru</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultație",
                description: "Discutăm despre viziunea și obiectivele tale.",
              },
              {
                step: "02",
                title: "Concept",
                description: "Dezvoltăm conceptul și planurile preliminare.",
              },
              {
                step: "03",
                title: "Proiectare",
                description: "Creăm documentația tehnică detaliată.",
              },
              {
                step: "04",
                title: "Implementare",
                description: "Supervizăm execuția până la finalizare.",
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-brand-yellow mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pregătit să Începem?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru o consultație gratuită și descoperă cum putem aduce plus valoare proiectului tău.
          </p>
          <Button asChild className="bg-brand-yellow text-black hover:bg-brand-yellow/90">
            <Link href="/contact">Programează o Consultație</Link>
          </Button>
        </div>
      </section>
    </>
  )
}


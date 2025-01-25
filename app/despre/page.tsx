import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Maria Popescu",
      role: "Arhitect Principal",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Alexandru Ionescu",
      role: "Designer Interior Senior",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Elena Dumitrescu",
      role: "Manager Proiecte",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Andrei Munteanu",
      role: "Arhitect Peisagist",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Echipa AlphaArchitects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">Despre AlphaArchitects</h1>
          <p className="text-xl text-gray-200 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Cu peste 10 ani de experiență în domeniu, suntem dedicați excelenței în design și arhitectură.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Viziunea Noastră</h2>
              <p className="text-gray-600">
                La AlphaArchitects, credem că arhitectura și designul au puterea de a transforma nu doar spațiile, ci și
                viețile oamenilor. Fiecare proiect este o oportunitate de a crea ceva extraordinar, îmbinând inovația cu
                funcționalitatea.
              </p>
              <p className="text-gray-600">
                Ne străduim să fim lideri în adoptarea tehnologiilor și tendințelor moderne, oferind în același timp
                soluții durabile și prietenoase cu mediul.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Viziunea noastră" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Valorile Noastre</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inovație",
                description: "Căutăm constant noi modalități de a împinge limitele designului și arhitecturii.",
              },
              {
                title: "Sustenabilitate",
                description: "Creăm soluții care respectă mediul înconjurător și generațiile viitoare.",
              },
              {
                title: "Excelență",
                description: "Ne dedicăm să oferim cea mai înaltă calitate în fiecare aspect al muncii noastre.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Echipa Noastră</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-200">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pregătit să Lucrezi cu Noi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Hai să transformăm împreună viziunea ta în realitate.</p>
          <Button asChild className="bg-brand-yellow text-black hover:bg-brand-yellow/90">
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </section>
    </>
  )
}


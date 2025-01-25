"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("loading")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setFormStatus("success")
  }

  return (
    <>
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contactează-ne</h1>
              <p className="text-xl text-gray-600">Suntem aici să te ajutăm să-ți transformi viziunea în realitate.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Informații de Contact</h2>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Adresă</h3>
                    <p className="text-gray-600">
                      Str. Exemple nr. 123
                      <br />
                      Timișoara, România
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@alphaarchitects.ro</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-gray-600">+40 700 000 000</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Program de Lucru</h3>
                  <p className="text-gray-600">
                    Luni - Vineri: 09:00 - 18:00
                    <br />
                    Sâmbătă - Duminică: Închis
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      Prenume
                    </label>
                    <Input id="firstName" name="firstName" required className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Nume
                    </label>
                    <Input id="lastName" name="lastName" required className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefon
                  </label>
                  <Input id="phone" name="phone" type="tel" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesaj
                  </label>
                  <Textarea id="message" name="message" required className="w-full min-h-[150px]" />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-blue/90"
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading" ? "Se trimite..." : "Trimite Mesajul"}
                </Button>

                {formStatus === "success" && (
                  <p className="text-green-600 text-center">
                    Mesajul a fost trimis cu succes! Vă vom contacta în curând.
                  </p>
                )}

                {formStatus === "error" && (
                  <p className="text-red-600 text-center">A apărut o eroare. Vă rugăm să încercați din nou.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-600">Harta va fi încărcată aici</p>
        </div>
      </section>
    </>
  )
}


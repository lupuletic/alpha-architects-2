import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">AlphaArchitects</h3>
            <p className="text-sm text-gray-400">
              Transformăm viziunea în realitate prin design și arhitectură inovatoare.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/despre" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/portofoliu" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Timișoara, România</li>
              <li>Tel: +40 700 000 000</li>
              <li>Email: contact@alphaarchitects.ro</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AlphaArchitects. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}


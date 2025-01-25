import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./.next/static/css/styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AlphaArchitects - Design Interior și Arhitectură în Timișoara",
  description:
    "Servicii profesionale de design interior și arhitectură pentru proiecte rezidențiale și comerciale în Timișoara",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="stylesheet" href="/_next/static/css/styles.css" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
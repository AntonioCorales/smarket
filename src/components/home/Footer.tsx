import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white px-8 py-12 relative overflow-hidden h-screen flex flex-col items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-sky-200/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-400/20 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400/20 rounded-full" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-green-400/20 rounded-full translate-x-1/4 translate-y-1/4" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            ¡Nunca ha sido tan fácil como Smarket!
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">CORREO</h3>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">CONTACTO</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">OFICINAS</h3>
              <p>Calle</p>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src="/images/6.webp"
            alt="Industrial workers in safety gear"
            width={700}
            height={700}
            className="rounded-xl object-cover object-center h-full w-full"
          />
        </div>
      </div>
    </footer>
  )
}


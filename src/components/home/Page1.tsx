import Image from "next/image";

export default function Page1() {
  return (
    <div className="min-h-screen bg-zinc-900 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff15_1px,_transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-orange-200/20 rounded-full blur-2xl" />

      <main className="container mx-auto px-4 py-16 relative my-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <div className="w-48">
              <Image 
                src="/logo-smarket.png"
                alt="Smarket"
                width={800}
                height={600}
                className="object-cover object-center rounded-md"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ">
              Smarket permite vender tu contenido educativo, crear promociones y gestionar fácilmente, todo en un solo lugar
            </h1>
            
            {/* CTA Button */}
            <button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 text-lg rounded-md"
            >
              COMIENZA A CREAR
            </button>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent lg:hidden" />
            <Image 
              src="/images/1.webp"
              alt="Smarket"
              width={800}
              height={600}
              className="object-cover object-center rounded-xl shadow-lg shadow-gray-400/40"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

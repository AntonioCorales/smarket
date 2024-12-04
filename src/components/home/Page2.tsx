
import Image from "next/image"

export default function Page2() {
  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-gray-300 rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-16 h-16 bg-orange-200 rounded-full opacity-50" />
      
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 text-center mb-16">
            Crea tu Propio Camino
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/2.webp"
                alt="Ilustración de dos personas trabajando con engranajes y una bombilla"
                width={500}
                height={400}
                className="w-full h-auto shadow-xl shadow-blue-400/40"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-gray-700 text-lg md:text-xl text-center md:text-left">
                Si buscas flexibilidad o un cambio en tu carrera, estamos aquí para hacerlo posible. 
                Comparte tus habilidades, utilízalas y convierte tus conocimientos en nuevas oportunidades. 
                Solo necesitas transformar lo que sabes en algo valioso para ofrecer.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md"
                >
                  COMIENZA A CREAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


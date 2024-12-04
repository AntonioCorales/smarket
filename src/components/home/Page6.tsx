import Image from "next/image";

export default function Page6() {
  return (
    <div className="min-h-screen bg-[#8db179] p-6 flex items-center justify-center h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-800/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-200 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="w-full max-w-6xl space-y-8 flex flex-col md:flex-row gap-8">
        <div className="flex flex-col">
          <Image
            src="/images/4.webp"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
        <div className="space-y-4 text-white flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Lleva tus habilidades al siguiente nivel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Nunca fue tan fácil seguir tu progreso con una sola herramienta
            digital. Realiza todo en nuestras plataformas intuitivas y fáciles
            de usar, y haz crecer tu comunidad e ingresos.
          </p>
        </div>
      </div>
    </div>
  );
}

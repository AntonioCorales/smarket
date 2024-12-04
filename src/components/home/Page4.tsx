import Image from "next/image";

export default function Page4() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-sky-200 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-green-300 rounded-full" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-200 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-24 h-24 bg-green-300 rounded-full" />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3254]">
            Vende tus Conocimientos
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Lecciones en video, suscripciones, productos y herramientas
            digitales... ¡Todo lo que necesitas! Smarket te permite explorar
            diversos sectores industriales. Únete como smarketer, creador de
            contenido, o forma parte de nuestra comunidad Smarkets para seguir
            aprendiendo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left column buttons */}
          <div className="space-y-3">
            <DivComponent>
              LIBROS
            </DivComponent>
            <DivComponent>
              MANUALES
            </DivComponent>
            <DivComponent>
              PLANTILLAS
            </DivComponent>
          </div>

          {/* Center illustration */}
          <div className="relative">
            <Image
              src="/images/10.webp"
              width={400}
              height={400}
              alt="Illustration of people shaking hands through a computer screen"
              className="w-full h-full object-cover rounded-md object-center shadow-xl shadow-emerald-600/30"
            />
          </div>

          {/* Right column buttons */}
          <div className="space-y-3">
            <DivComponent>
              CURSOS
            </DivComponent>
            <DivComponent>
              TALLERES
            </DivComponent>
            <DivComponent>
              SOFTWARE
            </DivComponent>
          </div>
        </div>
      </main>
    </div>
  );
}

function DivComponent(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className="w-full py-4 text-lg bg-[#4A665B] text-white px-1 rounded-md text-center shadow-md shadow-emerald-600/30" />;
}
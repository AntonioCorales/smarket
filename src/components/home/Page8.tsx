import Image from "next/image";
import Link from "next/link";

export default function Page8() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-50 flex items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-blue-200/50" />
      <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-gray-300/50" />
      <div className="absolute bottom-16 left-8 h-20 w-20 rounded-full bg-green-300/50" />
      <div className="absolute bottom-8 right-8 h-12 w-12 rounded-full bg-orange-300/50" />

      <div className="container mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-12">
        <div className="relative mb-12 w-full max-w-2xl">
          <Image
            src="/images/5.webp"
            alt="Ilustración de gestión del tiempo"
            width={600}
            height={400}
            className="mx-auto rounded-lg"
            priority
          />
        </div>

        <div className="text-center flex flex-col gap-2 justify-center items-center">
          <h1 className="mb-6 max-w-3xl text-3xl font-bold tracking-tight text-[#1e3a8a] sm:text-4xl md:text-5xl">
            Tu conocimiento puede ser la clave para que alguien comprenda y
            avance. ¡Comparte tu expertise!
          </h1>

          <Link
            href="/login"
            className="bg-[#4a77ca] px-8 py-6 text-lg font-semibold hover:bg-[#3d63a8] rounded-lg text-white w-fit"
          >
            COMIENZA A CREAR
          </Link>
        </div>
      </div>
    </section>
  );
}

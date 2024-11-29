import Image from "next/image";

export default function Page5() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24 flex flex-col items-center justify-center h-screen">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#7BC496] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5E6D3] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#7BC496] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <h1 className="text-[#2F4E43] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Aprende, monetiza, promociona, gestiona y haz crecer tu comunidad,
              todo en una sola plataforma.
            </h1>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-[#F8F9FE] rounded-lg">
                <div className="relative h-full">

                <div className="relative w-full h-full flex justify-center items-center">
                    <Image
                      src="/89e04bf696.jpg"
                      alt="Ilustración de persona trabajando"
                      className="object-contain"
                      width={600}
                      height={600}
                    />
                  </div>
                  {/* Charts and UI elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-blue-600 rounded flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  </div>

                  {/* Character illustration */}
                 

                  {/* Plant decoration */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-16 bg-[#7BC496] rounded-t-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CalendarMonthOutlined } from "@mui/icons-material";

export default function Page7() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Decorative circles */}
      <div className="absolute left-4 top-4 h-32 w-32 rounded-full bg-[#7FB69B] opacity-20 md:h-48 md:w-48" />
      <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-[#F8A07B] opacity-20 md:h-40 md:w-40" />
      <div className="absolute bottom-4 right-4 h-40 w-40 rounded-full bg-[#7FB69B] opacity-20 md:h-56 md:w-56" />
      <div className="absolute bottom-4 left-4 h-48 w-48 rounded-full bg-gray-100 opacity-20 md:h-64 md:w-64" />
      <div className="absolute left-1/4 top-1/4 h-16 w-16 rounded-full bg-[#F3E4C8] opacity-20 md:h-24 md:w-24" />

      {/* Main content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 flex items-center justify-center">
          <div className="relative h-24 w-24 rounded-lg bg-[#7FB69B]/10 flex flex-col items-center justify-center">
            <CalendarMonthOutlined
              className="w-24 text-[#7FB69B]"
              style={{
                width: "3rem",
                height: "3rem",
              }}
            />
          </div>
        </div>
        <h1 className="max-w-3xl text-3xl font-medium text-[#5C7B6F] md:text-5xl lg:text-6xl">
          Empieza a gestionar eficazmente tus conocimientos
        </h1>
      </div>
    </div>
  );
}

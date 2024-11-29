import Image from "next/image"
import { motion } from "framer-motion"

export default function Page3() {
  return (
    <section className="relative bg-zinc-800 px-4 py-16 overflow-hidden h-screen flex flex-col items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-400/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-400/20 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-orange-200/20 rounded-full translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center ">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿POR QUÉ UNIRSE SMARKET?
          </h2>
          <p className="text-xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Smarket ofrece una gama completa de servicios diseñados para adaptarse a las necesidades de los creadores de contenido educativo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative w-64 h-48 mx-auto mb-6">
              <Image
                src="/e13a53131e.jpg"
                alt="Persona escribiendo en un laptop mostrando contenido educativo"
                width={256}
                height={256}
                className="object-cover rounded-[40%_60%_70%_30%/30%_30%_70%_70%]"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Promociona</h3>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative  w-64 h-48 mx-auto mb-6">
              <Image
                src="/89e04bf696.jpg"
                alt="Ambiente de enseñanza con estudiantes y profesor"
                width={256}
                height={256}
                className="object-cover rounded-[70%_30%_30%_70%/60%_40%_60%_40%]"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Vende</h3>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-64 h-48 mx-auto mb-6">
              <Image
                src="/8f0991cb04.jpg"
                alt="Dashboard de gestión de activos educativos"
                width={256}
                height={256}
                className="object-cover rounded-[40%_60%_30%_70%/30%_60%_70%_40%]"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Gestiona</h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


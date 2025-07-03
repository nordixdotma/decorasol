import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative h-[50dvh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1675325152993-b3a5fa7f0356?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content - Aligned to the left and positioned lower */}
      <div className="relative h-full flex items-end justify-start">
        <div className="text-left text-white p-4 md:p-12 pb-16 md:pb-24 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Contactez-Nous</h1>
          <p className="text-base md:text-xl">Transformons ensemble votre espace.</p>
        </div>
      </div>
    </section>
  )
}

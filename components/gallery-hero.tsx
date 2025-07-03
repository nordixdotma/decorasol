import Image from "next/image"

export default function GalleryHero() {
  return (
    <section className="relative h-[50dvh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1666871525829-a71efce76005?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Notre Galerie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content - Aligned to the left and positioned lower */}
      <div className="relative h-full flex items-end justify-start">
        <div className="text-left text-white p-4 md:p-12 pb-16 md:pb-24 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Notre Galerie</h1>
        <p className="text-base md:text-xl">Découvrez la transformation de vos espaces avec nos planchers en bois.</p>
        </div>
      </div>
    </section>
  )
}

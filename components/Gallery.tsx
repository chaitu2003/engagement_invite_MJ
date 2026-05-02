import Image from "next/image";
import FadeIn from "./FadeIn";

const images = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-paper px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-wine">Gallery</p>
          <h2 className="font-playfair text-4xl font-semibold text-cocoa sm:text-5xl">Moments we cherish</h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((src, index) => (
            <FadeIn key={src} delay={index * 0.04}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-champagne shadow-soft">
                <Image
                  src={src}
                  alt={`Engagement gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

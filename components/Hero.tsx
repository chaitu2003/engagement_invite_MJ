import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="bg-paper relative flex min-h-[100svh] items-center justify-center px-5 py-24 text-center">
      <div className="pointer-events-none absolute left-8 top-28 h-28 w-28 rounded-full bg-blush/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-8 h-36 w-36 rounded-full bg-champagne/70 blur-3xl" />

      <FadeIn className="mx-auto max-w-4xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-wine sm:text-sm">
          We&apos;re getting engaged
        </p>

        <h1 className="font-playfair text-5xl font-semibold leading-[1.05] tracking-tight text-cocoa sm:text-7xl md:text-8xl">
          Jagadeesh <span className="text-wine">&</span> Moukthika
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-cocoa/70 sm:text-lg">
          With joy in our hearts and blessings around us, we invite you to celebrate a beautiful beginning.
        </p>

        <div className="mx-auto mt-9 inline-flex flex-col items-center rounded-full border border-wine/15 bg-white/55 px-8 py-4 shadow-soft backdrop-blur-sm sm:flex-row sm:gap-4">
          <span className="font-playfair text-2xl text-wine">10th May 2026</span>
          <span className="hidden h-5 w-px bg-wine/20 sm:block" />
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-cocoa/60">Save the date</span>
        </div>

        <div className="mt-10">
          <a href="#details" className="inline-flex rounded-full bg-cocoa px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-wine">
            View Invitation
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

import FadeIn from "./FadeIn";

const details = [
  { title: "Date", value: "10th May 2026" },
  { title: "Time", value: "6:30 PM onwards" },
  { title: "Venue", value: "Royal Convention Hall" },
];

export default function EventDetails() {
  return (
    <section id="details" className="bg-white px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-wine">Event Details</p>
          <h2 className="font-playfair text-4xl font-semibold text-cocoa sm:text-5xl">
            Join us for the celebration
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {details.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="rounded-[2rem] border border-wine/10 bg-ivory p-8 text-center shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wine">{item.title}</p>
                <p className="mt-4 font-playfair text-3xl text-cocoa">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.16}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-wine/10 shadow-soft">
            <iframe
              title="Engagement venue map"
              src="https://www.google.com/maps?q=Royal%20Convention%20Hall&output=embed"
              className="h-[320px] w-full border-0 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Royal%20Convention%20Hall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-wine px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-cocoa"
            >
              Open in Google Maps
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

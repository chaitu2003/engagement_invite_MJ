import FadeIn from "./FadeIn";

export default function Story() {
  return (
    <section id="story" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-wine">Our Story</p>
          <h2 className="font-playfair text-4xl font-semibold text-cocoa sm:text-5xl">
            A quiet sense of maybe
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-[260px_1fr]">
          <FadeIn delay={0.1}>
            <div className="sticky top-24 space-y-7 rounded-[2rem] border border-wine/10 bg-white/60 p-7 shadow-soft backdrop-blur-sm">
              <div>
                <p className="font-playfair text-4xl text-wine">March 7</p>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-cocoa/50">First meeting</p>
              </div>
              <div className="h-px bg-wine/10" />
              <div>
                <p className="font-playfair text-4xl text-wine">March 28</p>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-cocoa/50">Official meetup</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <article className="space-y-6 rounded-[2rem] border border-wine/10 bg-white/70 p-7 text-lg leading-9 text-cocoa/75 shadow-soft sm:p-10">
              <p>✨ <strong>Our Story</strong></p>
              <p>Not every story begins with sparks. Some begin with a conversation… and a quiet sense of <em>maybe</em>. 🌿</p>
              <p>On the <strong>7th of March</strong>, two paths crossed for the very first time. Not as strangers, not as lovers—but as two people willing to listen, to understand, and to see what destiny might be sketching in the background.</p>
              <p>Words were exchanged, smiles were shared, and somewhere between polite questions and soft laughter, a small comfort began to grow—like a melody finding its rhythm. 🎶</p>
              <p>Days passed, carrying with them a gentle curiosity, until the <strong>28th of March</strong> arrived—not just as another meeting, but as a moment that quietly said, <em>“this could be something real.”</em></p>
              <p>What started as tradition slowly turned into connection. What began as an introduction began to feel like the beginning of a journey.</p>
              <p>And now, with hearts a little more certain and smiles a little more familiar, we take the next step—together. ✨</p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

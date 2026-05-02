const links = [
  { label: "Story", href: "#story" },
  { label: "Details", href: "#details" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-ivory/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-playfair text-xl font-semibold tracking-wide text-cocoa">
          J <span className="text-wine">&</span> M
        </a>

        <div className="flex items-center gap-5 text-sm font-medium text-cocoa/70 sm:gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-wine">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

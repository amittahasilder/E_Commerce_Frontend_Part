const footerLinks = {
  Shop: [
    "All Products",
    "Fashion",
    "Laptops",
    "Smartphones",
    "Gaming",
  ],

  Company: [
    "About Us",
    "Contact",
    "Careers",
    "Our Story",
  ],

  Support: [
    "Help Center",
    "Shipping",
    "Returns",
    "Privacy Policy",
  ],
};

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-5 pt-16 text-white sm:px-8 lg:px-12">

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black">
              Shop
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nova
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
              Your modern destination for premium products, exclusive
              deals and a seamless online shopping experience.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm transition hover:border-purple-400/40 hover:bg-purple-500/10"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm transition hover:border-purple-400/40 hover:bg-purple-500/10"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm transition hover:border-purple-400/40 hover:bg-purple-500/10"
                aria-label="Twitter"
              >
                𝕏
              </a>

            </div>

          </div>

          {/* Links */}

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                {title}
              </h3>

              <ul className="space-y-3">

                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition hover:text-purple-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* Bottom */}

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-center text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p>
            © 2026 ShopNova. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <a href="#" className="transition hover:text-zinc-300">
              Privacy
            </a>

            <a href="#" className="transition hover:text-zinc-300">
              Terms
            </a>

            <a href="#" className="transition hover:text-zinc-300">
              Cookies
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
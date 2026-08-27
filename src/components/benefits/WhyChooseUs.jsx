const benefits = [
  {
    id: 1,
    icon: "🚚",
    title: "Fast & Free Delivery",
    description:
      "Enjoy fast and reliable delivery with free shipping on selected orders.",
  },
  {
    id: 2,
    icon: "🔒",
    title: "Secure Payment",
    description:
      "Your payment information is protected with secure and trusted technology.",
  },
  {
    id: 3,
    icon: "💎",
    title: "Premium Quality",
    description:
      "We carefully select high-quality products designed for everyday use.",
  },
  {
    id: 4,
    icon: "🎧",
    title: "24/7 Support",
    description:
      "Our support team is always ready to help whenever you need assistance.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 text-white sm:px-8 lg:px-12">
      
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Shopping Made
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Simple & Better
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            We make online shopping simple, secure and enjoyable with
            quality products and reliable service.
          </p>

        </div>

        {/* ================= BENEFITS GRID ================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-purple-500/10"
            >

              {/* Card Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

              {/* Icon */}

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                {benefit.icon}
              </div>

              {/* Title */}

              <h3 className="relative mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-purple-300">
                {benefit.title}
              </h3>

              {/* Description */}

              <p className="relative mt-3 text-sm leading-6 text-zinc-500">
                {benefit.description}
              </p>

              {/* Bottom Line */}

              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-500 group-hover:w-2/3" />

            </div>
          ))}

        </div>

        {/* ================= TRUST BAR ================= */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-xl">

          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">

            <div>
              <p className="text-2xl font-black sm:text-3xl">
                10K+
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Happy Customers
              </p>
            </div>

            <div>
              <p className="text-2xl font-black sm:text-3xl">
                500+
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Premium Products
              </p>
            </div>

            <div>
              <p className="text-2xl font-black sm:text-3xl">
                4.9/5
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Customer Rating
              </p>
            </div>

            <div>
              <p className="text-2xl font-black sm:text-3xl">
                24/7
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Customer Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
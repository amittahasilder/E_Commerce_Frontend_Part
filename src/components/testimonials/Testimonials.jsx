const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Verified Customer",
    rating: 5,
    text: "Amazing shopping experience. The product quality was excellent and delivery was much faster than I expected.",
    avatar: "AM",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Verified Customer",
    rating: 5,
    text: "The website feels premium and the products are exactly as described. I will definitely shop here again.",
    avatar: "SW",
  },
  {
    id: 3,
    name: "Daniel Carter",
    role: "Verified Customer",
    rating: 5,
    text: "Great prices, beautiful products and excellent customer support. Everything was smooth from start to finish.",
    avatar: "DC",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 text-white sm:px-8 lg:px-12">

      {/* Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Customer Reviews
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            What Our
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            Thousands of customers trust us for quality products and a
            seamless shopping experience.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-purple-500/10"
            >

              {/* Quote */}
              <div className="text-5xl leading-none text-purple-400/40">
                “
              </div>

              {/* Stars */}
              <div className="mt-3 flex gap-1 text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-7 text-zinc-400">
                {testimonial.text}
              </p>

              {/* User */}
              <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-sm font-black">
                  {testimonial.avatar}
                </div>

                <div>
                  <h3 className="font-bold">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-500 group-hover:w-2/3" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 text-white sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-br from-purple-950/60 via-zinc-900 to-cyan-950/40 px-6 py-14 text-center shadow-2xl sm:px-12">

          {/* Badge */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
            Stay Updated
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-black sm:text-5xl">
            Get the Latest
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Deals & Updates
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Subscribe to our newsletter and be the first to know about
            new products, exclusive offers and special deals.
          </p>

          {/* Form */}
          <form
            onSubmit={(event) => event.preventDefault()}
            className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-h-[54px] flex-1 rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/10"
            />

            <button
              type="submit"
              className="min-h-[54px] rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-7 text-sm font-bold transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
            >
              Subscribe →
            </button>
          </form>

          <p className="mt-4 text-xs text-zinc-600">
            No spam. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
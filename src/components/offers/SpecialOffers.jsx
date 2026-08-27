import { useEffect, useState } from "react";

function SpecialOffers() {
  const [time, setTime] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;

              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 text-white sm:px-8 lg:px-12">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= OFFER CARD ================= */}

        <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-br from-purple-950/70 via-zinc-900 to-cyan-950/50">

          {/* Animated Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 px-7 py-12 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-16">

            {/* ================= LEFT CONTENT ================= */}

            <div>

              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                Limited Time Offer
              </div>

              {/* Heading */}

              <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Upgrade Your
                <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Lifestyle
                </span>
              </h2>

              {/* Description */}

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                Get premium products at unbeatable prices. This exclusive
                offer is available for a limited time only.
              </p>

              {/* ================= DISCOUNT ================= */}

              <div className="mt-7 flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-center backdrop-blur-xl">
                  <div>
                    <p className="text-3xl font-black text-white">
                      50%
                    </p>

                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                      OFF
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-300">
                    On selected products
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    No code required
                  </p>
                </div>

              </div>

              {/* ================= BUTTON ================= */}

              <button
                type="button"
                className="group relative mt-8 overflow-hidden rounded-2xl bg-white px-7 py-4 text-sm font-bold text-zinc-950 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Shop the Offer

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

            </div>

            {/* ================= RIGHT SIDE ================= */}

            <div className="relative">

              {/* Product Image */}

              <div className="relative mx-auto max-w-md">

                {/* Glow Behind Product */}

                <div className="absolute inset-10 rounded-full bg-purple-500/20 blur-[80px]" />

                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85"
                  alt="Special offer product"
                  className="relative z-10 h-[360px] w-full rounded-[30px] object-cover shadow-2xl transition duration-700 hover:scale-[1.03]"
                />

                {/* Floating Discount */}

                <div className="absolute -left-3 top-8 z-20 flex h-20 w-20 rotate-[-8deg] items-center justify-center rounded-full border border-white/20 bg-purple-600 text-center shadow-xl shadow-purple-500/30 sm:-left-6">
                  <div>
                    <p className="text-xl font-black">
                      50%
                    </p>

                    <p className="text-[9px] font-bold uppercase">
                      OFF
                    </p>
                  </div>
                </div>

              </div>

              {/* ================= COUNTDOWN ================= */}

              <div className="relative z-20 mt-6">

                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Offer Ends In
                </p>

                <div className="flex justify-center gap-2 sm:gap-3">

                  {/* Days */}

                  <div className="min-w-[65px] rounded-2xl border border-white/10 bg-black/30 p-3 text-center backdrop-blur-xl">
                    <p className="text-2xl font-black">
                      {formatNumber(time.days)}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-500">
                      Days
                    </p>
                  </div>

                  <span className="flex items-center text-xl font-bold text-purple-400">
                    :
                  </span>

                  {/* Hours */}

                  <div className="min-w-[65px] rounded-2xl border border-white/10 bg-black/30 p-3 text-center backdrop-blur-xl">
                    <p className="text-2xl font-black">
                      {formatNumber(time.hours)}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-500">
                      Hours
                    </p>
                  </div>

                  <span className="flex items-center text-xl font-bold text-purple-400">
                    :
                  </span>

                  {/* Minutes */}

                  <div className="min-w-[65px] rounded-2xl border border-white/10 bg-black/30 p-3 text-center backdrop-blur-xl">
                    <p className="text-2xl font-black">
                      {formatNumber(time.minutes)}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-500">
                      Min
                    </p>
                  </div>

                  <span className="flex items-center text-xl font-bold text-purple-400">
                    :
                  </span>

                  {/* Seconds */}

                  <div className="min-w-[65px] rounded-2xl border border-white/10 bg-black/30 p-3 text-center backdrop-blur-xl">
                    <p className="text-2xl font-black text-purple-300">
                      {formatNumber(time.seconds)}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-500">
                      Sec
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Line */}

          <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

        </div>

      </div>
    </section>
  );
}

export default SpecialOffers;
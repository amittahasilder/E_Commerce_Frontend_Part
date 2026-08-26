
import { useEffect, useState } from "react";

const heroProducts = [
  {
    id: 1,
    name: "Shadow Denim",
    type: "Premium Jacket",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 2,
    name: "Urban Essential",
    type: "Oversized T-Shirt",
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 3,
    name: "Street Runner",
    type: "Premium Sneakers",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 4,
    name: "Cloud Hoodie",
    type: "Heavyweight Hoodie",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 5,
    name: "Classic Denim",
    type: "Street Jacket",
    price: "$119",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=90",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // ==========================================
  // AUTO ROTATION
  // ==========================================

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroProducts.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [paused]);

  // ==========================================
  // CONTROLS
  // ==========================================

  const nextProduct = () => {
    setActive((current) => (current + 1) % heroProducts.length);
  };

  const previousProduct = () => {
    setActive((current) =>
      current === 0 ? heroProducts.length - 1 : current - 1
    );
  };

  const product = heroProducts[active];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-600/20
            blur-[150px]
            animate-pulse
          "
        />

        {/* Cyan Glow */}

        <div
          className="
            absolute
            right-[-120px]
            top-[15%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />

        {/* Pink Glow */}

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-fuchsia-600/10
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <span
          className="absolute left-[10%] top-[25%] h-1 w-1 rounded-full bg-cyan-300/60 animate-ping"
        />

        <span
          className="absolute left-[25%] top-[70%] h-1 w-1 rounded-full bg-purple-300/60 animate-pulse"
        />

        <span
          className="absolute left-[70%] top-[18%] h-1 w-1 rounded-full bg-white/50 animate-ping"
        />

        <span
          className="absolute right-[12%] top-[55%] h-1 w-1 rounded-full bg-cyan-300/50 animate-pulse"
        />

        <span
          className="absolute bottom-[20%] left-[55%] h-1 w-1 rounded-full bg-purple-300/50 animate-ping"
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative z-20">

            {/* Badge */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                backdrop-blur-xl
                animate-[fadeIn_1s_ease-out]
              "
            >

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_15px_rgba(103,232,249,.9)]
                  animate-pulse
                "
              />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                New Collection • 2026
              </span>

            </div>

            {/* Heading */}

            <h1
              className="
                max-w-3xl
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.05em]
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >

              DEFINE

              <br />

              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                YOUR
              </span>

              <br />

              STYLE.

            </h1>

            {/* Description */}

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/45 sm:text-base">
              Premium streetwear designed for the next generation.
              Bold silhouettes, elevated materials and timeless design.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-4">

              <button
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-black
                  transition
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(255,255,255,.15)]
                "
              >

                <span className="relative z-10">
                  Shop Collection →
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-cyan-300
                    transition-transform
                    duration-500
                    group-hover:translate-x-0
                  "
                />

              </button>

              <button
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white/70
                  backdrop-blur-xl
                  transition
                  hover:border-white/25
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                Explore Lookbook
              </button>

            </div>

            {/* Stats */}

            <div className="mt-12 flex gap-8 border-t border-white/10 pt-7">

              <div>
                <p className="text-xl font-bold">25K+</p>
                <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                  Customers
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">4.9/5</p>
                <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                  Rating
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">120+</p>
                <p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                  Styles
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT PRODUCT SHOWCASE
          ================================================== */}

          <div
            className="relative flex min-h-[620px] items-center justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >

            {/* =================================================
                OUTER ROTATING RING
            ================================================== */}

            <div
              className="
                absolute
                h-[420px]
                w-[420px]
                rounded-full
                border
                border-white/[0.08]
                animate-[spin_24s_linear_infinite]
                sm:h-[540px]
                sm:w-[540px]
              "
            >

              <span
                className="
                  absolute
                  left-1/2
                  top-[-4px]
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_30px_10px_rgba(34,211,238,.4)]
                "
              />

              <span
                className="
                  absolute
                  bottom-[15%]
                  right-[5%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_25px_8px_rgba(168,85,247,.5)]
                "
              />

            </div>

            {/* =================================================
                SECOND RING
            ================================================== */}

            <div
              className="
                absolute
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-dashed
                border-purple-400/10
                animate-[spin_35s_linear_infinite_reverse]
                sm:h-[440px]
                sm:w-[440px]
              "
            />

            {/* =================================================
                GLOW
            ================================================== */}

            <div
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                bg-purple-600/30
                blur-[100px]
                animate-pulse
                sm:h-[400px]
                sm:w-[400px]
              "
            />

            {/* =================================================
                PRODUCT CARD
            ================================================== */}

            <div
              className="
                relative
                z-20
                w-[320px]
                animate-[float_5s_ease-in-out_infinite]
                sm:w-[390px]
              "
            >

              {/* Neon border */}

              <div
                className="
                  absolute
                  -inset-[2px]
                  rounded-[38px]
                  bg-gradient-to-b
                  from-cyan-300
                  via-purple-500
                  to-fuchsia-500
                  opacity-70
                  blur-[3px]
                "
              />

              {/* Card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/20
                  bg-[#0c0c10]/90
                  p-3
                  shadow-[0_35px_100px_rgba(0,0,0,.8)]
                  backdrop-blur-2xl
                "
              >

                {/* Image area */}

                <div
                  className="
                    relative
                    h-[430px]
                    overflow-hidden
                    rounded-[28px]
                    bg-gradient-to-br
                    from-white/[0.08]
                    via-white/[0.02]
                    to-purple-500/[0.06]
                  "
                >

                  {/* Inner glow */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-56
                      w-56
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-cyan-400/10
                      blur-[80px]
                    "
                  />

                  {/* Product */}

                  <img
                    key={product.id}
                    src={product.image}
                    alt={product.name}
                    className="
                      relative
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-1000
                      ease-out
                    "
                    style={{
                      animation: "productEnter 0.9s ease-out",
                    }}
                  />

                  {/* Bottom image fade */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-40
                      bg-gradient-to-t
                      from-black/80
                      to-transparent
                    "
                  />

                  {/* Angle label */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      px-3
                      py-1.5
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/50
                      backdrop-blur-xl
                    "
                  >
                    360° View
                  </div>

                </div>

                {/* Product information */}

                <div className="px-3 pb-2 pt-4">

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-300">
                        {product.type}
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        {product.name}
                      </h2>

                    </div>

                    <p className="text-xl font-black">
                      {product.price}
                    </p>

                  </div>

                  <button
                    className="
                      mt-4
                      w-full
                      rounded-xl
                      bg-white
                      py-3
                      text-xs
                      font-bold
                      text-black
                      transition
                      hover:bg-cyan-300
                    "
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

            {/* =================================================
                FLOATING CARD LEFT
            ================================================== */}

            <div
              className="
                absolute
                left-[-5px]
                top-[15%]
                z-30
                hidden
                w-32
                rounded-2xl
                border
                border-white/10
                bg-black/50
                p-2
                shadow-2xl
                backdrop-blur-xl
                sm:block
                animate-[floatSmall_4s_ease-in-out_infinite]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
                alt="Urban T-Shirt"
                className="h-28 w-full rounded-xl object-cover"
              />

              <p className="px-1 pt-2 text-[8px] uppercase tracking-widest text-white/35">
                T-Shirt
              </p>

              <p className="px-1 pb-1 text-xs font-semibold">
                Urban Essential
              </p>

            </div>

            {/* =================================================
                FLOATING CARD RIGHT
            ================================================== */}

            <div
              className="
                absolute
                right-[-5px]
                top-[22%]
                z-30
                hidden
                w-32
                rounded-2xl
                border
                border-white/10
                bg-black/50
                p-2
                shadow-2xl
                backdrop-blur-xl
                sm:block
                animate-[floatSmallReverse_4.5s_ease-in-out_infinite]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
                alt="Street Runner"
                className="h-28 w-full rounded-xl object-cover"
              />

              <p className="px-1 pt-2 text-[8px] uppercase tracking-widest text-cyan-300">
                Sneakers
              </p>

              <p className="px-1 pb-1 text-xs font-semibold">
                Street Runner
              </p>

            </div>

            {/* =================================================
                PRICE FLOAT
            ================================================== */}

            <div
              className="
                absolute
                bottom-[15%]
                left-0
                z-30
                rounded-2xl
                border
                border-white/10
                bg-black/60
                px-5
                py-4
                backdrop-blur-xl
                animate-[floatSmall_4s_ease-in-out_infinite]
              "
            >

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                Starting From
              </p>

              <p className="mt-1 text-2xl font-black">
                $59
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          CONTROLS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-50
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      >

        {/* Previous */}

        <button
          onClick={previousProduct}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-white/50
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          ←
        </button>

        {/* Dots */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-black/50
            px-4
            py-3
            backdrop-blur-xl
          "
        >

          {heroProducts.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              aria-label={`Show ${item.name}`}
            >

              <span
                className={`
                  block
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    active === index
                      ? "w-8 bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,.9)]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }
                `}
              />

            </button>
          ))}

        </div>

        {/* Next */}

        <button
          onClick={nextProduct}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-white/50
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          →
        </button>

      </div>

      {/* Bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#050507]
          to-transparent
        "
      />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes floatSmall {
          0%, 100% {
            transform: translateY(0px) rotate(-2deg);
          }

          50% {
            transform: translateY(-16px) rotate(2deg);
          }
        }

        @keyframes floatSmallReverse {
          0%, 100% {
            transform: translateY(0px) rotate(2deg);
          }

          50% {
            transform: translateY(14px) rotate(-2deg);
          }
        }

        @keyframes productEnter {
          0% {
            opacity: 0;
            transform: scale(.82) rotateY(35deg) translateX(45px);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg) translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}


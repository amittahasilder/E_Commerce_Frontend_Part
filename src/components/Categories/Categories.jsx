import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Fashion",
    count: "120+ Products",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    name: "Electronics",
    count: "180+ Products",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    name: "Smartphones",
    count: "150+ Products",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    name: "Gaming",
    count: "110+ Products",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    name: "Accessories",
    count: "90+ Products",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    name: "Audio",
    count: "80+ Products",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Categories() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-28 text-white sm:px-8 lg:px-12">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 text-center"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 150,
            }}
            className="mx-auto mb-5 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300"
          >
            Explore Collection
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

            Shop by{" "}

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Category
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Explore our premium collections and discover products designed
            for your lifestyle.
          </p>

        </motion.div>

        {/* =====================================================
            CATEGORY GRID
        ====================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >

          {categories.map((category, index) => (

            <motion.article
              key={category.id}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.015,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 ${
                index === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <motion.img
                src={category.image}
                alt={category.name}
                loading="lazy"
                whileHover={{
                  scale: 1.12,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`w-full object-cover ${
                  index === 0
                    ? "h-[440px] lg:h-full lg:min-h-[625px]"
                    : "h-[300px]"
                }`}
              />

              {/* =================================================
                  DARK GRADIENT
              ================================================== */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* =================================================
                  PURPLE / CYAN HOVER
              ================================================== */}

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-tr from-purple-700/40 via-transparent to-cyan-400/20"
              />

              {/* =================================================
                  SHINE EFFECT
              ================================================== */}

              <motion.div
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              {/* =================================================
                  NUMBER
              ================================================== */}

              <div className="absolute right-5 top-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-semibold text-white/70 backdrop-blur-xl">
                  0{index + 1}
                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

                <motion.div
                  initial={{ y: 15, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                    Collection
                  </p>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {category.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">

                    <p className="text-sm text-zinc-300">
                      {category.count}
                    </p>

                    {/* Arrow */}
                    <motion.div
                      whileHover={{
                        rotate: -45,
                        scale: 1.15,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl backdrop-blur-xl transition-colors duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/30"
                    >
                      →
                    </motion.div>

                  </div>

                </motion.div>

              </div>

              {/* =================================================
                  BORDER GLOW
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent transition duration-500 group-hover:border-purple-400/30" />

            </motion.article>

          ))}

        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="mt-12 flex justify-center"
        >

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold backdrop-blur-xl transition hover:border-purple-400/40 hover:bg-purple-500/10"
          >

            View All Categories

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>

          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}

export default Categories;
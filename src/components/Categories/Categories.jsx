import { motion } from "framer-motion";
import {
  Shirt,
  Laptop,
  Smartphone,
  Headphones,
  Watch,
  Gamepad2,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Fashion",
    count: "120+ Products",
    icon: Shirt,
  },
  {
    id: 2,
    name: "Laptops",
    count: "80+ Products",
    icon: Laptop,
  },
  {
    id: 3,
    name: "Smartphones",
    count: "150+ Products",
    icon: Smartphone,
  },
  {
    id: 4,
    name: "Headphones",
    count: "90+ Products",
    icon: Headphones,
  },
  {
    id: 5,
    name: "Watches",
    count: "70+ Products",
    icon: Watch,
  },
  {
    id: 6,
    name: "Gaming",
    count: "110+ Products",
    icon: Gamepad2,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Explore Collection
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Shop by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Discover premium products carefully selected for your lifestyle.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group relative cursor-pointer"
              >
                {/* Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />

                {/* Card */}
                <div className="relative flex min-h-[190px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-purple-400/40 group-hover:bg-white/[0.08]">
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, 0],
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-400 transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-400"
                  >
                    <Icon size={30} strokeWidth={1.7} />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold">
                    {category.name}
                  </h3>

                  {/* Count */}
                  <p className="mt-2 text-xs text-zinc-500">
                    {category.count}
                  </p>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-500 group-hover:w-2/3" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
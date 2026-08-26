import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <motion.nav
          animate={{
            maxWidth: scrolled ? "1100px" : "1280px",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mx-auto flex h-[68px] items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border border-white/[0.10] bg-zinc-950/75 shadow-2xl shadow-black/20 backdrop-blur-2xl"
              : "border border-white/[0.06] bg-white/[0.025] backdrop-blur-xl"
          }`}
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <motion.a
            href="/"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2"
          >
            {/* Logo mark */}
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white text-black">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-16 w-16 bg-gradient-to-tr from-blue-500 via-purple-500 to-transparent opacity-80"
              />

              <span className="relative z-10 text-sm font-black">
                X
              </span>
            </div>

            {/* Logo text */}
            <div className="leading-none">
              <span className="block text-[17px] font-black tracking-[-0.04em] text-white">
                SHOP<span className="text-blue-500">X</span>
              </span>

              <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                Premium Store
              </span>
            </div>
          </motion.a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex items-center rounded-full border border-white/[0.06] bg-white/[0.025] p-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + index * 0.07,
                    duration: 0.4,
                  }}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {/* Active indicator */}
                  {index === 0 && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>

                  {/* Hover line */}
                  <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-400 transition-all duration-300 group-hover:w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT ACTIONS
          ================================================== */}

          <div className="flex items-center gap-1.5">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setSearchOpen(true)}
              className="hidden items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-zinc-400 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white sm:flex"
            >
              <Search size={16} strokeWidth={1.8} />

              <span className="text-xs text-zinc-500">
                Search
              </span>

              <kbd className="hidden rounded-md border border-white/10 px-1.5 py-0.5 text-[9px] text-zinc-600 lg:block">
                /
              </kbd>
            </motion.button>

            {/* Mobile search */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(true)}
              className="flex rounded-full p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white sm:hidden"
            >
              <Search size={18} />
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="relative hidden rounded-full p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white sm:block"
            >
              <Heart size={18} strokeWidth={1.8} />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full border-2 border-zinc-950 bg-white px-1 text-[8px] font-bold text-black">
                0
              </span>
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="relative rounded-full p-2.5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <ShoppingBag size={18} strokeWidth={1.8} />

              <motion.span
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full border-2 border-zinc-950 bg-blue-500 px-1 text-[8px] font-bold text-white"
              >
                0
              </motion.span>
            </motion.button>

            {/* Divider */}
            <div className="mx-1 hidden h-6 w-px bg-white/10 sm:block" />

            {/* Theme */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="relative hidden h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition hover:bg-white/[0.08] hover:text-white sm:flex"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? "moon" : "sun"}
                  initial={{
                    opacity: 0,
                    y: 12,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {darkMode ? (
                    <Moon size={16} />
                  ) : (
                    <Sun size={16} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Account */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] py-1.5 pl-1.5 pr-3 text-zinc-300 transition hover:bg-white/[0.08] hover:text-white lg:flex"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900">
                <UserRound size={14} />
              </span>

              <span className="text-xs font-medium">
                Account
              </span>
            </motion.button>

            {/* Mobile menu */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2.5 text-zinc-300 transition hover:bg-white/10 hover:text-white md:hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                >
                  {mobileOpen ? (
                    <X size={22} />
                  ) : (
                    <Menu size={22} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-full flex-col px-6 pb-8 pt-28"
            >
              {/* Mobile heading */}
              <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                    Navigation
                  </p>

                  <h2 className="text-3xl font-semibold tracking-tight text-white">
                    Explore
                  </h2>
                </div>

                <span className="text-xs text-zinc-600">
                  01 — 04
                </span>
              </div>

              {/* Links */}
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.08,
                      duration: 0.45,
                    }}
                    className="group flex items-center justify-between border-b border-white/[0.08] py-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-600">
                        0{index + 1}
                      </span>

                      <span className="text-3xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400">
                        {item.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto flex items-center justify-between"
              >
                <div>
                  <p className="text-xs text-zinc-600">
                    Premium Store
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">
                    Discover something better.
                  </p>
                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400"
                >
                  {darkMode ? (
                    <Moon size={17} />
                  ) : (
                    <Sun size={17} />
                  )}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          SEARCH OVERLAY
      ====================================================== */}

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-zinc-950/90 px-5 pt-28 backdrop-blur-2xl"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -25,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto max-w-3xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Search
                </span>

                <button
                  onClick={() => setSearchOpen(false)}
                  className="rounded-full p-2 text-zinc-500 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-2xl shadow-black/30">
                <Search
                  size={24}
                  className="text-zinc-500 transition-colors group-focus-within:text-blue-400"
                />

                <input
                  autoFocus
                  type="text"
                  placeholder="Search products, categories..."
                  className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-600"
                />

                <kbd className="hidden rounded-lg border border-white/10 px-2 py-1 text-xs text-zinc-600 sm:block">
                  ESC
                </kbd>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
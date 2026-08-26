import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-zinc-950/75 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* ================= LOGO ================= */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative z-50 text-2xl font-black tracking-tight text-white"
          >
            SHOP
            <span className="text-blue-500 transition-colors duration-300 group-hover:text-purple-400">
              X
            </span>

            {/* Logo glow */}
            <span className="absolute -inset-2 -z-10 rounded-full bg-blue-500/0 blur-xl transition-all duration-500 group-hover:bg-blue-500/20" />
          </motion.a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  duration: 0.4,
                }}
                className="group relative py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.name}

                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-1">

            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setSearchOpen(true)}
              className="hidden rounded-full p-2.5 text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:text-white sm:block"
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.8} />
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="relative hidden rounded-full p-2.5 text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:text-white sm:block"
              aria-label="Wishlist"
            >
              <Heart size={19} strokeWidth={1.8} />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-[9px] font-bold text-white">
                0
              </span>
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="relative rounded-full p-2.5 text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={19} strokeWidth={1.8} />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-[9px] font-bold text-white">
                0
              </span>
            </motion.button>

            {/* Account */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="hidden rounded-full p-2.5 text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:text-white sm:block"
              aria-label="Account"
            >
              <User size={19} strokeWidth={1.8} />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="relative ml-1 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? "moon" : "sun"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  {darkMode ? (
                    <Moon size={17} />
                  ) : (
                    <Sun size={17} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-1 rounded-full p-2 text-zinc-300 transition-all duration-300 hover:bg-white/10 md:hidden"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? (
                    <X size={23} />
                  ) : (
                    <Menu size={23} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

          </div>
        </nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
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
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-full flex-col px-7 pb-8 pt-28"
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="border-b border-white/10 py-5 text-3xl font-semibold text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-sm text-zinc-600">
                  © 2026 SHOPX
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SEARCH OVERLAY ================= */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center bg-zinc-950/90 px-5 pt-28 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.97 }}
              className="w-full max-w-2xl"
            >
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                <Search
                  size={22}
                  className="text-zinc-500"
                />

                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-600"
                />

                <button
                  onClick={() => setSearchOpen(false)}
                  className="rounded-full p-2 text-zinc-500 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
const products = [
  {
    id: 1,
    name: "Premium Jacket",
    category: "Fashion",
    price: "$89",
    oldPrice: "$129",
    rating: "4.9",
    reviews: "128",
    discount: "31% OFF",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 2,
    name: "MacBook Pro",
    category: "Laptop",
    price: "$1,499",
    oldPrice: "$1,699",
    rating: "4.8",
    reviews: "96",
    discount: "12% OFF",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 3,
    name: "iPhone Pro Max",
    category: "Smartphone",
    price: "$1,199",
    oldPrice: "$1,399",
    rating: "4.9",
    reviews: "214",
    discount: "14% OFF",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 4,
    name: "Wireless Headphones",
    category: "Audio",
    price: "$249",
    oldPrice: "$299",
    rating: "4.7",
    reviews: "87",
    discount: "17% OFF",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 5,
    name: "Smart Watch",
    category: "Accessories",
    price: "$329",
    oldPrice: "$399",
    rating: "4.8",
    reviews: "143",
    discount: "18% OFF",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 6,
    name: "Gaming Setup",
    category: "Gaming",
    price: "$599",
    oldPrice: "$699",
    rating: "4.9",
    reviews: "76",
    discount: "14% OFF",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
  },
];

function FeaturedProducts() {
  return (
    <section className="bg-zinc-950 px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Trending Now
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Discover our most popular products, selected for quality,
            performance and style.
          </p>

        </div>

        {/* ================= PRODUCT GRID ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.07]"
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-[330px] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                {/* Discount */}

                <div className="absolute left-4 top-4 rounded-full bg-red-500/90 px-3 py-1.5 text-xs font-bold text-white">
                  {product.discount}
                </div>

                {/* Wishlist */}

                <button
                  type="button"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl backdrop-blur-md transition hover:scale-110 hover:bg-pink-500/30"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  ♡
                </button>

                {/* Category */}

                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                  {product.category}
                </div>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-5">

                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-purple-300">
                  {product.name}
                </h3>

                {/* Rating */}

                <div className="mt-3 flex items-center gap-2">

                  <span className="text-yellow-400">
                    ★
                  </span>

                  <span className="font-semibold">
                    {product.rating}
                  </span>

                  <span className="text-sm text-zinc-500">
                    ({product.reviews} reviews)
                  </span>

                </div>

                {/* Price */}

                <div className="mt-4 flex items-center gap-3">

                  <span className="text-2xl font-black">
                    {product.price}
                  </span>

                  <span className="text-sm text-zinc-500 line-through">
                    {product.oldPrice}
                  </span>

                </div>

                {/* Add To Cart */}

                <button
                  type="button"
                  className="mt-5 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3.5 text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98]"
                >
                  Add to Cart →
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* ================= VIEW ALL ================= */}

        <div className="mt-12 flex justify-center">

          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10"
          >
            View All Products →
          </button>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;
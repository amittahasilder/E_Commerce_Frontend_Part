// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Categories from "./components/categories/Categories";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Categories />
//     </div>
//   );
// }

// export default App;



import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/categories/Categories";
import FeaturedProducts from "./components/products/FeaturedProducts";
import SpecialOffers from "./components/offers/SpecialOffers";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <Hero />

      <Categories />

      <FeaturedProducts />

      <SpecialOffers />
    </div>
  );
}

export default App;
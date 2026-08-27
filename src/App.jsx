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
import WhyChooseUs from "./components/benefits/WhyChooseUs";

import Newsletter from "./components/newsletter/Newsletter";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <Hero />

      <Categories />

      <FeaturedProducts />

      <SpecialOffers />

      <WhyChooseUs />

      <Newsletter />

      <Testimonials />

      <Footer />

    </div>
  );
}

export default App;
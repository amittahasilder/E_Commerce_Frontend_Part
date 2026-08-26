import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <Hero />

      <Categories />
    </div>
  );
}

export default App;
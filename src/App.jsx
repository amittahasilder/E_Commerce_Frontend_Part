import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          SHOPX
        </h1>
      </main>
    </div>
  );
}

export default App;
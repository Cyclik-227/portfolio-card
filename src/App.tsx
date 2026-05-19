import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Services } from "./components/Services";

function App() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Hero />
      <BentoGrid />
      <Services />
      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Cyclik_227. Все права защищены.</p>
      </footer>
    </main>
  );
}

export default App;

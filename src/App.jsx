import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-black py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-cyan-200/70">
        <p>© {new Date().getFullYear()} Ibnu Nur Ramadani — All rights reserved.</p>
        <p className="text-sm">Dibuat dengan cinta, biru neon, dan animasi halus.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

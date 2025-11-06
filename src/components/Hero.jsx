import { motion } from 'framer-motion';
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-black via-[#040b12] to-black">
      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/2Pz4j0dQZ9b0m3GQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            <Sparkles size={14} />
            Available for freelance projects
          </div>
          <h1 className="mt-6 font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
            Ibnu Nur Ramadani
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">Web Developer</span>
          </h1>
          <p className="mt-4 max-w-2xl text-cyan-100/80">
            Seorang pengembang web yang fokus pada pengalaman modern, performa tinggi, dan desain elegan.
            Lulusan SMK YOS Sudarso Jeruklegi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-cyan-500 text-black px-5 py-3 font-medium hover:bg-cyan-400 transition-colors"
            >
              Ayo Kolaborasi
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-500/30 bg-black/40 text-cyan-300 hover:bg-cyan-500/10">
                <Github />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-500/30 bg-black/40 text-cyan-300 hover:bg-cyan-500/10">
                <Linkedin />
              </a>
              <a href="#contact" className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-500/30 bg-black/40 text-cyan-300 hover:bg-cyan-500/10">
                <Mail />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

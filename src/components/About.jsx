import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export default function About() {
  const items = [
    'Frontend modern: React, Vite, Tailwind',
    'Backend dasar & API integration',
    'Responsive, aksesibilitas, dan performa',
  ];

  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Tentang Ibnu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-cyan-100/80"
        >
          Saya Ibnu Nur Ramadani, seorang Web Developer yang menyukai desain berani
          dengan nuansa biru neon dan hitam. Saya membangun antarmuka yang halus,
          animatif, dan cepat untuk pengalaman terbaik.
        </motion.p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-4"
            >
              <span className="mt-0.5 text-cyan-400"><BadgeCheck /></span>
              <p className="text-cyan-100/90">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

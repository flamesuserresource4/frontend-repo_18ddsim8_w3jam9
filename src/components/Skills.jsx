import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'FastAPI', level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-black to-[#02060a]">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Keahlian
        </motion.h2>

        <div className="mt-8 grid gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-lg border border-cyan-500/20 bg-black/40 p-4"
            >
              <div className="flex items-center justify-between text-cyan-100/90">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-cyan-500/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

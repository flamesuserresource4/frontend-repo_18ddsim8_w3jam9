import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Kontak
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-cyan-100/80"
        >
          Ingin bekerja sama? Kirim pesan melalui email di bawah ini.
        </motion.p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const subject = encodeURIComponent(`Halo, saya ${name}`);
            const body = encodeURIComponent(`${message}\n\nDari: ${name} <${email}>`);
            window.location.href = `mailto:ibnunurramadani.dev@example.com?subject=${subject}&body=${body}`;
          }}
          className="mt-8 grid gap-4 rounded-xl border border-cyan-500/20 bg-black/50 p-6"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-cyan-200">Nama</label>
            <input id="name" name="name" required className="rounded-md border border-cyan-500/30 bg-transparent px-3 py-2 text-cyan-100 placeholder-cyan-200/50 outline-none focus:border-cyan-400" placeholder="Nama Anda" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-cyan-200">Email</label>
            <div className="flex items-center gap-2 rounded-md border border-cyan-500/30 bg-transparent px-3 py-2 focus-within:border-cyan-400">
              <Mail className="text-cyan-400" size={18} />
              <input id="email" name="email" type="email" required className="w-full bg-transparent text-cyan-100 placeholder-cyan-200/50 outline-none" placeholder="email@domain.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-cyan-200">Pesan</label>
            <textarea id="message" name="message" rows="4" required className="rounded-md border border-cyan-500/30 bg-transparent px-3 py-2 text-cyan-100 placeholder-cyan-200/50 outline-none focus:border-cyan-400" placeholder="Tulis pesan Anda..." />
          </div>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-medium text-black hover:from-cyan-300 hover:to-blue-400">
            <Send size={18} />
            Kirim Email
          </button>
        </form>
      </div>
    </section>
  );
}

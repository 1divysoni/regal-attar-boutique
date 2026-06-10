import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import marbleBg from "@/assets/marble-bg.jpg";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AK Perfumes" },
      { name: "description", content: "The story of AK Perfumes — a premium fragrance house from Indore, founded by Kashif Gori." },
      { property: "og:title", content: "About — AK Perfumes" },
      { property: "og:description", content: "A premium fragrance house from Indore." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative py-32 overflow-hidden">
        <img src={marbleBg} aria-hidden alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-background/80 to-background" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Our House</div>
          <h1 className="font-display text-5xl md:text-7xl mb-6">A Tradition of <span className="italic text-gradient-gold">Scent</span></h1>
          <div className="gold-divider w-32 mx-auto" />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-lg text-foreground/85 leading-relaxed font-light">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            AK Perfumes was founded in Indore by <span className="text-gold">Kashif Gori</span> with a single conviction:
            that India deserves a fragrance house worthy of its centuries-old love affair with attar and oud.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            Every composition begins with raw materials sourced from the world's great perfume routes —
            Cambodian and Hindi oud, Bulgarian rose, Mysore sandalwood, Indian jasmine — and is hand-blended in
            small batches to a standard that refuses compromise.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            We make perfume for those who understand that a scent is not an accessory but a signature — the
            final, invisible layer of how you choose to be remembered.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-royal">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { n: "12+", l: "Hours of Sillage" },
            { n: "100%", l: "Hand-Blended in Indore" },
            { n: "0%", l: "Compromise on Quality" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-6xl text-gradient-gold mb-2">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

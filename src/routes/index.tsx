import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Crown, Gem, Star, ArrowRight } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";
import smokeBg from "@/assets/smoke-bg.jpg";
import marbleBg from "@/assets/marble-bg.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AK Perfumes — The Art of Luxury Fragrance" },
      { name: "description", content: "Discover premium attars, oud and signature perfumes by AK Perfumes. Crafted in Indore for lasting impressions." },
      { property: "og:title", content: "AK Perfumes — The Art of Luxury Fragrance" },
      { property: "og:description", content: "Premium attars, oud and signature perfumes crafted in Indore." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-gradient-hero" />
        <img src={smokeBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-50 animate-smoke" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-transparent to-midnight" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Indore · Established</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Experience the <br />
              <span className="text-gradient-gold italic">Art of Luxury</span> <br />
              Fragrance
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Discover premium attars and perfumes crafted for lasting impressions —
              hand-blended in Indore, inspired by Arabian luxury traditions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] font-medium rounded-full shadow-gold hover:shadow-luxe transition"
              >
                Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-xs uppercase tracking-[0.3em] rounded-full hover:text-gold transition"
              >
                Explore Fragrances
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative animate-float-slow"
          >
            <div className="absolute -inset-20 bg-gradient-to-r from-accent/40 to-primary/20 blur-3xl rounded-full" />
            <img
              src={heroBottle}
              alt="Purple Oud — the signature fragrance of AK Perfumes"
              width={1536}
              height={1536}
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground animate-pulse">Scroll</div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">The Collection</div>
            <h2 className="font-display text-4xl md:text-6xl mb-4">Signature <span className="italic text-gradient-gold">Fragrances</span></h2>
            <div className="gold-divider w-32 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="mt-16 text-center">
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold hover:gap-4 transition-all">
              View Full Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-28 overflow-hidden">
        <img src={marbleBg} aria-hidden alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-background to-midnight" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Why AK Perfumes</div>
            <h2 className="font-display text-4xl md:text-6xl">A <span className="italic text-gradient-gold">Standard</span> of Excellence</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Crown, title: "Long-Lasting", desc: "Compositions that bloom for 12+ hours and linger long after." },
              { icon: Gem, title: "Premium Ingredients", desc: "Aged oud, Bulgarian rose, Indian sandalwood — sourced with care." },
              { icon: Leaf, title: "Alcohol-Free Attars", desc: "Traditional attars in their purest, skin-warmed form." },
              { icon: Sparkles, title: "Curated Collections", desc: "Each fragrance personally selected by Kashif Gori." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-xl p-8 text-center hover:shadow-gold transition group"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Our Story</div>
          <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
            Crafting <span className="italic text-gradient-gold">Memories</span><br />Through Fragrance
          </h2>
          <div className="gold-divider w-24 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
            From the heart of Indore, AK Perfumes is a premium fragrance destination offering
            sophisticated attars, rare oud collections, and signature perfumes inspired by
            timeless elegance and Arabian luxury traditions. Every bottle is a memory waiting
            to be made — and worn long after the moment has passed.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-28 bg-gradient-royal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">The Fragrance Journey</div>
            <h2 className="font-display text-4xl md:text-6xl">Three Acts of <span className="italic text-gradient-gold">Allure</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 relative">
            {[
              { step: "01", title: "Discover", desc: "Explore our curated collection. Each scent is built around a story — rose, oud, lavender, amber." },
              { step: "02", title: "Experience", desc: "Top notes greet you. Heart notes unfold. Base notes anchor the soul of the fragrance." },
              { step: "03", title: "Impress", desc: "A trail that announces you. A memory others carry. The signature you leave behind." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="font-display text-7xl text-gradient-gold mb-4">{s.step}</div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Whispers</div>
            <h2 className="font-display text-4xl md:text-6xl">From Our <span className="italic text-gradient-gold">Patrons</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Aarav S.", city: "Mumbai", text: "Purple Oud is unreal. I get compliments every single time I wear it. Worth every rupee." },
              { name: "Zara K.", city: "Delhi", text: "The Midnight Attar is my secret weapon. Pure, warm, sensual — exactly what an attar should be." },
              { name: "Imran G.", city: "Hyderabad", text: "Finally an Indian house that rivals the Arabian giants. Royal Imperial is breathtaking." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-xl p-8 hover:shadow-gold transition"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-foreground/90 italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="text-sm">
                  <div className="font-display text-lg text-gold">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.city}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center glass rounded-2xl p-12 shadow-luxe">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Join the House</div>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Be the First to <span className="italic text-gradient-gold">Know</span></h2>
          <p className="text-muted-foreground mb-8">
            Exclusive launches, private offers, and the stories behind every fragrance — delivered to your inbox.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); alert("Welcome to the AK Perfumes community."); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="your@email.com"
              className="flex-1 px-5 py-3 bg-input/40 rounded-full border border-border focus:border-gold outline-none text-sm" />
            <button className="px-8 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] rounded-full shadow-gold hover:shadow-luxe transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/40 bg-midnight">
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl text-gradient-gold mb-4">AK Perfumes</div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            A premium fragrance house from Indore, crafting attars, oud, and signature perfumes
            inspired by timeless Arabian luxury — for those who leave a lasting impression.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/shop" className="hover:text-gold">Collection</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="text-foreground/90">Owner: <span className="text-gold">Kashif Gori</span></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" />Indore, Madhya Pradesh, India</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /><a href="tel:+918889355235" className="hover:text-gold">+91 88893 55235</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /><a href="mailto:akperfumess01@gmail.com" className="hover:text-gold break-all">akperfumess01@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 py-6 text-center text-xs tracking-widest uppercase text-muted-foreground">
        © {new Date().getFullYear()} AK Perfumes — Crafted in Indore
      </div>
    </footer>
  );
}

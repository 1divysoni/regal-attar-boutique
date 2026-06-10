import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AK Perfumes" },
      { name: "description", content: "Reach the AK Perfumes house in Indore. Owner Kashif Gori — +91 88893 55235." },
      { property: "og:title", content: "Contact — AK Perfumes" },
      { property: "og:description", content: "Get in touch with AK Perfumes in Indore." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="py-20 text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Get in Touch</div>
        <h1 className="font-display text-5xl md:text-7xl mb-4">Visit the <span className="italic text-gradient-gold">House</span></h1>
        <div className="gold-divider w-32 mx-auto mt-6" />
      </section>

      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Info icon={MapPin} title="Location" lines={["Indore, Madhya Pradesh", "India"]} />
            <Info icon={Phone} title="Phone" lines={[<a key="p" href="tel:+918889355235" className="hover:text-gold">+91 88893 55235</a>]} />
            <Info icon={Mail} title="Email" lines={[<a key="e" href="mailto:akperfumess01@gmail.com" className="hover:text-gold">akperfumess01@gmail.com</a>]} />
            <div className="glass rounded-xl p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Owner</div>
              <div className="font-display text-2xl">Kashif Gori</div>
              <p className="text-sm text-muted-foreground mt-2">Founder & Master Blender — personally curating every fragrance that bears the AK name.</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); (e.currentTarget as HTMLFormElement).reset(); }}
            className="glass rounded-xl p-8 space-y-4 shadow-luxe"
          >
            <h2 className="font-display text-3xl mb-4">Send a Message</h2>
            {sent && (
              <div className="bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] p-3 rounded-lg text-center">
                Thank you. We'll be in touch shortly.
              </div>
            )}
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</span>
              <textarea required name="msg" rows={5}
                className="mt-1 w-full px-4 py-3 bg-input/40 rounded-lg border border-border focus:border-gold outline-none text-sm" />
            </label>
            <button className="w-full px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] rounded-full shadow-gold hover:shadow-luxe transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="glass rounded-xl p-6 flex gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{title}</div>
        {lines.map((l, i) => <div key={i} className="text-foreground/90">{l}</div>)}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <input required name={name} type={type}
        className="mt-1 w-full px-4 py-3 bg-input/40 rounded-lg border border-border focus:border-gold outline-none text-sm" />
    </label>
  );
}

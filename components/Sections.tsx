import { athlete, coaching, gallery, press } from "@/content/data";
import { asset } from "@/lib/asset";

/* ---------------- Profile ---------------- */

export function Profile() {
  return (
    <section id="about" className="shell py-20 md:py-28 border-t border-ink/15">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <p className="col-span-12 md:col-span-3 meta text-red rv">Profile</p>
        <div className="col-span-12 md:col-span-8">
          <p className="lede text-ink-2 rv">
            In eighteen months Mostafijur Rahman went from a half-distance qualifier in
            Malaysia to a world championship start line in Spain, across the Bangla Channel in
            January, into the Andaman Sea in March, and through 226 kilometres at Challenge
            Roth in July.
          </p>
          <p className="mt-6 text-muted rv">
            He races for BD TRI and coaches open-water swimming in Dhaka between seasons.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Open water ---------------- */

export function OpenWater() {
  return (
    <section id="water" className="bg-deep text-paper py-20 md:py-28">
      <div className="shell grid grid-cols-12 gap-x-6 gap-y-8">
        <p className="col-span-12 md:col-span-3 meta text-paper/50 rv">Open water</p>
        <div className="col-span-12 md:col-span-8">
          <h2 className="display rv" style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)" }}>
            Where it started.
          </h2>
          <p className="lede mt-6 text-paper/85 rv">
            The Bangla Channel is the Bangladeshi crossing: 16.1 kilometres of open sea from
            Teknaf to St Martin Island. Oceanman took the same discipline into the Andaman Sea
            and put his name into the national sports pages.
          </p>
        </div>
      </div>

      <div className="shell mt-14 grid grid-cols-12 gap-4 md:gap-6" data-rv-group>
        <figure className="col-span-12 md:col-span-7 rv">
          <div className="aspect-[4/3] overflow-hidden bg-deep-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/banglachannel/banglachannel-03.webp")}
              alt="A lone swimmer in open sea during the Bangla Channel crossing"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="caption text-paper/55 mt-3">
            Bangla Channel, January 2026.
          </figcaption>
        </figure>

        <figure className="col-span-12 md:col-span-5 rv">
          <div className="aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-deep-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/oceanman/oceanman-08.webp")}
              alt="Mostafijur Rahman swimming front crawl at Oceanman Krabi in the Andaman Sea"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="caption text-paper/55 mt-3">
            Oceanman Krabi, March 2026.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */

export function Gallery() {
  return (
    <section className="shell py-20 md:py-28">
      <p className="meta text-red rv">Photographs</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5" data-rv-group>
        {gallery.map((g) => (
          <figure key={g.src} className="rv group">
            <div className="aspect-[4/5] overflow-hidden bg-paper-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(g.src)}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="caption mt-2">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Coaching ---------------- */

export function Coaching() {
  return (
    <section id="coaching" className="shell py-20 md:py-28 border-t border-ink/15">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <p className="col-span-12 md:col-span-3 meta text-red rv">Coaching</p>

        <div className="col-span-12 md:col-span-5">
          <h2 className="display rv" style={{ fontSize: "clamp(1.9rem, 4vw, 3.4rem)" }}>
            {coaching.headline}
          </h2>
          <p className="mt-6 text-ink-2 rv">{coaching.body}</p>
          <p className="mt-4 text-muted rv">{coaching.ambition}</p>
        </div>

        <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-3" data-rv-group>
          {coaching.images.slice(0, 3).map((src, i) => (
            <div
              key={src}
              className={
                "rv overflow-hidden bg-paper-3 " +
                (i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square")
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(src)}
                alt="Open-water swimming and water-safety session in Dhaka"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Press ---------------- */

export function Press() {
  return (
    <section id="press" className="shell py-20 md:py-28 border-t border-ink/15">
      <p className="meta text-red rv">Press</p>
      <div className="mt-8" data-rv-group>
        {press.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rv grid grid-cols-12 gap-x-4 items-baseline border-t border-ink/15 py-5"
          >
            <span className="col-span-8 md:col-span-3 display text-[clamp(1.05rem,1.9vw,1.5rem)]">
              {p.outlet}
            </span>
            <span className="col-span-4 md:col-span-2 meta text-muted md:order-last md:text-right">
              {p.date}
            </span>
            <span className="col-span-12 md:col-span-7 mt-2 md:mt-0 text-ink-2">
              <span className="link-draw">{p.headline}</span>
            </span>
          </a>
        ))}
        <div className="border-t border-ink/15" />
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

export function Contact() {
  const wa = "https://wa.me/" + athlete.whatsapp.replace("+", "");
  return (
    <section id="contact" className="bg-ink text-paper py-20 md:py-32">
      <div className="shell grid grid-cols-12 gap-x-6 gap-y-10">
        <p className="col-span-12 md:col-span-3 meta text-paper/45 rv">Contact</p>

        <div className="col-span-12 md:col-span-6">
          <h2 className="display rv" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}>
            For press, organisers
            <br />
            <span className="text-red">and partners.</span>
          </h2>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rv mt-9 inline-block bg-paper text-ink px-7 py-4 display text-[clamp(1.1rem,2.2vw,1.6rem)] hover:bg-red hover:text-paper transition-colors duration-300"
          >
            WhatsApp {athlete.whatsappDisplay}
          </a>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="meta text-paper/45 rv">Also known as</div>
          <p className="mt-2 text-paper/85 rv">{athlete.nameBn}</p>
          <p className="text-paper/60 rv">{athlete.altSpelling}</p>
        </div>
      </div>
    </section>
  );
}

export function Colophon() {
  return (
    <footer className="bg-ink text-paper/40 border-t border-paper/12">
      <div className="shell py-7 flex flex-wrap items-center justify-between gap-3">
        <span className="meta">
          {athlete.name} &middot; {new Date().getFullYear()}
        </span>
        <span className="meta">{athlete.club}</span>
      </div>
    </footer>
  );
}

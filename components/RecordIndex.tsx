import { races } from "@/content/data";
import { asset } from "@/lib/asset";

/**
 * Editorial index, grouped by year. Each entry carries its own photograph, and
 * the supporting lines are set at readable body size rather than tracked-out
 * micro-caps — the earlier version failed contrast and was hard to scan.
 */
export default function RecordIndex() {
  const years = Array.from(new Set(races.map((r) => r.year)));

  return (
    <div>
      {years.map((y) => (
        <section key={y} className="border-t border-ink/15">
          <div className="shell py-12 md:py-16">
            <div className="flex items-baseline gap-5">
              <h3
                className="display text-red leading-none"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
              >
                {y}
              </h3>
              <span className="text-muted">
                {races.filter((r) => r.year === y).length} events
              </span>
            </div>

            <div
              className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10"
              data-rv-group
            >
              {races
                .filter((r) => r.year === y)
                .map((r) => (
                  <article key={r.id} className="rv flex gap-6 items-start">
                    {r.image && (
                      <div className="shrink-0 w-[104px] sm:w-[148px] aspect-[4/5] overflow-hidden bg-paper-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset(r.image)}
                          alt={`${r.event}, ${r.location}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <div className="min-w-0 flex-1 border-b border-ink/12 pb-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="meta text-muted">{r.date}</span>
                        {r.result && (
                          <span className="num font-semibold text-ink text-[clamp(1.05rem,1.5vw,1.4rem)]">
                            {r.result}
                          </span>
                        )}
                      </div>

                      <h4
                        className="display mt-2.5 leading-[0.95]"
                        style={{ fontSize: "clamp(1.4rem, 2.1vw, 2rem)" }}
                      >
                        {r.event}
                      </h4>

                      <p className="mt-2 text-ink-2">
                        {r.location === r.country ? r.country : `${r.location}, ${r.country}`}
                      </p>

                      <p className="mt-1 text-muted">
                        {r.discipline}
                        {r.distance !== "—" ? ` · ${r.distance}` : ""}
                        {r.bib ? ` · Bib ${r.bib}` : ""}
                      </p>

                      {r.note && <p className="caption mt-2.5">{r.note}</p>}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}
      <div className="border-t border-ink/15" />
    </div>
  );
}

import Hero from "@/components/Hero";
import Masthead from "@/components/Masthead";
import Motion from "@/components/Motion";
import RecordIndex from "@/components/RecordIndex";
import {
  Coaching,
  Colophon,
  Contact,
  Gallery,
  OpenWater,
  Press,
  Profile,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Masthead />
      <Motion />

      <main id="top">
        <Hero />
        <Profile />

        <section id="record" className="pt-16 md:pt-24">
          <div className="shell mb-8">
            <p className="meta text-red rv">The record</p>
          </div>
          <RecordIndex />
        </section>

        <OpenWater />
        <Gallery />
        <Coaching />
        <Press />
        <Contact />
      </main>

      <Colophon />
    </>
  );
}

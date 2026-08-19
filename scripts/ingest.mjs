// Ingest: EXIF-correct, resize, and convert every source photo to WebP,
// then emit one contact sheet per event folder for curation.
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SRC = "d:/MIV ALL/Project Swimmer";
const OUT = path.join(SRC, "web/public/img");
const SHEETS = path.join(SRC, "web/scripts/_sheets");

const FOLDERS = {
  roth: "Latest Roth",
  oceanman: "Oceanmen Thailand 26",
  marbella: "Ironman70.3 World Championship Marbella,Spain 2025",
  desaru: "Ironman70.3Desaru coast Malaysia 2025",
  banglachannel: "Bangla channel 25",
  fishtail: "Fishtail-nepal",
  coaching: "Street Children training",
  bandarban: "25km_Vertical_Dreamers_Ultra_Run_Bandarban",
  coastal: "50km_Coastal_Ultra_Run_2024",
  jia: "Jia_swimming_carnival_2025",
  family: "Family",
};

const isImg = (f) => /\.(jpe?g|png)$/i.test(f);

await mkdir(SHEETS, { recursive: true });
const manifest = {};

for (const [slug, folder] of Object.entries(FOLDERS)) {
  const dir = path.join(SRC, folder);
  if (!existsSync(dir)) { console.log(`skip (missing): ${folder}`); continue; }
  const files = (await readdir(dir)).filter(isImg).sort();
  if (!files.length) continue;

  const outDir = path.join(OUT, slug);
  await mkdir(outDir, { recursive: true });

  const thumbs = [];
  manifest[slug] = [];

  for (let i = 0; i < files.length; i++) {
    const src = path.join(dir, files[i]);
    try {
    const name = `${slug}-${String(i + 1).padStart(2, "0")}`;
    const dest = path.join(outDir, `${name}.webp`);

    // .rotate() with no args applies EXIF orientation — fixes the 180-degree poolside shot
    const img = sharp(src, { failOn: "none" }).rotate();
    const meta = await img.metadata();

    await img
      .clone()
      .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(dest);

    const outMeta = await sharp(dest).metadata();
    const bytes = (await stat(dest)).size;
    manifest[slug].push({
      id: name, file: `/img/${slug}/${name}.webp`,
      w: outMeta.width, h: outMeta.height,
      ratio: +(outMeta.width / outMeta.height).toFixed(3),
      kb: Math.round(bytes / 1024), src: files[i],
    });

    thumbs.push(
      await sharp(src, { failOn: "none" }).rotate()
        .resize({ width: 400, height: 300, fit: "cover" })
        .jpeg({ quality: 70 }).toBuffer()
    );
    } catch (e) {
      console.log(`  !! skipped ${files[i]}: ${e.message.slice(0, 60)}`);
    }
  }

  // contact sheet: 4 across, labelled by index
  const COLS = 4, TW = 400, TH = 300;
  const rows = Math.ceil(thumbs.length / COLS);
  await sharp({
    create: { width: COLS * TW, height: rows * TH, channels: 3, background: "#111" },
  })
    .composite(thumbs.map((buf, i) => ({
      input: buf,
      left: (i % COLS) * TW,
      top: Math.floor(i / COLS) * TH,
    })))
    .jpeg({ quality: 72 })
    .toFile(path.join(SHEETS, `${slug}.jpg`));

  const total = manifest[slug].reduce((a, b) => a + b.kb, 0);
  console.log(`${slug.padEnd(14)} ${String(files.length).padStart(2)} imgs  ${String(total).padStart(5)} KB out`);
}

const { writeFile } = await import("node:fs/promises");
await writeFile(path.join(SRC, "web/scripts/_manifest.json"), JSON.stringify(manifest, null, 2));
console.log("\nmanifest written");

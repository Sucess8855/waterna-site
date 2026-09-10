// Crop a square source to a hero band and emit responsive WebP + a JPEG fallback.
//   node scripts/optimise-hero.mjs <src> <outDir> <basename>
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const [src, outDir, base] = process.argv.slice(2);
await mkdir(outDir, { recursive: true });

const meta = await sharp(src).metadata();
const bandH = Math.round(meta.width / 2.18); // hero aspect ~2.18:1
const top = Math.round((meta.height - bandH) / 2);

const crop = () => sharp(src).extract({ left: 0, top, width: meta.width, height: bandH });

for (const w of [1200, 1600, 2000]) {
  const out = `${outDir}/${base}-${w}.webp`;
  const info = await crop().resize({ width: w }).webp({ quality: 76 }).toFile(out);
  console.log(`${out}  ${Math.round(info.size / 1024)} KB  ${info.width}x${info.height}`);
}

const jpg = `${outDir}/${base}-1600.jpg`;
const ji = await crop().resize({ width: 1600 }).jpeg({ quality: 74, mozjpeg: true }).toFile(jpg);
console.log(`${jpg}  ${Math.round(ji.size / 1024)} KB  ${ji.width}x${ji.height}`);
console.log(`aspect: ${ji.width}x${ji.height}`);

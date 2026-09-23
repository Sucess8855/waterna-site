// Crop a source image to a given aspect and emit responsive WebP plus a JPEG.
//   node scripts/optimise-image.mjs <src> <outDir> <basename> <aspect> <w1,w2,...>
//
//   node scripts/optimise-image.mjs "C:/photos/24.png" public/img/sectors ad 1.78 600,1200
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const [src, outDir, base, aspectArg, widthsArg] = process.argv.slice(2);
const aspect = Number(aspectArg ?? 1.78);
const widths = (widthsArg ?? '600,1200').split(',').map(Number);

await mkdir(outDir, { recursive: true });

const meta = await sharp(src).metadata();
const bandH = Math.round(meta.width / aspect);
const top = Math.max(0, Math.round((meta.height - bandH) / 2));
const height = Math.min(bandH, meta.height);

const crop = () => sharp(src).extract({ left: 0, top, width: meta.width, height });

for (const w of widths) {
  const out = `${outDir}/${base}-${w}.webp`;
  const info = await crop().resize({ width: w }).webp({ quality: 74 }).toFile(out);
  console.log(`${out}  ${Math.round(info.size / 1024)} KB  ${info.width}x${info.height}`);
}

const fallbackWidth = widths[widths.length - 1];
const jpg = `${outDir}/${base}-${fallbackWidth}.jpg`;
const ji = await crop().resize({ width: fallbackWidth }).jpeg({ quality: 72, mozjpeg: true }).toFile(jpg);
console.log(`${jpg}  ${Math.round(ji.size / 1024)} KB  ${ji.width}x${ji.height}`);

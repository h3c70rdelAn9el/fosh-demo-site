/**
 * One-shot: raster favicon.svg onto a 1200×630 OG canvas as public/fosh_logo.png
 * (logo-only preview; replace this file anytime with your official wordmark asset).
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const root = join(import.meta.dirname, '..');
const svgPath = join(root, 'public/favicon.svg');
const outPath = join(root, 'public/fosh_logo.png');

const WIDTH = 1200;
const HEIGHT = 630;

async function main() {
  const svg = await readFile(svgPath);
  const logo = await sharp(svg)
    .resize(520, 520, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: { r: 9, g: 9, b: 11 },
    },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log('Wrote', outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

// Screenshot the dev server at several viewports.
//   node scripts/shot.mjs [url] [outDir]
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';

const url = process.argv[2] ?? 'http://localhost:4321/';
const outDir = process.argv[3] ?? 'shots';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'mobile', width: 390, height: 844 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });

for (const vp of viewports) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  await page.goto(url, { waitUntil: 'networkidle' });

  // Walk the page so loading="lazy" images actually decode before capture.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(() => Array.from(document.images).every((i) => i.complete), null, {
    timeout: 30000,
  });
  await page.waitForTimeout(400);

  const path = `${outDir}/${vp.name}.png`;
  await page.screenshot({ path, fullPage: true });
  const missing = await page.evaluate(
    () => Array.from(document.images).filter((i) => !i.naturalWidth).length,
  );
  console.log(`${vp.name.padEnd(8)} ${vp.width}x${vp.height} -> ${path}${missing ? `  (${missing} broken images)` : ''}`);
  await page.close();
}

await browser.close();

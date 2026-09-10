// Capture a desktop screenshot of reference sites for design direction.
//   node scripts/refshot.mjs <outDir> <url> [url...]
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';

const [outDir, ...urls] = process.argv.slice(2);
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });

for (const url of urls) {
  const name = new URL(url).hostname.replace(/^www\./, '').replace(/\./g, '-');
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(3500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: false });
    console.log(`ok   ${name}`);
  } catch (err) {
    console.log(`FAIL ${name}: ${err.message.split('\n')[0]}`);
  }
  await page.close();
}

await browser.close();

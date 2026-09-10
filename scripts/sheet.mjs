// Screenshot a local HTML file full-page at 1440 wide.
//   node scripts/sheet.mjs <htmlPath> <outPng>
import { chromium } from 'playwright-core';
import { pathToFileURL } from 'node:url';

const [htmlPath, out] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load', timeout: 120000 });
await page.waitForFunction(
  () => Array.from(document.images).every((i) => i.complete),
  null,
  { timeout: 180000 }
);
await page.waitForTimeout(1500);
await page.screenshot({ path: out, fullPage: true });
const broken = await page.evaluate(
  () => Array.from(document.images).filter((i) => !i.naturalWidth).map((i) => i.nextElementSibling?.textContent)
);
console.log('->', out, broken.length ? `BROKEN: ${broken.join(', ')}` : '(all loaded)');
await browser.close();

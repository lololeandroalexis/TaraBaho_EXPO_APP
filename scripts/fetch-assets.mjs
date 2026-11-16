// Downloads every asset in assets/manifest.json. Run locally: `npm run assets`
// Figma asset URLs expire after 7 days; re-export them with the Figma MCP if they do.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets');
const manifest = JSON.parse(await readFile(join(root, 'manifest.json'), 'utf8'));
for (const [file, short] of Object.entries(manifest)) {
  const url = short.startsWith('http') ? short : 'https://www.figma.com/api/mcp/asset/' + short;
  let res;
  try { res = await fetch(url); } catch (e) { console.error('FAILED', file, e.message); continue; }
  if (!res.ok) { console.error('FAILED', file, res.status); continue; }
  const out = join(root, file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, Buffer.from(await res.arrayBuffer()));
  console.log('ok', file);
}

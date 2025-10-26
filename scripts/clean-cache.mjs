#!/usr/bin/env node

/**
 * Simple utility to remove Vite's pre-bundled cache.
 * Useful when Chrome reports ERR_CACHE_READ_FAILURE or when deps change.
 */
import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

const paths = [
  'node_modules/.vite',
  '.vite',
];

async function removePath(target) {
  const fullPath = resolve(cwd(), target);
  try {
    await rm(fullPath, { recursive: true, force: true });
    console.log(`Removed ${target}`);
  } catch (err) {
    console.warn(`Skipped ${target}:`, err.message);
  }
}

for (const target of paths) {
  // eslint-disable-next-line no-await-in-loop
  await removePath(target);
}

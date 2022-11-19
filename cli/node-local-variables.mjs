/**
 * @link https://stackoverflow.com/a/64383997/1954596
 */
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'node:module';

export const getNodeRequire = (url = import.meta.url) => createRequire(url);
export const getNodeFilename = () => fileURLToPath(import.meta.url);
export const getNodeDirname = () => dirname(getNodeFilename());

export default {
  getNodeFilename,
  getNodeDirname,
};

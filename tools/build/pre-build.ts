import * as path from 'path';
import { generateRedirects } from './generate-redirects.ts';

const jsonPath = path.resolve('redirects.json');
const outputPath = path.resolve('public/_redirects');

generateRedirects(jsonPath, outputPath);

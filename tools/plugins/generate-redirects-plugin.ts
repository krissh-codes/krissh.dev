import * as fs from 'fs';
import * as path from 'path';
import { Plugin } from 'vite';
import { generateRedirects } from '../build/generate-redirects';

export function redirectsPlugin(): Plugin {
    return {
        name: 'redirects',
        apply: 'serve',
        configureServer(server) {
            const jsonPath = path.resolve(server.config.root, 'redirects.json');
            const outputPath = path.resolve(server.config.root, 'public/_redirects');

            if (!fs.existsSync(jsonPath)) {
                return console.warn(`[redirects] ⚠️ No redirects.json found at ${jsonPath}`);
            }

            // generate once at startup
            generateRedirects(jsonPath, outputPath);

            // watch file changes
            server.watcher.add(jsonPath);
            server.watcher.on('change', changedPath => {
                if (changedPath === jsonPath) {
                    console.info('[redirects] ♻️ Regenerating _redirects...');
                    generateRedirects(jsonPath, outputPath);
                }
            });
        }
    };
}
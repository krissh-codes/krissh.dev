import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { redirectsPlugin } from './tools/plugins';

export default defineConfig({
    resolve: {
        alias: {
            '@': '/src',
            '@assets': '/src/assets',
            '@animations': '/src/animations',
            '@components': '/src/components',
            '@hooks': '/src/hooks',
            '@sections': '/src/sections',
            '@utils': '/src/utils',
            '@common-types': '/types'
        }
    },
    plugins: [react(), redirectsPlugin()]
});

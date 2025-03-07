import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
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
    plugins: [react()]
});

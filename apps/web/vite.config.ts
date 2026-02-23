import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-social-research/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/social-research/, /node_modules/],
        },
    },
});

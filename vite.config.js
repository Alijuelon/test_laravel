import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'; // <--- TAMBAHKAN INI
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({ // <--- TAMBAHKAN INI JUGA
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            'ziggy-js': path.resolve('resources/js/ziggy.js'),
            '@': '/resources/js', // Penting untuk handle import '@/Layouts/...'
        },
    },
});
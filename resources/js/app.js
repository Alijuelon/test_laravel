import '../css/app.css';
import './bootstrap';
import { Ziggy } from './ziggy'; // Ini sudah benar

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';

// UBAH BARIS INI: Jangan ambil dari ../../vendor/
import { ZiggyVue } from 'ziggy-js'; 

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            // Gunakan ZiggyVue dan masukkan data rute dari file ziggy.js lokal
            .use(ZiggyVue, Ziggy) 
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
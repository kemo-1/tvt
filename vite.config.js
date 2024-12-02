import gleam from "vite-gleam";

import { VitePWA } from 'vite-plugin-pwa'


export default {
base: '/tvt',
    plugins: [gleam(), VitePWA({
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        }, injectRegister: 'script-defer', registerType: 'autoUpdate'
    })
    ],
}

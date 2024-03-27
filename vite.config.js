// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        portfolio: resolve(__dirname, 'index.html'),
        backend: resolve(__dirname, 'projet/html/backend-loading.html'),
        frontend: resolve(__dirname, 'projet/html/front-end.html'),
        jsFrontend: resolve(__dirname, 'projet/js/front-end.js'),
        // css projet
        cssProject: resolve(__dirname, 'projet/css-projet/main-projet.css'),
        cssBackend: resolve(__dirname, 'projet/css-projet/section-projet/backend.css'),
        cssCard: resolve(__dirname, 'projet/css-projet/section-projet/cards.css'),
        // css main
        styleCss: resolve(__dirname, 'css/style.css'),
        globalCss: resolve(__dirname, 'css/global.css'),
        firstCss: resolve(__dirname, 'css/sections/first-page.css'),
        secondCss: resolve(__dirname, 'css/sections/second-page.css'),
        thirdCss: resolve(__dirname, 'css/sections/third-page.css'),
        fourthCss: resolve(__dirname, 'css/sections/fourth-page.css'),
        fifthCss: resolve(__dirname, 'css/sections/fifth-page.css'),
        headerCss: resolve(__dirname, 'css/sections/header.css')
      }
    }
  }
})

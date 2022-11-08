import { defineConfig } from "vite"

export default defineConfig({
    // https://vitejs.dev/guide/backend-integration.html
    server: {
        origin: 'http://127.0.0.1:3001',
        proxy: {
            // make a proxy :
            // every call to /api will call the backend.
            '/api': 'http://127.0.0.1:3000',
        },
    },
    build: {
        outDir: '../../dist/public',// output directory
    },
    root: './src',// source folder
    // publicDir: '../../backend',// backend/backend folder
    base: './',// base backend path : add ./ before url, otherwise vite make this : /url
})

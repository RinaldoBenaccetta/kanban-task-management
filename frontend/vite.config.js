import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // https://vitejs.dev/guide/backend-integration.html
    server: {
        // origin: 'http://127.0.0.1:3001',
        proxy: {
            // make a proxy :
            // every call to /api will call the backend.
            '/api': 'http://127.0.0.1:3000',
        },
    },
    build: {
        outDir: '../../dist/public', // output directory
    },
})

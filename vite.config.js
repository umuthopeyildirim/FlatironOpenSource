import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-QYFSS4RFJQ',
      },
      gtm: {
        id: 'GTM-TTWKD6W',
      },
    })
  ],
})

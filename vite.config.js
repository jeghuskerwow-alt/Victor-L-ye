/* vite.config.js */
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'historie.html',
        'dagen.html',
        'praktisk.html',
        'onskeliste.html',
        'rsvp.html',
      ],
    },
  },
});

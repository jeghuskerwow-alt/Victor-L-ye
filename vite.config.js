/* vite.config.js */
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        historie: 'historie.html',
        dagen: 'dagen.html',
        praktisk: 'praktisk.html',
        onskeliste: 'onskeliste.html',
        rsvp: 'rsvp.html',
      },
    },
  },
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',    // Accessible via local network (LAN)
    port: 5173,         // Optional: specify port
    open: true          // Optional: auto-open browser
  }
});

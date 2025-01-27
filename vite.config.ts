import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['core-js-pure']
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [],
    },
  },
});

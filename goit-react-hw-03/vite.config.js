import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? "/" : "/goit-react-hw-03/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});

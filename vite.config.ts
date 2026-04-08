import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// If you get an error on __dirname, run: npm install -D @types/node
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@three": path.resolve(__dirname, "./src/three"),
    },
  },
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // This function splits your heavy node_modules into separate files
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (id.includes("@mui")) {
              return "vendor-mui";
            }
            if (id.includes("framer-motion")) {
              return "vendor-framer";
            }
            if (id.includes("three")) {
              return "vendor-three";
            }
            return "vendor"; // All other libraries
          }
        },
      },
    },
  },
});
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: () => {
            return "assets/[name].[hash].[ext]";
          },
        },
      },
    },
    plugins: [tailwindcss()],
  },
});

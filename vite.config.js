import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",

  input: {
    inicio: resolve(__dirname, "html/index.html"),
    projetos: resolve(__dirname, "html/projetos.html"),
    cadastro: resolve(__dirname, "html/cadastro.html"),
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

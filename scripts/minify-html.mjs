import { readFile, writeFile, readdir } from "node:fs/promises";

import { join, extname } from "node:path";

import { minify } from "html-minifier-terser";

async function encontrarHTML(diretorio) {
  const entradas = await readdir(diretorio, { withFileTypes: true });

  const arquivos = [];

  for (const entrada of entradas) {
    const caminho = join(diretorio, entrada.name);

    if (entrada.isDirectory()) {
      arquivos.push(...(await encontrarHTML(caminho)));
    } else if (extname(entrada.name) === ".html") {
      arquivos.push(caminho);
    }
  }

  return arquivos;
}

const arquivosHTML = await encontrarHTML("dist");

for (const arquivo of arquivosHTML) {
  const conteudo = await readFile(arquivo, "utf8");

  const resultado = await minify(conteudo, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  });

  await writeFile(arquivo, resultado, "utf8");
}

console.log(`HTML minificado: ${arquivosHTML.length} arquivo(s).`);

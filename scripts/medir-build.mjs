import { readdir, stat } from "node:fs/promises";

import { join, extname } from "node:path";

async function listarArquivos(diretorio) {
  const entradas = await readdir(diretorio, { withFileTypes: true });

  const arquivos = [];

  for (const entrada of entradas) {
    const caminho = join(diretorio, entrada.name);

    if (entrada.isDirectory()) {
      arquivos.push(...(await listarArquivos(caminho)));
    } else {
      arquivos.push(caminho);
    }
  }

  return arquivos;
}

async function tamanhoPorExtensao(diretorios, extensao) {
  let total = 0;

  for (const diretorio of diretorios) {
    const arquivos = await listarArquivos(diretorio);

    for (const arquivo of arquivos) {
      if (extname(arquivo) === extensao) {
        total += (await stat(arquivo)).size;
      }
    }
  }

  return total;
}

function kb(bytes) {
  return (bytes / 1024).toFixed(2);
}

function reducao(antes, depois) {
  if (!antes) {
    return "0.00";
  }

  return (((antes - depois) / antes) * 100).toFixed(2);
}

const tipos = [
  {
    nome: "HTML",
    extensao: ".html",
    fontes: ["html"],
  },
  {
    nome: "CSS",
    extensao: ".css",
    fontes: ["css"],
  },
  {
    nome: "JavaScript",
    extensao: ".js",
    fontes: ["js"],
  },
];

let totalAntes = 0;
let totalDepois = 0;

for (const tipo of tipos) {
  const antes = await tamanhoPorExtensao(tipo.fontes, tipo.extensao);

  const depois = await tamanhoPorExtensao(["dist"], tipo.extensao);

  totalAntes += antes;
  totalDepois += depois;

  console.log(
    `${tipo.nome}: ` +
      `${kb(antes)} KB → ` +
      `${kb(depois)} KB | ` +
      `redução: ${reducao(antes, depois)}%`,
  );
}

console.log("");
console.log(
  `TOTAL: ${kb(totalAntes)} KB → ` +
    `${kb(totalDepois)} KB | ` +
    `redução: ${reducao(totalAntes, totalDepois)}%`,
);

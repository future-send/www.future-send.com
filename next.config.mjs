// next.config.mjs
export default {
  output: "export", // Configura l'export statico
  trailingSlash: true, // Aggiunge uno slash finale per i percorsi (necessario per alcune configurazioni statiche)
  images: {
    unoptimized: true, // Disabilita l'ottimizzazione delle immagini per l'export statico
  },
};

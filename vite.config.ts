import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isPopup = mode === "popup" || mode === "popup-dev";
  const isDevBuild = mode === "development" || mode === "popup-dev";

  return {
    build: {
      outDir: "dist",
      emptyOutDir: !isPopup,
      rollupOptions: {
        input: isPopup
          ? { popup: resolve(__dirname, "src/popup/popup.ts") }
          : { content: resolve(__dirname, "src/content/index.ts") },
        output: {
          entryFileNames: "[name].js",
          format: isPopup ? "es" : "iife",
          name: isPopup ? undefined : "LKH",
          ...(isPopup ? {} : { inlineDynamicImports: true }),
        },
      },
      minify: false,
      sourcemap: false,
      target: "chrome120",
    },
    define: {
      __IS_DEV_BUILD__: JSON.stringify(isDevBuild),
    },
    publicDir: isPopup ? false : "public",
  };
});

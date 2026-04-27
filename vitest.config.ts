import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    __IS_DEV_BUILD__: true,
  },
  test: {
    environment: "jsdom",
    include: ["tests/**/*.test.ts"],
    globals: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.d.ts"],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

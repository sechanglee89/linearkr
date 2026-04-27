/**
 * tests/manifest.test.ts
 * manifest.json 권한이 최소 권한 원칙에 맞는지 검증한다.
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const manifestPath = resolve(__dirname, "../public/manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf-8")) as Record<
  string,
  unknown
>;

describe("manifest.json", () => {
  it("manifest_version이 3이다", () => {
    expect(manifest["manifest_version"]).toBe(3);
  });

  it("permissions가 storage만 포함한다", () => {
    expect(manifest["permissions"]).toEqual(["storage"]);
  });

  it("host_permissions가 https://linear.app/* 만 포함한다", () => {
    expect(manifest["host_permissions"]).toEqual(["https://linear.app/*"]);
  });

  it("금지된 권한이 없다 — tabs, activeTab, scripting, cookies, history, webRequest, identity, <all_urls>", () => {
    const forbidden = [
      "tabs",
      "activeTab",
      "scripting",
      "cookies",
      "history",
      "webRequest",
      "identity",
      "<all_urls>",
    ];
    const permissions = (manifest["permissions"] as string[]) ?? [];
    const hostPermissions = (manifest["host_permissions"] as string[]) ?? [];
    const all = [...permissions, ...hostPermissions];

    for (const item of forbidden) {
      expect(all).not.toContain(item);
    }
  });

  it("content_scripts가 https://linear.app/* 에만 주입된다", () => {
    const scripts = manifest["content_scripts"] as Array<{ matches: string[] }>;
    expect(scripts).toHaveLength(1);
    expect(scripts[0]?.matches).toEqual(["https://linear.app/*"]);
  });
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",   // 👈 use "/" only if your repo is named krishnapriya-14.github.io
});

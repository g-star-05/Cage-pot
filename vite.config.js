import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ put YOUR repo name here
export default defineConfig({
  plugins: [react()],
  base: "/cage-pot/", // <-- if your repo is "cage-pot"
});

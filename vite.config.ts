import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Membuka akses ke semua alamat IP
    port: 5173, // Gunakan port default Vite (5173) atau sesuaikan
  },
});

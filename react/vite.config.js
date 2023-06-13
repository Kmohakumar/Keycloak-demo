import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/documents": "http://127.0.0.1:7000/",
      "/service1": "http://127.0.0.1:7000/",
      "/api/v1" : "http://127.0.0.1:5000",
      "/api/v2" : "http://127.0.0.1:5000",
      "/api/v4" : "http://127.0.0.1:5000",
      "/api/v3" : "http://127.0.0.1:5000",
    },
  },
  plugins: [react()],
});
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
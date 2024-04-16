import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
// })

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'esm', // Change to ESM format
      }
    }
  },
  plugins: [
    svgrPlugin(),
    react()
  ]
})
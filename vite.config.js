// import { build, defineConfig } from 'vite'
import { build } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
}

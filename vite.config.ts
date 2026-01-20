import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: [
      'd236-2405-201-6007-8a29-6d55-6bb9-f44e-acbd.ngrok-free.app'
    ]
  },
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate heavy 3D libraries
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate animation libraries
          'gsap': ['gsap'],
          // React core
          'vendor': ['react', 'react-dom'],
        }
      }
    },
    // Enable minification
    minify: 'esbuild',
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Generate source maps for debugging (disable in prod if needed)
    sourcemap: false,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', 'gsap', 'zustand']
  }
})

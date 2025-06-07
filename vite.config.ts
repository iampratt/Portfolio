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
}
})


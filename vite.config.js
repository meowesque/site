import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import md from 'vite-plugin-solid-markdown'

export default defineConfig({
  plugins: [
    tailwindcss(),
    md(),
    solid({
      extensions: ['.mdx', '.md'],
    })
  ],
})

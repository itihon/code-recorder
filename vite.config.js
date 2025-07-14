import { defineConfig } from 'vite'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  root: 'src',
  publicDir: 'public',
  plugins: [
    monacoEditorPlugin({
      // Options can be specified here
    }),
  ],
})
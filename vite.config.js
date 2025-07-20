import { defineConfig } from 'vite'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig(({ command, mode }) => {

  console.log(command, mode);

  if (command === 'serve-build') {
    return {
      root: 'dist',
      fileName: 'index'
    };
  }
  else return {
    root: 'src',
    publicDir: 'public',
    server: {
      host: true,
    },
    plugins: [
      monacoEditorPlugin({
        // Options can be specified here
      }),
    ],
  }
})
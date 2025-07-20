import '@itihon/file-tree-view';
import '@itihon/split-pane';
import { editor }  from 'monaco-editor';
import 'monaco-editor/esm/vs/editor/editor.all.js'; // Import necessary parts
import { Terminal, type ITerminalOptions } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';
import type SplitPane from '@itihon/split-pane';

const code = /* set from `myEditor.getModel()`: */ `function hello() {
	alert('Hello world!');
}`;

addEventListener('DOMContentLoaded', () => {
  const editorContainer = document.getElementById("editor")!;
  const terminalContainer = document.getElementById('terminal')!;
  const splitPane = document.querySelector('split-pane[type=horizontal]') as SplitPane;

  const myEditor = editor.create(editorContainer, {
    value: code,
    language: "javascript",
    theme: 'vs-dark',
  });

  const termOpts: ITerminalOptions = {
    cursorBlink: true,
    theme: {
      background: '#1e1e1e',
      foreground: '#c8c8c8',
    },
  }

  const term = new Terminal(termOpts);
  const fitAddon = new FitAddon();

  term.loadAddon(fitAddon);
  term.open(terminalContainer);
  fitAddon.fit();

  splitPane.addEventListener('statechange', () => {
    myEditor.layout();
    fitAddon.fit();
  });

  for (let i = 0; i < 500; i++) {
    term.write(`\r\n${i}. Hello from XTERM $`);
  }
});
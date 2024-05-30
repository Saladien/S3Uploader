import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'S3Uploader'
  },
  plugins: [
    svelte(),
    terser()
  ]
};

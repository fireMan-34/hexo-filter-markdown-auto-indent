const { join } = require('node:path');
const { defineConfig } = require('rollup');
const commonJs = require('@rollup/plugin-commonjs');

/**
 * 
 * @param {import('rollup').OutputOptions} option 
 * @returns {import('rollup').OutputOptions}
 */
const createOutputOption = (option) => ({
  file: join(__dirname, 'dist' , option.format, 'index.js'),
  format: option.format,
});

/**
 * @type {import('rollup').OutputOptions['format'][]}
 */
const formats = [ 'cjs', 'esm' ];

module.exports = defineConfig({
  input: './index.js',
  output: formats.map(format => createOutputOption({ format })),
  watch: {
    exclude: ['node_modules', 'dist'],
  },
  plugins: [ commonJs() ],
});
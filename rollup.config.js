import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import external from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass';
import { terser } from "rollup-plugin-terser";
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      external(),
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.lib.json' }),
      sass({ output: 'dist/react-design.css' }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/, /\.scss$/],
    plugins: [dts()],
  },
];

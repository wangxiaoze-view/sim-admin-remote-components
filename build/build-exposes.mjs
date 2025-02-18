import fs from 'fs';
import pkg from '../package.json' assert { type: 'json' };

const whiteList = ['functional-helpers'];
let exposes = {};
let shared = {};
fs.readdirSync('./src/components')
  .map((file) => file.replace('.vue', ''))
  .forEach((name) => {
    exposes[`./${name}`] = `./src/components/${name}/index.vue`;
  });

for (const [name, version] of Object.entries(pkg.dependencies)) {
  if (whiteList.includes(name)) continue;
  shared[name] = {
    singleton: true,
    eager: true,
    requiredVersion: version,
  };
}

fs.writeFileSync(
  './build/index.ts',
  "import { ModuleFederationConfig } from '@rsbuild/core';\n" +
    "type Shared = ModuleFederationConfig['options']['shared'];\n" +
    "type Exposes = ModuleFederationConfig['options']['exposes'];\n" +
    'export const exposes: Exposes = ' +
    JSON.stringify(exposes, null, 2) +
    ';\n' +
    'export const shared: Shared = ' +
    JSON.stringify(shared, null, 2) +
    ';',
);

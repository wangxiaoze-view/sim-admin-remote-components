import { ModuleFederationConfig } from '@rsbuild/core';
import pkg from '../package.json';

type Shared = ModuleFederationConfig['options']['shared'];
type Exposes = ModuleFederationConfig['options']['exposes'];
const whiteList = ['functional-helpers'];

export function getShared(): Shared {
  let shared: Shared = {};
  for (const key in pkg.dependencies) {
    if (whiteList.includes(key)) continue;
    shared[key] = {
      singleton: true,
      eager: true,
      requiredVersion: pkg.dependencies[key],
    };
  }
  return shared;
}

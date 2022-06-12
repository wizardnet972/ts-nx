import { core } from '@nx-ts/core';

export function foo(): string {
  core();

  return 'foo';
}
console.log({ foo: foo() });

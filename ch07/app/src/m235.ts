import { f189, T189 } from './m189';
import { f212, T212 } from './m212';
import { f186, T186 } from './m186';
export interface T235 { id: number; ten: string; con: T235[]; the: Record<string, number> }
export type U235<K extends keyof T235> = { [P in K]: T235[P] extends number ? string : T235[P] };
export function f235(x: T235, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f235(c, 1);
  s += f189({ id: s, ten: 'a', con: [], the: {} } as T189);s += f212({ id: s, ten: 'a', con: [], the: {} } as T212);s += f186({ id: s, ten: 'a', con: [], the: {} } as T186);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g235 = <K extends keyof T235>(o: T235, k: K): U235<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U235<K>[K];

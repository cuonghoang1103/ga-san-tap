import { f28, T28 } from './m028';
import { f67, T67 } from './m067';
import { f3, T3 } from './m003';
export interface T69 { id: number; ten: string; con: T69[]; the: Record<string, number> }
export type U69<K extends keyof T69> = { [P in K]: T69[P] extends number ? string : T69[P] };
export function f69(x: T69, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f69(c, 1);
  s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);s += f67({ id: s, ten: 'a', con: [], the: {} } as T67);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g69 = <K extends keyof T69>(o: T69, k: K): U69<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U69<K>[K];

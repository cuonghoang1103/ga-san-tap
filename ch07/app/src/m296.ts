import { f245, T245 } from './m245';
import { f163, T163 } from './m163';
import { f196, T196 } from './m196';
export interface T296 { id: number; ten: string; con: T296[]; the: Record<string, number> }
export type U296<K extends keyof T296> = { [P in K]: T296[P] extends number ? string : T296[P] };
export function f296(x: T296, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f296(c, 1);
  s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);s += f163({ id: s, ten: 'a', con: [], the: {} } as T163);s += f196({ id: s, ten: 'a', con: [], the: {} } as T196);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g296 = <K extends keyof T296>(o: T296, k: K): U296<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U296<K>[K];

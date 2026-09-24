import { f394, T394 } from './m394';
import { f73, T73 } from './m073';
import { f348, T348 } from './m348';
export interface T492 { id: number; ten: string; con: T492[]; the: Record<string, number> }
export type U492<K extends keyof T492> = { [P in K]: T492[P] extends number ? string : T492[P] };
export function f492(x: T492, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f492(c, 1);
  s += f394({ id: s, ten: 'a', con: [], the: {} } as T394);s += f73({ id: s, ten: 'a', con: [], the: {} } as T73);s += f348({ id: s, ten: 'a', con: [], the: {} } as T348);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g492 = <K extends keyof T492>(o: T492, k: K): U492<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U492<K>[K];

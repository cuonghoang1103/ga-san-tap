import { f25, T25 } from './m025';
import { f128, T128 } from './m128';
import { f83, T83 } from './m083';
export interface T147 { id: number; ten: string; con: T147[]; the: Record<string, number> }
export type U147<K extends keyof T147> = { [P in K]: T147[P] extends number ? string : T147[P] };
export function f147(x: T147, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f147(c, 1);
  s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f83({ id: s, ten: 'a', con: [], the: {} } as T83);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g147 = <K extends keyof T147>(o: T147, k: K): U147<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U147<K>[K];

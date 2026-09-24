import { f253, T253 } from './m253';
import { f230, T230 } from './m230';
import { f193, T193 } from './m193';
export interface T289 { id: number; ten: string; con: T289[]; the: Record<string, number> }
export type U289<K extends keyof T289> = { [P in K]: T289[P] extends number ? string : T289[P] };
export function f289(x: T289, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f289(c, 1);
  s += f253({ id: s, ten: 'a', con: [], the: {} } as T253);s += f230({ id: s, ten: 'a', con: [], the: {} } as T230);s += f193({ id: s, ten: 'a', con: [], the: {} } as T193);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g289 = <K extends keyof T289>(o: T289, k: K): U289<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U289<K>[K];

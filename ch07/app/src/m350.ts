import { f167, T167 } from './m167';
import { f293, T293 } from './m293';
import { f35, T35 } from './m035';
export interface T350 { id: number; ten: string; con: T350[]; the: Record<string, number> }
export type U350<K extends keyof T350> = { [P in K]: T350[P] extends number ? string : T350[P] };
export function f350(x: T350, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f350(c, 1);
  s += f167({ id: s, ten: 'a', con: [], the: {} } as T167);s += f293({ id: s, ten: 'a', con: [], the: {} } as T293);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g350 = <K extends keyof T350>(o: T350, k: K): U350<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U350<K>[K];

import { f10, T10 } from './m010';
import { f42, T42 } from './m042';
import { f17, T17 } from './m017';
export interface T57 { id: number; ten: string; con: T57[]; the: Record<string, number> }
export type U57<K extends keyof T57> = { [P in K]: T57[P] extends number ? string : T57[P] };
export function f57(x: T57, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f57(c, 1);
  s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);s += f42({ id: s, ten: 'a', con: [], the: {} } as T42);s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g57 = <K extends keyof T57>(o: T57, k: K): U57<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U57<K>[K];

import { f98, T98 } from './m098';
import { f131, T131 } from './m131';
import { f42, T42 } from './m042';
export interface T189 { id: number; ten: string; con: T189[]; the: Record<string, number> }
export type U189<K extends keyof T189> = { [P in K]: T189[P] extends number ? string : T189[P] };
export function f189(x: T189, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f189(c, 1);
  s += f98({ id: s, ten: 'a', con: [], the: {} } as T98);s += f131({ id: s, ten: 'a', con: [], the: {} } as T131);s += f42({ id: s, ten: 'a', con: [], the: {} } as T42);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g189 = <K extends keyof T189>(o: T189, k: K): U189<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U189<K>[K];

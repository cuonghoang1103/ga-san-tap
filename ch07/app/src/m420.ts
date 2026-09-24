import { f129, T129 } from './m129';
import { f79, T79 } from './m079';
import { f245, T245 } from './m245';
export interface T420 { id: number; ten: string; con: T420[]; the: Record<string, number> }
export type U420<K extends keyof T420> = { [P in K]: T420[P] extends number ? string : T420[P] };
export function f420(x: T420, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f420(c, 1);
  s += f129({ id: s, ten: 'a', con: [], the: {} } as T129);s += f79({ id: s, ten: 'a', con: [], the: {} } as T79);s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g420 = <K extends keyof T420>(o: T420, k: K): U420<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U420<K>[K];

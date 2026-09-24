import { f129, T129 } from './m129';
import { f412, T412 } from './m412';
import { f106, T106 } from './m106';
export interface T518 { id: number; ten: string; con: T518[]; the: Record<string, number> }
export type U518<K extends keyof T518> = { [P in K]: T518[P] extends number ? string : T518[P] };
export function f518(x: T518, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f518(c, 1);
  s += f129({ id: s, ten: 'a', con: [], the: {} } as T129);s += f412({ id: s, ten: 'a', con: [], the: {} } as T412);s += f106({ id: s, ten: 'a', con: [], the: {} } as T106);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g518 = <K extends keyof T518>(o: T518, k: K): U518<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U518<K>[K];

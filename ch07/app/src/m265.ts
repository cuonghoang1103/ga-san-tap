import { f106, T106 } from './m106';
import { f121, T121 } from './m121';
import { f170, T170 } from './m170';
export interface T265 { id: number; ten: string; con: T265[]; the: Record<string, number> }
export type U265<K extends keyof T265> = { [P in K]: T265[P] extends number ? string : T265[P] };
export function f265(x: T265, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f265(c, 1);
  s += f106({ id: s, ten: 'a', con: [], the: {} } as T106);s += f121({ id: s, ten: 'a', con: [], the: {} } as T121);s += f170({ id: s, ten: 'a', con: [], the: {} } as T170);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g265 = <K extends keyof T265>(o: T265, k: K): U265<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U265<K>[K];

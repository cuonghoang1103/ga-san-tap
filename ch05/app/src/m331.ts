import { f194, T194 } from './m194';
import { f59, T59 } from './m059';
import { f155, T155 } from './m155';
export interface T331 { id: number; ten: string; con: T331[]; the: Record<string, number> }
export type U331<K extends keyof T331> = { [P in K]: T331[P] extends number ? string : T331[P] };
export function f331(x: T331, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f331(c, 1);
  s += f194({ id: s, ten: 'a', con: [], the: {} } as T194);s += f59({ id: s, ten: 'a', con: [], the: {} } as T59);s += f155({ id: s, ten: 'a', con: [], the: {} } as T155);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g331 = <K extends keyof T331>(o: T331, k: K): U331<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U331<K>[K];

import { f88, T88 } from './m088';
import { f350, T350 } from './m350';
import { f59, T59 } from './m059';
export interface T478 { id: number; ten: string; con: T478[]; the: Record<string, number> }
export type U478<K extends keyof T478> = { [P in K]: T478[P] extends number ? string : T478[P] };
export function f478(x: T478, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f478(c, 1);
  s += f88({ id: s, ten: 'a', con: [], the: {} } as T88);s += f350({ id: s, ten: 'a', con: [], the: {} } as T350);s += f59({ id: s, ten: 'a', con: [], the: {} } as T59);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g478 = <K extends keyof T478>(o: T478, k: K): U478<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U478<K>[K];

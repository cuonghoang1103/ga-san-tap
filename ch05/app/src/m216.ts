import { f52, T52 } from './m052';
import { f72, T72 } from './m072';
import { f207, T207 } from './m207';
export interface T216 { id: number; ten: string; con: T216[]; the: Record<string, number> }
export type U216<K extends keyof T216> = { [P in K]: T216[P] extends number ? string : T216[P] };
export function f216(x: T216, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f216(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);s += f207({ id: s, ten: 'a', con: [], the: {} } as T207);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g216 = <K extends keyof T216>(o: T216, k: K): U216<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U216<K>[K];

import { f284, T284 } from './m284';
import { f425, T425 } from './m425';
import { f170, T170 } from './m170';
export interface T575 { id: number; ten: string; con: T575[]; the: Record<string, number> }
export type U575<K extends keyof T575> = { [P in K]: T575[P] extends number ? string : T575[P] };
export function f575(x: T575, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f575(c, 1);
  s += f284({ id: s, ten: 'a', con: [], the: {} } as T284);s += f425({ id: s, ten: 'a', con: [], the: {} } as T425);s += f170({ id: s, ten: 'a', con: [], the: {} } as T170);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g575 = <K extends keyof T575>(o: T575, k: K): U575<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U575<K>[K];

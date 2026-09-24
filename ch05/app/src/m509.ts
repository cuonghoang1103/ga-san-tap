import { f207, T207 } from './m207';
import { f46, T46 } from './m046';
import { f347, T347 } from './m347';
export interface T509 { id: number; ten: string; con: T509[]; the: Record<string, number> }
export type U509<K extends keyof T509> = { [P in K]: T509[P] extends number ? string : T509[P] };
export function f509(x: T509, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f509(c, 1);
  s += f207({ id: s, ten: 'a', con: [], the: {} } as T207);s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f347({ id: s, ten: 'a', con: [], the: {} } as T347);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g509 = <K extends keyof T509>(o: T509, k: K): U509<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U509<K>[K];

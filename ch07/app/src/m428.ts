import { f347, T347 } from './m347';
import { f214, T214 } from './m214';
import { f427, T427 } from './m427';
export interface T428 { id: number; ten: string; con: T428[]; the: Record<string, number> }
export type U428<K extends keyof T428> = { [P in K]: T428[P] extends number ? string : T428[P] };
export function f428(x: T428, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f428(c, 1);
  s += f347({ id: s, ten: 'a', con: [], the: {} } as T347);s += f214({ id: s, ten: 'a', con: [], the: {} } as T214);s += f427({ id: s, ten: 'a', con: [], the: {} } as T427);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g428 = <K extends keyof T428>(o: T428, k: K): U428<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U428<K>[K];

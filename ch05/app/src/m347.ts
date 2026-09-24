import { f166, T166 } from './m166';
import { f266, T266 } from './m266';
import { f256, T256 } from './m256';
export interface T347 { id: number; ten: string; con: T347[]; the: Record<string, number> }
export type U347<K extends keyof T347> = { [P in K]: T347[P] extends number ? string : T347[P] };
export function f347(x: T347, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f347(c, 1);
  s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);s += f266({ id: s, ten: 'a', con: [], the: {} } as T266);s += f256({ id: s, ten: 'a', con: [], the: {} } as T256);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g347 = <K extends keyof T347>(o: T347, k: K): U347<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U347<K>[K];

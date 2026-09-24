import { f159, T159 } from './m159';
import { f149, T149 } from './m149';
import { f187, T187 } from './m187';
export interface T245 { id: number; ten: string; con: T245[]; the: Record<string, number> }
export type U245<K extends keyof T245> = { [P in K]: T245[P] extends number ? string : T245[P] };
export function f245(x: T245, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f245(c, 1);
  s += f159({ id: s, ten: 'a', con: [], the: {} } as T159);s += f149({ id: s, ten: 'a', con: [], the: {} } as T149);s += f187({ id: s, ten: 'a', con: [], the: {} } as T187);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g245 = <K extends keyof T245>(o: T245, k: K): U245<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U245<K>[K];

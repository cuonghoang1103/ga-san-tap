import { f373, T373 } from './m373';
import { f336, T336 } from './m336';
import { f177, T177 } from './m177';
export interface T448 { id: number; ten: string; con: T448[]; the: Record<string, number> }
export type U448<K extends keyof T448> = { [P in K]: T448[P] extends number ? string : T448[P] };
export function f448(x: T448, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f448(c, 1);
  s += f373({ id: s, ten: 'a', con: [], the: {} } as T373);s += f336({ id: s, ten: 'a', con: [], the: {} } as T336);s += f177({ id: s, ten: 'a', con: [], the: {} } as T177);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g448 = <K extends keyof T448>(o: T448, k: K): U448<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U448<K>[K];

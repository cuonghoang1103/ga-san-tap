import { f265, T265 } from './m265';
import { f209, T209 } from './m209';
import { f308, T308 } from './m308';
export interface T391 { id: number; ten: string; con: T391[]; the: Record<string, number> }
export type U391<K extends keyof T391> = { [P in K]: T391[P] extends number ? string : T391[P] };
export function f391(x: T391, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f391(c, 1);
  s += f265({ id: s, ten: 'a', con: [], the: {} } as T265);s += f209({ id: s, ten: 'a', con: [], the: {} } as T209);s += f308({ id: s, ten: 'a', con: [], the: {} } as T308);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g391 = <K extends keyof T391>(o: T391, k: K): U391<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U391<K>[K];

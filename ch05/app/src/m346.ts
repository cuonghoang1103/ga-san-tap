import { f163, T163 } from './m163';
import { f180, T180 } from './m180';
import { f139, T139 } from './m139';
export interface T346 { id: number; ten: string; con: T346[]; the: Record<string, number> }
export type U346<K extends keyof T346> = { [P in K]: T346[P] extends number ? string : T346[P] };
export function f346(x: T346, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f346(c, 1);
  s += f163({ id: s, ten: 'a', con: [], the: {} } as T163);s += f180({ id: s, ten: 'a', con: [], the: {} } as T180);s += f139({ id: s, ten: 'a', con: [], the: {} } as T139);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g346 = <K extends keyof T346>(o: T346, k: K): U346<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U346<K>[K];

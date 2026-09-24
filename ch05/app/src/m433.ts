import { f402, T402 } from './m402';
import { f109, T109 } from './m109';
import { f346, T346 } from './m346';
export interface T433 { id: number; ten: string; con: T433[]; the: Record<string, number> }
export type U433<K extends keyof T433> = { [P in K]: T433[P] extends number ? string : T433[P] };
export function f433(x: T433, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f433(c, 1);
  s += f402({ id: s, ten: 'a', con: [], the: {} } as T402);s += f109({ id: s, ten: 'a', con: [], the: {} } as T109);s += f346({ id: s, ten: 'a', con: [], the: {} } as T346);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g433 = <K extends keyof T433>(o: T433, k: K): U433<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U433<K>[K];

import { f309, T309 } from './m309';
import { f286, T286 } from './m286';
import { f267, T267 } from './m267';
export interface T313 { id: number; ten: string; con: T313[]; the: Record<string, number> }
export type U313<K extends keyof T313> = { [P in K]: T313[P] extends number ? string : T313[P] };
export function f313(x: T313, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f313(c, 1);
  s += f309({ id: s, ten: 'a', con: [], the: {} } as T309);s += f286({ id: s, ten: 'a', con: [], the: {} } as T286);s += f267({ id: s, ten: 'a', con: [], the: {} } as T267);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g313 = <K extends keyof T313>(o: T313, k: K): U313<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U313<K>[K];

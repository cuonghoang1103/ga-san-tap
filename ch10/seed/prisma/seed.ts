// Ban TRUOC 08/08/2026 18:39: union ContentType CHEP TAY — van con 'CODE'.
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
type Idea = {
  title: string;
  suggestedType: 'VLOG' | 'AFFILIATE' | 'CODE' | 'REVIEW' | 'IDEA' | 'OTHER' | null;
};
const ideas: Idea[] = [
  { title: 'Vlog mot ngay hoc', suggestedType: 'VLOG' },
  { title: 'Review PR dau tien', suggestedType: 'CODE' },
  { title: 'Y tuong chua phan loai', suggestedType: null },
];
async function main() {
  let loi = 0;
  for (const i of ideas) {
    try {
      await prisma.contentIdea.create({ data: i });
      console.log('✓', i.title);
    } catch (e) {
      loi++;
      const m = (e as Error).message.trim().split('\n');
      console.log('✗', i.title, '—', m[m.length - 1]);
    }
  }
  console.log(`seed xong: ${ideas.length - loi}/${ideas.length}`);
}
main().finally(() => prisma.$disconnect());

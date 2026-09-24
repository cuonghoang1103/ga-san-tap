// Ban VA (giong commit f2f36e1f): lay ContentType tu @prisma/client, va hong thi THOAT KHAC 0.
import { PrismaClient, ContentType } from '@prisma/client';
const prisma = new PrismaClient();
type Idea = { title: string; suggestedType: ContentType | null };
const ideas: Idea[] = [
  { title: 'Vlog mot ngay hoc', suggestedType: 'VLOG' },
  { title: 'Review PR dau tien', suggestedType: 'CODE' },
  { title: 'Y tuong chua phan loai', suggestedType: null },
];
async function main() {
  for (const i of ideas) {
    await prisma.contentIdea.create({ data: i });
    console.log('✓', i.title);
  }
}
main()
  .catch((e) => { console.error('✗ seed hong:', (e as Error).message.trim().split('\n').pop()); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());

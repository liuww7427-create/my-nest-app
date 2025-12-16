import { prisma } from '../lib/prisma';

async function main() {
  console.log('🌱 开始播种数据...');

  // 清空现有数据
  console.log('🗑️  清空现有数据...');
  
  await prisma.item.deleteMany();

  // 创建讲师用户
  console.log('👨‍🏫 创建讲师用户...');
  const instructor1 = await prisma.item.create({
    data: {
      title: 'title---***',
      content: 'content---***',
    },
  });

  console.log('✅ 种子数据创建完成!');
}
main()
  .catch((e) => {
    console.error('❌ 错误:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

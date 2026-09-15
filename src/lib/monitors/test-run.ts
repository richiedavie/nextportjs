import { PrismaClient } from '@prisma/client';
import { monitorQueue } from './monitor.queue';
import { monitorWorker } from './monitor.processor';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Worker aktif & mendengarkan Redis...');

  // 1. Buat/Ambil Site dummy
  const site = await prisma.site.upsert({
    where: { domain: 'google.com' },
    update: {},
    create: {
      name: 'Google DNS',
      domain: 'google.com',
    },
  });

  // 2. Buat/Ambil Monitor dummy yang terhubung ke Site
  const monitor = await prisma.monitor.upsert({
    where: { id: 'test-google-monitor' },
    update: {},
    create: {
      id: 'test-google-monitor',
      siteId: site.id,
      name: 'Ping Google DNS',
      type: 'PING',
      target: '8.8.8.8',
      interval: 10,
      status: 'ACTIVE',
    },
  });

  // Event listener log hasil
  monitorWorker.on('completed', (job) => {
    console.log(`✅ Job ${job.id} sukses diproses!`);
  });

  monitorWorker.on('failed', (job, err) => {
    console.error(`❌ Job ${job?.id} gagal:`, err.message);
  });

  // 3. Kirim job dengan monitorId yang VALID
  await monitorQueue.add('check-direct', {
    monitorId: monitor.id,
    target: monitor.target,
    type: monitor.type,
  });
}

main();

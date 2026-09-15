import { monitorQueue } from './monitor.queue';

async function clear() {
  console.log('🧹 Membersihkan seluruh job di Redis...');
  
  // Hapus semua repeatable jobs
  const repeatableJobs = await monitorQueue.getRepeatableJobs();
  for (const job of repeatableJobs) {
    await monitorQueue.removeRepeatableByKey(job.key);
  }

  // Drain dan obliterate seluruh isi queue
  await monitorQueue.drain();
  await monitorQueue.obliterate({ force: true });

  console.log('✅ Queue Redis bersih total!');
  process.exit(0);
}

clear();

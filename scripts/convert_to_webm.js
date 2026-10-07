const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

console.log('Using ffmpeg at:', ffmpegPath);

const projectDir = path.join(__dirname, '..', 'public', 'projects');

const filesToConvert = [
  { in: 'biorama.mp4', out: 'biorama.webm' },
  { in: 'sarinah15sec.mp4', out: 'sarinah15sec.webm' },
  { in: 'hajatan.mp4', out: 'hajatan.webm' },
  { in: 'Sarinah30Secrevision.mp4', out: 'Sarinah30Secrevision.webm' },
  { in: 'OFFICIAL TRAILER - NOTIFIKASI (2024).mp4', out: 'OFFICIAL TRAILER - NOTIFIKASI (2024).webm', copyTo: 'trailer-notifikasi.webm' },
];

for (const item of filesToConvert) {
  const inputPath = path.join(projectDir, item.in);
  const outputPath = path.join(projectDir, item.out);

  if (!fs.existsSync(inputPath)) {
    console.warn('File not found, skipping:', inputPath);
    continue;
  }

  console.log(`\n========================================`);
  console.log(`Converting: ${item.in} -> ${item.out}`);
  console.log(`Input size: ${(fs.statSync(inputPath).size / (1024 * 1024)).toFixed(2)} MB`);

  const args = [
    '-i', inputPath,
    '-c:v', 'libvpx-vp9',
    '-crf', '34',
    '-b:v', '0',
    '-deadline', 'realtime',
    '-cpu-used', '4',
    '-c:a', 'libopus',
    '-b:a', '128k',
    outputPath,
    '-y'
  ];

  const startTime = Date.now();
  try {
    execFileSync(ffmpegPath, args, { stdio: 'inherit' });
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const outSize = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
    console.log(`Success in ${elapsed}s! Output size: ${outSize} MB`);

    if (item.copyTo) {
      const copyDest = path.join(projectDir, item.copyTo);
      fs.copyFileSync(outputPath, copyDest);
      console.log(`Copied to ${item.copyTo}`);
    }
  } catch (err) {
    console.error(`Error converting ${item.in}:`, err.message);
  }
}

console.log('\nAll conversions finished!');

const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  const seconds = Number(args[i]);
  if (!isNaN(seconds) && seconds >= 0) {
    setTimeout(() => console.log(`Timer for ${seconds} seconds has finished!`), seconds * 1000);
  }
}

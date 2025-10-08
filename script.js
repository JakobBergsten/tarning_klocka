function updateProgressBar() {
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 1);
  const yearEnd = new Date(now.getFullYear() + 1, 0, 1);

  const totalMs = yearEnd - yearStart;
  const passedMs = now - yearStart;
  const progress = (passedMs / totalMs) * 100;

  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');

  bar.style.width = progress.toFixed(2) + '%';
  text.textContent = `Året är ${progress.toFixed(2)}% avklarat — ${ (100 - progress).toFixed(2)}% kvar 🎉`;
}

updateProgressBar();

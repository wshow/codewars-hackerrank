// https://www.codewars.com/kata/human-readable-duration-format/train/javascript

const formatDuration = (seconds) => {
  const y = Math.floor(seconds / 86400 / 365);
  let remain = seconds % (86400 * 365);
  const d = Math.floor(remain / 86400);
  remain %= 86400;
  const h = Math.floor(remain / 3600);
  remain %= 3600;
  const m = Math.floor(remain / 60);
  const s = remain % 60;
  const result = [];
  if (y > 0) result.push(`${y} year${y > 1 ? 's' : ''}`);
  if (d > 0) result.push(`${d} day${d > 1 ? 's' : ''}`);
  if (h > 0) result.push(`${h} hour${h > 1 ? 's' : ''}`);
  if (m > 0) result.push(`${m} minute${m > 1 ? 's' : ''}`);
  if (s > 0) result.push(`${s} second${s > 1 ? 's' : ''}`);
  return result.join(', ').replace(/^(.+),([^,]+)$/, '$1 and$2') || 'now';
};

// global.formatDuration = formatDuration;

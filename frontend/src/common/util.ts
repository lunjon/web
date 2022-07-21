export function chunks<T>(array: T[], size: number): T[][] {
  if (array.length === 0) {
    return [];
  }

  const items = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i+size);
    items.push(chunk);
  }

  return items;
}

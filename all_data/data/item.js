const fs = require('node:fs/promises');


async function getStoredItems() {
  const rawFileContent = await fs.readFile('item.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.item ?? [];
  return storedItems;
}

function storeItems(item) {
  return fs.writeFile('item.json', JSON.stringify({ items: item || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
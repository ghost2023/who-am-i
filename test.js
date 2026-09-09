const assert = require('assert');
const { CATEGORIES } = require('./characters.js');
const { makeDeck, draw, deal, fmt } = require('./game.js');

// data sane: non-empty, unique ids, no dupes inside a category
const ids = CATEGORIES.map(c => c.id);
assert.strictEqual(new Set(ids).size, ids.length, 'duplicate category id');
for (const c of CATEGORIES) {
  assert.ok(c.items.length > 10, c.id + ' too small');
  const names = c.items.map(i => i.name);
  assert.strictEqual(new Set(names).size, names.length, 'duplicate name in ' + c.id + ': ' +
    names.filter((x, i) => names.indexOf(x) !== i));
  for (const i of c.items) assert.ok(!i.img || i.img.startsWith('https://'), 'bad image url for ' + i.name);
}

// deck: only picked categories, no dupes across categories
const deck = makeDeck(['music', 'spicy'], CATEGORIES);
const names = deck.map(d => d.name);
assert.strictEqual(new Set(names).size, names.length, 'deck has duplicates');
assert.ok(names.includes('Kanye West'));
assert.ok(!names.includes('Pikachu'));

// draw hands out every card once before repeating, then wraps
const s = { i: 0 };
const got = deck.map(() => draw(deck, s));
assert.strictEqual(new Set(got.map(c => c.name)).size, deck.length, 'draw repeated early');
assert.strictEqual(draw(deck, s).name, deck[0].name, 'draw did not wrap');

// deal gives every player a different character
const hands = deal(deck, 6);
assert.strictEqual(new Set(hands.map(h => h.name)).size, 6);

// cards carry their image through the deck
assert.ok(deck.find(c => c.name === 'Kanye West').img.startsWith('https://'));

assert.strictEqual(fmt(90), '1:30');
assert.strictEqual(fmt(5), '0:05');
assert.strictEqual(fmt(-3), '0:00');

const all = CATEGORIES.flatMap(c => c.items);
console.log('ok — ' + all.length + ' characters, ' + all.filter(i => i.img).length + ' with images');

// pure game bits, shared by the app and test.js
function shuffle(a, rnd = Math.random) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// one flat shuffled deck from the picked categories, deduped by name
function makeDeck(catIds, categories, rnd) {
  const seen = new Map();
  for (const c of categories) {
    if (!catIds.includes(c.id)) continue;
    for (const it of c.items) if (!seen.has(it.name)) seen.set(it.name, { ...it, cat: c.name, emoji: c.emoji });
  }
  return shuffle([...seen.values()], rnd);
}

// deck cursor lives on `s.i`; wraps when the deck runs out
function draw(deck, s) { if (s.i >= deck.length) s.i = 0; return deck[s.i++]; }

function deal(deck, n) { return deck.slice(0, n); }

function fmt(sec) { sec = Math.max(0, sec | 0); return ((sec / 60) | 0) + ':' + String(sec % 60).padStart(2, '0'); }

if (typeof module !== 'undefined') module.exports = { shuffle, makeDeck, draw, deal, fmt };

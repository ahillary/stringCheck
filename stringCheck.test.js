const check = require('./stringCheck');

test('evaluates string to find three ! between each two sets of two integers with sum 15', () => {
  expect(check('gaeb7!!!8jeks5!!!tux10')).toBe(true);
});

test('evaluates string to find three ! between each the only set of two integers with sum 15', () => {
  expect(check('kem!7!!nej!8ww1!!!!!!5')).toBe(true);
});

test('evaluates string to find three ! between each each set of two integers with sum 15', () => {
  expect(check('7!!!8!!!7!!!8!!!7')).toBe(true);
});

test('evaluates string to discover a lack of a set of three ! between a set of two integers with sum 15', () => {
  expect(check('5!!aaaaaaaaaaaaa!10!5')).toBe(false);
});

test('evaluates string to discover a lack of a set of three ! between a set of two integers with sum 15', () => {
  expect(check('Aa6!9')).toBe(false);
});

test('evaluates string to discover a lack of a set of two integers with sum 15', () => {
  expect(check('Aa4!!!9!!gh!3!jid!p!1B')).toBe(false);
});

test('evaluates string to discover the only set of two integers with sum 15 has exactly 3 ! between', () => {
  expect(check('1Aa!gh!jid!p14B2')).toBe(true);
});

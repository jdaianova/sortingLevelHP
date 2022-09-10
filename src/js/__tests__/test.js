import sortHP from '../sorthp';

test.each([
  [[
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ], [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]],
  [[
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 3 },
    { name: 'лучник', health: 10 },
  ], [
    { name: 'мечник', health: 50 },
    { name: 'лучник', health: 10 },
    { name: 'маг', health: 3 },
  ]],
  [[
    { name: 'мечник', health: 0 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 8 },
  ], [
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 8 },
    { name: 'мечник', health: 0 },
  ]],
])(('sorting HP'), (chars, expected) => {
  expect(sortHP(chars)).toEqual(expected);
});

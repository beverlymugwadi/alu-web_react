import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns current year', () => {
  const year = new Date().getFullYear();
  expect(getFullYear()).toBe(year);
});

test('getFooterCopy returns Holberton School when isIndex is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns Holberton School main dashboard when isIndex is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns expected html string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

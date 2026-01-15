import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns current year', () => {
  const year = new Date().getFullYear();
  expect(getFullYear()).toBe(year);
});

test('getFooterCopy returns correct values', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns expected string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

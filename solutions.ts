// Problem 1: Filter Even Numbers
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// Problem 2: Reverse String
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Problem 3: Type Guard
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return 'String';
  }
  return 'Number';
}

// Problem 4: Generic Function
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Problem 5: Interface & Toggle Status
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

# `any` vs `unknown` in TypeScript: Why Type Safety Matters

## Introduction

TypeScript-এর সবচেয়ে বড় সুবিধা হলো static typing - কিন্তু `any` ব্যবহার করলে সেই সুবিধা চলে যায়। এই ব্লগে আমরা দেখবো কেন `any` একটা "type safety hole" এবং কেন `unknown` অনেক বেশি safe।

## `any` - The Type Safety Hole

`any` ব্যবহার করলে TypeScript essentially চুপ হয়ে যায়। যেকোনো কিছু করতে দেয়, কোনো error দেয় না।

```typescript
let data: any = 'hello';
data.toFixed(2); // TypeScript কোনো error দেবে না, কিন্তু runtime-এ crash করবে
```

এটা dangerous কারণ compiler তোমাকে protect করছে না। তুমি মনে করছো সব ঠিক আছে, কিন্তু app production-এ গিয়ে ব্রেক হচ্ছে।

## `unknown` - The Safer Choice

`unknown` মানে হলো - "আমি জানি না এটা কী, কিন্তু ব্যবহার করার আগে check করতে হবে।"

```typescript
let data: unknown = 'hello';

// এটা directly করা যাবে না
data.toUpperCase(); // Error: Object is of type 'unknown'

// আগে type check করতে হবে
if (typeof data === 'string') {
  data.toUpperCase(); // এখন safe
}
```

## Type Narrowing কী?

Type narrowing মানে হলো - runtime-এ check করে TypeScript-কে বলা যে "এই মুহূর্তে এই variable এই type।" এটা করা হয় `typeof`, `instanceof`, বা custom type guard দিয়ে।

```typescript
function processInput(value: unknown): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value.toFixed(2);
  }
  return 'unsupported type';
}
```

## Conclusion

API response বা user input-এর মতো unpredictable data handle করার সময় কখনো `any` ব্যবহার করো না। `unknown` ব্যবহার করো এবং type narrowing দিয়ে safe রাখো। এটাই TypeScript-এর সঠিক ব্যবহার।

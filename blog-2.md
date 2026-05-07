# OOP-এর চারটি স্তম্ভ এবং TypeScript-এ তাদের ব্যবহার

## Introduction

বড় প্রজেক্টে code manage করা কঠিন হয়ে পড়ে। Object-Oriented Programming (OOP)-এর চারটি মূল concept - Encapsulation, Abstraction, Inheritance, এবং Polymorphism - এই সমস্যা সমাধান করে।

## 1. Encapsulation

Data এবং সেই data-র উপর কাজ করা method একসাথে রাখা এবং বাইরে থেকে সরাসরি access বন্ধ করা।

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500
// account.balance - directly access করা যাবে না
```

## 2. Abstraction

ভেতরের জটিল logic লুকিয়ে রেখে শুধু দরকারি interface দেখানো।

```typescript
abstract class Shape {
  abstract getArea(): number;

  describe(): string {
    return `This shape has an area of ${this.getArea()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

## 3. Inheritance

একটা class-এর properties এবং methods আরেকটা class নিয়ে নেওয়া, code repeat না করে।

```typescript
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
```

## 4. Polymorphism

একই method আলাদা class-এ আলাদাভাবে কাজ করা।

```typescript
class Animal {
  speak(): string {
    return 'Some sound';
  }
}

class Dog extends Animal {
  speak(): string {
    return 'Woof!';
  }
}

class Cat extends Animal {
  speak(): string {
    return 'Meow!';
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((a) => console.log(a.speak()));
// Woof!
// Meow!
```

## Conclusion

এই চারটি concept একসাথে ব্যবহার করলে large-scale TypeScript project অনেক বেশি maintainable এবং scalable হয়। প্রতিটি concept আলাদা সমস্যা solve করে এবং একসাথে এরা powerful architecture তৈরি করে।

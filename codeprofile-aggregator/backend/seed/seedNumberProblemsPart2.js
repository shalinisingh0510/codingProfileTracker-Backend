const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `

## Harshad Number Check
**Problem Description:** 
Check whether a number is a Harshad number. A Harshad number (or Niven number) is an integer that is divisible by the sum of its digits.

**Sample Input:** \`18\`
**Sample Output:** \`True\` (Sum of digits is 9, 18 is divisible by 9)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 18, temp = n, sum = 0;
    while(temp > 0) {
        sum += temp % 10;
        temp /= 10;
    }
    cout << (n % sum == 0 ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 18, temp = n, sum = 0;
        while(temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        System.out.println(n % sum == 0 ? "True" : "False");
    }
}
:::
:::python
n = 18
s = sum(int(d) for d in str(n))
print("True" if n % s == 0 else "False")
:::
:::javascript
const n = 18;
const sum = n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
console.log(n % sum === 0 ? "True" : "False");
:::
\`\`\`

## LCM of Two Numbers
**Problem Description:** 
Write a program to find the Lowest Common Multiple (LCM) of two numbers.

**Sample Input:** \`12, 15\`
**Sample Output:** \`60\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;
int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
int main() {
    int a = 12, b = 15;
    cout << (a * b) / gcd(a, b) << endl;
    return 0;
}
:::
:::java
public class Main {
    static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
    public static void main(String[] args) {
        int a = 12, b = 15;
        System.out.println((a * b) / gcd(a, b));
    }
}
:::
:::python
import math
a, b = 12, 15
print((a * b) // math.gcd(a, b))
:::
:::javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const a = 12, b = 15;
console.log((a * b) / gcd(a, b));
:::
\`\`\`

## Leap Year Check
**Problem Description:** 
Write a program to check whether a given year is a leap year.

**Sample Input:** \`2024\`
**Sample Output:** \`True\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int year = 2024;
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) cout << "True\\n";
    else cout << "False\\n";
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int year = 2024;
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) System.out.println("True");
        else System.out.println("False");
    }
}
:::
:::python
year = 2024
print("True" if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0) else "False")
:::
:::javascript
const year = 2024;
console.log((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "True" : "False");
:::
\`\`\`

## Maximum and Minimum Digit in a Number
**Problem Description:** 
Write a program to find the maximum and minimum digit in a given number.

**Sample Input:** \`48293\`
**Sample Output:** \`Max: 9, Min: 2\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 48293, maxD = 0, minD = 9;
    while(n > 0) {
        int d = n % 10;
        if(d > maxD) maxD = d;
        if(d < minD) minD = d;
        n /= 10;
    }
    cout << "Max: " << maxD << ", Min: " << minD << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 48293, maxD = 0, minD = 9;
        while(n > 0) {
            int d = n % 10;
            maxD = Math.max(maxD, d);
            minD = Math.min(minD, d);
            n /= 10;
        }
        System.out.println("Max: " + maxD + ", Min: " + minD);
    }
}
:::
:::python
n = "48293"
print(f"Max: {max(n)}, Min: {min(n)}")
:::
:::javascript
const n = "48293".split('').map(Number);
console.log(\`Max: \${Math.max(...n)}, Min: \${Math.min(...n)}\`);
:::
\`\`\`

## Palindrome Number Check
**Problem Description:** 
Check whether a given number is a palindrome or not.

**Sample Input:** \`121\`
**Sample Output:** \`True\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 121, temp = n, rev = 0;
    while(temp > 0) {
        rev = rev * 10 + (temp % 10);
        temp /= 10;
    }
    cout << (n == rev ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 121, temp = n, rev = 0;
        while(temp > 0) {
            rev = rev * 10 + (temp % 10);
            temp /= 10;
        }
        System.out.println(n == rev ? "True" : "False");
    }
}
:::
:::python
n = "121"
print("True" if n == n[::-1] else "False")
:::
:::javascript
const n = "121";
console.log(n === n.split('').reverse().join('') ? "True" : "False");
:::
\`\`\`

## Palindrome Numbers in a Given Range
**Problem Description:** 
Write a program to print all palindrome numbers in a given range.

**Sample Input:** \`10, 50\`
**Sample Output:** \`11 22 33 44\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

bool isPalindrome(int n) {
    int temp = n, rev = 0;
    while(temp > 0) { rev = rev * 10 + (temp % 10); temp /= 10; }
    return n == rev;
}

int main() {
    int a = 10, b = 50;
    for(int i = a; i <= b; i++) {
        if(isPalindrome(i)) cout << i << " ";
    }
    return 0;
}
:::
:::java
public class Main {
    static boolean isPalindrome(int n) {
        int temp = n, rev = 0;
        while(temp > 0) { rev = rev * 10 + (temp % 10); temp /= 10; }
        return n == rev;
    }
    public static void main(String[] args) {
        int a = 10, b = 50;
        for(int i = a; i <= b; i++) {
            if(isPalindrome(i)) System.out.print(i + " ");
        }
    }
}
:::
:::python
a, b = 10, 50
print(" ".join(str(i) for i in range(a, b+1) if str(i) == str(i)[::-1]))
:::
:::javascript
const a = 10, b = 50;
let res = [];
for(let i = a; i <= b; i++) {
    if(i.toString() === i.toString().split('').reverse().join('')) res.push(i);
}
console.log(res.join(' '));
:::
\`\`\`

## Perfect Number Check
**Problem Description:** 
Check if a number is a Perfect Number. A perfect number is a positive integer that is equal to the sum of its proper divisors.

**Sample Input:** \`28\`
**Sample Output:** \`True\` (1 + 2 + 4 + 7 + 14 = 28)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 28, sum = 0;
    for(int i = 1; i <= n/2; i++) {
        if(n % i == 0) sum += i;
    }
    cout << (sum == n ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 28, sum = 0;
        for(int i = 1; i <= n/2; i++) {
            if(n % i == 0) sum += i;
        }
        System.out.println(sum == n ? "True" : "False");
    }
}
:::
:::python
n = 28
s = sum([i for i in range(1, n//2 + 1) if n % i == 0])
print("True" if s == n else "False")
:::
:::javascript
const n = 28; let sum = 0;
for(let i = 1; i <= n/2; i++) if(n % i === 0) sum += i;
console.log(sum === n ? "True" : "False");
:::
\`\`\`

## Permutations of n people in r seats
**Problem Description:** 
Write a program to calculate the number of permutations where $n$ people can occupy $r$ seats. ($P(n, r) = n! / (n-r)!$)

**Sample Input:** \`n = 5, r = 3\`
**Sample Output:** \`60\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

long long fact(int n) {
    long long f = 1;
    for(int i = 1; i <= n; i++) f *= i;
    return f;
}

int main() {
    int n = 5, r = 3;
    cout << fact(n) / fact(n - r) << endl;
    return 0;
}
:::
:::java
public class Main {
    static long fact(int n) {
        long f = 1;
        for(int i = 1; i <= n; i++) f *= i;
        return f;
    }
    public static void main(String[] args) {
        int n = 5, r = 3;
        System.out.println(fact(n) / fact(n - r));
    }
}
:::
:::python
import math
n, r = 5, 3
print(math.perm(n, r))
:::
:::javascript
const fact = n => {
    let f = 1;
    for(let i = 1; i <= n; i++) f *= i;
    return f;
};
const n = 5, r = 3;
console.log(fact(n) / fact(n - r));
:::
\`\`\`

## Check if Number is Positive or Negative
**Problem Description:** 
Write a program to check whether a given number is positive or negative.

**Sample Input:** \`-10\`
**Sample Output:** \`Negative\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;
int main() {
    int n = -10;
    if(n > 0) cout << "Positive\\n";
    else if(n < 0) cout << "Negative\\n";
    else cout << "Zero\\n";
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = -10;
        if(n > 0) System.out.println("Positive");
        else if(n < 0) System.out.println("Negative");
        else System.out.println("Zero");
    }
}
:::
:::python
n = -10
if n > 0: print("Positive")
elif n < 0: print("Negative")
else: print("Zero")
:::
:::javascript
const n = -10;
if(n > 0) console.log("Positive");
else if(n < 0) console.log("Negative");
else console.log("Zero");
:::
\`\`\`

## Power of a Number
**Problem Description:** 
Write a program to calculate $x^y$ without using built-in functions.

**Sample Input:** \`x = 2, y = 5\`
**Sample Output:** \`32\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int x = 2, y = 5;
    long long res = 1;
    for(int i = 0; i < y; i++) res *= x;
    cout << res << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int x = 2, y = 5;
        long res = 1;
        for(int i = 0; i < y; i++) res *= x;
        System.out.println(res);
    }
}
:::
:::python
x, y = 2, 5
print(x ** y)
:::
:::javascript
const x = 2, y = 5;
let res = 1;
for(let i = 0; i < y; i++) res *= x;
console.log(res);
:::
\`\`\`

## Prime Number Check
**Problem Description:** 
Check whether a given number is a prime number.

**Sample Input:** \`17\`
**Sample Output:** \`True\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 17;
    bool isPrime = true;
    if(n < 2) isPrime = false;
    for(int i = 2; i * i <= n; i++) {
        if(n % i == 0) { isPrime = false; break; }
    }
    cout << (isPrime ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 17;
        boolean isPrime = n > 1;
        for(int i = 2; i * i <= n; i++) {
            if(n % i == 0) { isPrime = false; break; }
        }
        System.out.println(isPrime ? "True" : "False");
    }
}
:::
:::python
n = 17
isPrime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))
print("True" if isPrime else "False")
:::
:::javascript
const n = 17;
let isPrime = n > 1;
for(let i = 2; i * i <= n; i++) {
    if(n % i === 0) { isPrime = false; break; }
}
console.log(isPrime ? "True" : "False");
:::
\`\`\`

## Prime Factors of a Number
**Problem Description:** 
Write a program to find all the prime factors of a given number.

**Sample Input:** \`315\`
**Sample Output:** \`3 3 5 7\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 315;
    for(int i = 2; i <= n; i++) {
        while(n % i == 0) {
            cout << i << " ";
            n /= i;
        }
    }
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 315;
        for(int i = 2; i <= n; i++) {
            while(n % i == 0) {
                System.out.print(i + " ");
                n /= i;
            }
        }
    }
}
:::
:::python
n = 315
for i in range(2, n + 1):
    while n % i == 0:
        print(i, end=" ")
        n //= i
:::
:::javascript
let n = 315;
let res = [];
for(let i = 2; i <= n; i++) {
    while(n % i === 0) {
        res.push(i);
        n /= i;
    }
}
console.log(res.join(' '));
:::
\`\`\`
`;

const seedNumbersPart2 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const topic = await ExamGuideTopic.findOne({ examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-numbers' });
    if (topic) {
      topic.contentMarkdown += markdownContent;
      await topic.save();
      console.log('Successfully appended 12 more number problems!');
    } else {
      console.log('Topic not found!');
    }
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedNumbersPart2();

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `

## Prime Numbers in a Given Range
**Problem Description:** 
Write a program to print all the prime numbers within a given range \`[a, b]\`.

**Sample Input:** \`10, 20\`
**Sample Output:** \`11 13 17 19\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

bool isPrime(int n) {
    if(n < 2) return false;
    for(int i = 2; i * i <= n; i++) if(n % i == 0) return false;
    return true;
}

int main() {
    int a = 10, b = 20;
    for(int i = a; i <= b; i++) {
        if(isPrime(i)) cout << i << " ";
    }
    return 0;
}
:::
:::java
public class Main {
    static boolean isPrime(int n) {
        if(n < 2) return false;
        for(int i = 2; i * i <= n; i++) if(n % i == 0) return false;
        return true;
    }
    public static void main(String[] args) {
        int a = 10, b = 20;
        for(int i = a; i <= b; i++) {
            if(isPrime(i)) System.out.print(i + " ");
        }
    }
}
:::
:::python
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

print(" ".join(str(i) for i in range(10, 21) if is_prime(i)))
:::
:::javascript
const isPrime = n => {
    if(n < 2) return false;
    for(let i = 2; i * i <= n; i++) if(n % i === 0) return false;
    return true;
};
let res = [];
for(let i = 10; i <= 20; i++) if(isPrime(i)) res.push(i);
console.log(res.join(" "));
:::
\`\`\`

## Roots of a Quadratic Equation
**Problem Description:** 
Write a program to find the roots of a quadratic equation $ax^2 + bx + c = 0$.

**Sample Input:** \`a = 1, b = -3, c = 2\`
**Sample Output:** \`Roots are real and distinct: 2 and 1\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double a = 1, b = -3, c = 2;
    double d = b * b - 4 * a * c;
    if(d > 0) {
        cout << "Roots are real and distinct: " << (-b + sqrt(d)) / (2 * a) << " and " << (-b - sqrt(d)) / (2 * a) << endl;
    } else if(d == 0) {
        cout << "Roots are real and equal: " << -b / (2 * a) << endl;
    } else {
        cout << "Roots are complex" << endl;
    }
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        double a = 1, b = -3, c = 2;
        double d = b * b - 4 * a * c;
        if(d > 0) {
            System.out.println("Roots are real and distinct: " + ((-b + Math.sqrt(d)) / (2 * a)) + " and " + ((-b - Math.sqrt(d)) / (2 * a)));
        } else if(d == 0) {
            System.out.println("Roots are real and equal: " + (-b / (2 * a)));
        } else {
            System.out.println("Roots are complex");
        }
    }
}
:::
:::python
import math
a, b, c = 1, -3, 2
d = b**2 - 4*a*c
if d > 0:
    print(f"Roots are real and distinct: {(-b + math.sqrt(d))/(2*a)} and {(-b - math.sqrt(d))/(2*a)}")
elif d == 0:
    print(f"Roots are real and equal: {-b / (2*a)}")
else:
    print("Roots are complex")
:::
:::javascript
const a = 1, b = -3, c = 2;
const d = b * b - 4 * a * c;
if(d > 0) {
    console.log(\`Roots are real and distinct: \${(-b + Math.sqrt(d))/(2*a)} and \${(-b - Math.sqrt(d))/(2*a)}\`);
} else if(d === 0) {
    console.log(\`Roots are real and equal: \${-b / (2*a)}\`);
} else {
    console.log("Roots are complex");
}
:::
\`\`\`

## Replace all 0s with 1s in a given integer
**Problem Description:** 
Write a program to replace all the 0 digits in an integer with 1s.

**Sample Input:** \`10204\`
**Sample Output:** \`11214\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    int n = 10204;
    string s = to_string(n);
    for(char &c : s) {
        if(c == '0') c = '1';
    }
    cout << stoi(s) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 10204;
        String s = String.valueOf(n).replace('0', '1');
        System.out.println(Integer.parseInt(s));
    }
}
:::
:::python
n = 10204
print(int(str(n).replace('0', '1')))
:::
:::javascript
const n = 10204;
console.log(parseInt(n.toString().replace(/0/g, '1')));
:::
\`\`\`

## Reverse Digits of a Number
**Problem Description:** 
Write a program to reverse the digits of a given number.

**Sample Input:** \`12345\`
**Sample Output:** \`54321\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 12345, rev = 0;
    while(n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    cout << rev << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 12345, rev = 0;
        while(n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        System.out.println(rev);
    }
}
:::
:::python
n = 12345
print(int(str(n)[::-1]))
:::
:::javascript
const n = 12345;
console.log(parseInt(n.toString().split('').reverse().join('')));
:::
\`\`\`

## Check if a number is a Strong Number
**Problem Description:** 
Check whether a given number is a Strong number or not. A number is strong if the sum of the factorials of its digits is equal to the number itself.

**Sample Input:** \`145\`
**Sample Output:** \`True\` ($1! + 4! + 5! = 1 + 24 + 120 = 145$)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int fact(int n) {
    int f = 1;
    for(int i = 1; i <= n; i++) f *= i;
    return f;
}

int main() {
    int n = 145, temp = n, sum = 0;
    while(temp > 0) {
        sum += fact(temp % 10);
        temp /= 10;
    }
    cout << (sum == n ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    static int fact(int n) {
        int f = 1;
        for(int i = 1; i <= n; i++) f *= i;
        return f;
    }
    public static void main(String[] args) {
        int n = 145, temp = n, sum = 0;
        while(temp > 0) {
            sum += fact(temp % 10);
            temp /= 10;
        }
        System.out.println(sum == n ? "True" : "False");
    }
}
:::
:::python
import math
n = 145
print("True" if sum(math.factorial(int(d)) for d in str(n)) == n else "False")
:::
:::javascript
const fact = n => n <= 1 ? 1 : n * fact(n - 1);
const n = 145;
const sum = n.toString().split('').reduce((acc, curr) => acc + fact(parseInt(curr)), 0);
console.log(sum === n ? "True" : "False");
:::
\`\`\`

## Sum of Numbers in a Given Range
**Problem Description:** 
Write a program to find the sum of all numbers in a given range \`[a, b]\`.

**Sample Input:** \`5, 10\`
**Sample Output:** \`45\` ($5 + 6 + 7 + 8 + 9 + 10$)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 10, sum = 0;
    for(int i = a; i <= b; i++) sum += i;
    cout << sum << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int a = 5, b = 10, sum = 0;
        for(int i = a; i <= b; i++) sum += i;
        System.out.println(sum);
    }
}
:::
:::python
print(sum(range(5, 11)))
:::
:::javascript
let sum = 0;
for(let i = 5; i <= 10; i++) sum += i;
console.log(sum);
:::
\`\`\`

## Sum of an A.P. Series
**Problem Description:** 
Write a program to find the sum of an Arithmetic Progression (A.P.) series given the first term \`a\`, common difference \`d\`, and number of terms \`n\`. ($Sum = \\frac{n}{2} [2a + (n-1)d]$)

**Sample Input:** \`a = 2, d = 3, n = 5\`
**Sample Output:** \`40\` (2 + 5 + 8 + 11 + 14)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    double a = 2, d = 3, n = 5;
    cout << (n / 2) * (2 * a + (n - 1) * d) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        double a = 2, d = 3, n = 5;
        System.out.println((n / 2) * (2 * a + (n - 1) * d));
    }
}
:::
:::python
a, d, n = 2, 3, 5
print((n / 2) * (2 * a + (n - 1) * d))
:::
:::javascript
const a = 2, d = 3, n = 5;
console.log((n / 2) * (2 * a + (n - 1) * d));
:::
\`\`\`

## Sum of Digits of a Number
**Problem Description:** 
Write a program to calculate the sum of digits of a given number.

**Sample Input:** \`1234\`
**Sample Output:** \`10\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 1234, sum = 0;
    while(n > 0) {
        sum += n % 10;
        n /= 10;
    }
    cout << sum << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 1234, sum = 0;
        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }
        System.out.println(sum);
    }
}
:::
:::python
print(sum(int(d) for d in str(1234)))
:::
:::javascript
console.log("1234".split('').reduce((a, c) => a + parseInt(c), 0));
:::
\`\`\`

## Sum of a G.P. Series
**Problem Description:** 
Write a program to find the sum of a Geometric Progression (G.P.) series given the first term \`a\`, common ratio \`r\`, and number of terms \`n\`. ($Sum = a \\frac{r^n - 1}{r - 1}$)

**Sample Input:** \`a = 2, r = 3, n = 4\`
**Sample Output:** \`80\` (2 + 6 + 18 + 54)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double a = 2, r = 3, n = 4;
    cout << a * (pow(r, n) - 1) / (r - 1) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        double a = 2, r = 3, n = 4;
        System.out.println(a * (Math.pow(r, n) - 1) / (r - 1));
    }
}
:::
:::python
a, r, n = 2, 3, 4
print(a * (r**n - 1) / (r - 1))
:::
:::javascript
const a = 2, r = 3, n = 4;
console.log(a * (Math.pow(r, n) - 1) / (r - 1));
:::
\`\`\`

## Sum of First N Natural Numbers
**Problem Description:** 
Write a program to find the sum of the first N natural numbers.

**Sample Input:** \`10\`
**Sample Output:** \`55\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;
int main() {
    int n = 10;
    cout << n * (n + 1) / 2 << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 10;
        System.out.println(n * (n + 1) / 2);
    }
}
:::
:::python
n = 10
print(n * (n + 1) // 2)
:::
:::javascript
const n = 10;
console.log(n * (n + 1) / 2);
:::
\`\`\`

## Express a Number as Sum of Two Primes
**Problem Description:** 
Check if a given number can be expressed as the sum of two prime numbers.

**Sample Input:** \`34\`
**Sample Output:** \`True\` ($3 + 31$, $5 + 29$, $11 + 23$, $17 + 17$)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

bool isPrime(int n) {
    if(n < 2) return false;
    for(int i = 2; i * i <= n; i++) if(n % i == 0) return false;
    return true;
}

int main() {
    int n = 34;
    bool found = false;
    for(int i = 2; i <= n / 2; i++) {
        if(isPrime(i) && isPrime(n - i)) { found = true; break; }
    }
    cout << (found ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    static boolean isPrime(int n) {
        if(n < 2) return false;
        for(int i = 2; i * i <= n; i++) if(n % i == 0) return false;
        return true;
    }
    public static void main(String[] args) {
        int n = 34;
        boolean found = false;
        for(int i = 2; i <= n / 2; i++) {
            if(isPrime(i) && isPrime(n - i)) { found = true; break; }
        }
        System.out.println(found ? "True" : "False");
    }
}
:::
:::python
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

n = 34
print("True" if any(is_prime(i) and is_prime(n-i) for i in range(2, n//2 + 1)) else "False")
:::
:::javascript
const isPrime = n => {
    if(n < 2) return false;
    for(let i = 2; i * i <= n; i++) if(n % i === 0) return false;
    return true;
};
const n = 34;
let found = false;
for(let i = 2; i <= n / 2; i++) {
    if(isPrime(i) && isPrime(n - i)) { found = true; break; }
}
console.log(found ? "True" : "False");
:::
\`\`\`
`;

const seedNumbersPart3 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const topic = await ExamGuideTopic.findOne({ examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-numbers' });
    if (topic) {
      topic.contentMarkdown += markdownContent;
      await topic.save();
      console.log('Successfully appended the final 11 number problems! Total 35 completed.');
    } else {
      console.log('Topic not found!');
    }
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedNumbersPart3();

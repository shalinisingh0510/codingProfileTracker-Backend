const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `<!-- TYPE: COLLECTION -->
## Check if a number is an Abundant Number
**Problem Description:** 
Write a program to check whether a given number is an Abundant number or not. An abundant number is a number for which the sum of its proper divisors is greater than the number itself.

**Sample Input:** \`12\`
**Sample Output:** \`True\` (Divisors are 1, 2, 3, 4, 6. Sum = 16 > 12)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 12, sum = 0;
    for(int i = 1; i <= n/2; i++) {
        if(n % i == 0) sum += i;
    }
    cout << (sum > n ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 12, sum = 0;
        for(int i = 1; i <= n/2; i++) {
            if(n % i == 0) sum += i;
        }
        System.out.println(sum > n ? "True" : "False");
    }
}
:::
:::python
n = 12
s = sum([i for i in range(1, n//2 + 1) if n % i == 0])
print("True" if s > n else "False")
:::
:::javascript
const n = 12; let sum = 0;
for(let i = 1; i <= n/2; i++) if(n % i === 0) sum += i;
console.log(sum > n ? "True" : "False");
:::
\`\`\`

## Addition of Two Fractions
**Problem Description:** 
Write a program to add two fractions \`num1/den1\` and \`num2/den2\` and print the simplified result.

**Sample Input:** \`1/2 + 3/4\`
**Sample Output:** \`5/4\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <numeric>
using namespace std;

int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }

int main() {
    int n1 = 1, d1 = 2, n2 = 3, d2 = 4;
    int num = (n1 * d2) + (n2 * d1);
    int den = d1 * d2;
    int g = gcd(num, den);
    cout << (num / g) << "/" << (den / g) << endl;
    return 0;
}
:::
:::java
public class Main {
    static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
    public static void main(String[] args) {
        int n1 = 1, d1 = 2, n2 = 3, d2 = 4;
        int num = (n1 * d2) + (n2 * d1);
        int den = d1 * d2;
        int g = gcd(num, den);
        System.out.println((num / g) + "/" + (den / g));
    }
}
:::
:::python
import math
n1, d1, n2, d2 = 1, 2, 3, 4
num = (n1 * d2) + (n2 * d1)
den = d1 * d2
g = math.gcd(num, den)
print(f"{num//g}/{den//g}")
:::
:::javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const n1 = 1, d1 = 2, n2 = 3, d2 = 4;
const num = (n1 * d2) + (n2 * d1);
const den = d1 * d2;
const g = gcd(num, den);
console.log(\`\${num/g}/\${den/g}\`);
:::
\`\`\`

## Area of a Circle
**Problem Description:** 
Write a program to calculate the area of a circle given its radius. Use $\\pi = 3.14159$.

**Sample Input:** \`5\`
**Sample Output:** \`78.5397\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    double r = 5;
    cout << 3.14159 * r * r << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        double r = 5;
        System.out.println(3.14159 * r * r);
    }
}
:::
:::python
import math
r = 5
print(3.14159 * r * r)
:::
:::javascript
const r = 5;
console.log(3.14159 * r * r);
:::
\`\`\`

## Check if a number is an Armstrong Number
**Problem Description:** 
Check whether a given number is an Armstrong number or not. (A number that is equal to the sum of cubes of its digits for a 3-digit number, or sum of $p$-th powers for a $p$-digit number).

**Sample Input:** \`153\`
**Sample Output:** \`True\` ($1^3 + 5^3 + 3^3 = 153$)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n = 153, temp = n, sum = 0, digits = 0;
    while(temp > 0) { digits++; temp /= 10; }
    temp = n;
    while(temp > 0) {
        sum += pow(temp % 10, digits);
        temp /= 10;
    }
    cout << (sum == n ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 153, temp = n, sum = 0;
        int digits = String.valueOf(n).length();
        while(temp > 0) {
            sum += Math.pow(temp % 10, digits);
            temp /= 10;
        }
        System.out.println(sum == n ? "True" : "False");
    }
}
:::
:::python
n = 153
s = str(n)
p = len(s)
print("True" if sum(int(d)**p for d in s) == n else "False")
:::
:::javascript
const n = 153;
const s = n.toString();
const sum = s.split('').reduce((acc, curr) => acc + Math.pow(parseInt(curr), s.length), 0);
console.log(sum === n ? "True" : "False");
:::
\`\`\`

## Check if a number is an Automorphic Number
**Problem Description:** 
Check if a number is an Automorphic number. A number is automorphic if the square of the number ends with the number itself.

**Sample Input:** \`25\`
**Sample Output:** \`True\` ($25^2 = 625$, ends with 25)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    long long n = 25;
    long long sq = n * n;
    bool isAuto = true;
    while(n > 0) {
        if(n % 10 != sq % 10) { isAuto = false; break; }
        n /= 10; sq /= 10;
    }
    cout << (isAuto ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        long n = 25;
        long sq = n * n;
        System.out.println(String.valueOf(sq).endsWith(String.valueOf(n)) ? "True" : "False");
    }
}
:::
:::python
n = 25
print("True" if str(n**2).endswith(str(n)) else "False")
:::
:::javascript
const n = 25;
console.log((n * n).toString().endsWith(n.toString()) ? "True" : "False");
:::
\`\`\`

## Check Whether a Number is Even or Odd
**Problem Description:** 
Write a program to check whether a given number is even or odd.

**Sample Input:** \`42\`
**Sample Output:** \`Even\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;
int main() {
    int n = 42;
    cout << (n % 2 == 0 ? "Even" : "Odd") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 42;
        System.out.println(n % 2 == 0 ? "Even" : "Odd");
    }
}
:::
:::python
n = 42
print("Even" if n % 2 == 0 else "Odd")
:::
:::javascript
const n = 42;
console.log(n % 2 === 0 ? "Even" : "Odd");
:::
\`\`\`

## Factorial of a Number
**Problem Description:** 
Write a program to calculate the factorial of a given number.

**Sample Input:** \`5\`
**Sample Output:** \`120\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5; long long fact = 1;
    for(int i = 1; i <= n; i++) fact *= i;
    cout << fact << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 5; long fact = 1;
        for(int i = 1; i <= n; i++) fact *= i;
        System.out.println(fact);
    }
}
:::
:::python
import math
print(math.factorial(5))
:::
:::javascript
let fact = 1;
for(let i = 1; i <= 5; i++) fact *= i;
console.log(fact);
:::
\`\`\`

## Factors of a Given Number
**Problem Description:** 
Write a program to find all the factors of a given number.

**Sample Input:** \`12\`
**Sample Output:** \`1 2 3 4 6 12\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 12;
    for(int i = 1; i <= n; i++) {
        if(n % i == 0) cout << i << " ";
    }
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 12;
        for(int i = 1; i <= n; i++) {
            if(n % i == 0) System.out.print(i + " ");
        }
    }
}
:::
:::python
n = 12
print(" ".join(str(i) for i in range(1, n+1) if n % i == 0))
:::
:::javascript
const n = 12; let res = [];
for(let i = 1; i <= n; i++) if(n % i === 0) res.push(i);
console.log(res.join(" "));
:::
\`\`\`

## Print Fibonacci Series up to N terms
**Problem Description:** 
Write a program to print the Fibonacci series up to N terms.

**Sample Input:** \`6\`
**Sample Output:** \`0 1 1 2 3 5\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int n = 6, a = 0, b = 1, next;
    for(int i = 0; i < n; i++) {
        cout << a << " ";
        next = a + b; a = b; b = next;
    }
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int n = 6, a = 0, b = 1, next;
        for(int i = 0; i < n; i++) {
            System.out.print(a + " ");
            next = a + b; a = b; b = next;
        }
    }
}
:::
:::python
n = 6
a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
:::
:::javascript
const n = 6;
let a = 0, b = 1;
for(let i = 0; i < n; i++) {
    process.stdout.write(a + " ");
    let next = a + b; a = b; b = next;
}
:::
\`\`\`

## GCD of Two Numbers
**Problem Description:** 
Write a program to find the Greatest Common Divisor (GCD) of two given numbers.

**Sample Input:** \`12, 15\`
**Sample Output:** \`3\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <numeric>
using namespace std;
int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
int main() {
    cout << gcd(12, 15) << endl;
    return 0;
}
:::
:::java
public class Main {
    static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
    public static void main(String[] args) {
        System.out.println(gcd(12, 15));
    }
}
:::
:::python
import math
print(math.gcd(12, 15))
:::
:::javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
console.log(gcd(12, 15));
:::
\`\`\`

## Greatest of Three Numbers
**Problem Description:** 
Write a program to find the greatest among three given numbers.

**Sample Input:** \`10, 20, 15\`
**Sample Output:** \`20\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;
int main() {
    int a = 10, b = 20, c = 15;
    cout << max(a, max(b, c)) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int a = 10, b = 20, c = 15;
        System.out.println(Math.max(a, Math.max(b, c)));
    }
}
:::
:::python
print(max(10, 20, 15))
:::
:::javascript
console.log(Math.max(10, 20, 15));
:::
\`\`\`

## Greatest of Two Numbers
**Problem Description:** 
Write a program to find the greatest of two numbers.

**Sample Input:** \`10, 20\`
**Sample Output:** \`20\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;
int main() { cout << max(10, 20) << endl; return 0; }
:::
:::java
public class Main {
    public static void main(String[] args) { System.out.println(Math.max(10, 20)); }
}
:::
:::python
print(max(10, 20))
:::
:::javascript
console.log(Math.max(10, 20));
:::
\`\`\`
`;

const seedNumbers = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB');
    
    await ExamGuideTopic.findOneAndUpdate(
      { examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-numbers' },
      { 
        $set: { 
          title: 'Problems on Numbers',
          contentMarkdown: markdownContent 
        } 
      },
      { upsert: true, new: true }
    );
    console.log('Successfully seeded problems-on-numbers topic with 12 problems.');
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedNumbers();

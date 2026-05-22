const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const qData = [
  {
    topicSlug: 'odd-occurring-element',
    title: 'Odd Occurring Element',
    content: `## Problem Statement
Given an array of integers where every element appears an even number of times except for one element which appears an odd number of times, find that odd occurring element. You must optimize your solution to O(log N) time complexity.

**Constraints:**
- $1 \\le N \\le 10^5$
- Array is sorted in pairs

## Sample Input and Output

**Input:** \`1 1 2 2 3 3 4 5 5\`
**Output:** \`4\`

**Explanation:** All elements appear twice except 4 which appears once.

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int findOddOccurring(vector<int>& arr) {
    int low = 0, high = arr.size() - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (mid % 2 == 1) mid--; 
        if (arr[mid] == arr[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return arr[low];
}

int main() {
    vector<int> arr = {1, 1, 2, 2, 3, 3, 4, 5, 5};
    cout << findOddOccurring(arr) << endl;
    return 0;
}
:::
:::java
import java.util.*;

public class Main {
    public static int findOddOccurring(int[] arr) {
        int low = 0, high = arr.length - 1;
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (mid % 2 == 1) mid--;
            if (arr[mid] == arr[mid + 1]) {
                low = mid + 2;
            } else {
                high = mid;
            }
        }
        return arr[low];
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 3, 3, 4, 5, 5};
        System.out.println(findOddOccurring(arr));
    }
}
:::
:::python
def find_odd_occurring(arr):
    low, high = 0, len(arr) - 1
    while low < high:
        mid = low + (high - low) // 2
        if mid % 2 == 1:
            mid -= 1
        if arr[mid] == arr[mid + 1]:
            low = mid + 2
        else:
            high = mid
    return arr[low]

arr = [1, 1, 2, 2, 3, 3, 4, 5, 5]
print(find_odd_occurring(arr))
:::
:::javascript
function findOddOccurring(arr) {
    let low = 0, high = arr.length - 1;
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (mid % 2 === 1) mid--;
        if (arr[mid] === arr[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return arr[low];
}

const arr = [1, 1, 2, 2, 3, 3, 4, 5, 5];
console.log(findOddOccurring(arr));
:::
\`\`\``
  },
  {
    topicSlug: 'count-subsets-sum',
    title: 'Count Subsets with Sum',
    content: `## Problem Statement
Given an array of non-negative integers and a target sum, find the number of subsets whose sum is equal to the given target sum.

**Constraints:**
- $1 \\le N \\le 100$
- $0 \\le arr[i] \\le 100$

## Sample Input and Output

**Input:** \`arr = [1, 2, 3, 3], target = 6\`
**Output:** \`3\`

**Explanation:** Subsets with sum 6 are [1, 2, 3], [1, 2, 3], and [3, 3].

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int countSubsets(vector<int>& arr, int target) {
    vector<int> dp(target + 1, 0);
    dp[0] = 1;
    for(int num : arr) {
        for(int j = target; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }
    return dp[target];
}

int main() {
    vector<int> arr = {1, 2, 3, 3};
    cout << countSubsets(arr, 6) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static int countSubsets(int[] arr, int target) {
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for(int num : arr) {
            for(int j = target; j >= num; j--) {
                dp[j] += dp[j - num];
            }
        }
        return dp[target];
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 3};
        System.out.println(countSubsets(arr, 6));
    }
}
:::
:::python
def count_subsets(arr, target):
    dp = [0] * (target + 1)
    dp[0] = 1
    for num in arr:
        for j in range(target, num - 1, -1):
            dp[j] += dp[j - num]
    return dp[target]

arr = [1, 2, 3, 3]
print(count_subsets(arr, 6))
:::
:::javascript
function countSubsets(arr, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (const num of arr) {
        for (let j = target; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }
    return dp[target];
}

const arr = [1, 2, 3, 3];
console.log(countSubsets(arr, 6));
:::
\`\`\``
  },
  {
    topicSlug: 'chocolate-packets',
    title: 'Chocolate Packets',
    content: `## Problem Statement
A conveyor belt has packets of chocolates, some of which are empty (represented by 0). Write a program to move all the empty packets to the end of the belt without changing the order of the filled packets.

**Constraints:**
- $1 \\le N \\le 10^5$

## Sample Input and Output

**Input:** \`4 0 5 0 1 9 0 0\`
**Output:** \`4 5 1 9 0 0 0 0\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

void moveZeros(vector<int>& arr) {
    int index = 0;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] != 0) {
            arr[index++] = arr[i];
        }
    }
    while (index < arr.size()) {
        arr[index++] = 0;
    }
}

int main() {
    vector<int> arr = {4, 0, 5, 0, 1, 9, 0, 0};
    moveZeros(arr);
    for(int x : arr) cout << x << " ";
    return 0;
}
:::
:::java
public class Main {
    public static void moveZeros(int[] arr) {
        int index = 0;
        for (int num : arr) {
            if (num != 0) {
                arr[index++] = num;
            }
        }
        while (index < arr.length) {
            arr[index++] = 0;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {4, 0, 5, 0, 1, 9, 0, 0};
        moveZeros(arr);
        for(int x : arr) System.out.print(x + " ");
    }
}
:::
:::python
def move_zeros(arr):
    index = 0
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[index] = arr[i]
            index += 1
    while index < len(arr):
        arr[index] = 0
        index += 1
    return arr

arr = [4, 0, 5, 0, 1, 9, 0, 0]
print(move_zeros(arr))
:::
:::javascript
function moveZeros(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index++] = arr[i];
        }
    }
    while (index < arr.length) {
        arr[index++] = 0;
    }
    return arr;
}

const arr = [4, 0, 5, 0, 1, 9, 0, 0];
console.log(moveZeros(arr).join(" "));
:::
\`\`\``
  },
  {
    topicSlug: 'covid-handshake',
    title: 'COVID Handshake',
    content: `## Problem Statement
In a room of $N$ people, everyone shakes hands with everyone else exactly once. However, due to COVID-19, $K$ people refused to shake hands with anyone. Calculate the total number of handshakes that took place.

**Constraints:**
- $1 \\le N \\le 10^5$
- $0 \\le K \\le N$

## Sample Input and Output

**Input:** \`N = 10, K = 2\`
**Output:** \`28\`

**Explanation:** Since 2 people refused to shake hands, only 8 people actually participated. The number of handshakes among 8 people is $8 \\times 7 / 2 = 28$.

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

long long calculateHandshakes(long long N, long long K) {
    long long active = N - K;
    if(active < 2) return 0;
    return (active * (active - 1)) / 2;
}

int main() {
    long long N = 10, K = 2;
    cout << calculateHandshakes(N, K) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static long calculateHandshakes(long N, long K) {
        long active = N - K;
        if(active < 2) return 0;
        return (active * (active - 1)) / 2;
    }
    
    public static void main(String[] args) {
        long N = 10, K = 2;
        System.out.println(calculateHandshakes(N, K));
    }
}
:::
:::python
def calculate_handshakes(N, K):
    active = N - K
    if active < 2:
        return 0
    return (active * (active - 1)) // 2

N, K = 10, 2
print(calculate_handshakes(N, K))
:::
:::javascript
function calculateHandshakes(N, K) {
    let active = N - K;
    if(active < 2) return 0;
    return (active * (active - 1)) / 2;
}

console.log(calculateHandshakes(10, 2));
:::
\`\`\``
  },
  {
    topicSlug: 'book-exchange',
    title: 'Book Exchange',
    content: `## Problem Statement
A group of $N$ friends brought one book each to exchange. In how many ways can they exchange books such that no person goes home with their own book? This is known as a derangement.

**Constraints:**
- $1 \\le N \\le 20$

## Sample Input and Output

**Input:** \`N = 4\`
**Output:** \`9\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

long long countDerangements(int N) {
    if (N == 1) return 0;
    if (N == 2) return 1;
    long long a = 0, b = 1, c = 0;
    for (int i = 3; i <= N; i++) {
        c = (i - 1) * (a + b);
        a = b;
        b = c;
    }
    return b;
}

int main() {
    int N = 4;
    cout << countDerangements(N) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static long countDerangements(int N) {
        if (N == 1) return 0;
        if (N == 2) return 1;
        long a = 0, b = 1, c = 0;
        for (int i = 3; i <= N; i++) {
            c = (i - 1) * (a + b);
            a = b;
            b = c;
        }
        return b;
    }
    
    public static void main(String[] args) {
        int N = 4;
        System.out.println(countDerangements(N));
    }
}
:::
:::python
def count_derangements(N):
    if N == 1: return 0
    if N == 2: return 1
    a, b = 0, 1
    for i in range(3, N + 1):
        c = (i - 1) * (a + b)
        a = b
        b = c
    return b

print(count_derangements(4))
:::
:::javascript
function countDerangements(N) {
    if (N === 1) return 0;
    if (N === 2) return 1;
    let a = 0, b = 1, c = 0;
    for (let i = 3; i <= N; i++) {
        c = (i - 1) * (a + b);
        a = b;
        b = c;
    }
    return b;
}

console.log(countDerangements(4));
:::
\`\`\``
  },
  {
    topicSlug: 'check-even-or-odd',
    title: 'Check Even or Odd',
    content: `## Problem Statement
Write a program to check whether a given integer is even or odd.

**Constraints:**
- $-10^9 \\le N \\le 10^9$

## Sample Input and Output

**Input:** \`N = 5\`
**Output:** \`Odd\`

**Input:** \`N = 10\`
**Output:** \`Even\`

---

## Solutions

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    int N = 5;
    if (N % 2 == 0) cout << "Even";
    else cout << "Odd";
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int N = 5;
        System.out.println(N % 2 == 0 ? "Even" : "Odd");
    }
}
:::
:::python
N = 5
print("Even" if N % 2 == 0 else "Odd")
:::
:::javascript
const N = 5;
console.log(N % 2 === 0 ? "Even" : "Odd");
:::
\`\`\``
  },
  {
    topicSlug: 'check-prime-number',
    title: 'Check Prime Number',
    content: `## Problem Statement
Write a program to check whether a given integer is a prime number or not.

**Constraints:**
- $1 \\le N \\le 10^9$

## Sample Input and Output

**Input:** \`N = 17\`
**Output:** \`Prime\`

**Input:** \`N = 10\`
**Output:** \`Not Prime\`

---

## Solutions

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int N = 17;
    cout << (isPrime(N) ? "Prime" : "Not Prime") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        int N = 17;
        System.out.println(isPrime(N) ? "Prime" : "Not Prime");
    }
}
:::
:::python
def is_prime(n):
    if n <= 1: return False
    i = 2
    while i * i <= n:
        if n % i == 0: return False
        i += 1
    return True

N = 17
print("Prime" if is_prime(N) else "Not Prime")
:::
:::javascript
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const N = 17;
console.log(isPrime(N) ? "Prime" : "Not Prime");
:::
\`\`\``
  },
  {
    topicSlug: 'factorial-of-a-number',
    title: 'Factorial of a Number',
    content: `## Problem Statement
Write a program to calculate the factorial of a given number $N$. The factorial of $N$ is the product of all positive integers less than or equal to $N$.

**Constraints:**
- $0 \\le N \\le 20$ (To fit in 64-bit integer)

## Sample Input and Output

**Input:** \`N = 5\`
**Output:** \`120\`

---

## Solutions

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

long long factorial(int n) {
    long long fact = 1;
    for(int i = 1; i <= n; i++) fact *= i;
    return fact;
}

int main() {
    int N = 5;
    cout << factorial(N) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static long factorial(int n) {
        long fact = 1;
        for(int i = 1; i <= n; i++) fact *= i;
        return fact;
    }
    
    public static void main(String[] args) {
        int N = 5;
        System.out.println(factorial(N));
    }
}
:::
:::python
def factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact

N = 5
print(factorial(N))
:::
:::javascript
function factorial(n) {
    let fact = 1n;
    for(let i = 1n; i <= n; i++) fact *= i;
    return fact;
}

const N = 5;
console.log(factorial(N).toString());
:::
\`\`\``
  },
  {
    topicSlug: 'fibonacci-series-first-n-terms',
    title: 'Fibonacci Series (First N Terms)',
    content: `## Problem Statement
Write a program to print the first $N$ terms of the Fibonacci series. In this series, the next number is the sum of the previous two numbers.

**Constraints:**
- $1 \\le N \\le 90$

## Sample Input and Output

**Input:** \`N = 5\`
**Output:** \`0 1 1 2 3\`

---

## Solutions

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

void printFibonacci(int n) {
    long long a = 0, b = 1, next;
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
}

int main() {
    int N = 5;
    printFibonacci(N);
    return 0;
}
:::
:::java
public class Main {
    public static void printFibonacci(int n) {
        long a = 0, b = 1, next;
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            next = a + b;
            a = b;
            b = next;
        }
    }
    
    public static void main(String[] args) {
        int N = 5;
        printFibonacci(N);
    }
}
:::
:::python
def print_fibonacci(n):
    a, b = 0, 1
    res = []
    for _ in range(n):
        res.append(str(a))
        a, b = b, a + b
    print(" ".join(res))

N = 5
print_fibonacci(N)
:::
:::javascript
function printFibonacci(n) {
    let a = 0n, b = 1n, next;
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(a.toString());
        next = a + b;
        a = b;
        b = next;
    }
    console.log(res.join(" "));
}

printFibonacci(5);
:::
\`\`\``
  },
  {
    topicSlug: 'reverse-a-number',
    title: 'Reverse a Number',
    content: `## Problem Statement
Write a program to reverse the digits of a given integer. Note that reversing negative integers preserves the negative sign.

**Constraints:**
- $-10^9 \\le N \\le 10^9$

## Sample Input and Output

**Input:** \`N = 12345\`
**Output:** \`54321\`

---

## Solutions

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int reverseNumber(int n) {
    int rev = 0;
    while (n != 0) {
        int digit = n % 10;
        rev = rev * 10 + digit;
        n /= 10;
    }
    return rev;
}

int main() {
    int N = 12345;
    cout << reverseNumber(N) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static int reverseNumber(int n) {
        int rev = 0;
        while (n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n /= 10;
        }
        return rev;
    }
    
    public static void main(String[] args) {
        int N = 12345;
        System.out.println(reverseNumber(N));
    }
}
:::
:::python
def reverse_number(n):
    sign = -1 if n < 0 else 1
    n = abs(n)
    rev = 0
    while n != 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return sign * rev

N = 12345
print(reverse_number(N))
:::
:::javascript
function reverseNumber(n) {
    let rev = 0;
    let sign = Math.sign(n);
    n = Math.abs(n);
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return sign * rev;
}

console.log(reverseNumber(12345));
:::
\`\`\``
  }
];

const seedPart1 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    for (const q of qData) {
      await ExamGuideTopic.findOneAndUpdate(
        { examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: q.topicSlug },
        { 
          $set: { 
            title: q.title, 
            contentMarkdown: q.content,
            sources: [] 
          } 
        },
        { upsert: true, returnDocument: 'after' }
      );
      console.log(`Upserted enriched coding question: ${q.topicSlug}`);
    }
    console.log('Successfully seeded first 10 coding questions.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedPart1();

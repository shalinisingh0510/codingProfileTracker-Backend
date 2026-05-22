const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const qData = [
  {
    topicSlug: 'check-palindrome-number',
    title: 'Check Palindrome Number',
    content: `## Problem Statement
Write a program to check whether a given number is a palindrome. A palindrome number reads the same forwards and backwards.

**Constraints:**
- $0 \\le N \\le 10^9$

## Sample Input and Output

**Input:** \`N = 121\`
**Output:** \`Palindrome\`

**Input:** \`N = 123\`
**Output:** \`Not Palindrome\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

bool isPalindrome(int n) {
    if(n < 0) return false;
    int original = n, rev = 0;
    while(n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return original == rev;
}

int main() {
    int N = 121;
    cout << (isPalindrome(N) ? "Palindrome" : "Not Palindrome") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static boolean isPalindrome(int n) {
        if(n < 0) return false;
        int original = n, rev = 0;
        while(n > 0) {
            rev = rev * 10 + (n % 10);
            n /= 10;
        }
        return original == rev;
    }
    
    public static void main(String[] args) {
        int N = 121;
        System.out.println(isPalindrome(N) ? "Palindrome" : "Not Palindrome");
    }
}
:::
:::python
def is_palindrome(n):
    if n < 0: return False
    return str(n) == str(n)[::-1]

N = 121
print("Palindrome" if is_palindrome(N) else "Not Palindrome")
:::
:::javascript
function isPalindrome(n) {
    if(n < 0) return false;
    let str = n.toString();
    return str === str.split('').reverse().join('');
}

const N = 121;
console.log(isPalindrome(N) ? "Palindrome" : "Not Palindrome");
:::
\`\`\``
  },
  {
    topicSlug: 'armstrong-number',
    title: 'Armstrong Number',
    content: `## Problem Statement
Write a program to check whether a given number is an Armstrong number. An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.

**Constraints:**
- $0 \\le N \\le 10^9$

## Sample Input and Output

**Input:** \`N = 153\`
**Output:** \`Armstrong\`

**Explanation:** $1^3 + 5^3 + 3^3 = 153$

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <cmath>
using namespace std;

bool isArmstrong(int n) {
    int original = n, sum = 0, digits = 0, temp = n;
    while(temp > 0) { digits++; temp /= 10; }
    temp = n;
    while(temp > 0) {
        sum += pow(temp % 10, digits);
        temp /= 10;
    }
    return sum == original;
}

int main() {
    cout << (isArmstrong(153) ? "Armstrong" : "Not Armstrong") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static boolean isArmstrong(int n) {
        int original = n, sum = 0, digits = String.valueOf(n).length();
        int temp = n;
        while(temp > 0) {
            sum += Math.pow(temp % 10, digits);
            temp /= 10;
        }
        return sum == original;
    }
    
    public static void main(String[] args) {
        System.out.println(isArmstrong(153) ? "Armstrong" : "Not Armstrong");
    }
}
:::
:::python
def is_armstrong(n):
    s = str(n)
    num_len = len(s)
    total = sum(int(digit) ** num_len for digit in s)
    return total == n

print("Armstrong" if is_armstrong(153) else "Not Armstrong")
:::
:::javascript
function isArmstrong(n) {
    let str = n.toString();
    let len = str.length;
    let sum = 0;
    for(let char of str) {
        sum += Math.pow(parseInt(char), len);
    }
    return sum === n;
}

console.log(isArmstrong(153) ? "Armstrong" : "Not Armstrong");
:::
\`\`\``
  },
  {
    topicSlug: 'sum-of-digits',
    title: 'Sum of Digits',
    content: `## Problem Statement
Write a program to find the sum of digits of a given number.

**Constraints:**
- $0 \\le N \\le 10^9$

## Sample Input and Output

**Input:** \`N = 1234\`
**Output:** \`10\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int sumOfDigits(int n) {
    int sum = 0;
    while(n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

int main() {
    cout << sumOfDigits(1234) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static int sumOfDigits(int n) {
        int sum = 0;
        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        System.out.println(sumOfDigits(1234));
    }
}
:::
:::python
def sum_of_digits(n):
    return sum(int(d) for d in str(n))

print(sum_of_digits(1234))
:::
:::javascript
function sumOfDigits(n) {
    return n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(sumOfDigits(1234));
:::
\`\`\``
  },
  {
    topicSlug: 'largest-of-three-numbers',
    title: 'Largest of Three Numbers',
    content: `## Problem Statement
Write a program to find the largest of three given numbers.

**Constraints:**
- $-10^9 \\le A, B, C \\le 10^9$

## Sample Input and Output

**Input:** \`A = 10, B = 25, C = 15\`
**Output:** \`25\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int a = 10, b = 25, c = 15;
    cout << max({a, b, c}) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int a = 10, b = 25, c = 15;
        System.out.println(Math.max(a, Math.max(b, c)));
    }
}
:::
:::python
a, b, c = 10, 25, 15
print(max(a, b, c))
:::
:::javascript
const a = 10, b = 25, c = 15;
console.log(Math.max(a, b, c));
:::
\`\`\``
  },
  {
    topicSlug: 'gcd-of-two-numbers',
    title: 'GCD of Two Numbers',
    content: `## Problem Statement
Write a program to find the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.

**Constraints:**
- $1 \\le A, B \\le 10^9$

## Sample Input and Output

**Input:** \`A = 36, B = 60\`
**Output:** \`12\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int main() {
    cout << gcd(36, 60) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    
    public static void main(String[] args) {
        System.out.println(gcd(36, 60));
    }
}
:::
:::python
import math

print(math.gcd(36, 60))
:::
:::javascript
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(36, 60));
:::
\`\`\``
  },
  {
    topicSlug: 'lcm-of-two-numbers',
    title: 'LCM of Two Numbers',
    content: `## Problem Statement
Write a program to find the Least Common Multiple (LCM) of two numbers.

**Constraints:**
- $1 \\le A, B \\le 10^4$

## Sample Input and Output

**Input:** \`A = 12, B = 15\`
**Output:** \`60\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int main() {
    int a = 12, b = 15;
    cout << (a * b) / gcd(a, b) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    
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
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

const a = 12, b = 15;
console.log((a * b) / gcd(a, b));
:::
\`\`\``
  },
  {
    topicSlug: 'check-leap-year',
    title: 'Check Leap Year',
    content: `## Problem Statement
Write a program to check whether a given year is a leap year.

**Constraints:**
- $1000 \\le Y \\le 9999$

## Sample Input and Output

**Input:** \`Y = 2024\`
**Output:** \`Leap Year\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

bool isLeapYear(int year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

int main() {
    cout << (isLeapYear(2024) ? "Leap Year" : "Not Leap Year") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static boolean isLeapYear(int year) {
        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
    }
    
    public static void main(String[] args) {
        System.out.println(isLeapYear(2024) ? "Leap Year" : "Not Leap Year");
    }
}
:::
:::python
def is_leap_year(year):
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

print("Leap Year" if is_leap_year(2024) else "Not Leap Year")
:::
:::javascript
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(2024) ? "Leap Year" : "Not Leap Year");
:::
\`\`\``
  },
  {
    topicSlug: 'count-vowels-and-consonants',
    title: 'Count Vowels and Consonants',
    content: `## Problem Statement
Write a program to count the number of vowels and consonants in a given string.

**Constraints:**
- $1 \\le |S| \\le 10^5$

## Sample Input and Output

**Input:** \`Hello World\`
**Output:** \`Vowels: 3, Consonants: 7\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string str = "Hello World";
    int v = 0, c = 0;
    for(char ch : str) {
        if(isalpha(ch)) {
            char l = tolower(ch);
            if(l=='a' || l=='e' || l=='i' || l=='o' || l=='u') v++;
            else c++;
        }
    }
    cout << "Vowels: " << v << ", Consonants: " << c << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        int v = 0, c = 0;
        str = str.toLowerCase();
        for(int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if(Character.isLetter(ch)) {
                if("aeiou".indexOf(ch) != -1) v++;
                else c++;
            }
        }
        System.out.println("Vowels: " + v + ", Consonants: " + c);
    }
}
:::
:::python
s = "Hello World"
v = c = 0
for ch in s.lower():
    if ch.isalpha():
        if ch in 'aeiou':
            v += 1
        else:
            c += 1
print(f"Vowels: {v}, Consonants: {c}")
:::
:::javascript
const str = "Hello World";
let v = 0, c = 0;
for(let char of str.toLowerCase()) {
    if(/[a-z]/.test(char)) {
        if(/[aeiou]/.test(char)) v++;
        else c++;
    }
}
console.log("Vowels: " + v + ", Consonants: " + c);
:::
\`\`\``
  },
  {
    topicSlug: 'reverse-a-string',
    title: 'Reverse a String',
    content: `## Problem Statement
Write a program to reverse a given string.

**Constraints:**
- $1 \\le |S| \\le 10^5$

## Sample Input and Output

**Input:** \`hello\`
**Output:** \`olleh\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string str = "hello";
    reverse(str.begin(), str.end());
    cout << str << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String str = "hello";
        System.out.println(new StringBuilder(str).reverse().toString());
    }
}
:::
:::python
s = "hello"
print(s[::-1])
:::
:::javascript
const str = "hello";
console.log(str.split('').reverse().join(''));
:::
\`\`\``
  },
  {
    topicSlug: 'check-anagram',
    title: 'Check Anagram',
    content: `## Problem Statement
Write a program to check if two strings are anagrams of each other (contain the same characters in the exact same quantity).

**Constraints:**
- $1 \\le |S| \\le 10^5$

## Sample Input and Output

**Input:** \`listen, silent\`
**Output:** \`Anagram\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isAnagram(string s1, string s2) {
    if(s1.length() != s2.length()) return false;
    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());
    return s1 == s2;
}

int main() {
    cout << (isAnagram("listen", "silent") ? "Anagram" : "Not Anagram") << endl;
    return 0;
}
:::
:::java
import java.util.Arrays;

public class Main {
    public static boolean isAnagram(String s1, String s2) {
        if(s1.length() != s2.length()) return false;
        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        return Arrays.equals(a1, a2);
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("listen", "silent") ? "Anagram" : "Not Anagram");
    }
}
:::
:::python
def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

print("Anagram" if is_anagram("listen", "silent") else "Not Anagram")
:::
:::javascript
function isAnagram(s1, s2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent") ? "Anagram" : "Not Anagram");
:::
\`\`\``
  },
  {
    topicSlug: 'remove-duplicates-from-string',
    title: 'Remove Duplicates from String',
    content: `## Problem Statement
Write a program to remove duplicate characters from a given string, keeping only the first occurrence of each character.

**Constraints:**
- $1 \\le |S| \\le 10^5$

## Sample Input and Output

**Input:** \`programming\`
**Output:** \`progamin\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

int main() {
    string str = "programming", res = "";
    unordered_set<char> seen;
    for(char c : str) {
        if(seen.find(c) == seen.end()) {
            seen.insert(c);
            res += c;
        }
    }
    cout << res << endl;
    return 0;
}
:::
:::java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        String str = "programming";
        StringBuilder res = new StringBuilder();
        HashSet<Character> seen = new HashSet<>();
        for(char c : str.toCharArray()) {
            if(seen.add(c)) {
                res.append(c);
            }
        }
        System.out.println(res.toString());
    }
}
:::
:::python
s = "programming"
seen = set()
res = []
for char in s:
    if char not in seen:
        seen.add(char)
        res.append(char)
print("".join(res))
:::
:::javascript
const str = "programming";
console.log([...new Set(str.split(''))].join(''));
:::
\`\`\``
  },
  {
    topicSlug: 'find-second-largest-in-array',
    title: 'Find Second Largest in Array',
    content: `## Problem Statement
Find the second largest element in a given array.

**Constraints:**
- $2 \\le N \\le 10^5$

## Sample Input and Output

**Input:** \`[10, 5, 20, 8]\`
**Output:** \`10\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int main() {
    vector<int> arr = {10, 5, 20, 8};
    int max1 = INT_MIN, max2 = INT_MIN;
    for(int n : arr) {
        if(n > max1) { max2 = max1; max1 = n; }
        else if(n > max2 && n != max1) { max2 = n; }
    }
    cout << max2 << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 5, 20, 8};
        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
        for(int n : arr) {
            if(n > max1) { max2 = max1; max1 = n; }
            else if(n > max2 && n != max1) { max2 = n; }
        }
        System.out.println(max2);
    }
}
:::
:::python
arr = [10, 5, 20, 8]
unique_arr = list(set(arr))
unique_arr.sort()
print(unique_arr[-2])
:::
:::javascript
const arr = [10, 5, 20, 8];
let max1 = -Infinity, max2 = -Infinity;
for(let n of arr) {
    if(n > max1) { max2 = max1; max1 = n; }
    else if(n > max2 && n !== max1) { max2 = n; }
}
console.log(max2);
:::
\`\`\``
  },
  {
    topicSlug: 'linear-search',
    title: 'Linear Search',
    content: `## Problem Statement
Implement Linear Search to find a target element in an array and return its index, or -1 if not found.

**Constraints:**
- $1 \\le N \\le 10^5$

## Sample Input and Output

**Input:** \`[1, 5, 7, 2, 9], Target = 7\`
**Output:** \`2\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int>& arr, int target) {
    for(int i=0; i<arr.size(); i++) {
        if(arr[i] == target) return i;
    }
    return -1;
}

int main() {
    vector<int> arr = {1, 5, 7, 2, 9};
    cout << linearSearch(arr, 7) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static int linearSearch(int[] arr, int target) {
        for(int i=0; i<arr.length; i++) {
            if(arr[i] == target) return i;
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 5, 7, 2, 9};
        System.out.println(linearSearch(arr, 7));
    }
}
:::
:::python
def linear_search(arr, target):
    try:
        return arr.index(target)
    except ValueError:
        return -1

print(linear_search([1, 5, 7, 2, 9], 7))
:::
:::javascript
function linearSearch(arr, target) {
    return arr.indexOf(target);
}

console.log(linearSearch([1, 5, 7, 2, 9], 7));
:::
\`\`\``
  },
  {
    topicSlug: 'binary-search-sorted-array',
    title: 'Binary Search (Sorted Array)',
    content: `## Problem Statement
Implement Binary Search to find a target element in a sorted array. Return its index or -1. Time complexity must be O(log N).

**Constraints:**
- $1 \\le N \\le 10^5$

## Sample Input and Output

**Input:** \`[1, 2, 5, 7, 9], Target = 7\`
**Output:** \`3\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(arr[mid] == target) return mid;
        if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> arr = {1, 2, 5, 7, 9};
    cout << binarySearch(arr, 7) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while(left <= right) {
            int mid = left + (right - left) / 2;
            if(arr[mid] == target) return mid;
            if(arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 5, 7, 9};
        System.out.println(binarySearch(arr, 7));
    }
}
:::
:::python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1

print(binary_search([1, 2, 5, 7, 9], 7))
:::
:::javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1, 2, 5, 7, 9], 7));
:::
\`\`\``
  },
  {
    topicSlug: 'bubble-sort',
    title: 'Bubble Sort',
    content: `## Problem Statement
Implement the Bubble Sort algorithm to sort an array in ascending order.

**Constraints:**
- $1 \\le N \\le 10^3$

## Sample Input and Output

**Input:** \`[5, 1, 4, 2, 8]\`
**Output:** \`[1, 2, 4, 5, 8]\`

---

## Code Implementations

\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    for(int i = 0; i < arr.size()-1; i++) {
        for(int j = 0; j < arr.size()-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

int main() {
    vector<int> arr = {5, 1, 4, 2, 8};
    bubbleSort(arr);
    for(int n : arr) cout << n << " ";
    return 0;
}
:::
:::java
public class Main {
    public static void bubbleSort(int[] arr) {
        for(int i = 0; i < arr.length-1; i++) {
            for(int j = 0; j < arr.length-i-1; j++) {
                if(arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};
        bubbleSort(arr);
        for(int n : arr) System.out.print(n + " ");
    }
}
:::
:::python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([5, 1, 4, 2, 8]))
:::
:::javascript
function bubbleSort(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]).join(" "));
:::
\`\`\``
  }
];

const seedPart2 = async () => {
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
    console.log('Successfully seeded next 15 coding questions.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedPart2();

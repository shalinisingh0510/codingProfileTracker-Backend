const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `<!-- TYPE: COLLECTION -->
## Add Element to Array
**Problem Description:** 
Write a program to insert an element at a specific position in an array.

**Sample Input:** \`Array: [1, 2, 4, 5], Element: 3, Position: 2\` (0-indexed)
**Sample Output:** \`[1, 2, 3, 4, 5]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 4, 5};
    int element = 3, pos = 2;
    arr.insert(arr.begin() + pos, element);
    for(int x : arr) cout << x << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 4, 5));
        list.add(2, 3);
        System.out.println(list);
    }
}
:::
:::python
arr = [1, 2, 4, 5]
arr.insert(2, 3)
print(arr)
:::
:::javascript
let arr = [1, 2, 4, 5];
arr.splice(2, 0, 3);
console.log(arr);
:::
\`\`\`

## Check if Array is Subset
**Problem Description:** 
Write a program to check if array \`arr2\` is a subset of array \`arr1\`.

**Sample Input:** \`arr1 = [11, 1, 13, 21, 3, 7], arr2 = [11, 3, 7, 1]\`
**Sample Output:** \`True\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

int main() {
    vector<int> arr1 = {11, 1, 13, 21, 3, 7}, arr2 = {11, 3, 7, 1};
    unordered_set<int> s(arr1.begin(), arr1.end());
    bool isSubset = true;
    for(int x : arr2) {
        if(s.find(x) == s.end()) { isSubset = false; break; }
    }
    cout << (isSubset ? "True" : "False") << endl;
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Integer[] a1 = {11, 1, 13, 21, 3, 7}, a2 = {11, 3, 7, 1};
        Set<Integer> set = new HashSet<>(Arrays.asList(a1));
        boolean isSubset = true;
        for(int x : a2) {
            if(!set.contains(x)) { isSubset = false; break; }
        }
        System.out.println(isSubset ? "True" : "False");
    }
}
:::
:::python
arr1 = [11, 1, 13, 21, 3, 7]
arr2 = [11, 3, 7, 1]
print("True" if set(arr2).issubset(set(arr1)) else "False")
:::
:::javascript
const arr1 = [11, 1, 13, 21, 3, 7], arr2 = [11, 3, 7, 1];
const set = new Set(arr1);
const isSubset = arr2.every(x => set.has(x));
console.log(isSubset ? "True" : "False");
:::
\`\`\`

## Average of an Array
**Problem Description:** 
Write a program to calculate the average of all elements in an array.

**Sample Input:** \`[1, 2, 3, 4, 5]\`
**Sample Output:** \`3.0\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};
    double sum = accumulate(arr.begin(), arr.end(), 0.0);
    cout << sum / arr.size() << endl;
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        double sum = 0;
        for(int x : arr) sum += x;
        System.out.println(sum / arr.length);
    }
}
:::
:::python
arr = [1, 2, 3, 4, 5]
print(sum(arr) / len(arr))
:::
:::javascript
const arr = [1, 2, 3, 4, 5];
const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(avg);
:::
\`\`\`

## Circular Rotation of an Array by K positions
**Problem Description:** 
Write a program to circularly rotate an array by $K$ positions to the right.

**Sample Input:** \`[1, 2, 3, 4, 5], K = 2\`
**Sample Output:** \`[4, 5, 1, 2, 3]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};
    int k = 2;
    k %= arr.size();
    rotate(arr.rbegin(), arr.rbegin() + k, arr.rend());
    for(int x : arr) cout << x << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    static void reverse(int[] arr, int l, int r) {
        while(l < r) { int temp = arr[l]; arr[l++] = arr[r]; arr[r--] = temp; }
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int k = 2 % arr.length;
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
:::
:::python
arr = [1, 2, 3, 4, 5]
k = 2 % len(arr)
arr[:] = arr[-k:] + arr[:-k]
print(arr)
:::
:::javascript
const arr = [1, 2, 3, 4, 5];
const k = 2 % arr.length;
const rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
console.log(rotated);
:::
\`\`\`

## Equilibrium Index of an Array
**Problem Description:** 
Find the equilibrium index of an array. An equilibrium index is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

**Sample Input:** \`[-7, 1, 5, 2, -4, 3, 0]\`
**Sample Output:** \`3\` (Sum before index 3 is -1, Sum after index 3 is -1)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int main() {
    vector<int> arr = {-7, 1, 5, 2, -4, 3, 0};
    int totalSum = accumulate(arr.begin(), arr.end(), 0), leftSum = 0;
    int eqIndex = -1;
    for(int i = 0; i < arr.size(); i++) {
        totalSum -= arr[i];
        if(leftSum == totalSum) { eqIndex = i; break; }
        leftSum += arr[i];
    }
    cout << eqIndex << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int[] arr = {-7, 1, 5, 2, -4, 3, 0};
        int totalSum = 0, leftSum = 0, eqIndex = -1;
        for(int x : arr) totalSum += x;
        for(int i = 0; i < arr.length; i++) {
            totalSum -= arr[i];
            if(leftSum == totalSum) { eqIndex = i; break; }
            leftSum += arr[i];
        }
        System.out.println(eqIndex);
    }
}
:::
:::python
arr = [-7, 1, 5, 2, -4, 3, 0]
total_sum = sum(arr)
left_sum = 0
eq_index = -1
for i, x in enumerate(arr):
    total_sum -= x
    if left_sum == total_sum:
        eq_index = i
        break
    left_sum += x
print(eq_index)
:::
:::javascript
const arr = [-7, 1, 5, 2, -4, 3, 0];
let totalSum = arr.reduce((a, b) => a + b, 0);
let leftSum = 0, eqIndex = -1;
for(let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];
    if(leftSum === totalSum) { eqIndex = i; break; }
    leftSum += arr[i];
}
console.log(eqIndex);
:::
\`\`\`

## Find Non-Repeating Elements in an Array
**Problem Description:** 
Write a program to find all the non-repeating elements in an array.

**Sample Input:** \`[1, 2, 2, 3, 4, 4, 5]\`
**Sample Output:** \`1 3 5\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 2, 3, 4, 4, 5};
    unordered_map<int, int> count;
    for(int x : arr) count[x]++;
    for(int x : arr) {
        if(count[x] == 1) cout << x << " ";
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4, 5};
        Map<Integer, Integer> map = new LinkedHashMap<>();
        for(int x : arr) map.put(x, map.getOrDefault(x, 0) + 1);
        for(Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if(entry.getValue() == 1) System.out.print(entry.getKey() + " ");
        }
    }
}
:::
:::python
from collections import Counter
arr = [1, 2, 2, 3, 4, 4, 5]
counts = Counter(arr)
print(" ".join(str(k) for k, v in counts.items() if v == 1))
:::
:::javascript
const arr = [1, 2, 2, 3, 4, 4, 5];
const counts = {};
arr.forEach(x => counts[x] = (counts[x] || 0) + 1);
console.log(arr.filter(x => counts[x] === 1).join(" "));
:::
\`\`\`

## Find Repeating Elements in an Array
**Problem Description:** 
Write a program to find all the repeating elements in an array.

**Sample Input:** \`[4, 2, 4, 5, 2, 3, 1]\`
**Sample Output:** \`4 2\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> arr = {4, 2, 4, 5, 2, 3, 1};
    unordered_map<int, int> count;
    for(int x : arr) count[x]++;
    for(auto it : count) {
        if(it.second > 1) cout << it.first << " ";
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {4, 2, 4, 5, 2, 3, 1};
        Map<Integer, Integer> map = new LinkedHashMap<>();
        for(int x : arr) map.put(x, map.getOrDefault(x, 0) + 1);
        for(Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if(entry.getValue() > 1) System.out.print(entry.getKey() + " ");
        }
    }
}
:::
:::python
from collections import Counter
arr = [4, 2, 4, 5, 2, 3, 1]
counts = Counter(arr)
print(" ".join(str(k) for k, v in counts.items() if v > 1))
:::
:::javascript
const arr = [4, 2, 4, 5, 2, 3, 1];
const counts = {};
arr.forEach(x => counts[x] = (counts[x] || 0) + 1);
console.log(Object.keys(counts).filter(k => counts[k] > 1).join(" "));
:::
\`\`\`

## Frequency of Elements in an Array
**Problem Description:** 
Write a program to count the frequency of each element in an array.

**Sample Input:** \`[10, 20, 20, 10, 10, 20, 5, 20]\`
**Sample Output:** \`10: 3, 20: 4, 5: 1\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> arr = {10, 20, 20, 10, 10, 20, 5, 20};
    unordered_map<int, int> count;
    for(int x : arr) count[x]++;
    for(auto it : count) {
        cout << it.first << ": " << it.second << ", ";
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 20, 10, 10, 20, 5, 20};
        Map<Integer, Integer> map = new LinkedHashMap<>();
        for(int x : arr) map.put(x, map.getOrDefault(x, 0) + 1);
        for(Map.Entry<Integer, Integer> e : map.entrySet()) {
            System.out.print(e.getKey() + ": " + e.getValue() + ", ");
        }
    }
}
:::
:::python
from collections import Counter
arr = [10, 20, 20, 10, 10, 20, 5, 20]
for k, v in Counter(arr).items():
    print(f"{k}: {v}", end=", ")
:::
:::javascript
const arr = [10, 20, 20, 10, 10, 20, 5, 20];
const counts = {};
arr.forEach(x => counts[x] = (counts[x] || 0) + 1);
console.log(Object.entries(counts).map(([k, v]) => \`\${k}: \${v}\`).join(", "));
:::
\`\`\`

## Largest Element in an Array
**Problem Description:** 
Find the largest element in a given array.

**Sample Input:** \`[2, 5, 1, 3, 0]\`
**Sample Output:** \`5\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {2, 5, 1, 3, 0};
    cout << *max_element(arr.begin(), arr.end()) << endl;
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 5, 1, 3, 0};
        int max = arr[0];
        for(int x : arr) if(x > max) max = x;
        System.out.println(max);
    }
}
:::
:::python
arr = [2, 5, 1, 3, 0]
print(max(arr))
:::
:::javascript
const arr = [2, 5, 1, 3, 0];
console.log(Math.max(...arr));
:::
\`\`\`

## Maximum Product Subarray
**Problem Description:** 
Given an integer array, find a contiguous non-empty subarray that has the largest product, and return the product.

**Sample Input:** \`[2, 3, -2, 4]\`
**Sample Output:** \`6\` (Subarray [2, 3])

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {2, 3, -2, 4};
    int maxP = arr[0], minP = arr[0], ans = arr[0];
    for(int i = 1; i < arr.size(); i++) {
        if(arr[i] < 0) swap(maxP, minP);
        maxP = max(arr[i], maxP * arr[i]);
        minP = min(arr[i], minP * arr[i]);
        ans = max(ans, maxP);
    }
    cout << ans << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 3, -2, 4};
        int maxP = arr[0], minP = arr[0], ans = arr[0];
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] < 0) { int temp = maxP; maxP = minP; minP = temp; }
            maxP = Math.max(arr[i], maxP * arr[i]);
            minP = Math.min(arr[i], minP * arr[i]);
            ans = Math.max(ans, maxP);
        }
        System.out.println(ans);
    }
}
:::
:::python
arr = [2, 3, -2, 4]
max_p = min_p = ans = arr[0]
for x in arr[1:]:
    if x < 0: max_p, min_p = min_p, max_p
    max_p = max(x, max_p * x)
    min_p = min(x, min_p * x)
    ans = max(ans, max_p)
print(ans)
:::
:::javascript
const arr = [2, 3, -2, 4];
let maxP = arr[0], minP = arr[0], ans = arr[0];
for(let i = 1; i < arr.length; i++) {
    let x = arr[i];
    if(x < 0) [maxP, minP] = [minP, maxP];
    maxP = Math.max(x, maxP * x);
    minP = Math.min(x, minP * x);
    ans = Math.max(ans, maxP);
}
console.log(ans);
:::
\`\`\`
`;

const seedArrays = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB');
    
    await ExamGuideTopic.findOneAndUpdate(
      { examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-arrays' },
      { 
        $set: { 
          title: 'Problems on Arrays',
          contentMarkdown: markdownContent 
        } 
      },
      { upsert: true, new: true }
    );
    console.log('Successfully seeded problems-on-arrays topic with 10 problems.');
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedArrays();

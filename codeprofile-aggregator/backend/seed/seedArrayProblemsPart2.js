const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `

## Median of an Array
**Problem Description:** 
Write a program to find the median of the given array.

**Sample Input:** \`[2, 5, 1, 7, 3]\`
**Sample Output:** \`3\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {2, 5, 1, 7, 3};
    sort(arr.begin(), arr.end());
    int n = arr.size();
    if(n % 2 == 0) cout << (arr[n/2 - 1] + arr[n/2]) / 2.0 << endl;
    else cout << arr[n/2] << endl;
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 5, 1, 7, 3};
        Arrays.sort(arr);
        int n = arr.length;
        if(n % 2 == 0) System.out.println((arr[n/2 - 1] + arr[n/2]) / 2.0);
        else System.out.println(arr[n/2]);
    }
}
:::
:::python
import statistics
arr = [2, 5, 1, 7, 3]
print(statistics.median(arr))
:::
:::javascript
const arr = [2, 5, 1, 7, 3];
arr.sort((a, b) => a - b);
const n = arr.length;
console.log(n % 2 === 0 ? (arr[n/2 - 1] + arr[n/2]) / 2 : arr[Math.floor(n/2)]);
:::
\`\`\`

## Rearrange Array in Increasing-Decreasing Order
**Problem Description:** 
Write a program to rearrange the array such that the first half is arranged in increasing order, and the second half is arranged in decreasing order.

**Sample Input:** \`[8, 7, 1, 6, 5, 9]\`
**Sample Output:** \`[1, 5, 6, 9, 8, 7]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {8, 7, 1, 6, 5, 9};
    sort(arr.begin(), arr.end());
    int n = arr.size();
    for(int i = 0; i < n/2; i++) cout << arr[i] << " ";
    for(int i = n - 1; i >= n/2; i--) cout << arr[i] << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {8, 7, 1, 6, 5, 9};
        Arrays.sort(arr);
        int n = arr.length;
        for(int i = 0; i < n/2; i++) System.out.print(arr[i] + " ");
        for(int i = n - 1; i >= n/2; i--) System.out.print(arr[i] + " ");
    }
}
:::
:::python
arr = [8, 7, 1, 6, 5, 9]
arr.sort()
n = len(arr)
res = arr[:n//2] + arr[n//2:][::-1]
print(res)
:::
:::javascript
const arr = [8, 7, 1, 6, 5, 9];
arr.sort((a, b) => a - b);
const n = arr.length;
const res = [...arr.slice(0, n/2), ...arr.slice(n/2).reverse()];
console.log(res);
:::
\`\`\`

## Remove Duplicates from Sorted Array
**Problem Description:** 
Write a program to remove duplicates from a sorted array in-place and return the new length.

**Sample Input:** \`[1, 1, 2, 2, 2, 3, 3]\`
**Sample Output:** \`[1, 2, 3]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> arr = {1, 1, 2, 2, 2, 3, 3};
    int i = 0;
    for(int j = 1; j < arr.size(); j++) {
        if(arr[i] != arr[j]) {
            arr[++i] = arr[j];
        }
    }
    for(int k = 0; k <= i; k++) cout << arr[k] << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 2, 3, 3};
        int i = 0;
        for(int j = 1; j < arr.length; j++) {
            if(arr[i] != arr[j]) {
                arr[++i] = arr[j];
            }
        }
        System.out.println(Arrays.toString(Arrays.copyOfRange(arr, 0, i + 1)));
    }
}
:::
:::python
arr = [1, 1, 2, 2, 2, 3, 3]
i = 0
for j in range(1, len(arr)):
    if arr[i] != arr[j]:
        i += 1
        arr[i] = arr[j]
print(arr[:i+1])
:::
:::javascript
let arr = [1, 1, 2, 2, 2, 3, 3];
let i = 0;
for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) arr[++i] = arr[j];
}
console.log(arr.slice(0, i + 1));
:::
\`\`\`

## Remove Duplicates from Unsorted Array
**Problem Description:** 
Write a program to remove duplicates from an unsorted array.

**Sample Input:** \`[2, 3, 1, 9, 3, 1, 3, 9]\`
**Sample Output:** \`[2, 3, 1, 9]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

int main() {
    vector<int> arr = {2, 3, 1, 9, 3, 1, 3, 9};
    unordered_set<int> seen;
    for(int x : arr) {
        if(seen.find(x) == seen.end()) {
            cout << x << " ";
            seen.insert(x);
        }
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 3, 1, 9, 3, 1, 3, 9};
        Set<Integer> seen = new LinkedHashSet<>();
        for(int x : arr) seen.add(x);
        System.out.println(seen);
    }
}
:::
:::python
arr = [2, 3, 1, 9, 3, 1, 3, 9]
print(list(dict.fromkeys(arr)))
:::
:::javascript
const arr = [2, 3, 1, 9, 3, 1, 3, 9];
console.log([...new Set(arr)]);
:::
\`\`\`

## Replace Elements by its Rank in the Array
**Problem Description:** 
Given an array of integers, replace each element of the array with its rank. Rank is computed starting from 1 for the smallest element.

**Sample Input:** \`[20, 15, 26, 2, 98, 6]\`
**Sample Output:** \`[4, 3, 5, 1, 6, 2]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> arr = {20, 15, 26, 2, 98, 6};
    vector<int> sorted_arr = arr;
    sort(sorted_arr.begin(), sorted_arr.end());
    unordered_map<int, int> rank;
    int r = 1;
    for(int x : sorted_arr) {
        if(rank.find(x) == rank.end()) rank[x] = r++;
    }
    for(int x : arr) cout << rank[x] << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {20, 15, 26, 2, 98, 6};
        int[] sorted_arr = arr.clone();
        Arrays.sort(sorted_arr);
        Map<Integer, Integer> rank = new HashMap<>();
        int r = 1;
        for(int x : sorted_arr) {
            if(!rank.containsKey(x)) rank.put(x, r++);
        }
        for(int x : arr) System.out.print(rank.get(x) + " ");
    }
}
:::
:::python
arr = [20, 15, 26, 2, 98, 6]
sorted_arr = sorted(set(arr))
rank = {val: i+1 for i, val in enumerate(sorted_arr)}
print([rank[x] for x in arr])
:::
:::javascript
const arr = [20, 15, 26, 2, 98, 6];
const sorted_arr = [...new Set(arr)].sort((a, b) => a - b);
const rank = new Map();
sorted_arr.forEach((val, i) => rank.set(val, i + 1));
console.log(arr.map(x => rank.get(x)));
:::
\`\`\`

## Reverse an Array
**Problem Description:** 
Write a program to reverse a given array.

**Sample Input:** \`[5, 4, 3, 2, 1]\`
**Sample Output:** \`[1, 2, 3, 4, 5]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {5, 4, 3, 2, 1};
    reverse(arr.begin(), arr.end());
    for(int x : arr) cout << x << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Integer[] arr = {5, 4, 3, 2, 1};
        Collections.reverse(Arrays.asList(arr));
        System.out.println(Arrays.toString(arr));
    }
}
:::
:::python
arr = [5, 4, 3, 2, 1]
print(arr[::-1])
:::
:::javascript
const arr = [5, 4, 3, 2, 1];
console.log(arr.reverse());
:::
\`\`\`

## Rotate an Array by K Elements (Right)
**Problem Description:** 
Write a program to rotate an array to the right by $K$ steps.

**Sample Input:** \`[1, 2, 3, 4, 5, 6, 7], K = 3\`
**Sample Output:** \`[5, 6, 7, 1, 2, 3, 4]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7};
    int k = 3 % arr.size();
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
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int k = 3 % arr.length;
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
:::
:::python
arr = [1, 2, 3, 4, 5, 6, 7]
k = 3 % len(arr)
arr[:] = arr[-k:] + arr[:-k]
print(arr)
:::
:::javascript
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3 % arr.length;
const rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
console.log(rotated);
:::
\`\`\`

## Rotate Array (Left and Right)
**Problem Description:** 
Write a program that can perform both left and right rotations on an array.

**Sample Input:** \`[1, 2, 3, 4, 5]\`, Left Rotate by 1
**Sample Output:** \`[2, 3, 4, 5, 1]\`

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
    int k = 1; // left rotate by 1
    rotate(arr.begin(), arr.begin() + k, arr.end());
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
        int k = 1 % arr.length; // left rotate
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        reverse(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
:::
:::python
arr = [1, 2, 3, 4, 5]
k = 1 # left rotate
print(arr[k:] + arr[:k])
:::
:::javascript
const arr = [1, 2, 3, 4, 5];
const k = 1; // left rotate
const rotated = [...arr.slice(k), ...arr.slice(0, k)];
console.log(rotated);
:::
\`\`\`

## Search an Element in an Array
**Problem Description:** 
Write a program to search for a specific element in an array and return its index. Return -1 if not found.

**Sample Input:** \`[1, 2, 3, 4, 5], Target: 3\`
**Sample Output:** \`2\`

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
    int target = 3;
    auto it = find(arr.begin(), arr.end(), target);
    if(it != arr.end()) cout << distance(arr.begin(), it) << endl;
    else cout << -1 << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int target = 3, idx = -1;
        for(int i = 0; i < arr.length; i++) {
            if(arr[i] == target) { idx = i; break; }
        }
        System.out.println(idx);
    }
}
:::
:::python
arr = [1, 2, 3, 4, 5]
target = 3
print(arr.index(target) if target in arr else -1)
:::
:::javascript
const arr = [1, 2, 3, 4, 5];
const target = 3;
console.log(arr.indexOf(target));
:::
\`\`\`

## Find Second Largest and Second Smallest in Array
**Problem Description:** 
Find the second largest and second smallest elements in an array without sorting.

**Sample Input:** \`[1, 2, 4, 7, 7, 5]\`
**Sample Output:** \`Second Smallest: 2, Second Largest: 5\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 4, 7, 7, 5};
    int min1 = INT_MAX, min2 = INT_MAX, max1 = INT_MIN, max2 = INT_MIN;
    for(int x : arr) {
        if(x < min1) { min2 = min1; min1 = x; }
        else if(x < min2 && x != min1) min2 = x;
        if(x > max1) { max2 = max1; max1 = x; }
        else if(x > max2 && x != max1) max2 = x;
    }
    cout << "Second Smallest: " << min2 << ", Second Largest: " << max2 << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 7, 7, 5};
        int min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;
        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
        for(int x : arr) {
            if(x < min1) { min2 = min1; min1 = x; }
            else if(x < min2 && x != min1) min2 = x;
            if(x > max1) { max2 = max1; max1 = x; }
            else if(x > max2 && x != max1) max2 = x;
        }
        System.out.println("Second Smallest: " + min2 + ", Second Largest: " + max2);
    }
}
:::
:::python
arr = [1, 2, 4, 7, 7, 5]
unique_arr = list(set(arr))
unique_arr.sort()
print(f"Second Smallest: {unique_arr[1]}, Second Largest: {unique_arr[-2]}")
:::
:::javascript
const arr = [1, 2, 4, 7, 7, 5];
let min1 = Infinity, min2 = Infinity, max1 = -Infinity, max2 = -Infinity;
arr.forEach(x => {
    if(x < min1) { min2 = min1; min1 = x; }
    else if(x < min2 && x !== min1) min2 = x;
    if(x > max1) { max2 = max1; max1 = x; }
    else if(x > max2 && x !== max1) max2 = x;
});
console.log(\`Second Smallest: \${min2}, Second Largest: \${max2}\`);
:::
\`\`\`
`;

const seedArraysPart2 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const topic = await ExamGuideTopic.findOne({ examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-arrays' });
    if (topic) {
      topic.contentMarkdown += markdownContent;
      await topic.save();
      console.log('Successfully appended 10 more array problems!');
    } else {
      console.log('Topic not found!');
    }
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedArraysPart2();

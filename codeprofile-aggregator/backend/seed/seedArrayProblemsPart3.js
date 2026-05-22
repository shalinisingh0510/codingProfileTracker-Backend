const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `

## Smallest Element in an Array
**Problem Description:** 
Find the smallest element in a given array.

**Sample Input:** \`[2, 5, 1, 3, 0]\`
**Sample Output:** \`0\`

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
    cout << *min_element(arr.begin(), arr.end()) << endl;
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 5, 1, 3, 0};
        int min = arr[0];
        for(int x : arr) if(x < min) min = x;
        System.out.println(min);
    }
}
:::
:::python
arr = [2, 5, 1, 3, 0]
print(min(arr))
:::
:::javascript
const arr = [2, 5, 1, 3, 0];
console.log(Math.min(...arr));
:::
\`\`\`

## Sort Array by a Defined Order (Another Array)
**Problem Description:** 
Sort the elements of \`arr1\` such that the relative order among the elements will be the same as those in \`arr2\`. Elements of \`arr1\` that do not appear in \`arr2\` should be sorted in ascending order and placed at the end.

**Sample Input:** \`arr1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8], arr2 = [2, 1, 8, 3]\`
**Sample Output:** \`[2, 2, 1, 1, 8, 8, 3, 5, 6, 7, 9]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr1 = {2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8};
    vector<int> arr2 = {2, 1, 8, 3};
    unordered_map<int, int> order;
    for(int i = 0; i < arr2.size(); i++) order[arr2[i]] = i;
    sort(arr1.begin(), arr1.end(), [&](int a, int b) {
        if(order.count(a) && order.count(b)) return order[a] < order[b];
        if(order.count(a)) return true;
        if(order.count(b)) return false;
        return a < b;
    });
    for(int x : arr1) cout << x << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Integer[] arr1 = {2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8};
        int[] arr2 = {2, 1, 8, 3};
        Map<Integer, Integer> order = new HashMap<>();
        for(int i = 0; i < arr2.length; i++) order.put(arr2[i], i);
        Arrays.sort(arr1, (a, b) -> {
            if(order.containsKey(a) && order.containsKey(b)) return Integer.compare(order.get(a), order.get(b));
            if(order.containsKey(a)) return -1;
            if(order.containsKey(b)) return 1;
            return Integer.compare(a, b);
        });
        System.out.println(Arrays.toString(arr1));
    }
}
:::
:::python
arr1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
arr2 = [2, 1, 8, 3]
order = {val: i for i, val in enumerate(arr2)}
arr1.sort(key=lambda x: (order.get(x, float('inf')), x))
print(arr1)
:::
:::javascript
const arr1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
const arr2 = [2, 1, 8, 3];
const order = new Map(arr2.map((val, i) => [val, i]));
arr1.sort((a, b) => {
    if(order.has(a) && order.has(b)) return order.get(a) - order.get(b);
    if(order.has(a)) return -1;
    if(order.has(b)) return 1;
    return a - b;
});
console.log(arr1);
:::
\`\`\`

## Sort Array by Frequency of Elements
**Problem Description:** 
Sort the array elements in descending order of their frequencies. If two elements have the same frequency, sort them in ascending order of their values.

**Sample Input:** \`[2, 5, 2, 8, 5, 6, 8, 8]\`
**Sample Output:** \`[8, 8, 8, 2, 2, 5, 5, 6]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

int main() {
    vector<int> arr = {2, 5, 2, 8, 5, 6, 8, 8};
    unordered_map<int, int> count;
    for(int x : arr) count[x]++;
    sort(arr.begin(), arr.end(), [&](int a, int b) {
        if(count[a] == count[b]) return a < b;
        return count[a] > count[b];
    });
    for(int x : arr) cout << x << " ";
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Integer[] arr = {2, 5, 2, 8, 5, 6, 8, 8};
        Map<Integer, Integer> count = new HashMap<>();
        for(int x : arr) count.put(x, count.getOrDefault(x, 0) + 1);
        Arrays.sort(arr, (a, b) -> {
            int freqA = count.get(a);
            int freqB = count.get(b);
            if(freqA == freqB) return Integer.compare(a, b);
            return Integer.compare(freqB, freqA);
        });
        System.out.println(Arrays.toString(arr));
    }
}
:::
:::python
from collections import Counter
arr = [2, 5, 2, 8, 5, 6, 8, 8]
counts = Counter(arr)
arr.sort(key=lambda x: (-counts[x], x))
print(arr)
:::
:::javascript
const arr = [2, 5, 2, 8, 5, 6, 8, 8];
const count = {};
arr.forEach(x => count[x] = (count[x] || 0) + 1);
arr.sort((a, b) => {
    if(count[a] === count[b]) return a - b;
    return count[b] - count[a];
});
console.log(arr);
:::
\`\`\`

## Sum of Elements in an Array
**Problem Description:** 
Write a program to calculate the sum of all elements in an array.

**Sample Input:** \`[1, 2, 3, 4, 5]\`
**Sample Output:** \`15\`

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
    cout << accumulate(arr.begin(), arr.end(), 0) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for(int x : arr) sum += x;
        System.out.println(sum);
    }
}
:::
:::python
arr = [1, 2, 3, 4, 5]
print(sum(arr))
:::
:::javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a, b) => a + b, 0));
:::
\`\`\`

## Find Symmetric Pairs in an Array of Pairs
**Problem Description:** 
Given an array of pairs, find all symmetric pairs in it. Two pairs (a, b) and (c, d) are said to be symmetric if $c = b$ and $a = d$.

**Sample Input:** \`[(11, 20), (30, 40), (5, 10), (40, 30), (10, 5)]\`
**Sample Output:** \`[(30, 40), (5, 10)]\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<pair<int, int>> arr = {{11, 20}, {30, 40}, {5, 10}, {40, 30}, {10, 5}};
    unordered_map<int, int> map;
    for(auto p : arr) {
        if(map.find(p.second) != map.end() && map[p.second] == p.first) {
            cout << "(" << p.second << ", " << p.first << ") ";
        } else {
            map[p.first] = p.second;
        }
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[][] arr = {{11, 20}, {30, 40}, {5, 10}, {40, 30}, {10, 5}};
        Map<Integer, Integer> map = new HashMap<>();
        for(int[] p : arr) {
            if(map.containsKey(p[1]) && map.get(p[1]) == p[0]) {
                System.out.print("(" + p[1] + ", " + p[0] + ") ");
            } else {
                map.put(p[0], p[1]);
            }
        }
    }
}
:::
:::python
arr = [(11, 20), (30, 40), (5, 10), (40, 30), (10, 5)]
seen = {}
for u, v in arr:
    if v in seen and seen[v] == u:
        print(f"({v}, {u})", end=" ")
    else:
        seen[u] = v
:::
:::javascript
const arr = [[11, 20], [30, 40], [5, 10], [40, 30], [10, 5]];
const map = new Map();
arr.forEach(([u, v]) => {
    if(map.has(v) && map.get(v) === u) {
        process.stdout.write(\`(\${v}, \${u}) \`);
    } else {
        map.set(u, v);
    }
});
:::
\`\`\`
`;

const seedArraysPart3 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const topic = await ExamGuideTopic.findOne({ examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-arrays' });
    if (topic) {
      topic.contentMarkdown += markdownContent;
      await topic.save();
      console.log('Successfully appended the final 5 array problems! Total 25 completed.');
    } else {
      console.log('Topic not found!');
    }
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedArraysPart3();

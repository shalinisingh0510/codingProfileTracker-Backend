const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;
const REPO_PATH = '/Users/codethrust27/.gemini/antigravity/brain/5122064b-2cf7-4444-bbe8-1055527b73ce/scratch/tcs-nqt-repo/materials/previous-papers';

const codingQuestionsData = [
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'coding-questions',
    topicSlug: 'odd-occurring-element',
    title: 'Odd Occurring Element',
    contentMarkdown: `
## Problem Statement

Given an array of integers where every element appears an even number of times except one element which appears an odd number of times, find that odd-occurring element in O(log N) time. 

**Conditions:** 
Equal elements must appear in pairs in the array; no more than two consecutive occurrences of any element are allowed.

**Constraints:**
- \`1 <= N <= 10^5\` (N is always odd)

**Sample Input:**
\`\`\`text
5
2 2 3 1 1
\`\`\`

**Sample Output:**
\`\`\`text
3
\`\`\`

---

## Solutions

### C++
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

int findOddOccurring(vector<int>& arr) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        if (low == high) return arr[low];
        int mid = low + (high - low) / 2;
        if (mid % 2 == 0) {
            if (arr[mid] == arr[mid + 1]) low = mid + 2;
            else high = mid;
        } else {
            if (arr[mid] == arr[mid - 1]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cout << findOddOccurring(arr) << endl;
    return 0;
}
\`\`\`

### Java
\`\`\`java
import java.util.Scanner;

public class Main {
    public static int findOddOccurring(int[] arr) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            if (low == high) return arr[low];
            int mid = low + (high - low) / 2;
            if (mid % 2 == 0) {
                if (arr[mid] == arr[mid + 1]) low = mid + 2;
                else high = mid;
            } else {
                if (arr[mid] == arr[mid - 1]) low = mid + 1;
                else high = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        System.out.println(findOddOccurring(arr));
        sc.close();
    }
}
\`\`\`

### Python
\`\`\`python
def find_odd_occurring(arr):
    low, high = 0, len(arr) - 1
    while low <= high:
        if low == high:
            return arr[low]
        mid = low + (high - low) // 2
        if mid % 2 == 0:
            if arr[mid] == arr[mid + 1]:
                low = mid + 2
            else:
                high = mid
        else:
            if arr[mid] == arr[mid - 1]:
                low = mid + 1
            else:
                high = mid - 1
    return -1

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    print(find_odd_occurring(arr))
\`\`\`
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'coding-questions',
    topicSlug: 'count-subsets-sum',
    title: 'Count Subsets with Sum',
    contentMarkdown: `
## Problem Statement

Given an array of integers and a target sum \`S\`, count all subsets of the array whose elements sum equals \`S\`. Since the result can be very large, print the value modulo \`10^9+7\`.

**Constraints:**
- \`1 <= n <= 10^3\`
- \`1 <= sum <= 10^3\`

**Sample Input:**
\`\`\`text
6
2 3 5 6 8 10
10
\`\`\`

**Sample Output:**
\`\`\`text
3
\`\`\`
*(subsets: {2, 3, 5}, {2, 8}, {10})*

---

## Solutions

### C++
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

const int MOD = 1e9 + 7;

int countSubsets(vector<int>& arr, int target) {
    int n = arr.size();
    vector<vector<int>> dp(n + 1, vector<int>(target + 1, 0));
    
    for (int i = 0; i <= n; i++) dp[i][0] = 1;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= target; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - arr[i - 1]]) % MOD;
            } else {
                dp[i][j] = dp[i - 1][j] % MOD;
            }
        }
    }
    return dp[n][target];
}

int main() {
    int n; cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) cin >> arr[i];
    int target; cin >> target;
    cout << countSubsets(arr, target) << endl;
    return 0;
}
\`\`\`

### Java
\`\`\`java
import java.util.Scanner;

public class Main {
    static int MOD = 1000000007;
    
    public static int countSubsets(int[] arr, int target) {
        int n = arr.length;
        int[][] dp = new int[n + 1][target + 1];
        
        for (int i = 0; i <= n; i++) dp[i][0] = 1;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= target; j++) {
                if (arr[i - 1] <= j) {
                    dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - arr[i - 1]]) % MOD;
                } else {
                    dp[i][j] = dp[i - 1][j] % MOD;
                }
            }
        }
        return dp[n][target];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int target = sc.nextInt();
        System.out.println(countSubsets(arr, target));
        sc.close();
    }
}
\`\`\`

### Python
\`\`\`python
def count_subsets(arr, target):
    MOD = 10**9 + 7
    n = len(arr)
    dp = [[0] * (target + 1) for _ in range(n + 1)]
    
    for i in range(n + 1):
        dp[i][0] = 1
        
    for i in range(1, n + 1):
        for j in range(1, target + 1):
            if arr[i - 1] <= j:
                dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - arr[i - 1]]) % MOD
            else:
                dp[i][j] = dp[i - 1][j] % MOD
                
    return dp[n][target]

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    target = int(input())
    print(count_subsets(arr, target))
\`\`\`
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'coding-questions',
    topicSlug: 'chocolate-packets',
    title: 'Chocolate Packets',
    contentMarkdown: `
## Problem Statement

A factory produces N chocolate packets. Empty (defective) packets are represented as \`0\`. Push all empty packets (0s) to the end of the array while maintaining the relative order of non-zero (filled) packets. 

**Constraints:**
- \`1 <= N <= 10^5\`

**Sample Input:**
\`\`\`text
8
4 5 0 1 9 0 5 0
\`\`\`

**Sample Output:**
\`\`\`text
4 5 1 9 5 0 0 0
\`\`\`

---

## Solutions

### C++
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

void pushZerosToEnd(vector<int>& arr) {
    int n = arr.size();
    int count = 0;
    
    for (int i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i];
        }
    }
    
    while (count < n) {
        arr[count++] = 0;
    }
}

int main() {
    int n; cin >> n;
    vector<int> arr(n);
    for(int i=0; i<n; i++) cin >> arr[i];
    pushZerosToEnd(arr);
    for(int x : arr) cout << x << " ";
    cout << endl;
    return 0;
}
\`\`\`

### Java
\`\`\`java
import java.util.Scanner;

public class Main {
    public static void pushZerosToEnd(int[] arr) {
        int count = 0;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[count++] = arr[i];
            }
        }
        
        while (count < arr.length) {
            arr[count++] = 0;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i=0; i<n; i++) arr[i] = sc.nextInt();
        pushZerosToEnd(arr);
        for (int x : arr) System.out.print(x + " ");
        System.out.println();
        sc.close();
    }
}
\`\`\`

### Python
\`\`\`python
def push_zeros_to_end(arr):
    count = 0
    n = len(arr)
    
    for i in range(n):
        if arr[i] != 0:
            arr[count] = arr[i]
            count += 1
            
    while count < n:
        arr[count] = 0
        count += 1
        
    return arr

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    res = push_zeros_to_end(arr)
    print(" ".join(map(str, res)))
\`\`\`
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'coding-questions',
    topicSlug: 'covid-handshake',
    title: 'COVID Handshake',
    contentMarkdown: `
## Problem Statement

Before the outbreak of coronavirus, a meeting took place. Everyone shook hands with everyone else exactly once. Given \`N\` people in the room, find the total number of handshakes.

**Constraints:**
- \`0 < N < 10^6\`

**Sample Input:**
\`\`\`text
2
\`\`\`

**Sample Output:**
\`\`\`text
1
\`\`\`

---

## Solutions

### C++
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    long long n;
    cin >> n;
    long long handshakes = (n * (n - 1)) / 2;
    cout << handshakes << endl;
    return 0;
}
\`\`\`

### Java
\`\`\`java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        long handshakes = (n * (n - 1)) / 2;
        System.out.println(handshakes);
        sc.close();
    }
}
\`\`\`

### Python
\`\`\`python
if __name__ == '__main__':
    n = int(input())
    handshakes = (n * (n - 1)) // 2
    print(handshakes)
\`\`\`
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'coding-questions',
    topicSlug: 'book-exchange',
    title: 'Book Exchange',
    contentMarkdown: `
## Problem Statement

A teacher distributes N books to N students and wants to exchange them weekly so every student gets a different book (not their own original book). Find the total number of valid exchanges (derangements) modulo \`10^9+7\`.

**Constraints:**
- \`1 <= N <= 10^6\`

**Sample Input:**
\`\`\`text
4
\`\`\`

**Sample Output:**
\`\`\`text
9
\`\`\`

---

## Solutions

### C++
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

const int MOD = 1e9 + 7;

int countDerangements(int n) {
    if (n == 1) return 0;
    if (n == 2) return 1;
    
    long long prev2 = 0;
    long long prev1 = 1;
    
    for (int i = 3; i <= n; ++i) {
        long long current = ((i - 1) * (prev1 + prev2)) % MOD;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

int main() {
    int n;
    cin >> n;
    cout << countDerangements(n) << endl;
    return 0;
}
\`\`\`

### Java
\`\`\`java
import java.util.Scanner;

public class Main {
    static int MOD = 1000000007;
    
    public static long countDerangements(int n) {
        if (n == 1) return 0;
        if (n == 2) return 1;
        
        long prev2 = 0;
        long prev1 = 1;
        
        for (int i = 3; i <= n; i++) {
            long current = ((i - 1) * (prev1 + prev2)) % MOD;
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(countDerangements(n));
        sc.close();
    }
}
\`\`\`

### Python
\`\`\`python
def count_derangements(n):
    MOD = 10**9 + 7
    if n == 1:
        return 0
    if n == 2:
        return 1
        
    prev2, prev1 = 0, 1
    
    for i in range(3, n + 1):
        current = ((i - 1) * (prev1 + prev2)) % MOD
        prev2 = prev1
        prev1 = current
        
    return prev1

if __name__ == '__main__':
    n = int(input())
    print(count_derangements(n))
\`\`\`
`
  }
];

const seedData = async () => {
  try {
    if (!MONGODB_URI) {
      console.error('No MONGO_URI found');
      process.exit(1);
    }
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // 1. Seed coding questions
    for (const topicData of codingQuestionsData) {
      await ExamGuideTopic.findOneAndUpdate(
        { examSlug: topicData.examSlug, sectionSlug: topicData.sectionSlug, topicSlug: topicData.topicSlug },
        { $set: { title: topicData.title, contentMarkdown: topicData.contentMarkdown, sources: [] } },
        { upsert: true, new: true }
      );
      console.log('Upserted coding question:', topicData.topicSlug);
    }

    // 2. Seed Previous Year Papers from github repo
    const files = fs.readdirSync(REPO_PATH);
    for (const file of files) {
      if (file.endsWith('.md')) {
        const topicSlug = file.replace('.md', '');
        const titleMatch = topicSlug.match(/paper-(\d+)/);
        const title = titleMatch ? `Previous Paper ${titleMatch[1]}` : topicSlug;
        const contentMarkdown = fs.readFileSync(path.join(REPO_PATH, file), 'utf-8');

        await ExamGuideTopic.findOneAndUpdate(
          { examSlug: 'tcs-nqt', sectionSlug: 'previous-year-papers', topicSlug: topicSlug },
          { $set: { title, contentMarkdown, sources: [] } },
          { upsert: true, new: true }
        );
        console.log('Upserted previous year paper:', topicSlug);
      }
    }

    console.log('Successfully seeded all questions and papers.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();

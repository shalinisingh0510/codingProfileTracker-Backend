const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `

## Count Common Subsequences
**Problem Description:** 
Write a program to count the number of common subsequences between two strings.

**Sample Input:** \`"ab", "ab"\`
**Sample Output:** \`3\` (a, b, ab)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    string a = "ab", b = "ab";
    int n1 = a.length(), n2 = b.length();
    vector<vector<int>> dp(n1 + 1, vector<int>(n2 + 1, 0));
    for (int i = 1; i <= n1; i++) {
        for (int j = 1; j <= n2; j++) {
            if (a[i-1] == b[j-1]) dp[i][j] = 1 + dp[i-1][j] + dp[i][j-1];
            else dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1];
        }
    }
    cout << dp[n1][n2] << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String a = "ab", b = "ab";
        int n1 = a.length(), n2 = b.length();
        int[][] dp = new int[n1 + 1][n2 + 1];
        for(int i = 1; i <= n1; i++) {
            for(int j = 1; j <= n2; j++) {
                if(a.charAt(i-1) == b.charAt(j-1)) dp[i][j] = 1 + dp[i-1][j] + dp[i][j-1];
                else dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1];
            }
        }
        System.out.println(dp[n1][n2]);
    }
}
:::
:::python
a, b = "ab", "ab"
dp = [[0]*(len(b)+1) for _ in range(len(a)+1)]
for i in range(1, len(a)+1):
    for j in range(1, len(b)+1):
        if a[i-1] == b[j-1]: dp[i][j] = 1 + dp[i-1][j] + dp[i][j-1]
        else: dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]
print(dp[-1][-1])
:::
:::javascript
const a = "ab", b = "ab";
const dp = Array.from({length: a.length + 1}, () => Array(b.length + 1).fill(0));
for(let i = 1; i <= a.length; i++) {
    for(let j = 1; j <= b.length; j++) {
        if(a[i-1] === b[j-1]) dp[i][j] = 1 + dp[i-1][j] + dp[i][j-1];
        else dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1];
    }
}
console.log(dp[a.length][b.length]);
:::
\`\`\`

## Concatenate Two Strings Without Library
**Problem Description:** 
Write a program to concatenate two strings without using the built-in library functions like \`strcat()\`.

**Sample Input:** \`"hello", "world"\`
**Sample Output:** \`"helloworld"\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    string a = "hello", b = "world";
    string res = "";
    for(char c : a) res += c;
    for(char c : b) res += c;
    cout << res << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String a = "hello", b = "world";
        StringBuilder res = new StringBuilder();
        for(char c : a.toCharArray()) res.append(c);
        for(char c : b.toCharArray()) res.append(c);
        System.out.println(res.toString());
    }
}
:::
:::python
print("hello" + "world")
:::
:::javascript
console.log("hello" + "world");
:::
\`\`\`

## Change Character to Next Alphabet
**Problem Description:** 
Write a program to change every character in a string to its next alphabet in the ASCII sequence.

**Sample Input:** \`abcd\`
**Sample Output:** \`bcde\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    string s = "abcd";
    for(char &c : s) {
        if(c == 'z') c = 'a';
        else if(c == 'Z') c = 'A';
        else c++;
    }
    cout << s << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        char[] s = "abcd".toCharArray();
        for(int i = 0; i < s.length; i++) {
            if(s[i] == 'z') s[i] = 'a';
            else if(s[i] == 'Z') s[i] = 'A';
            else s[i]++;
        }
        System.out.println(new String(s));
    }
}
:::
:::python
s = "abcd"
res = ""
for c in s:
    if c == 'z': res += 'a'
    elif c == 'Z': res += 'A'
    else: res += chr(ord(c) + 1)
print(res)
:::
:::javascript
const s = "abcd";
const res = s.split('').map(c => {
    if(c === 'z') return 'a';
    if(c === 'Z') return 'A';
    return String.fromCharCode(c.charCodeAt(0) + 1);
}).join('');
console.log(res);
:::
\`\`\`

## Find All Substrings of a String
**Problem Description:** 
Write a program to print all the possible substrings of a given string.

**Sample Input:** \`abc\`
**Sample Output:** \`a, ab, abc, b, bc, c\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "abc";
    for(int i = 0; i < s.length(); i++) {
        string sub = "";
        for(int j = i; j < s.length(); j++) {
            sub += s[j];
            cout << sub << " ";
        }
    }
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "abc";
        for(int i = 0; i < s.length(); i++) {
            for(int j = i+1; j <= s.length(); j++) {
                System.out.print(s.substring(i, j) + " ");
            }
        }
    }
}
:::
:::python
s = "abc"
for i in range(len(s)):
    for j in range(i+1, len(s)+1):
        print(s[i:j], end=" ")
:::
:::javascript
const s = "abc";
for(let i = 0; i < s.length; i++) {
    for(let j = i+1; j <= s.length; j++) {
        process.stdout.write(s.substring(i, j) + " ");
    }
}
:::
\`\`\`

## Wildcard Pattern Matching
**Problem Description:** 
Implement wildcard pattern matching with support for '?' (matches any single character) and '*' (matches any sequence of characters).

**Sample Input:** string = \`"adceb"\`, pattern = \`"*a*b"\`
**Sample Output:** \`True\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    string s = "adceb", p = "*a*b";
    int n = s.length(), m = p.length();
    vector<vector<bool>> dp(n + 1, vector<bool>(m + 1, false));
    dp[0][0] = true;
    for(int j=1; j<=m; j++) if(p[j-1] == '*') dp[0][j] = dp[0][j-1];
    
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=m; j++) {
            if(p[j-1] == '?' || s[i-1] == p[j-1]) dp[i][j] = dp[i-1][j-1];
            else if(p[j-1] == '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];
        }
    }
    cout << (dp[n][m] ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "adceb", p = "*a*b";
        int n = s.length(), m = p.length();
        boolean[][] dp = new boolean[n+1][m+1];
        dp[0][0] = true;
        for(int j=1; j<=m; j++) if(p.charAt(j-1) == '*') dp[0][j] = dp[0][j-1];
        
        for(int i=1; i<=n; i++) {
            for(int j=1; j<=m; j++) {
                if(p.charAt(j-1) == '?' || s.charAt(i-1) == p.charAt(j-1)) dp[i][j] = dp[i-1][j-1];
                else if(p.charAt(j-1) == '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];
            }
        }
        System.out.println(dp[n][m] ? "True" : "False");
    }
}
:::
:::python
s, p = "adceb", "*a*b"
n, m = len(s), len(p)
dp = [[False]*(m+1) for _ in range(n+1)]
dp[0][0] = True
for j in range(1, m+1):
    if p[j-1] == '*': dp[0][j] = dp[0][j-1]
for i in range(1, n+1):
    for j in range(1, m+1):
        if p[j-1] == '?' or s[i-1] == p[j-1]: dp[i][j] = dp[i-1][j-1]
        elif p[j-1] == '*': dp[i][j] = dp[i-1][j] or dp[i][j-1]
print("True" if dp[-1][-1] else "False")
:::
:::javascript
const s = "adceb", p = "*a*b";
const dp = Array.from({length: s.length+1}, () => Array(p.length+1).fill(false));
dp[0][0] = true;
for(let j=1; j<=p.length; j++) if(p[j-1] === '*') dp[0][j] = dp[0][j-1];
for(let i=1; i<=s.length; i++) {
    for(let j=1; j<=p.length; j++) {
        if(p[j-1] === '?' || s[i-1] === p[j-1]) dp[i][j] = dp[i-1][j-1];
        else if(p[j-1] === '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];
    }
}
console.log(dp[s.length][p.length] ? "True" : "False");
:::
\`\`\`

## Count Words in a Given String
**Problem Description:** 
Write a program to count the number of words in a string.

**Sample Input:** \`TCS NQT coding round\`
**Sample Output:** \`4\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <sstream>
using namespace std;

int main() {
    string s = "TCS NQT coding round", word;
    stringstream ss(s);
    int count = 0;
    while(ss >> word) count++;
    cout << count << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String[] words = "TCS NQT coding round".trim().split("\\\\s+");
        System.out.println(words.length);
    }
}
:::
:::python
print(len("TCS NQT coding round".split()))
:::
:::javascript
console.log("TCS NQT coding round".trim().split(/\\s+/).length);
:::
\`\`\`

## Find Word with Most Repeated Letters
**Problem Description:** 
Write a program to find the word that has the highest number of repeated letters in a given string.

**Sample Input:** \`apple banana cherry\`
**Sample Output:** \`banana\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <sstream>
#include <map>
using namespace std;

int main() {
    string s = "apple banana cherry", word, bestWord = "";
    stringstream ss(s);
    int maxRepeats = 0;
    while(ss >> word) {
        map<char, int> m;
        int repeats = 0;
        for(char c : word) {
            m[c]++;
            if(m[c] == 2) repeats++; // Count how many letters repeat
        }
        if(repeats > maxRepeats) {
            maxRepeats = repeats;
            bestWord = word;
        }
    }
    cout << bestWord << endl;
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String[] words = "apple banana cherry".split(" ");
        String bestWord = ""; int maxRepeats = 0;
        for(String w : words) {
            Map<Character, Integer> m = new HashMap<>();
            int repeats = 0;
            for(char c : w.toCharArray()) {
                m.put(c, m.getOrDefault(c, 0) + 1);
                if(m.get(c) == 2) repeats++;
            }
            if(repeats > maxRepeats) { maxRepeats = repeats; bestWord = w; }
        }
        System.out.println(bestWord);
    }
}
:::
:::python
from collections import Counter
words = "apple banana cherry".split()
best = max(words, key=lambda w: sum(1 for v in Counter(w).values() if v > 1))
print(best)
:::
:::javascript
const words = "apple banana cherry".split(' ');
let maxRepeats = 0, bestWord = "";
for(let w of words) {
    let counts = {}, repeats = 0;
    for(let c of w) {
        counts[c] = (counts[c] || 0) + 1;
        if(counts[c] === 2) repeats++;
    }
    if(repeats > maxRepeats) { maxRepeats = repeats; bestWord = w; }
}
console.log(bestWord);
:::
\`\`\`

## Print First Non-Repeating Character
**Problem Description:** 
Write a program to print the first non-repeating character in a string.

**Sample Input:** \`swiss\`
**Sample Output:** \`w\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    string s = "swiss";
    map<char, int> m;
    for(char c : s) m[c]++;
    for(char c : s) {
        if(m[c] == 1) { cout << c << endl; break; }
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String s = "swiss";
        Map<Character, Integer> m = new LinkedHashMap<>();
        for(char c : s.toCharArray()) m.put(c, m.getOrDefault(c, 0) + 1);
        for(Map.Entry<Character, Integer> e : m.entrySet()) {
            if(e.getValue() == 1) { System.out.println(e.getKey()); break; }
        }
    }
}
:::
:::python
from collections import Counter
counts = Counter("swiss")
for c in "swiss":
    if counts[c] == 1:
        print(c)
        break
:::
:::javascript
const s = "swiss";
const counts = {};
for(let c of s) counts[c] = (counts[c] || 0) + 1;
for(let c of s) {
    if(counts[c] === 1) { console.log(c); break; }
}
:::
\`\`\`
`;

const seedStringsPart3 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const topic = await ExamGuideTopic.findOne({ examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-strings' });
    if (topic) {
      topic.contentMarkdown += markdownContent;
      await topic.save();
      console.log('Successfully appended the final 8 string problems! Total 28 completed.');
    } else {
      console.log('Topic not found!');
    }
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedStringsPart3();

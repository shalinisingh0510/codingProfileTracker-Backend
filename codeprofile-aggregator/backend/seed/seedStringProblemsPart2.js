const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `

## Find the Frequency of Characters
**Problem Description:** 
Write a program to find the frequency of each character in a given string.

**Sample Input:** \`takeuforward\`
**Sample Output:** \`a: 2, d: 1, e: 1, f: 1, k: 1, o: 1, r: 2, t: 1, u: 1, w: 1\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <map>
using namespace std;

int main() {
    string s = "takeuforward";
    map<char, int> m;
    for(char c : s) m[c]++;
    for(auto it : m) {
        cout << it.first << ": " << it.second << ", ";
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String s = "takeuforward";
        Map<Character, Integer> m = new TreeMap<>();
        for(char c : s.toCharArray()) m.put(c, m.getOrDefault(c, 0) + 1);
        for(Map.Entry<Character, Integer> e : m.entrySet()) {
            System.out.print(e.getKey() + ": " + e.getValue() + ", ");
        }
    }
}
:::
:::python
from collections import Counter
counts = Counter("takeuforward")
print(", ".join([f"{k}: {v}" for k, v in sorted(counts.items())]))
:::
:::javascript
const s = "takeuforward";
const counts = {};
for(let c of s) counts[c] = (counts[c] || 0) + 1;
const res = Object.keys(counts).sort().map(k => \`\${k}: \${counts[k]}\`);
console.log(res.join(", "));
:::
\`\`\`

## Largest Word in a String
**Problem Description:** 
Write a program to find the largest word in a given string.

**Sample Input:** \`TCS NQT is the best exam\`
**Sample Output:** \`best\` (or \`exam\`)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <sstream>
using namespace std;

int main() {
    string s = "TCS NQT is the best exam";
    stringstream ss(s);
    string word, largest = "";
    while(ss >> word) {
        if(word.length() > largest.length()) largest = word;
    }
    cout << largest << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String[] words = "TCS NQT is the best exam".split(" ");
        String largest = "";
        for(String w : words) {
            if(w.length() > largest.length()) largest = w;
        }
        System.out.println(largest);
    }
}
:::
:::python
words = "TCS NQT is the best exam".split()
print(max(words, key=len))
:::
:::javascript
const words = "TCS NQT is the best exam".split(' ');
let largest = "";
for(let w of words) {
    if(w.length > largest.length) largest = w;
}
console.log(largest);
:::
\`\`\`

## Maximum Occurring Character
**Problem Description:** 
Write a program to find the maximum occurring character in a given string.

**Sample Input:** \`takeuforward\`
**Sample Output:** \`a\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    string s = "takeuforward";
    map<char, int> m;
    int maxCount = 0; char maxChar = s[0];
    for(char c : s) {
        m[c]++;
        if(m[c] > maxCount) {
            maxCount = m[c];
            maxChar = c;
        }
    }
    cout << maxChar << endl;
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String s = "takeuforward";
        Map<Character, Integer> m = new HashMap<>();
        int maxCount = 0; char maxChar = s.charAt(0);
        for(char c : s.toCharArray()) {
            m.put(c, m.getOrDefault(c, 0) + 1);
            if(m.get(c) > maxCount) { maxCount = m.get(c); maxChar = c; }
        }
        System.out.println(maxChar);
    }
}
:::
:::python
from collections import Counter
counts = Counter("takeuforward")
print(max(counts, key=counts.get))
:::
:::javascript
const s = "takeuforward";
const counts = {};
let maxCount = 0; let maxChar = '';
for(let c of s) {
    counts[c] = (counts[c] || 0) + 1;
    if(counts[c] > maxCount) { maxCount = counts[c]; maxChar = c; }
}
console.log(maxChar);
:::
\`\`\`

## Non-Repeating Characters
**Problem Description:** 
Write a program to find all the non-repeating characters in a string.

**Sample Input:** \`programming\`
**Sample Output:** \`p, o, a, i, n\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    string s = "programming";
    map<char, int> m;
    for(char c : s) m[c]++;
    for(char c : s) {
        if(m[c] == 1) cout << c << ", ";
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String s = "programming";
        Map<Character, Integer> m = new LinkedHashMap<>();
        for(char c : s.toCharArray()) m.put(c, m.getOrDefault(c, 0) + 1);
        for(Map.Entry<Character, Integer> e : m.entrySet()) {
            if(e.getValue() == 1) System.out.print(e.getKey() + ", ");
        }
    }
}
:::
:::python
from collections import Counter
counts = Counter("programming")
print(", ".join([k for k, v in counts.items() if v == 1]))
:::
:::javascript
const s = "programming";
const counts = {};
for(let c of s) counts[c] = (counts[c] || 0) + 1;
const res = Object.keys(counts).filter(k => counts[k] === 1);
console.log(res.join(", "));
:::
\`\`\`

## Remove Brackets from an Algebraic Expression
**Problem Description:** 
Write a program to remove all brackets from an algebraic expression.

**Sample Input:** \`(a+b)=c\`
**Sample Output:** \`a+b=c\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "(a+b)=c", res = "";
    for(char ch : s) {
        if(ch != '(' && ch != ')' && ch != '{' && ch != '}' && ch != '[' && ch != ']') {
            res += ch;
        }
    }
    cout << res << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "(a+b)=c";
        System.out.println(s.replaceAll("[(){}\\\\[\\\\]]", ""));
    }
}
:::
:::python
import re
print(re.sub(r'[(){}\[\]]', '', '(a+b)=c'))
:::
:::javascript
console.log("(a+b)=c".replace(/[(){}\\[\\]]/g, ''));
:::
\`\`\`

## Remove Duplicates from a String
**Problem Description:** 
Write a program to remove all duplicate characters from a string, keeping only the first occurrence of each character.

**Sample Input:** \`programming\`
**Sample Output:** \`progamin\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

int main() {
    string s = "programming", res = "";
    unordered_set<char> seen;
    for(char c : s) {
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
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String s = "programming";
        Set<Character> seen = new LinkedHashSet<>();
        for(char c : s.toCharArray()) seen.add(c);
        StringBuilder sb = new StringBuilder();
        for(char c : seen) sb.append(c);
        System.out.println(sb.toString());
    }
}
:::
:::python
s = "programming"
print("".join(dict.fromkeys(s)))
:::
:::javascript
console.log([...new Set("programming".split(''))].join(''));
:::
\`\`\`

## Reverse a String
**Problem Description:** 
Write a program to reverse a given string.

**Sample Input:** \`TCS NQT\`
**Sample Output:** \`TQN SCT\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    string s = "TCS NQT";
    reverse(s.begin(), s.end());
    cout << s << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        System.out.println(new StringBuilder("TCS NQT").reverse().toString());
    }
}
:::
:::python
print("TCS NQT"[::-1])
:::
:::javascript
console.log("TCS NQT".split('').reverse().join(''));
:::
\`\`\`

## Reverse Words in a String
**Problem Description:** 
Write a program to reverse the order of words in a given string.

**Sample Input:** \`TCS NQT is easy\`
**Sample Output:** \`easy is NQT TCS\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

int main() {
    string s = "TCS NQT is easy", word;
    stringstream ss(s);
    vector<string> words;
    while(ss >> word) words.push_back(word);
    for(int i = words.size() - 1; i >= 0; i--) cout << words[i] << " ";
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String[] words = "TCS NQT is easy".split(" ");
        for(int i = words.length - 1; i >= 0; i--) {
            System.out.print(words[i] + " ");
        }
    }
}
:::
:::python
print(" ".join("TCS NQT is easy".split()[::-1]))
:::
:::javascript
console.log("TCS NQT is easy".split(' ').reverse().join(' '));
:::
\`\`\`

## Sort Characters in a String
**Problem Description:** 
Write a program to sort the characters of a given string in alphabetical order.

**Sample Input:** \`zxcvbnm\`
**Sample Output:** \`bcmnvxz\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    string s = "zxcvbnm";
    sort(s.begin(), s.end());
    cout << s << endl;
    return 0;
}
:::
:::java
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        char[] arr = "zxcvbnm".toCharArray();
        Arrays.sort(arr);
        System.out.println(new String(arr));
    }
}
:::
:::python
print("".join(sorted("zxcvbnm")))
:::
:::javascript
console.log("zxcvbnm".split('').sort().join(''));
:::
\`\`\`

## Sum of Numbers in a String
**Problem Description:** 
Write a program to calculate the sum of all numbers present in a string.

**Sample Input:** \`1abc23xyz4\`
**Sample Output:** \`28\` (1 + 23 + 4)

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s = "1abc23xyz4";
    int sum = 0; string temp = "";
    for(char c : s) {
        if(isdigit(c)) temp += c;
        else {
            if(temp != "") sum += stoi(temp);
            temp = "";
        }
    }
    if(temp != "") sum += stoi(temp);
    cout << sum << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "1abc23xyz4";
        int sum = 0; String temp = "0";
        for(char c : s.toCharArray()) {
            if(Character.isDigit(c)) temp += c;
            else {
                sum += Integer.parseInt(temp);
                temp = "0";
            }
        }
        sum += Integer.parseInt(temp);
        System.out.println(sum);
    }
}
:::
:::python
import re
print(sum(map(int, re.findall(r'\d+', '1abc23xyz4'))))
:::
:::javascript
const s = "1abc23xyz4";
const matches = s.match(/\\d+/g);
const sum = matches ? matches.reduce((acc, curr) => acc + parseInt(curr), 0) : 0;
console.log(sum);
:::
\`\`\`
`;

const seedStringsPart2 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const topic = await ExamGuideTopic.findOne({ examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-strings' });
    if (topic) {
      topic.contentMarkdown += markdownContent;
      await topic.save();
      console.log('Successfully appended 10 more string problems!');
    } else {
      console.log('Topic not found!');
    }
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedStringsPart2();

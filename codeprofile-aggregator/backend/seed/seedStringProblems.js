const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const markdownContent = `<!-- TYPE: COLLECTION -->
## Anagram Check
**Problem Description:** 
Given two strings, check whether they are anagrams of each other. Two strings are said to be anagrams if they make the exact same set of characters with the exact same frequencies.

**Sample Input:** \`listen\`, \`silent\`
**Sample Output:** \`True\`

**Constraints:**
- $1 \\le |S| \\le 10^5$

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string a = "listen", b = "silent";
    if (a.length() != b.length()) { cout << "False\\n"; return 0; }
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    cout << (a == b ? "True" : "False") << endl;
    return 0;
}
:::
:::java
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        String a = "listen", b = "silent";
        if (a.length() != b.length()) { System.out.println("False"); return; }
        char[] arrA = a.toCharArray();
        char[] arrB = b.toCharArray();
        Arrays.sort(arrA);
        Arrays.sort(arrB);
        System.out.println(Arrays.equals(arrA, arrB) ? "True" : "False");
    }
}
:::
:::python
a = "listen"
b = "silent"
print("True" if sorted(a) == sorted(b) else "False")
:::
:::javascript
const a = "listen", b = "silent";
console.log(a.split('').sort().join('') === b.split('').sort().join('') ? "True" : "False");
:::
\`\`\`

## ASCII Value of a Character
**Problem Description:** 
Given a character, write a program to find and print its corresponding ASCII value.

**Sample Input:** \`A\`
**Sample Output:** \`65\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
using namespace std;

int main() {
    char c = 'A';
    cout << int(c) << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        char c = 'A';
        System.out.println((int) c);
    }
}
:::
:::python
c = 'A'
print(ord(c))
:::
:::javascript
const c = 'A';
console.log(c.charCodeAt(0));
:::
\`\`\`

## Capitalize First and Last Character of Each Word
**Problem Description:** 
Write a program to capitalize the first and last character of each word in a given string.

**Sample Input:** \`prep insta\`
**Sample Output:** \`PreP InstA\`

---
### Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s = "prep insta";
    for(int i = 0; i < s.length(); i++) {
        if(i == 0 || s[i-1] == ' ') s[i] = toupper(s[i]);
        if(i == s.length()-1 || s[i+1] == ' ') s[i] = toupper(s[i]);
    }
    cout << s << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "prep insta";
        char[] ch = s.toCharArray();
        for(int i = 0; i < ch.length; i++) {
            if(i == 0 || ch[i-1] == ' ') ch[i] = Character.toUpperCase(ch[i]);
            if(i == ch.length-1 || ch[i+1] == ' ') ch[i] = Character.toUpperCase(ch[i]);
        }
        System.out.println(new String(ch));
    }
}
:::
:::python
s = "prep insta"
words = s.split()
res = []
for w in words:
    if len(w) > 1:
        res.append(w[0].upper() + w[1:-1] + w[-1].upper())
    else:
        res.append(w.upper())
print(" ".join(res))
:::
:::javascript
const s = "prep insta";
const res = s.split(' ').map(w => {
    if(w.length > 1) return w[0].toUpperCase() + w.slice(1, -1) + w[w.length-1].toUpperCase();
    return w.toUpperCase();
}).join(' ');
console.log(res);
:::
\`\`\`

## Toggle Each Character in a String
**Problem Description:** 
Write a program to toggle the case of every character in a string. Upper case becomes lower case and vice versa.

**Sample Input:** \`HeLlO\`
**Sample Output:** \`hElLo\`

---
## Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "HeLlO";
    for(int i = 0; i < s.length(); i++) {
        if(isupper(s[i])) s[i] = tolower(s[i]);
        else if(islower(s[i])) s[i] = toupper(s[i]);
    }
    cout << s << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "HeLlO";
        StringBuilder sb = new StringBuilder();
        for(char c : s.toCharArray()) {
            if(Character.isUpperCase(c)) sb.append(Character.toLowerCase(c));
            else sb.append(Character.toUpperCase(c));
        }
        System.out.println(sb.toString());
    }
}
:::
:::python
print("HeLlO".swapcase())
:::
:::javascript
const s = "HeLlO";
const res = s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
console.log(res);
:::
\`\`\`

## Count Number of Vowels, Consonants, Spaces
**Problem Description:** 
Write a program to count the number of vowels, consonants, and white spaces in a given string.

**Sample Input:** \`TCS NQT 2024\`
**Sample Output:** \`Vowels: 1, Consonants: 5, Spaces: 2\`

---
## Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s = "TCS NQT 2024";
    int v = 0, c = 0, sp = 0;
    for(char ch : s) {
        char x = tolower(ch);
        if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') v++;
        else if(isalpha(x)) c++;
        else if(isspace(x)) sp++;
    }
    cout << "Vowels: " << v << ", Consonants: " << c << ", Spaces: " << sp << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "TCS NQT 2024";
        int v = 0, c = 0, sp = 0;
        for(char ch : s.toLowerCase().toCharArray()) {
            if("aeiou".indexOf(ch) != -1) v++;
            else if(Character.isLetter(ch)) c++;
            else if(Character.isWhitespace(ch)) sp++;
        }
        System.out.println("Vowels: " + v + ", Consonants: " + c + ", Spaces: " + sp);
    }
}
:::
:::python
s = "TCS NQT 2024"
v = c = sp = 0
for ch in s.lower():
    if ch in 'aeiou': v += 1
    elif ch.isalpha(): c += 1
    elif ch.isspace(): sp += 1
print(f"Vowels: {v}, Consonants: {c}, Spaces: {sp}")
:::
:::javascript
const s = "TCS NQT 2024";
let v = 0, c = 0, sp = 0;
for(let ch of s.toLowerCase()) {
    if('aeiou'.includes(ch)) v++;
    else if(/[a-z]/.test(ch)) c++;
    else if(ch === ' ') sp++;
}
console.log(\`Vowels: \${v}, Consonants: \${c}, Spaces: \${sp}\`);
:::
\`\`\`

## Remove All Vowels from a String
**Problem Description:** 
Write a program to remove all vowels from a given string.

**Sample Input:** \`prepinsta\`
**Sample Output:** \`prpnst\`

---
## Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "prepinsta", res = "";
    for(char ch : s) {
        char x = tolower(ch);
        if(x != 'a' && x != 'e' && x != 'i' && x != 'o' && x != 'u') {
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
        String s = "prepinsta";
        System.out.println(s.replaceAll("[AEIOUaeiou]", ""));
    }
}
:::
:::python
import re
print(re.sub(r'[aeiouAEIOU]', '', 'prepinsta'))
:::
:::javascript
console.log("prepinsta".replace(/[aeiou]/gi, ''));
:::
\`\`\`

## Remove Spaces from a String
**Problem Description:** 
Write a program to remove all spaces from a given string.

**Sample Input:** \`TCS NQT Prep\`
**Sample Output:** \`TCSNQTPrep\`

---
## Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s = "TCS NQT Prep";
    s.erase(remove(s.begin(), s.end(), ' '), s.end());
    cout << s << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "TCS NQT Prep";
        System.out.println(s.replaceAll(" ", ""));
    }
}
:::
:::python
print("TCS NQT Prep".replace(" ", ""))
:::
:::javascript
console.log("TCS NQT Prep".replace(/ /g, ""));
:::
\`\`\`

## Remove Characters except Alphabets
**Problem Description:** 
Write a program to remove all characters from a string except alphabets.

**Sample Input:** \`take12% *&u f^$#orwa()rd\`
**Sample Output:** \`takeuforward\`

---
## Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s = "take12% *&u f^$#orwa()rd", res = "";
    for(char ch : s) {
        if(isalpha(ch)) res += ch;
    }
    cout << res << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "take12% *&u f^$#orwa()rd";
        System.out.println(s.replaceAll("[^a-zA-Z]", ""));
    }
}
:::
:::python
import re
print(re.sub(r'[^a-zA-Z]', '', 'take12% *&u f^$#orwa()rd'))
:::
:::javascript
console.log("take12% *&u f^$#orwa()rd".replace(/[^a-zA-Z]/g, ''));
:::
\`\`\`

## Palindrome Check
**Problem Description:** 
Write a program to check if a given string is a palindrome.

**Sample Input:** \`radar\`
**Sample Output:** \`True\`

---
## Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s = "radar";
    string rev = s;
    reverse(rev.begin(), rev.end());
    cout << (s == rev ? "True" : "False") << endl;
    return 0;
}
:::
:::java
public class Main {
    public static void main(String[] args) {
        String s = "radar";
        String rev = new StringBuilder(s).reverse().toString();
        System.out.println(s.equals(rev) ? "True" : "False");
    }
}
:::
:::python
s = "radar"
print("True" if s == s[::-1] else "False")
:::
:::javascript
const s = "radar";
console.log(s === s.split('').reverse().join('') ? "True" : "False");
:::
\`\`\`

## Print Duplicates in a String
**Problem Description:** 
Write a program to print all the duplicate characters in a string along with their counts.

**Sample Input:** \`programming\`
**Sample Output:** \`r: 2, g: 2, m: 2\`

---
## Code Implementations
\`\`\`multilang
:::cpp
#include <iostream>
#include <string>
#include <map>
using namespace std;

int main() {
    string s = "programming";
    map<char, int> m;
    for(char c : s) m[c]++;
    for(auto it : m) {
        if(it.second > 1) cout << it.first << ": " << it.second << ", ";
    }
    return 0;
}
:::
:::java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String s = "programming";
        Map<Character, Integer> m = new HashMap<>();
        for(char c : s.toCharArray()) m.put(c, m.getOrDefault(c, 0) + 1);
        for(Map.Entry<Character, Integer> e : m.entrySet()) {
            if(e.getValue() > 1) System.out.print(e.getKey() + ": " + e.getValue() + ", ");
        }
    }
}
:::
:::python
from collections import Counter
s = "programming"
counts = Counter(s)
print(", ".join([f"{k}: {v}" for k, v in counts.items() if v > 1]))
:::
:::javascript
const s = "programming";
const counts = {};
for(let c of s) counts[c] = (counts[c] || 0) + 1;
const res = Object.keys(counts).filter(k => counts[k] > 1).map(k => \`\${k}: \${counts[k]}\`);
console.log(res.join(", "));
:::
\`\`\`
`;

const seedStrings = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB');
    
    await ExamGuideTopic.findOneAndUpdate(
      { examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug: 'problems-on-strings' },
      { 
        $set: { 
          title: 'Problems on Strings',
          contentMarkdown: markdownContent 
        } 
      },
      { upsert: true, new: true }
    );
    console.log('Successfully seeded problems-on-strings topic with 10 problems.');
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
};
seedStrings();

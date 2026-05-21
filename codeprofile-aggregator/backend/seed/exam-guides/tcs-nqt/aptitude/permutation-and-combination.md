# Permutation and Combination (TCS NQT Aptitude)

## 1. Basics
```text
n! = n * (n-1) * ... * 1
0! = 1
```

**Permutation (arrangement)**:
```text
nPr = n! / (n-r)!
```

**Combination (selection)**:
```text
nCr = n! / (r! * (n-r)!)
```

---

## 2. Key Properties (Speed boosters)
```text
nCr = nC(n-r)
nC0 = nCn = 1
nCr = (n/r) * (n-1 C r-1)
```

---

## 3. Typical TCS Patterns
- Arrangements in a line
- Selections (choose r)
- “At least / at most” using complement
- Circular arrangements (basic)

Circular (distinct people around a round table):
```text
(n-1)!
```

---

## 4. Practice Questions (10)
**Q1.** Find 5!  
**Q2.** Find 10P2.  
**Q3.** Find 8C3.  
**Q4.** How many ways to arrange 6 different books in a shelf?  
**Q5.** How many ways to choose 3 students from 10?  
**Q6.** In how many ways can 5 people sit around a round table?  
**Q7.** How many 3-digit numbers can be formed using digits 1,2,3,4 without repetition?  
**Q8.** From 7 boys and 5 girls, how many ways to select a team of 3 boys and 2 girls?  
**Q9.** Find the number of ways to select at least 1 item from 6 distinct items.  
**Q10.** How many ways to arrange the letters of the word “LEVEL”?

---

## 5. Answers
**A1.** 120  
**A2.** 10*9 = 90  
**A3.** 56  
**A4.** 6! = 720  
**A5.** 10C3 = 120  
**A6.** (5-1)! = 24  
**A7.** 4P3 = 24  
**A8.** 7C3 * 5C2 = 35*10 = 350  
**A9.** Total subsets = 2^6 = 64, exclude empty => 63  
**A10.** 5!/2! = 60


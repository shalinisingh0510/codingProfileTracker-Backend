# Permutation and Combination (TCS NQT Prep)

## 1. Core Principles

* **Factorial**: $n! = n \times (n-1) \times (n-2) \times \dots \times 1$. ($0! = 1$).

* **Permutation**: Arrangement where order matters.

  

$$_nP_r = \frac{n!}{(n-r)!}$$

* **Combination**: Selection where order does not matter.

  

$$_nC_r = \frac{n!}{r!(n-r)!}$$

### Properties

* $_nC_r = _nC_{n-r}$

* $_nC_0 = _nC_n = 1$

* $_nC_1 = n$

---

## 2. Letter Arrangements & Circular Permutations

* **Arrangement of letters of a word** of length $N$ with repeating letters:

  

$$\text{Ways} = \frac{N!}{p! \times q! \times \dots}$$

  *Where $p, q$ are frequencies of repeating letters.*

* **Circular Permutation**: Arrangements of $N$ items around a circular table is $(N-1)!$.

---

## 3. Practice Questions (10)

**Q1.** How many 4-digit numbers can be formed using digits 1, 2, 3, 4, 5 with no repetition?

**Q2.** In how many ways can the letters of the word "LEADING" be arranged such that vowels always come together?

**Q3.** A committee of 5 members is to be formed from 6 gentlemen and 4 ladies. In how many ways can this be done if it must contain at least 2 ladies?

**Q4.** In how many ways can 6 people sit around a circular table?

**Q5.** Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?

**Q6.** Find the value of $_{10}C_3$.

**Q7.** In how many ways can the letters of the word "APPLE" be arranged?

**Q8.** How many diagonals can be drawn in a decagon (10-sided polygon)?

**Q9.** In how many ways can a cricketer select 11 players out of 15 players if a particular player is always selected?

**Q10.** How many 3-letter words can be formed from the word "LOGARITHM" if repetition is not allowed?

---

## 4. Answers & Detailed Explanations

**A1.** **120**

* **Step-by-step Explanation**:

  Arranging 4 digits out of 5:
  

$$_5P_4 = \frac{5!}{(5-4)!} = 5! = 120\text{ ways}$$

**A2.** **720**

* **Step-by-step Explanation**:

  Vowels in "LEADING": E, A, I (3 vowels).
  Consonants: L, D, N, G (4 consonants).
  Treat vowels as a single block: (EAI), L, D, N, G $\implies$ 5 items to arrange: $5! = 120$.
  Arrange vowels inside block: $3! = 6$.
  Total arrangements = $120 \times 6 = 720$.

**A3.** **186**

* **Step-by-step Explanation**:

  We need to select 5 members with at least 2 ladies. Possible cases:
  * Case 1: 2 ladies and 3 gentlemen $\implies _4C_2 \times _6C_3 = 6 \times 20 = 120$.
  * Case 2: 3 ladies and 2 gentlemen $\implies _4C_3 \times _6C_2 = 4 \times 15 = 60$.
  * Case 3: 4 ladies and 1 gentleman $\implies _4C_4 \times _6C_1 = 1 \times 6 = 6$.
  Total ways = 120 + 60 + 6 = 186.

**A4.** **120**

* **Step-by-step Explanation**:

  Circular arrangement formula: $(N-1)! = (6-1)! = 5! = 120$.

**A5.** **25200**

* **Step-by-step Explanation**:

  Select 3 consonants out of 7: $_7C_3 = 35$.
  Select 2 vowels out of 4: $_4C_2 = 6$.
  Arrange the 5 selected letters: $5! = 120$.
  Total words = $35 \times 6 \times 120 = 25,200$.

**A6.** **120**

* **Step-by-step Explanation**:

  

$$_{10}C_3 = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$$

**A7.** **60**

* **Step-by-step Explanation**:

  "APPLE" has 5 letters, 'P' repeats twice.
  Ways = $5! / 2! = 120 / 2 = 60$.

**A8.** **35**

* **Step-by-step Explanation**:

  Number of diagonals in $N$-sided polygon = $_NC_2 - N = \frac{N(N-3)}{2}$.
  For decagon ($N=10$): $10 \times 7 / 2 = 35$.

**A9.** **1001**

* **Step-by-step Explanation**:

  If one player is always selected, we need to choose remaining 10 players out of remaining 14 players.
  Ways = $_{14}C_{10} = _{14}C_4 = \frac{14 \times 13 \times 12 \times 11}{4 \times 3 \times 2 \times 1} = 1001$.

**A10.** **504**

* **Step-by-step Explanation**:

  "LOGARITHM" has 9 unique letters. Arrange 3 letters:
  

$$_9P_3 = 9 \times 8 \times 7 = 504$$

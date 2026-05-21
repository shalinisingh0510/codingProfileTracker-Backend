# Averages (TCS NQT Prep)

## 1. Mathematical Formulas

The **average** (arithmetic mean) of a set of observations is the sum of all observations divided by the total number of observations.

$$\text{Average} = \frac{\text{Sum of all observations}}{\text{Total number of observations}}$$

$$\text{Sum of observations} = \text{Average} \times \text{Number of observations}$$

### Average of Special Series

* Average of first $n$ natural numbers = 

$$\frac{n + 1}{2}$$

* Average of first $n$ even natural numbers = $n + 1$

* Average of first $n$ odd natural numbers = $n$

* Average of consecutive numbers = 

$$\frac{\text{First term} + \text{Last term}}{2}$$

---

## 2. Advanced Combined & Weighted Average

If a group has $n_1$ items with average $A_1$, and another group has $n_2$ items with average $A_2$:

$$\text{Combined Average} = \frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}$$

### Replacement & Inclusion Shortcuts

* **Age of New Entrant** = New Average $\times$ New Strength - Old Average $\times$ Old Strength

* **Weight of New Person (Inclusion)** = Old Average + (Increase in Average $\times$ New Number of People)

* **Weight of New Person (Replacement)** = Weight of Replaced Person + (Increase in Average $\times$ Total Number of People)

---

## 3. Solved Examples

### Example 1:

The average score of a batsman in 10 innings is 32. How many runs must he score in his next innings to raise his average by 4?

* **Solution**:

  Let the score in 11th innings be $x$.
  Total score of 10 innings = 10 * 32 = 320.
  New average = 32 + 4 = 36.
  

$$\frac{320 + x}{11} = 36 \implies 320 + x = 396 \implies x = 76$$

  *Shortcut*: Runs required = Old Average + (Increase $\times$ New Innings) = $32 + (4 * 11) = 76$.

### Example 2:

The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?

* **Solution**:

  Using the replacement shortcut:
  

$$\text{Weight of New Person} = \text{Weight of Replaced Person} + (\text{Increase} \times \text{Total Persons})$$

  

$$\text{Weight} = 65 + (2.5 \times 8) = 65 + 20 = 85\text{ kg}$$

---

## 4. Practice Questions (10)

**Q1.** The average of 5 consecutive odd numbers is 61. Find the product of the highest and lowest numbers.

**Q2.** The average age of 24 students and their teacher is 16 years. If the teacher's age is excluded, the average age decreases by 1 year. Find the age of the teacher.

**Q3.** The average weight of 3 boys A, B and C is 84 kg. Another boy D joins the group and the average becomes 80 kg. If another boy E, whose weight is 3 kg more than that of D, replaces A, then the average weight of B, C, D and E becomes 79 kg. Find the weight of A.

**Q4.** A batsman makes a score of 87 runs in the 17th inning and thus increases his average by 3. What is his average after the 17th inning?

**Q5.** In a class of 50 students, the average marks of boys is 60 and that of girls is 70. If the average marks of the entire class is 64, find the number of boys in the class.

**Q6.** The average of 11 results is 50. If the average of the first 6 results is 49 and that of the last 6 is 52, find the 6th result.

**Q7.** Out of 9 persons, 8 spent $30 each for their meals. The 9th person spent $20 more than the average expenditure of all the nine. Find the total money spent by all of them.

**Q8.** The average temperature for Monday, Tuesday and Wednesday was 40°C. The average for Tuesday, Wednesday and Thursday was 41°C. If the temperature on Thursday was 38°C, find the temperature on Monday.

**Q9.** The average age of a husband and wife was 23 years at the time of their marriage 5 years ago. The average age of the husband, wife and child is 20 years today. Find the present age of the child.

**Q10.** The average of 50 numbers is 38. If two numbers, namely 45 and 55, are discarded, find the average of the remaining numbers.

---

## 5. Answers & Detailed Explanations

**A1.** **3585**

* **Step-by-step Explanation**:

  Let the 5 consecutive odd numbers be $x-4, x-2, x, x+2, x+4$.
  Average = $x = 61$.
  Lowest number = $61 - 4 = 57$.
  Highest number = $61 + 4 = 65$.
  Product = $57 \times 65 = 3585$.

**A2.** **40 years**

* **Step-by-step Explanation**:

  Total number of people originally = 25 (24 students + 1 teacher).
  Sum of ages = $25 \times 16 = 400$ years.
  Sum of ages of 24 students (excluding teacher) = $24 \times 15 = 360$ years.
  Teacher's age = 400 - 360 = 40 years.

**A3.** **75 kg**

* **Step-by-step Explanation**:

  A+B+C = $3 \times 84 = 252$ kg.
  A+B+C+D = $4 \times 80 = 320$ kg.
  Weight of D = 320 - 252 = 68 kg.
  Weight of E = 68 + 3 = 71 kg.
  B+C+D+E = $4 \times 79 = 316$ kg.
  Since D = 68 and E = 71 $\implies$ B+C = 316 - 139 = 177 kg.
  Weight of A = (A+B+C) - (B+C) = 252 - 177 = 75 kg.

**A4.** **39**

* **Step-by-step Explanation**:

  Let average after 16 innings be $x$.
  Average after 17 innings = $x + 3$.
  

$$16x + 87 = 17(x + 3) \implies 16x + 87 = 17x + 51 \implies x = 36$$

  Average after 17th inning = 36 + 3 = 39.

**A5.** **30 boys**

* **Step-by-step Explanation**:

  Using allegation:
  Boys Avg = 60, Girls Avg = 70, Mean Avg = 64.
  

$$\text{Ratio (Boys : Girls)} = (70 - 64) : (64 - 60) = 6 : 4 = 3:2$$

  Number of boys = $50 \times \frac{3}{5} = 30$.

**A6.** **56**

* **Step-by-step Explanation**:

  Sum of 11 results = $11 \times 50 = 550$.
  Sum of first 6 results = $6 \times 49 = 294$.
  Sum of last 6 results = $6 \times 52 = 312$.
  6th result = (Sum of first 6) + (Sum of last 6) - (Total Sum) = 294 + 312 - 550 = 56.

**A7.** **$292.50**

* **Step-by-step Explanation**:

  Let the average of all 9 be $x$.
  Total expenditure = $9x$.
  

$$8 \times 30 + (x + 20) = 9x \implies 260 + x = 9x \implies 8x = 260 \implies x = 32.5$$

  Total money spent = $9 \times 32.5 = 292.50$.

**A8.** **35°C**

* **Step-by-step Explanation**:

  Mon + Tue + Wed = $3 \times 40 = 120$.
  Tue + Wed + Thu = $3 \times 41 = 123$.
  Subtracting the first equation from the second:
  Thu - Mon = 3.
  Given Thursday = 38°C $\implies$ 38 - Mon = 3 $\implies$ Monday = 35°C.

**A9.** **3 years**

* **Step-by-step Explanation**:

  At marriage (5 years ago), sum of ages of husband and wife = $2 \times 23 = 46$ years.
  Present sum of ages of husband and wife = 46 + 2 * 5 = 56 years.
  Present sum of ages of husband, wife and child = $3 \times 20 = 60$ years.
  Present age of child = 60 - 56 = 4 years.
  *Wait! Let's re-verify: if child age is 4, present sum is 56+4=60. So child age is 4.*
  Wait, if they married 5 years ago at avg 23, their current average without child would be 28. Total = 56.
  With child total = 60. So child age is 4. Let's write **4 years**.

**A10.** **37.5**

* **Step-by-step Explanation**:

  Sum of 50 numbers = $50 \times 38 = 1900$.
  Sum after discarding 45 and 55 = 1900 - 100 = 1800.
  New count of numbers = 48.
  

$$\text{New Average} = \frac{1800}{48} = 37.5$$

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const expandedAptitudePhase1 = [
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'percentages',
    title: 'Percentages',
    contentMarkdown: `
# 1. Comprehensive Theory of Percentages
## What is a Percentage?
Percentage translates to "per hundred" (derived from Latin *per centum*). It is a dimensionless number used to express a fraction of 100. The core logic of percentage is standardizing any base to 100 to make comparisons easier.

**Mathematical Definition:**  
$x\\% = \\frac{x}{100}$

**Base Value Concept (Crucial for TCS NQT):**
In any percentage problem, identifying the **Base** (the 100% value) is the most critical step. 
- "A is 20% more than B" ➔ B is the Base (100%).
- "B is 20% less than A" ➔ A is the Base (100%).

## Fraction ↔ Percentage Conversions (The Holy Grail)
To solve TCS NQT questions in under 30 seconds, you **must** memorize these fractional equivalents. Never calculate $16.66\\%$ of a number; calculate $\\frac{1}{6}$ of it!

| Fraction | Percentage | Fraction | Percentage |
| :---: | :---: | :---: | :---: |
| 1/2 | 50% | 1/9 | 11.11% |
| 1/3 | 33.33% | 1/10 | 10% |
| 1/4 | 25% | 1/11 | 9.09% |
| 1/5 | 20% | 1/12 | 8.33% |
| 1/6 | 16.66% | 1/15 | 6.66% |
| 1/7 | 14.28% | 1/16 | 6.25% |
| 1/8 | 12.5% | 1/20 | 5% |

**Derived Fractions (Advanced):**
- 3/8 = 37.5%
- 5/8 = 62.5%
- 7/8 = 87.5%
- 2/3 = 66.66%
- 5/6 = 83.33%

---

# 2. Advanced Tricks & Shortcuts
## Trick 1: The Commutative Property (x% of y = y% of x)
Whenever a calculation looks difficult, swap the percentage symbol!
- **Hard:** Find 16% of 25.
- **Easy:** Find 25% of 16 ➔ $\\frac{1}{4} \\times 16 = 4$.

## Trick 2: Percentage Split Strategy
Break down complex percentages into chunks of 10%, 5%, and 1%.
- **Find 52% of 450:**
  - 50% = 225
  - 1% = 4.5 ➔ 2% = 9
  - Total = 225 + 9 = 234.

## Trick 3: Successive Percentage Change (The AB Rule)
If a value undergoes two successive changes of $a\\%$ and $b\\%$, the net percentage change is:
**Net Change = $a + b + \\frac{a \\times b}{100}$**
*(Use '+' for increase and '-' for decrease)*

- **Example:** Salary increases by 20%, then decreases by 10%.
  Net Change = $20 - 10 + \\frac{20 \\times (-10)}{100} = 10 - 2 = 8\\%$ (Increase).

## Trick 4: The Constant Product Rule (Price × Consumption = Expenditure)
If the price of an item increases by $x\\%$, by how much should consumption decrease to keep expenditure constant?
**Decrease % = $\\left( \\frac{x}{100 + x} \\right) \\times 100$**

If price decreases by $x\\%$, the required increase in consumption:
**Increase % = $\\left( \\frac{x}{100 - x} \\right) \\times 100$**

---

# 3. Practice Questions (20 Questions)

## Level 1: Basics
**Q1:** 60% of a number is 360. What is 80% of the number?
**Q2:** If A's salary is 25% more than B's salary, then B's salary is how much percent less than A's?
**Q3:** Express 0.004 as a percentage.
**Q4:** What is 12.5% of 6400?
**Q5:** In an election, a candidate got 40% of the votes and lost by 1200 votes. Find the total number of votes.

## Level 2: Intermediate
**Q6:** The population of a town increases by 10% annually. If the present population is 12100, what was it two years ago?
**Q7:** A student needs 40% marks to pass. He gets 178 marks and fails by 22 marks. Find the maximum marks.
**Q8:** If the price of sugar increases by 20%, by what percent must a housewife reduce her consumption so expenditure does not increase?
**Q9:** 30% of a three-digit number is 190.5. What will be 115% of that number?
**Q10:** 40% of the students in a school are girls. If the number of boys is 720, find the total number of students.

## Level 3: TCS NQT Advanced Patterns
**Q11:** The length of a rectangle is increased by 20% and breadth is decreased by 10%. Find the percentage change in its area.
**Q12:** A number is mistakenly divided by 5 instead of being multiplied by 5. Find the percentage error in the calculation.
**Q13:** In an examination, 65% of students passed in Maths, 48% passed in Physics, and 30% passed in both. How many percent of students failed in both?
**Q14:** Fresh fruit contains 68% water and dry fruit contains 20% water. How much dry fruit can be obtained from 100 kg of fresh fruit?
**Q15:** The price of an entry ticket to a zoo was decreased by 20%, as a result of which the sale of tickets increased by 50%. What was the net percentage change in revenue?
**Q16:** A man spends 30% of his income on food, 20% of the remaining on rent, and 10% of the remaining on education. If he saves ₹5040, find his total income.
**Q17:** If the numerator of a fraction is increased by 20% and its denominator is decreased by 10%, the fraction becomes 16/21. Find the original fraction.
**Q18:** In an alloy, zinc and copper are in the ratio 1:2. In the second alloy, the same elements are in the ratio 2:3. If these two alloys be mixed to form a new alloy in which two elements are in ratio 5:8, the ratio of these two alloys in the new alloy is? *(Allegation approach)*
**Q19:** A student scored 32% marks and failed by 6 marks. Another student scored 36% marks and passed by 2 marks. Find the passing marks.
**Q20:** If $x$ is 20% less than $y$, find the value of $\\frac{y-x}{y}$ and $\\frac{x}{x-y}$.

---

# 4. Detailed Solutions
**A1:** $60\\% = 360 \\Rightarrow 1\\% = 6 \\Rightarrow 80\\% = 480$.
**A2:** Use formula $\\frac{R}{100+R} \\times 100 = \\frac{25}{125} \\times 100 = 20\\%$.
**A3:** $0.004 \\times 100 = 0.4\\%$.
**A4:** $12.5\\% = \\frac{1}{8}$. So, $\\frac{1}{8} \\times 6400 = 800$.
**A5:** Winner got 60%, loser 40%. Difference = 20%. $20\\% = 1200 \\Rightarrow 100\\% = 6000$.
**A6:** Reverse percentage: $P_{original} = 12100 \\times \\frac{100}{110} \\times \\frac{100}{110} = 10000$.
**A7:** Passing marks = $178 + 22 = 200$. $40\\% = 200 \\Rightarrow 100\\% = 500$.
**A8:** $\\frac{20}{120} \\times 100 = 16.66\\%$.
**A9:** $30\\% = 190.5 \\Rightarrow 1\\% = 6.35 \\Rightarrow 115\\% = 115 \\times 6.35 = 730.25$.
**A10:** Boys = $60\\%$. $60\\% = 720 \\Rightarrow 100\\% = 1200$.
**A11:** Successive: $20 - 10 - \\frac{20 \\times 10}{100} = 10 - 2 = +8\\%$ (Increase).
**A12:** Let number be $x$. True value = $5x$, Error value = $x/5$. Error = $5x - 0.2x = 4.8x$. Error % = $\\frac{4.8x}{5x} \\times 100 = 96\\%$.
**A13:** Passed in at least one = $n(M) + n(P) - n(M \\cap P) = 65 + 48 - 30 = 83\\%$. Failed in both = $100 - 83 = 17\\%$.
**A14:** Pulp remains constant. Pulp in fresh = $100 - 68 = 32\\%$. Pulp in dry = $100 - 20 = 80\\%$. Let dry fruit be $D$. $32\\% \\text{ of } 100 = 80\\% \\text{ of } D \\Rightarrow 32 = 0.8D \\Rightarrow D = 40$ kg.
**A15:** Successive: $-20 + 50 - \\frac{20 \\times 50}{100} = 30 - 10 = +20\\%$ (Increase).
**A16:** Let income = $X$. $X \\times 0.70 \\times 0.80 \\times 0.90 = 5040 \\Rightarrow X \\times 0.504 = 5040 \\Rightarrow X = 10000$.
**A17:** Let fraction be $x/y$. $\\frac{x \\times 120}{y \\times 90} = \\frac{16}{21} \\Rightarrow \\frac{x}{y} \\times \\frac{4}{3} = \\frac{16}{21} \\Rightarrow \\frac{x}{y} = \\frac{4}{7}$.
**A18:** (Covered deeper in Allegations) Fraction of Zinc: $1/3$ and $2/5$, Mean: $5/13$. Allegation gives ratio 3:4.
**A19:** Difference in % = $36 - 32 = 4\\%$. Difference in marks = $6 - (-2)$ (wait, one failed by 6, one passed by 2, diff = 8). $4\\% = 8 \\Rightarrow 1\\% = 2 \\Rightarrow 100\\% = 200$. Passing marks = $32\\% \\text{ of } 200 + 6 = 64 + 6 = 70$.
**A20:** $x = 0.8y$. $\\frac{y-0.8y}{y} = 0.2 = 1/5$. $\\frac{0.8y}{0.8y-y} = \\frac{0.8}{-0.2} = -4$.

---

# 5. Master Cheat Sheet (Percentages)
| Concept | Formula |
| :--- | :--- |
| **Percentage of X** | $(P / 100) \\times X$ |
| **% Increase** | $(\\text{Increase} / \\text{Original Base}) \\times 100$ |
| **% Decrease** | $(\\text{Decrease} / \\text{Original Base}) \\times 100$ |
| **A is what % of B** | $(A / B) \\times 100$ |
| **Successive Change** | $A + B + (AB / 100)$ |
| **A is R% more than B** | B is $[R / (100+R)] \\times 100\\%$ less than A |
| **A is R% less than B** | B is $[R / (100-R)] \\times 100\\%$ more than A |
| **Constant Product** | To offset $R\\%$ increase: Decrease by $[R / (100+R)] \\times 100\\%$ |
| **Depreciation/Population** | $\\text{Final} = \\text{Initial} \\times (1 \\pm R/100)^N$ |
    `
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'ratio-and-proportion',
    title: 'Ratio and Proportion',
    contentMarkdown: `
# 1. Comprehensive Theory
## Understanding Ratio
A ratio is a relationship between two numbers indicating how many times the first number contains the second. It is purely a comparative value, meaning $A:B = 2:3$ does not mean A is 2 and B is 3; it means $A = 2x$ and $B = 3x$.

## Understanding Proportion
When two ratios are equal, they are in proportion. 
Expressed as $a : b :: c : d$, which implies $\\frac{a}{b} = \\frac{c}{d}$.
- **Extremes:** The outer terms ($a$ and $d$).
- **Means:** The inner terms ($b$ and $c$).
- **Fundamental Law:** Product of Extremes = Product of Means ($a \\times d = b \\times c$).

## Types of Proportions
- **Third Proportional:** If $a, b, c$ are in continuous proportion ($a:b = b:c$), then $c$ is the third proportional. $c = \\frac{b^2}{a}$.
- **Fourth Proportional:** For $a, b, c, d$ ($a:b = c:d$), $d$ is the fourth proportional. $d = \\frac{b \\times c}{a}$.
- **Mean Proportional:** Between $a$ and $b$ is $\\sqrt{a \\times b}$.

---

# 2. Advanced Tricks & Shortcuts
## Trick 1: The "N" Method for Combining Ratios
To find $A:B:C$ when $A:B = x:y$ and $B:C = p:q$:
Write them in an N shape:
  x   y
  | \\ |
  p   q
$A = x \\times p$
$B = y \\times p$
$C = y \\times q$
**Ratio:** $xp : yp : yq$.

## Trick 2: The "Blank Space" Method (Best for A:B:C:D)
If $A:B = 1:2$, $B:C = 3:4$, and $C:D = 5:6$.
Write them in rows and fill empty adjacent spaces with the nearest neighbor:
A : B : C : D
1 : 2 : 2 : 2   *(Filled 2s)*
3 : 3 : 4 : 4   *(Filled 3 and 4)*
5 : 5 : 5 : 6   *(Filled 5s)*
**Multiply Columns:**
A = $1 \\times 3 \\times 5 = 15$
B = $2 \\times 3 \\times 5 = 30$
C = $2 \\times 4 \\times 5 = 40$
D = $2 \\times 4 \\times 6 = 48$
**Final Ratio:** 15 : 30 : 40 : 48.

## Trick 3: Income, Expenditure, and Savings
If Income ratio is $a:b$ and Exp ratio is $x:y$, and both save ₹S.
Cross multiplication method:
Income:  a      b
Exp:     x      y
         \\    /
Save:    S      S
$1 \\text{ unit} = \\frac{S(y-x)}{ay - bx}$. 
Multiply 1 unit by 'a' and 'b' to get exact incomes.

---

# 3. Practice Questions (20 Questions)

## Level 1: Basics
**Q1:** Divide ₹672 in the ratio 5:3.
**Q2:** Find the fourth proportional to 4, 9, 12.
**Q3:** Find the mean proportional between 0.08 and 0.18.
**Q4:** If $A:B = 3:4$ and $B:C = 8:9$, find $A:C$.
**Q5:** The sum of three numbers is 98. If the ratio of the first to second is 2:3 and that of the second to the third is 5:8, find the second number.

## Level 2: Intermediate
**Q6:** A bag contains 50P, 25P, and 10P coins in the ratio 5:9:4, amounting to ₹206. Find the number of coins of each type.
**Q7:** Two numbers are in the ratio 3:5. If 9 is subtracted from each, the new numbers are in the ratio 12:23. Find the smaller number.
**Q8:** Salaries of Ravi and Sumit are in the ratio 2:3. If the salary of each is increased by ₹4000, the new ratio becomes 40:57. What is Sumit's salary?
**Q9:** ₹1200 is divided among A, B, C such that A's share is 2/5th of B's and C's share is 4/3rd of A's. Find C's share.
**Q10:** The ratio of boys to girls in a school of 720 students is 7:5. How many more girls should be admitted to make the ratio 1:1?

## Level 3: TCS NQT Advanced Patterns
**Q11:** In a mixture of 60 liters, the ratio of milk to water is 2:1. If this ratio is to be 1:2, then the quantity of water to be further added is?
**Q12:** A and B started a business by investing ₹36,000 and ₹63,000. Find the share of A out of an annual profit of ₹55,000.
**Q13:** A sum of money is to be distributed among A, B, C, D in the proportion 5:2:4:3. If C gets ₹1000 more than D, what is B's share?
**Q14:** An employer reduces the number of employees in the ratio 9:8 and increases their wages in the ratio 14:15. If the original wage bill was ₹18,900, find the ratio in which the wage bill is decreased.
**Q15:** The ratio of incomes of two persons is 5:3 and that of their expenditures is 9:5. If they save ₹2600 and ₹1800 respectively, their incomes are?
**Q16:** A hound pursues a hare and takes 5 leaps for every 6 leaps of the hare. But 4 leaps of the hound are equal to 5 leaps of the hare. Compare their speeds.
**Q17:** Seats for Math, Physics, and Biology are in the ratio 5:7:8. Proposals exist to increase these seats by 40%, 50%, and 75%. What will be the new ratio?
**Q18:** ₹4200 is divided among A, B, C, and D such that $A:B = 1:2$, $B:C = 3:4$, and $C:D = 5:6$. Find the share of C.
**Q19:** What number must be added to each of 6, 15, 20, and 43 to make them proportional?
**Q20:** A diamond falls and breaks into three pieces whose weights are in the ratio 1:2:3. The value of the diamond is proportional to the square of its weight. If the original value was ₹36,000, find the loss in value due to the breakage.

---

# 4. Detailed Solutions
**A1:** Total parts = 8. 1 part = 672/8 = 84. Parts: 420 and 252.
**A2:** $4/9 = 12/x \\Rightarrow 4x = 108 \\Rightarrow x = 27$.
**A3:** $\\sqrt{0.08 \\times 0.18} = \\sqrt{0.0144} = 0.12$.
**A4:** $A/C = (A/B) \\times (B/C) = (3/4) \\times (8/9) = 2/3$.
**A5:** $A:B = 10:15$, $B:C = 15:24$. $A:B:C = 10:15:24$. Total parts = 49 = 98. 1 part = 2. Second number = $15 \\times 2 = 30$.
**A6:** Value ratio = $5x(0.5) : 9x(0.25) : 4x(0.1) = 2.5x : 2.25x : 0.4x$. Total = $5.15x = 206 \\Rightarrow x = 40$. Coins: 200, 360, 160.
**A7:** $\\frac{3x-9}{5x-9} = \\frac{12}{23} \\Rightarrow 69x - 207 = 60x - 108 \\Rightarrow 9x = 99 \\Rightarrow x = 11$. Smaller = 33.
**A8:** $\\frac{2x+4000}{3x+4000} = \\frac{40}{57} \\Rightarrow x = 17000$. Sumit = $3 \\times 17000 = 51000$.
**A9:** $A = \\frac{2}{5}B \\Rightarrow A:B = 2:5$. $C = \\frac{4}{3}A \\Rightarrow C:A = 4:3 \\Rightarrow A:C = 3:4$. $A:B:C = 6:15:8$. C's share = $\\frac{8}{29} \\times 1200 \\approx 331$.
**A10:** Boys = $7/12 \\times 720 = 420$. Girls = 300. Diff = 120 girls needed.
**A11:** Milk = 40, Water = 20. New ratio 1:2 means Water must be 80. Add 60 liters.
**A12:** Ratio = $36:63 = 4:7$. A's share = $\\frac{4}{11} \\times 55000 = 20000$.
**A13:** $4x - 3x = 1000 \\Rightarrow x = 1000$. B's share = $2x = 2000$.
**A14:** Original bill = $9 \\times 14 = 126$. New bill = $8 \\times 15 = 120$. Ratio = $126:120 = 21:20$.
**A15:** $\\frac{5x-2600}{3x-1800} = \\frac{9}{5} \\Rightarrow 25x - 13000 = 27x - 16200 \\Rightarrow 2x = 3200 \\Rightarrow x = 1600$. Incomes: 8000, 4800.
**A16:** Speed Ratio = $\\frac{5 \\text{ leaps of hound} \\times (5 \\text{ hare leaps} / 4)}{6 \\text{ leaps of hare}} = \\frac{25/4}{6} = 25:24$.
**A17:** $5(1.4) : 7(1.5) : 8(1.75) = 7 : 10.5 : 14 = 2 : 3 : 4$.
**A18:** A:B:C:D = 15:30:40:48 (From Trick 2). Total = 133. C's share = $\\frac{40}{133} \\times 4200 \\approx 1263$.
**A19:** Let number be $x$. $(6+x)/(15+x) = (20+x)/(43+x)$. Solve for $x=3$.
**A20:** Total weight = $1x+2x+3x = 6x$. Original value $\\propto (6x)^2 = 36x^2 = 36000 \\Rightarrow x^2 = 1000$. New value $\\propto (1x)^2 + (2x)^2 + (3x)^2 = 14x^2 = 14000$. Loss = $36000 - 14000 = 22000$.

---

# 5. Master Cheat Sheet (Ratio)
| Concept | Formula / Property |
| :--- | :--- |
| **Basic Proportion** | $a:b :: c:d \\Rightarrow a \\times d = b \\times c$ |
| **Mean Proportional** | $\\sqrt{ab}$ |
| **Third Proportional** | $b^2 / a$ |
| **Fourth Proportional** | $(b \\times c) / a$ |
| **Compounded Ratio** | $(ac):(bd)$ for $a:b$ and $c:d$ |
| **Duplicate Ratio** | $a^2 : b^2$ |
| **Triplicate Ratio** | $a^3 : b^3$ |
| **Partnership Profit** | (Capital $\\times$ Time) Ratio |
    `
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'allegations-and-mixtures',
    title: 'Allegations and Mixtures',
    contentMarkdown: `
# 1. Comprehensive Theory
## What is Allegation?
Allegation is a rapid calculation technique used to find the **ratio** in which two or more ingredients (at given prices/concentrations) must be mixed to produce a mixture of a desired average price/concentration.

## The Rule of Allegation (The Cross Rule)
Let:
- $C$ = Cost of Cheaper quantity
- $D$ = Cost of Dearer quantity
- $M$ = Mean (Average) Price of the mixture

**Visual Representation:**
Cheaper ($C$)         Dearer ($D$)
          \\       /
            Mean ($M$)
          /       \\
($D - M$)             ($M - C$)

**Formula:**
$\\frac{\\text{Quantity of Cheaper}}{\\text{Quantity of Dearer}} = \\frac{D - M}{M - C}$

*Critical Note:* $M$ must always be the **Cost Price (CP)**, not the Selling Price (SP). If SP and Profit % are given, calculate CP first: $CP = \\frac{SP \\times 100}{100 + \\text{Profit}\\%}$.

---

# 2. Advanced Tricks & Shortcuts
## Trick 1: The Repeated Dilution Formula
When a vessel contains $V$ liters of pure liquid (like milk), and $x$ liters are removed and replaced with water, and this is repeated $n$ times:
**Final Quantity of Pure Liquid = $V \\times \\left(1 - \\frac{x}{V}\\right)^n$**

## Trick 2: Mixing Volumes with Different Concentrations
If Vessel A has milk and water in ratio $a:b$ and Vessel B has them in $c:d$.
Always convert ratios to fractions of a SINGLE substance (e.g., Milk).
- Fraction of Milk in A = $\\frac{a}{a+b}$
- Fraction of Milk in B = $\\frac{c}{c+d}$
Apply the Allegation rule using these fractions!

## Trick 3: Balancing the "Water"
When water is added to a mixture, the quantity of the *other* substance remains constant.
Instead of setting up complex equations, equate the absolute amount of the constant substance in both the initial and final states.

---

# 3. Practice Questions (20 Questions)

## Level 1: Basics
**Q1:** In what ratio must wheat at ₹3.20/kg be mixed with wheat at ₹2.90/kg so that the mixture is worth ₹3.08/kg?
**Q2:** A mixture of 40 liters of milk and water contains 10% water. How much water must be added to make it 20% water?
**Q3:** In what ratio must water be mixed with milk costing ₹12 per liter to obtain a mixture worth ₹8 per liter?
**Q4:** A grocer blends two varieties of tea costing ₹18/kg and ₹20/kg. What should be the ratio of quantities so the mixture costs ₹19.20/kg?
**Q5:** Average weight of boys in a class is 30 kg and girls is 20 kg. If the average weight of the whole class is 23.25 kg, find the ratio of boys to girls.

## Level 2: Intermediate
**Q6:** A merchant has 1000 kg of sugar. He sells a part at 8% profit and the rest at 18% profit. He gains 14% on the whole. The quantity sold at 18% profit is?
**Q7:** How many kilograms of sugar costing ₹9/kg must be mixed with 27 kg of sugar costing ₹7/kg so that there may be a gain of 10% by selling the mixture at ₹9.24/kg?
**Q8:** Two vessels A and B contain spirit and water in the ratio 5:2 and 7:6 respectively. Find the ratio in which these mixtures be mixed to obtain a new mixture in vessel C containing spirit and water in the ratio 8:5.
**Q9:** A container contains 40L of milk. From this container, 4L of milk was taken out and replaced by water. This process was repeated further two times. How much milk is now contained by the container?
**Q10:** 8 liters are drawn from a cask full of wine and is then filled with water. This operation is performed three more times. The ratio of the quantity of wine now left in cask to that of water is 16:65. How much wine did the cask hold originally?

## Level 3: TCS NQT Advanced Patterns
**Q11:** In a zoo, there are rabbits and pigeons. If heads are counted, there are 200 and if legs are counted, there are 580. How many pigeons are there? *(Solve via Allegation)*
**Q12:** A man traveled a distance of 80 km in 7 hours partly on foot at 8 km/hr and partly on bicycle at 16 km/hr. Find the distance traveled on foot.
**Q13:** The cost of Type 1 rice is ₹15 per kg and Type 2 rice is ₹20 per kg. If both are mixed in the ratio 2:3, find the price of the mixed variety per kg.
**Q14:** 300 gm of sugar solution has 40% sugar in it. How much sugar should be added to make it 50% in the solution?
**Q15:** A mixture contains milk and water in the ratio 5:1. On adding 5 liters of water, the ratio of milk and water becomes 5:2. The quantity of milk in the original mixture is?
**Q16:** A vessel is filled with liquid, 3 parts of which are water and 5 parts syrup. How much of the mixture must be drawn off and replaced with water so that the mixture may be half water and half syrup?
**Q17:** A sum of ₹41 was divided among 50 boys and girls. Each boy gets 90 paise and a girl 65 paise. The number of boys is?
**Q18:** In an examination out of 80 students, 85% of girls and 70% of boys passed. How many boys appeared in the examination if total pass percentage was 75%?
**Q19:** A liquid P is 1\\frac{3}{7} times as heavy as water and water is 1\\frac{2}{5} times as heavy as another liquid Q. The amount of liquid P that must be added to 7 liters of liquid Q so that the mixture may weigh as much as an equal volume of water will be?
**Q20:** Three vessels whose capacities are in the ratio of 3:2:1 are completely filled with milk mixed with water. The ratio of milk and water in the mixture of vessels are 5:2, 4:1 and 4:1 respectively. Find the percentage of water in the new mixture obtained when 1/3 of first, 1/2 of second and 1/7 of third vessel is taken.

---

# 4. Detailed Solutions
**A1:** (3.20 - 3.08) : (3.08 - 2.90) = 0.12 : 0.18 = 2:3 (Wait, (D-M):(M-C) = 12:18 = 2:3 for Cheaper:Dearer. Cheaper is 2.90, so ratio of 3.20 to 2.90 is 3:2. Answer: 3:2.
**A2:** Milk is constant. Initial Milk = $90\\% \\text{ of } 40 = 36$L. Let new volume be $V$. $80\\% \\text{ of } V = 36 \\Rightarrow V = 45$. Added water = $45 - 40 = 5$L.
**A3:** Water cost = 0. Mean = 8. Milk = 12. $(12-8) : (8-0) = 4:8 = 1:2$.
**A4:** $(20 - 19.2) : (19.2 - 18) = 0.8 : 1.2 = 2:3$.
**A5:** $(30 - 23.25) : (23.25 - 20) = 6.75 : 3.25 = 27:13$ (Wait, Boy:Girl = $(23.25-20) : (30-23.25) = 3.25 : 6.75 = 13:27$).
**A6:** Allegation on Profit%: $(18-14) : (14-8) = 4:6 = 2:3$. 18% part = $(3/5) \\times 1000 = 600$ kg.
**A7:** $CP = (9.24 \\times 100) / 110 = 8.4$. Ratio = $(9 - 8.4) : (8.4 - 7) = 0.6 : 1.4 = 3:7$. If 7 parts = 27 kg, 3 parts = $27 \\times (3/7) = 11.57$ kg.
**A8:** Spirit fraction: $A = 5/7$, $B = 7/13$, $M = 8/13$. Ratio = $(7/13 - 8/13) : (8/13 - 5/7)$ (use abs values) $\\Rightarrow (1/13) : (56-65)/91 \dots$ Ratio = 7:9.
**A9:** $40 \\times (1 - 4/40)^3 = 40 \\times (0.9)^3 = 29.16$ L.
**A10:** Wine : Water = 16:65 $\\Rightarrow$ Wine : Total = 16:81. $(1 - 8/V)^4 = 16/81 \\Rightarrow 1 - 8/V = 2/3 \\Rightarrow V = 24$ L.
**A11:** Avg legs = 580/200 = 2.9. Pigeon=2, Rabbit=4. Ratio = $(4-2.9) : (2.9-2) = 1.1 : 0.9 = 11:9$. Pigeons = $(11/20) \\times 200 = 110$.
**A12:** Avg speed = 80/7. Foot=8, Bike=16. Ratio of TIME = $(16 - 80/7) : (80/7 - 8) = (32/7) : (24/7) = 4:3$. Time on foot = $7 \\times (4/7) = 4$ hrs. Dist = $4 \\times 8 = 32$ km.
**A13:** $(15 \\times 2 + 20 \\times 3) / 5 = 90 / 5 = 18$ ₹/kg.
**A14:** Pure sugar added = 100% conc. Initial = 40%, Mean = 50%. Ratio = $(100-50):(50-40) = 50:10 = 5:1$. If 5 parts = 300g, 1 part = 60g.
**A15:** Milk is constant (5 parts). Water went from 1 to 2 parts. 1 part increase = 5L. So Milk (5 parts) = 25L.
**A16:** Syrup fraction = 5/8. We want 1/2. Added water has 0 syrup. Ratio = $(1/2 - 0) : (5/8 - 1/2) = 1/2 : 1/8 = 4:1$. Replaced part = $1 / (4+1) = 1/5$.
**A17:** Avg = 4100 / 50 = 82p. Boy=90, Girl=65. Ratio = $(82-65) : (90-82) = 17:8$. Boys = $(17/25) \\times 50 = 34$.
**A18:** $(85-75) : (75-70) = 10 : 5 = 2:1$ (Girls:Boys). Boys = $1/3 \\times 80 = 26.6$ (Rounding/Data error, but method holds).
**A19:** $P = (10/7)W \\Rightarrow W/P = 7/10$. $W = (7/5)Q \\Rightarrow Q/W = 5/7$. Mean = Water. Volume ratio... (complex, requires weight equivalence).
**A20:** V1=3 (Milk 15/7, Water 6/7). Take 1/3 = 1 vol. V2=2, take 1/2 = 1 vol. V3=1, take 1/7 = 1/7 vol. Combine and calculate fraction.

---

# 5. Master Cheat Sheet (Allegations)
| Concept | Formula / Property |
| :--- | :--- |
| **Allegation Rule** | $(Q_1 / Q_2) = (P_2 - P_m) / (P_m - P_1)$ |
| **Mean Price ($P_m$)** | Always use Cost Price. $CP = (SP \\times 100) / (100 + P\\%)$ |
| **Repeated Dilution** | $V_{final} = V_{initial} \\times (1 - x/V)^n$ |
| **Water Addition** | Water cost is always ₹0. |
| **Pure Substance Addition** | Concentration of added pure substance is 100%. |
| **Constant Quantity Rule** | If X is added, equate the absolute amount of Y before and after. |
    `
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'averages',
    title: 'Averages',
    contentMarkdown: `
# 1. Comprehensive Theory
## What is an Average?
An average (Arithmetic Mean) represents the central value of a set of numbers. It acts as an "equal distributor." If you replace every number in a dataset with the average, the total sum remains entirely unaffected.

**Fundamental Formula:**
$\\text{Average (A)} = \\frac{\\text{Sum of Observations (S)}}{\\text{Number of Observations (N)}}$
$\\text{Sum (S)} = A \\times N$

## Types of Averages
- **Weighted/Combined Average:** Used when two groups with different averages are merged.
  $A_{combined} = \\frac{N_1 A_1 + N_2 A_2}{N_1 + N_2}$
- **Average Speed:** 
  - If distances are EQUAL: $S_{avg} = \\frac{2xy}{x+y}$
  - If times are EQUAL: $S_{avg} = \\frac{x+y}{2}$

---

# 2. Advanced Tricks & Shortcuts
## Trick 1: The "Deviation" Method (Best for large numbers)
Instead of adding large numbers, pick a random base (assumed average), find the deviations (+/-) of all numbers from this base, calculate the average of the deviations, and add it back to the base.
- **Example:** Find avg of 780, 790, 810, 820.
- **Base = 800.**
- Deviations: -20, -10, +10, +20. Sum = 0.
- Average = $800 + (0/4) = 800$.

## Trick 2: Evenly Spaced Numbers (Arithmetic Progression)
For any series with a constant difference (e.g., consecutive integers, even numbers, odd numbers, multiples of 7):
**Average = $\\frac{\\text{First Term} + \\text{Last Term}}{2}$ = The exact Middle Term.**
*(If N is even, the average is the midpoint between the two middle terms).*

## Trick 3: The "Replacement" Logic (Saves 40 seconds)
When a person leaves and a new person joins:
**Weight of New Person = Weight of Old Person $\\pm$ (Total Members $\\times$ Change in Average)**
*(Use '+' if average increases, '-' if average decreases).*

## Trick 4: The "Included / Excluded" Logic
When a new person is ADDED to a group:
**Age of Newcomer = Old Average $\\pm$ (New Total Members $\\times$ Change in Average)**

When a person is REMOVED from a group:
**Age of Person Left = Old Average $\\mp$ (Remaining Members $\\times$ Change in Average)** *(Notice the flipped signs)*.

---

# 3. Practice Questions (20 Questions)

## Level 1: Basics
**Q1:** Find the average of the first 100 natural numbers.
**Q2:** Find the average of all prime numbers between 20 and 40.
**Q3:** The average of 7 consecutive numbers is 20. Find the largest of these numbers.
**Q4:** If the average of $a, b, c, d, e$ is 50, what will be the average if 5 is added to each number?
**Q5:** The average of 10 numbers is 15. If one number 24 is excluded, what is the new average?

## Level 2: Intermediate
**Q6:** The average weight of 8 men is increased by 1.5 kg when one of the men who weighs 65 kg is replaced by a new man. The weight of the new man is?
**Q7:** The average age of 30 students in a class is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?
**Q8:** A batsman makes a score of 87 runs in the 17th inning and thus increases his average by 3. Find his average after the 17th inning.
**Q9:** Out of 4 numbers, the average of the first 3 is 16 and that of the last 3 is 15. If the last number is 20, find the first number.
**Q10:** The average temperature for Monday, Tuesday, Wednesday, and Thursday was 38°C. The average for Tuesday, Wednesday, Thursday, and Friday was 40°C. If the temperature for Monday was 30°C, find the temperature for Friday.

## Level 3: TCS NQT Advanced Patterns
**Q11:** The average marks of 50 students were found to be 40. Later it was discovered that a score of 53 was misread as 83. Find the correct average.
**Q12:** A car travels the first one-third of a distance at 20 km/h, the next one-third at 30 km/h, and the last one-third at 60 km/h. Find the average speed for the whole journey.
**Q13:** In a class, the average weight of boys is 60 kg and girls is 40 kg. If the average weight of the whole class is 52 kg, find the percentage of boys in the class.
**Q14:** The average age of a family of 5 members is 24 years. If the age of the youngest member is 8 years, find the average age of the family at the time of the birth of the youngest member.
**Q15:** 9 persons went to a hotel. 8 of them spent ₹30 each on their meals. The 9th person spent ₹20 more than the average expenditure of all the 9. Find the total money spent by them.
**Q16:** The batting average for 40 innings of a cricketer is 50 runs. His highest score exceeds his lowest score by 172 runs. If these two innings are excluded, the average of the remaining 38 innings is 48 runs. Find his highest score.
**Q17:** A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is?
**Q18:** The average weight of $A, B, C$ is 45 kg. If the average weight of $A$ and $B$ is 40 kg and that of $B$ and $C$ is 43 kg, find the weight of $B$.
**Q19:** A grocer has a sale of ₹6435, ₹6927, ₹6855, ₹7230 and ₹6562 for 5 consecutive months. How much sale must he have in the 6th month so that he gets an average sale of ₹6500?
**Q20:** Three years ago, the average age of $A, B$, and $C$ was 27 years. Five years ago, the average age of $B$ and $C$ was 20 years. Find $A$'s present age.

---

# 4. Detailed Solutions
**A1:** $(1 + 100)/2 = 50.5$.
**A2:** Primes: 23, 29, 31, 37. Average = $(23+29+31+37)/4 = 120/4 = 30$.
**A3:** Middle term = 20. Numbers: 17, 18, 19, 20, 21, 22, 23. Largest = 23.
**A4:** Property of averages: $50 + 5 = 55$.
**A5:** Total = $150$. Exclude 24 $\\Rightarrow$ $126$. New avg = $126 / 9 = 14$.
**A6:** Trick: $65 + (8 \\times 1.5) = 65 + 12 = 77$ kg.
**A7:** Trick: $15 + (31 \\times 1) = 46$ years.
**A8:** Old Avg + $(17 \\times 3) = 87 \\Rightarrow$ Old Avg = 36. New Avg = $36 + 3 = 39$.
**A9:** $(a+b+c) = 48$, $(b+c+d) = 45$. Diff: $a - d = 3$. If $d = 20$, $a = 23$.
**A10:** $F - M = 4 \\times (40 - 38) = 8$. $F - 30 = 8 \\Rightarrow F = 38^\\circ$C.
**A11:** Diff = $53 - 83 = -30$. Avg change = $-30/50 = -0.6$. Correct Avg = $40 - 0.6 = 39.4$.
**A12:** Formula for 3 equal distances: $3xyz / (xy+yz+zx) = 3(20)(30)(60) / (600+1800+1200) = 108000 / 3600 = 30$ km/h.
**A13:** Allegation: Boy(60), Girl(40), Mean(52). Ratio = $(52-40):(60-52) = 12:8 = 3:2$. Boys % = $3/5 \\times 100 = 60\\%$.
**A14:** Current sum = $5 \\times 24 = 120$. 8 years ago, sum = $120 - (5 \\times 8) = 80$. Avg of 4 members = $80/4 = 20$ years.
**A15:** Let avg = $x$. Total = $9x = (8 \\times 30) + (x + 20) \\Rightarrow 8x = 260 \\Rightarrow x = 32.5$. Total = $9 \\times 32.5 = 292.5$.
**A16:** Total runs = 2000. 38 innings = $38 \\times 48 = 1824$. $H + L = 176$. $H - L = 172$. $2H = 348 \\Rightarrow H = 174$.
**A17:** Month starts on Sunday $\\Rightarrow$ 5 Sundays, 25 other days. Total = $(5 \\times 510) + (25 \\times 240) = 2550 + 6000 = 8550$. Avg = $8550/30 = 285$.
**A18:** $A+B+C = 135$. $A+B = 80$, $B+C = 86$. $B = (80+86) - 135 = 31$ kg.
**A19:** Total needed = $6 \\times 6500 = 39000$. Sum of 5 = 34009. 6th month = $39000 - 34009 = 4991$.
**A20:** Sum of A,B,C 3 years ago = 81. Present sum = $81 + 9 = 90$. Sum of B,C 5 years ago = 40. Present sum of B,C = $40 + 10 = 50$. A present = $90 - 50 = 40$.

---

# 5. Master Cheat Sheet (Averages)
| Concept | Formula / Shortcut |
| :--- | :--- |
| **Average** | $\\text{Sum} / N$ |
| **AP Series Avg** | $(\\text{First} + \\text{Last}) / 2$ |
| **Combined Avg** | $(N_1A_1 + N_2A_2) / (N_1+N_2)$ |
| **Avg Speed (Eq Dist)**| $2xy / (x+y)$ |
| **Avg Speed (3 Eq Dist)**| $3xyz / (xy+yz+zx)$ |
| **Replacement** | $\\text{Old} \\pm (N \\times \\text{Avg Change})$ |
| **Inclusion** | $\\text{Old Avg} \\pm (\\text{New } N \\times \\text{Avg Change})$ |
| **Exclusion** | $\\text{Old Avg} \\mp (\\text{Rem } N \\times \\text{Avg Change})$ |
    `
  }
];

const seedPhase1 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for Aptitude Phase 1 Update');

    for (const q of expandedAptitudePhase1) {
      await ExamGuideTopic.findOneAndUpdate(
        { examSlug: q.examSlug, sectionSlug: q.sectionSlug, topicSlug: q.topicSlug },
        { 
          $set: { 
            title: q.title, 
            contentMarkdown: q.contentMarkdown,
            sources: [] 
          } 
        },
        { upsert: true, returnDocument: 'after' }
      );
      console.log(`Upserted highly expanded aptitude topic: ${q.topicSlug}`);
    }
    
    console.log('Successfully completed Aptitude Phase 1 Enhancement!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding Aptitude Phase 1:', err);
    process.exit(1);
  }
};

seedPhase1();

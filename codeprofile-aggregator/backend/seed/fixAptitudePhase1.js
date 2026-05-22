const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');
const originalData = require('./aptitudeTopicsData');

const MONGODB_URI = process.env.MONGO_URI;

const newTheories = {
  'percentages': `
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
`,
  'ratio-and-proportion': `
# 1. Comprehensive Theory of Ratio & Proportion
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
`,
  'allegations-and-mixtures': `
# 1. Comprehensive Theory of Allegations and Mixtures
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
`,
  'averages': `
# 1. Comprehensive Theory of Averages
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
`
};

const seedFixPhase1 = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for Aptitude Phase 1 Fix');

    const topicsToFix = ['percentages', 'ratio-and-proportion', 'allegations-and-mixtures', 'averages'];

    for (const slug of topicsToFix) {
      const originalTopic = originalData.find(t => t.topicSlug === slug);
      if (!originalTopic) continue;

      const fullOriginalMd = originalTopic.contentMarkdown;
      
      // Find where questions start
      const lines = fullOriginalMd.split('\\n');
      let questionIndex = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes('practice questions')) {
          questionIndex = i;
          break;
        }
      }

      if (questionIndex !== -1) {
        // We take the questions and everything after it (Answers, Cheat Sheet)
        const restOfContent = lines.slice(questionIndex).join('\\n');
        const updatedMarkdown = newTheories[slug] + '\\n' + restOfContent;

        await ExamGuideTopic.findOneAndUpdate(
          { examSlug: 'tcs-nqt', sectionSlug: 'aptitude', topicSlug: slug },
          { 
            $set: { 
              title: originalTopic.title, 
              contentMarkdown: updatedMarkdown,
              sources: [] 
            } 
          },
          { upsert: true, returnDocument: 'after' }
        );
        console.log('Restored questions & cheat sheet but expanded theory for: ' + slug);
      }
    }
    
    console.log('Successfully completed Aptitude Phase 1 Fix!');
    process.exit(0);
  } catch (err) {
    console.error('Error fixing Aptitude Phase 1:', err);
    process.exit(1);
  }
};

seedFixPhase1();

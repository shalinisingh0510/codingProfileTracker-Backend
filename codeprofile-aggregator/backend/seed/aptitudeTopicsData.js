module.exports = [
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'percentages',
    title: 'Percentages',
    contentMarkdown: `
# 1. Basics of Percentage
## Definition
Percentage means “per hundred”.
x% = x / 100

**Examples:**
25% = 25 / 100 = 1 / 4
50% = 1 / 2
75% = 3 / 4

# 2. Most Important Fraction ↔ Percentage Conversions
| Fraction | Percentage |
| -------- | ---------- |
| 1/2 | 50% |
| 1/3 | 33.33% |
| 1/4 | 25% |
| 1/5 | 20% |
| 1/6 | 16.67% |
| 1/8 | 12.5% |
| 1/10 | 10% |
| 2/3 | 66.67% |
| 3/4 | 75% |
| 4/5 | 80% |
| 5/8 | 62.5% |
| 7/8 | 87.5% |

👉 **Memorize these. TCS NQT asks fast calculation questions.**

# 3. Core Percentage Formulas
## Formula 1: Percentage of a Number
x% of y = (x / 100) × y

**Example:**
20% of 250
= (20 / 100) × 250 = 50

## Formula 2: What Percent One Number is of Another
Percentage = (Part / Whole) × 100

**Example:**
40 is what percent of 200?
= (40 / 200) × 100 = 20%

## Formula 3: Percentage Increase
% Increase = (Increase / Original) × 100

## Formula 4: Percentage Decrease
% Decrease = (Decrease / Original) × 100

# 4. Most Important Tricks for TCS NQT
## Trick 1: x% of y = y% of x
**Example:**
25% of 80 = 80% of 25
= 20
*This saves time.*

## Trick 2: Multiplication Shortcuts
| Percentage | Shortcut |
| ---------- | -------- |
| 10% | divide by 10 |
| 20% | divide by 5 |
| 25% | divide by 4 |
| 50% | divide by 2 |
| 5% | divide by 20 |
| 1% | divide by 100 |

**Example:**
25% of 640 = 640 / 4 = 160

## Trick 3: Successive Percentage Change
**Formula:** a + b + (ab / 100)
Used when two percentage increases happen.

**Example:**
Increase by 20% then 10%
20 + 10 + (20 × 10) / 100 = 32%

## Trick 4: Increase and Decrease Shortcut
If increase by x% and then decrease by x%
**Net change:** -(x^2 / 100)%

**Example:**
Increase 20% then decrease 20%
-(20^2 / 100) = -4%
So overall decrease = 4%

## Trick 5: Population/Productivity Questions
If population increases by x%
New population: P(1 + x/100)

If decreases: P(1 - x/100)

# 5. Profit Loss Percentage Concepts
Profit % = (Profit / CP) × 100
Loss % = (Loss / CP) × 100
Selling Price SP = CP(1 + Profit%/100)

# 6. Salary / Population / Value Increase Problems
**New Value Formula:**
New Value = Old Value × (1 ± x/100)

# 7. Reverse Percentage Trick
If value becomes A after x% increase:
Original = (A × 100) / (100 + x)

If after decrease:
Original = (A × 100) / (100 - x)

**Example:**
Salary after 20% increase = 36000
Original:
= (36000 × 100) / 120 = 30000

# 8. Important TCS NQT Percentage Patterns
## Pattern 1: Marks Questions
Student scores 40% marks. Means: 40/100

## Pattern 2: Population Questions
Population increases annually. Use compound percentage formula.

## Pattern 3: Successive Discounts
Two discounts:
a + b - (ab / 100)

**Example:**
20% and 10% discount
20 + 10 - (20 × 10)/100 = 28%

# 9. Fast Calculation Tricks
**Trick: Convert percentages mentally**
| Percentage | Decimal |
| ---------- | ------- |
| 10% | 0.1 |
| 20% | 0.2 |
| 25% | 0.25 |
| 50% | 0.5 |
| 75% | 0.75 |

# 10. Important Formulas Summary Sheet
| Concept | Formula |
| ------- | ------- |
| Percentage | (Part / Whole) × 100 |
| Increase | (Increase / Original) × 100 |
| Decrease | (Decrease / Original) × 100 |
| Successive Increase | a + b + (ab / 100) |
| Successive Discount | a + b - (ab / 100) |
| Reverse Percentage | (A × 100) / (100 ± x) |

# 11. Practice Questions for TCS NQT
**Q1:** What is 25% of 480?
**Q2:** 40 is what percent of 160?
**Q3:** A salary increases from 20000 to 24000. Find percentage increase.
**Q4:** Price decreases from 800 to 680. Find percentage decrease.
**Q5:** A number increases by 20% and then by 10%. Find net increase.
**Q6:** A number increases by 30% and then decreases by 30%. Find net percentage change.
**Q7:** After a 25% increase, salary becomes 50000. Find original salary.
**Q8:** A shop gives 20% and 10% successive discounts. Find total discount.
**Q9:** Population of a city increases by 15%. If current population is 23000, find original population.
**Q10:** What is 12.5% of 640?
**Q11:** A student scored 360 marks out of 450. Find percentage.
**Q12:** An item costing 1200 is sold for 1500. Find profit percentage.
**Q13:** An item sold at 10% loss costs 1800. Find selling price.
**Q14:** What percent of 250 is 75?
**Q15:** A value becomes 880 after 10% decrease. Find original value.

# 12. Answers
**A1:** 120
**A2:** 25%
**A3:** (4000/20000) × 100 = 20%
**A4:** (120/800) × 100 = 15%
**A5:** 20 + 10 + (20 × 10)/100 = 32%
**A6:** -(30^2 / 100) = -9%. 9% decrease.
**A7:** (50000 × 100) / 125 = 40000
**A8:** 20 + 10 - (20 × 10)/100 = 28%
**A9:** (23000 × 100) / 115 = 20000
**A10:** 12.5% = 1/8. 640 / 8 = 80
**A11:** (360/450) × 100 = 80%
**A12:** Profit = 300. (300/1200) × 100 = 25%
**A13:** 1800 × (90/100) = 1620
**A14:** (75/250) × 100 = 30%
**A15:** (880 × 100) / 90 = 977.78

# 13. Most Important Exam Tips
**For TCS NQT Speed:**
- **Must Memorize:** Fraction to percentage table, Squares till 30, Percentage shortcuts
- **Most Asked Concepts:** Successive percentage, Profit & loss, Discounts, Population, Reverse percentage
- **Golden Rule:** Avoid long multiplication. Convert into fractions whenever possible. (e.g., 12.5% = 1/8, 33.33% = 1/3, 66.67% = 2/3)

# 14. Last Minute Revision Formula Card
- x% = x / 100
- x% of y = y% of x
- Net Increase = a + b + (ab / 100)
- Net Discount = a + b - (ab / 100)
- Original = (Final × 100) / (100 ± x)
- Percentage = (Part / Whole) × 100
    `
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'ratio-and-proportion',
    title: 'Ratio and Proportion',
    contentMarkdown: `
# 1. Basics of Ratio and Proportion
## Definition
A ratio compares two quantities of the same kind.
Ratio of a to b is written as a : b or a / b.
Proportion is an equation that says two ratios are equivalent.
a : b :: c : d means a / b = c / d.

**Examples:**
Ratio of 20 to 50 is 20:50 = 2:5

# 2. Core Formulas
## Formula 1: Proportion Rule
If a : b :: c : d
Then, Product of Extremes = Product of Means
a × d = b × c

## Formula 2: Combining Ratios
If A : B = x : y and B : C = p : q,
Then A : B : C = (x × p) : (y × p) : (y × q)

**Example:**
A : B = 2 : 3 and B : C = 4 : 5
A : B : C = (2×4) : (3×4) : (3×5) = 8 : 12 : 15

## Formula 3: Dividing a Quantity in a Ratio
To divide total X in ratio a : b,
First part = (a / (a + b)) × X
Second part = (b / (a + b)) × X

# 3. Types of Proportions
- **Direct Proportion:** If A increases, B increases. (A/B = constant)
- **Inverse Proportion:** If A increases, B decreases. (A × B = constant)
- **Third Proportional:** of a and b is c, where a : b :: b : c => c = b² / a
- **Fourth Proportional:** of a, b, c is d, where a : b :: c : d => d = (b × c) / a
- **Mean Proportional:** between a and b is √(a × b)

# 4. Most Important Tricks for TCS NQT
## Trick 1: Finding A : B : C : D
If A : B = 1:2, B : C = 3:4, C : D = 5:6
Write them below each other and multiply:
A = 1 × 3 × 5 = 15
B = 2 × 3 × 5 = 30
C = 2 × 4 × 5 = 40
D = 2 × 4 × 6 = 48
Ratio = 15 : 30 : 40 : 48

## Trick 2: Value of Coins
If ratio of number of coins of ₹1, 50p, 25p is a:b:c
Then total value = a + (b/2) + (c/4) in Rupees.
Equate this to total amount to find the multiplier.

## Trick 3: Income and Expenditure
Income = Expenditure + Savings
Ratio of Income = A : B
Ratio of Exp = X : Y
Savings = Income - Exp (use equations and cross-multiply to solve faster).

# 5. Partnership Concepts
Profit is distributed in ratio of (Investment × Time).
Profit Ratio = (I₁ × T₁) : (I₂ × T₂) : (I₃ × T₃)

# 6. Practice Questions for TCS NQT
**Q1:** The ratio of two numbers is 3:4 and their sum is 420. Find the greater number.
**Q2:** A:B = 2:3, B:C = 4:5. Find A:B:C.
**Q3:** The fourth proportional to 5, 8, 15 is?
**Q4:** The mean proportional between 9 and 16 is?
**Q5:** Divide 1200 among A, B, C in ratio 2:3:5. Share of B is?
**Q6:** A bag contains ₹1, 50p, and 25p coins in ratio 3:4:5. If total amount is ₹125, find number of ₹1 coins.
**Q7:** A and B start a business investing ₹20000 and ₹30000. Find their profit ratio after 1 year.
**Q8:** Two numbers are in ratio 5:7. If 10 is added to each, ratio becomes 7:9. Find original numbers.
**Q9:** The third proportional to 4 and 6 is?
**Q10:** If 2A = 3B = 4C, find A:B:C.

# 7. Answers
**A1:** Sum of ratio parts = 7. 1 part = 420/7 = 60. Greater number = 4 × 60 = 240.
**A2:** 8:12:15
**A3:** 5/8 = 15/x => 5x = 120 => x = 24
**A4:** √(9 × 16) = √144 = 12
**A5:** Total parts = 10. B's share = (3/10) × 1200 = 360
**A6:** Value ratio = 3x : 2x : 1.25x. Total value = 6.25x = 125 => x = 20. ₹1 coins = 3 × 20 = 60.
**A7:** 20000 : 30000 = 2:3
**A8:** Difference in ratio is 2 units = 10. 1 unit = 5. Numbers are 25 and 35.
**A9:** 4:6 = 6:x => 4x = 36 => x = 9
**A10:** LCM of 2, 3, 4 is 12. Divide by 12: A/6 = B/4 = C/3. Ratio is 6:4:3.

# 8. Tips
- Always check if the question asks for the part, the whole, or the difference.
- Cross-multiplication is usually the fastest method to solve ratio changes.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'allegations-and-mixtures',
    title: 'Allegations and Mixtures',
    contentMarkdown: `
# 1. Basics of Allegation
## Definition
Allegation is a rule that enables us to find the ratio in which two or more ingredients at the given price must be mixed to produce a mixture of desired price.

# 2. Core Formulas
## Formula 1: The Rule of Allegation
Let Cost Price of cheaper ingredient be C
Let Cost Price of dearer ingredient be D
Let Mean Price of mixture be M

Ratio of Cheaper to Dearer = (D - M) : (M - C)

Quantity of Cheaper / Quantity of Dearer = (D - M) / (M - C)

**Visual Representation (Cross Method):**
Cheaper (C)         Dearer (D)
          \\       /
            Mean (M)
          /       \\
(D - M)             (M - C)

Ratio = (D - M) : (M - C)

## Formula 2: Repeated Replacement
Suppose a container contains x units of liquid from which y units are taken out and replaced by water.
After n operations, the quantity of pure liquid = x(1 - y/x)ⁿ

# 3. Important Concepts
- **Mean Price:** Always CP of the mixture, never SP. If SP and Profit% are given, find CP first!
  CP = (SP × 100) / (100 + Profit%)
- Mixture of Mixtures: When mixing two mixtures to form a third, work with the fraction of ONE component.

# 4. Tricks for TCS NQT
## Trick 1: SP given, find Ratio
Always convert SP to CP before using allegation.

## Trick 2: Finding concentration
If a mixture has 3 parts milk and 2 parts water, milk concentration is 3/5. Use this fraction for allegation.

# 5. Practice Questions for TCS NQT
**Q1:** In what ratio must wheat at ₹20/kg be mixed with wheat at ₹28/kg so that the mixture is worth ₹25/kg?
**Q2:** A merchant has 1000 kg sugar, part of which he sells at 8% profit and the rest at 18% profit. He gains 14% on the whole. The quantity sold at 18% profit is?
**Q3:** A container contains 40L of milk. From this, 4L milk is taken out and replaced by water. This process was repeated further two times. How much milk is now contained?
**Q4:** In what ratio must water be mixed with milk costing ₹12 per litre to obtain a mixture worth ₹8 per litre? (Cost of water = ₹0)
**Q5:** Mixture A has milk to water in ratio 3:2. Mixture B has milk to water in 4:1. In what ratio must they be mixed to get a mixture with milk to water 7:3?
**Q6:** A shopkeeper mixes two varieties of tea, one costing ₹35/kg and other ₹45/kg in ratio 3:2. Find CP of mixture.
**Q7:** How much water must be added to 60L of milk at 1½ litres for ₹20 so as to have a mixture worth ₹10.66 per litre?
**Q8:** Two vessels contain milk and water in ratio 1:3 and 3:5. Find ratio in which they are to be mixed to get ratio 1:2.
**Q9:** Average weight of a class of 40 students is 30 kg and average weight of a class of 20 students is 15 kg. Find average weight of both classes combined.
**Q10:** 300 gm of sugar solution has 40% sugar. How much sugar should be added to make it 50% in the solution?

# 6. Answers
**A1:** Using rule: (28 - 25) : (25 - 20) = 3:5
**A2:** Allegation on profit %: (18 - 14) : (14 - 8) = 4:6 = 2:3. Quantity at 18% = 3/5 × 1000 = 600 kg.
**A3:** 40(1 - 4/40)³ = 40 × (9/10)³ = 40 × 0.729 = 29.16L
**A4:** Water(0), Milk(12), Mean(8). Ratio = (12-8):(8-0) = 4:8 = 1:2. Water to milk is 1:2.
**A5:** Fraction of milk: A = 3/5, B = 4/5, Mean = 7/10. (4/5 - 7/10) : (7/10 - 3/5) = 1/10 : 1/10 = 1:1.
**A6:** Let mean be x. (45-x)/(x-35) = 3/2 => 90 - 2x = 3x - 105 => 5x = 195 => x = 39.
**A7:** Cost of milk = 20/1.5 = 40/3 = 13.33. Water(0), Milk(13.33), Mean(10.66). (13.33-10.66):(10.66-0) = 2.66:10.66 = 1:4. Water is 1/4 of milk = 1/4 × 60 = 15L.
**A8:** Milk fractions: 1/4, 3/8, mean 1/3. (3/8 - 1/3) : (1/3 - 1/4) = 1/24 : 1/12 = 1:2.
**A9:** Using formula: (40×30 + 20×15)/60 = (1200+300)/60 = 1500/60 = 25 kg.
**A10:** Existing sugar = 120g, water = 180g. To make it 50%, sugar must equal water. So sugar must be 180g. Add 60g.

# 7. Tips
- In replacement problems, always track the quantity of the original pure substance, not the mixture.
- For mixtures of milk and water, always solve in terms of the fraction of milk (or water).
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'averages',
    title: 'Averages',
    contentMarkdown: `
# 1. Basics of Averages
## Definition
Average is the sum of quantities divided by the number of quantities.
Average = Sum of all terms / Total number of terms
Sum = Average × Total number of terms

# 2. Core Formulas
## Formula 1: Simple Average
A = S / N

## Formula 2: Combined / Weighted Average
If a group of N₁ has average A₁, and N₂ has average A₂,
Combined Average = (N₁A₁ + N₂A₂) / (N₁ + N₂)

## Formula 3: Average Speed
If distances are EQUAL:
Average Speed = 2xy / (x + y)  where x, y are speeds.

If times are EQUAL:
Average Speed = (x + y) / 2

# 3. Important Properties & Tricks
## Trick 1: Evenly spaced numbers
If numbers are in Arithmetic Progression (consecutive numbers, even/odd series):
Average = (First Term + Last Term) / 2 = Middle Term

## Trick 2: Change in Average
If 'X' is added/subtracted/multiplied/divided to all observations, the average also gets added/subtracted/multiplied/divided by 'X'.

## Trick 3: Replacement Logic
If a person is replaced,
New Value = Old Value + (Total items × Increase in Average)
or New Value = Old Value - (Total items × Decrease in Average)

## Trick 4: Person Included / Excluded
Included: New Value = Old Average + (Total items × Increase in average)
Excluded: Value of Excluded = Old Average - (Remaining items × Decrease in average)

# 4. Practice Questions for TCS NQT
**Q1:** Find the average of first 50 natural numbers.
**Q2:** Average of 5 consecutive odd numbers is 61. Find the largest number.
**Q3:** The average weight of 10 oarsmen in a boat is increased by 1.5 kg when one of the crew, who weighs 58 kg is replaced by a new man. Find weight of new man.
**Q4:** Average age of 30 students is 15 years. If teacher's age is included, average becomes 16 years. Find teacher's age.
**Q5:** Average of 10 numbers is 20. If 5 is added to each, what is new average?
**Q6:** A car travels from A to B at 40 km/h and returns at 60 km/h. Find average speed.
**Q7:** The average of 11 results is 50. If average of first 6 is 49 and last 6 is 52, find the 6th result.
**Q8:** Average of batsman in 12 innings is 30. How much he should score in 13th to increase average by 2?
**Q9:** Sum of 5 consecutive even numbers is 200. Find the smallest.
**Q10:** The average of A, B, C is 45 kg. If average of A and B is 40 and B and C is 43, find B's weight.

# 5. Answers
**A1:** (1 + 50)/2 = 25.5
**A2:** Middle is 61. Sequence: 57, 59, 61, 63, 65. Largest is 65.
**A3:** New weight = 58 + (10 × 1.5) = 58 + 15 = 73 kg.
**A4:** Teacher's age = New total - Old total = (31 × 16) - (30 × 15) = 496 - 450 = 46. (Or use trick: 15 + 31×1 = 46)
**A5:** 20 + 5 = 25.
**A6:** 2×40×60 / (40+60) = 4800 / 100 = 48 km/h.
**A7:** 6th result = Sum of first 6 + Sum of last 6 - Total sum = (6×49) + (6×52) - (11×50) = 294 + 312 - 550 = 56.
**A8:** Old Avg + (Innings × Inc) = 30 + (13 × 2) = 56.
**A9:** Average = 200/5 = 40 (Middle term). Numbers: 36, 38, 40, 42, 44. Smallest = 36.
**A10:** A+B+C = 135. A+B = 80, B+C = 86. B = (A+B) + (B+C) - (A+B+C) = 80 + 86 - 135 = 31 kg.

# 6. Tips
- Memorize average speed formulas as they are extremely common in TCS.
- Use the replacement trick directly rather than calculating total sums to save 30-40 seconds.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'profit-and-loss',
    title: 'Profit and Loss',
    contentMarkdown: `
# 1. Basics of Profit and Loss
## Core Terms
- **Cost Price (CP):** Price at which article is bought.
- **Selling Price (SP):** Price at which article is sold.
- **Marked Price (MP):** Price marked on the item. Discount is always given on MP.

## Formulas
Profit = SP - CP (when SP > CP)
Loss = CP - SP (when CP > SP)

Profit % = (Profit / CP) × 100
Loss % = (Loss / CP) × 100

SP = CP × (100 + Profit%) / 100
SP = CP × (100 - Loss%) / 100
CP = SP × 100 / (100 + Profit%)
CP = SP × 100 / (100 - Loss%)

# 2. Marked Price and Discount
Discount = MP - SP
Discount % = (Discount / MP) × 100
SP = MP × (100 - Discount%) / 100

Relation between MP, CP, Profit%, Discount%:
MP / CP = (100 + Profit%) / (100 - Discount%)

# 3. Important Tricks for TCS NQT
## Trick 1: Same SP, Same Profit/Loss %
If two articles are sold at the same SP, one at x% profit and another at x% loss.
There is ALWAYS an overall loss.
Overall Loss % = (x² / 100)%

## Trick 2: Faulty Dealer
If a dealer claims to sell at CP but uses false weight:
Gain % = [Error / (True Value - Error)] × 100

## Trick 3: Successive Discounts
Two discounts d1% and d2%:
Effective Discount = d1 + d2 - (d1 × d2)/100

## Trick 4: SP of x = CP of y
If CP of y articles = SP of x articles:
Profit/Loss % = [(y - x) / x] × 100
(Positive means profit, negative means loss)

# 4. Practice Questions
**Q1:** Find CP if SP is 1500 and Profit is 20%.
**Q2:** A shopkeeper sells two items for 990 each, one at 10% profit, other at 10% loss. Overall gain/loss%?
**Q3:** Successive discounts of 20% and 10% equal a single discount of?
**Q4:** A dishonest dealer professes to sell goods at CP but uses 900g weight for 1kg. Find gain%.
**Q5:** If CP of 12 articles equals SP of 10 articles, find profit%.
**Q6:** An article marked at 800 is sold for 680. Find discount%.
**Q7:** By selling an item for 240, a man loses 20%. To gain 20%, what should be SP?
**Q8:** A man bought apples at 6 for ₹5 and sold them at 5 for ₹6. Find profit%.
**Q9:** MP is 20% above CP. If 10% discount is given, find profit%.
**Q10:** Find CP if an item sold at 15% loss gives 340.

# 5. Answers
**A1:** CP = (1500 × 100) / 120 = 1250.
**A2:** Always loss = 10² / 100 = 1% loss.
**A3:** 20 + 10 - 200/100 = 28%.
**A4:** Error = 100g. Gain% = (100 / 900) × 100 = 11.11%.
**A5:** [(12 - 10) / 10] × 100 = 20%.
**A6:** Discount = 120. D% = (120/800) × 100 = 15%.
**A7:** CP = (240×100)/80 = 300. New SP = 300 × 120/100 = 360.
**A8:** CP of 1 = 5/6. SP of 1 = 6/5. Profit = 6/5 - 5/6 = 11/30. Profit% = (11/30) / (5/6) × 100 = 44%.
**A9:** Let CP=100. MP=120. Discount=12. SP=108. Profit = 8%.
**A10:** CP = (340 × 100) / 85 = 400.

# 6. Tips
- CP is always the base (100%) for Profit/Loss calculations.
- MP is always the base for Discount calculations.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'work-and-time',
    title: 'Work and Time',
    contentMarkdown: `
# 1. Basics of Time and Work
## Concept
If A can do a piece of work in n days, A's 1 day work = 1/n.
If A's 1 day work is 1/n, A finishes work in n days.

# 2. Core Formulas
## Formula 1: Combined Work
If A takes x days and B takes y days,
Together they take: (x × y) / (x + y) days.

## Formula 2: Efficiency
Efficiency is inversely proportional to Time.
If A is 3 times as efficient as B, A takes 1/3 of the time B takes.

## Formula 3: MDH Rule (Chain Rule)
(M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂
M = Men, D = Days, H = Hours/day, W = Work done

# 3. Important Tricks for TCS NQT
## Trick 1: LCM Method (The Best Method)
Instead of fractions, assume Total Work = LCM of given days.
Find 1-day work (Efficiency) in units for each person.
Total Time = Total Work / Combined 1-day units.

## Trick 2: Pipes and Cisterns
Same as Time and Work.
Inlet pipe efficiency is POSITIVE (+).
Outlet/Leak efficiency is NEGATIVE (-).

## Trick 3: A leaves after x days
Find total work (LCM). Find work done in x days. Remaining work = Total - Done. Divide by remaining person's efficiency.

# 4. Practice Questions
**Q1:** A can do work in 10 days, B in 15 days. Together they do it in?
**Q2:** A and B together can do a work in 12 days, A alone in 20 days. B alone?
**Q3:** 10 men do a work in 15 days. In how many days can 25 men do it?
**Q4:** A is twice as fast as B. Together they finish in 14 days. In how many days A alone finishes?
**Q5:** Pipe A fills in 10 hrs, B fills in 15 hrs, C empties in 20 hrs. All open, time to fill?
**Q6:** A and B can do a work in 10 and 15 days. They worked for 3 days and A left. B finishes remaining in?
**Q7:** 12 men or 18 women can do a work in 14 days. 8 men and 16 women do it in?
**Q8:** If 5 engines consume 6 tons of coal in 9 hours, how much coal 8 engines consume in 10 hours?
**Q9:** A can do 1/3 work in 5 days, B can do 2/5 work in 10 days. Together full work in?
**Q10:** A works 3 times as fast as B. If A takes 60 days less than B, find time together.

# 5. Answers
**A1:** (10×15)/(10+15) = 150/25 = 6 days.
**A2:** (12×20)/(20-12) = 240/8 = 30 days.
**A3:** M1D1 = M2D2 => 10×15 = 25×D2 => D2 = 6 days.
**A4:** Eff: A=2, B=1. Total eff=3. Total work = 3 × 14 = 42 units. A time = 42/2 = 21 days.
**A5:** LCM of 10,15,20 = 60. Eff: A=+6, B=+4, C=-3. Net eff = 6+4-3 = 7. Time = 60/7 hrs.
**A6:** LCM=30. Eff: A=3, B=2. (A+B) 3 days = 5×3=15 units. Rem=15. B takes 15/2 = 7.5 days.
**A7:** 12M = 18W => 2M = 3W. 8M+16W = 12W+16W = 28W. 18W × 14 = 28W × D => D = 9 days.
**A8:** Use MDH: (5×9)/6 = (8×10)/W => 45/6 = 80/W => W = (80×6)/45 = 10.66 tons.
**A9:** A full = 15 days. B full = 25 days. Together = (15×25)/(40) = 375/40 = 9.375 days.
**A10:** Eff: A=3, B=1. Time ratio A:B = 1:3. Diff = 2 parts = 60 days. 1 part = 30. A=30, B=90. Together = (30×90)/120 = 22.5 days.

# 6. Tips
- The LCM method will solve 90% of Time and Work problems faster than fractions.
- Always be careful with "AND" and "OR" in Men/Women questions.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'speed-time-distance',
    title: 'Speed, Time and Distance',
    contentMarkdown: `
# 1. Basics
Distance = Speed × Time
Speed = Distance / Time
Time = Distance / Speed

## Units Conversion
km/h to m/s: Multiply by 5/18
m/s to km/h: Multiply by 18/5

# 2. Core Concepts
## Average Speed
If distances are equal (A to B and back):
Avg Speed = 2xy / (x + y)
If times are equal:
Avg Speed = (x + y) / 2
General: Avg Speed = Total Distance / Total Time

## Relative Speed
Objects in SAME direction: Speed = |S₁ - S₂|
Objects in OPPOSITE direction: Speed = (S₁ + S₂)

# 3. Train Problems (Crucial for TCS)
- Train passing a pole/man: Distance = Length of Train
- Train passing a platform/bridge: Distance = Length of Train + Length of Platform
- Two trains passing each other: Distance = L₁ + L₂ (Apply relative speed).

# 4. Boats and Streams
- Speed of boat in still water = u
- Speed of stream = v
- Downstream Speed (D) = u + v
- Upstream Speed (U) = u - v
- u = (D + U) / 2
- v = (D - U) / 2

# 5. Tricks for TCS NQT
## Trick 1: Early/Late Concept
If a person goes at speed S₁ and is late by t₁, and goes at S₂ and is early by t₂,
Distance = [S₁ × S₂ / |S₁ - S₂|] × (Time difference)
*Note: Add times if one is early and one is late.*

## Trick 2: Meeting Point
Two people start towards each other at same time. They meet after time T.
T = Distance / Relative Speed

If they meet and then take T₁ and T₂ to reach destinations:
S₁ / S₂ = √(T₂ / T₁)

# 6. Practice Questions
**Q1:** Convert 72 km/h to m/s.
**Q2:** A man covers a distance at 40km/h and returns at 60km/h. Find average speed.
**Q3:** A train 150m long is running at 90km/h. Time taken to cross a pole?
**Q4:** A train 200m long running at 72km/h crosses a 300m platform in?
**Q5:** Walking at 3/4 of usual speed, a man is 20 min late. Find usual time.
**Q6:** A boat goes 15 km/h downstream and 9 km/h upstream. Find speed of boat in still water.
**Q7:** If I walk at 5km/h, I miss the train by 7 min. If I walk at 6km/h, I reach 5 min early. Distance to station?
**Q8:** Two trains 120m and 80m long run in opposite directions at 42km/h and 30km/h. Time to cross?
**Q9:** A man fires two bullets at 34 min interval. A man approaching in car hears them at 33 min interval. Sound speed=330m/s. Car speed?
**Q10:** Without stoppages speed is 60km/h, with stoppages it is 45km/h. How many min/hr does train stop?

# 7. Answers
**A1:** 72 × 5/18 = 20 m/s.
**A2:** 2×40×60 / 100 = 48 km/h.
**A3:** Speed = 90×5/18 = 25m/s. Time = 150/25 = 6 sec.
**A4:** Speed = 72×5/18 = 20m/s. Dist = 200+300 = 500m. Time = 500/20 = 25 sec.
**A5:** Speed becomes 3/4, Time becomes 4/3. Time diff = 1/3 of usual time = 20. Usual = 60 min.
**A6:** u = (15+9)/2 = 12 km/h.
**A7:** Time diff = 12 min = 1/5 hr. Dist = (5×6)/(6-5) × (1/5) = 6 km.
**A8:** Dist = 200m. Rel Spd = 72km/h = 20m/s. Time = 200/20 = 10 sec.
**A9:** Dist sound travels in 1 min = Dist car travels in 33 min. 330×1 = V×33 => V = 10 m/s.
**A10:** Stoppage time = (Diff in speed / Speed without stop) × 60 = (15/60)×60 = 15 min.

# 8. Tips
- Always check units before calculating. Mix-ups between km/h and m/s cause 90% of errors.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'number-system-lcm-hcf',
    title: 'Number System, LCM and HCF',
    contentMarkdown: `
# 1. Number System Theory
## Introduction
In the Hindu-Arabic system, we use ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. A number is denoted by a group of digits, called a numeral.

## Face Value & Place Value
- **Face Value**: The face value of a digit in a numeral is its own value, at whatever place it may be. (e.g. Face value of 2 in 3254 is 2).
- **Place Value**: The place value changes according to the position of the digit. (e.g. Place value of 2 in 3254 is 200).

## Types of Numbers
- **Natural Numbers**: Counting numbers {1, 2, 3, 4...}
- **Whole Numbers**: All counting numbers together with zero {0, 1, 2, 3...}
- **Integers**: All natural numbers, 0 and negative of counting numbers {-3, -2, -1, 0, 1, 2, 3...}
- **Even Numbers**: A number divisible by 2.
- **Odd Numbers**: A number not divisible by 2.
- **Prime Numbers**: A number greater than 1 having exactly two factors, namely 1 and itself. (e.g. 2, 3, 5, 7, 11). Note: 2 is the only even prime number.
- **Composite Numbers**: Numbers greater than 1 which are not prime.
- **Co-Primes**: Two numbers whose H.C.F. is 1. (e.g. 2 and 3).

## Tests of Divisibility
- **Divisible by 2**: Unit digit is 0, 2, 4, 6, or 8.
- **Divisible by 3**: Sum of digits is divisible by 3.
- **Divisible by 4**: Number formed by last two digits is divisible by 4.
- **Divisible by 5**: Unit digit is 0 or 5.
- **Divisible by 6**: Divisible by both 2 and 3.
- **Divisible by 8**: Number formed by last three digits is divisible by 8.
- **Divisible by 9**: Sum of digits is divisible by 9.
- **Divisible by 11**: Difference of the sum of its digits at odd places and sum of its digits at even places, is either 0 or a number divisible by 11.

## Rules on Remainders
- If we divide a given number by another number, then:
**Dividend = (Divisor × Quotient) + Remainder**

# Practice Questions
**Q1. Find the unit digit in the product (459 × 46 × 28* × 484) if the unit digit is 2.**
A) 3
B) 5
C) 7
D) 8

**Q2. Which of the following numbers is completely divisible by 99?**
A) 3572404
B) 135792
C) 913464
D) 114345

**Q3. If the number 517*324 is completely divisible by 3, then the smallest whole number in the place of * will be:**
A) 0
B) 1
C) 2
D) 4

**Q4. The sum of first 45 natural numbers is:**
A) 1035
B) 1280
C) 2070
D) 2140

**Q5. A number when divided by 119 leaves remainder 19. If it is divided by 17, it will leave a remainder:**
A) 19
B) 10
C) 7
D) 2

# Answers
**A1.** 
The unit digit of the product is the product of the unit digits of the numbers.
Unit digits: 9, 6, *, 4.
Product = 9 × 6 × * × 4 = 216 × *.
Unit digit of 216 is 6.
So, 6 × * should yield a unit digit of 2.
6 × 2 = 12 (unit digit 2)
6 × 7 = 42 (unit digit 2)
From the options, 7 is the correct answer.

**A2.** 
For a number to be divisible by 99, it must be divisible by both 9 and 11.
Checking D: 114345
Sum of digits = 1 + 1 + 4 + 3 + 4 + 5 = 18 (Divisible by 9).
Sum of digits at odd places = 5 + 3 + 1 = 9
Sum of digits at even places = 4 + 4 + 1 = 9
Difference = 9 - 9 = 0 (Divisible by 11).
Hence, 114345 is divisible by 99.

**A3.** 
Sum of digits = 5 + 1 + 7 + * + 3 + 2 + 4 = 22 + *.
For (22 + *) to be divisible by 3, the least value of * must be 2, because 22 + 2 = 24, which is divisible by 3.

**A4.** 
The sum of first n natural numbers is given by n(n+1)/2.
Here, n = 45.
Sum = 45(45+1)/2 = 45 × 46 / 2 = 45 × 23 = 1035.

**A5.** 
Let the number be x.
x = 119q + 19
x = 17 × 7q + 17 + 2
x = 17(7q + 1) + 2
So, when divided by 17, the remainder is 2.

# Cheat Sheet
- **Formula 1**: Dividend = (Divisor × Quotient) + Remainder
- **Formula 2**: (a + b)² = a² + b² + 2ab
- **Formula 3**: (a - b)² = a² + b² - 2ab
- **Formula 4**: (a + b)² - (a - b)² = 4ab
- **Formula 5**: (a + b)² + (a - b)² = 2(a² + b²)
- **Formula 6**: a² - b² = (a + b)(a - b)
- **Formula 7**: a³ + b³ = (a + b)(a² - ab + b²)
- **Formula 8**: a³ - b³ = (a - b)(a² + ab + b²)
- **Sum of first n natural numbers** = n(n+1)/2
- **Sum of squares of first n natural numbers** = n(n+1)(2n+1)/6
- **Sum of cubes of first n natural numbers** = [n(n+1)/2]²
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'probability',
    title: 'Probability',
    contentMarkdown: `
# 1. Basics of Probability
Probability = Number of Favorable Outcomes / Total Possible Outcomes
P(E) = n(E) / n(S)
Probability always lies between 0 and 1. (0 ≤ P(E) ≤ 1)

# 2. Core Concepts
## Complementary Events
P(Event Happening) + P(Event Not Happening) = 1
P(E) + P(E') = 1

## Mutually Exclusive Events
If A and B cannot occur at the same time:
P(A or B) = P(A) + P(B)

## Independent Events
If outcome of A doesn't affect B:
P(A and B) = P(A) × P(B)

# 3. TCS NQT Favorites
## Coins
1 coin = 2 outcomes (H, T)
2 coins = 4 outcomes (HH, HT, TH, TT)
3 coins = 8 outcomes (HHH, HHT, HTH, THH, HTT, THT, TTH, TTT)

## Dice
1 die = 6 outcomes
2 dice = 36 outcomes
Sum of two dice ranges from 2 to 12.
Shortcut for sums:
Sum: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
Ways: 1, 2, 3, 4, 5, 6, 5, 4,  3,  2,  1

## Cards
Total 52 cards. 26 Red, 26 Black.
4 Suits: Spades(B), Clubs(B), Hearts(R), Diamonds(R) (13 each)
Face cards: J, Q, K (12 in total)

# 4. Tricks for TCS NQT
## Trick 1: "At least one"
P(At least one) = 1 - P(None)
Very useful for coin tosses and ball drawing.

## Trick 2: Choosing Balls
If 2 balls are drawn, use combinations: nC2
nC2 = n(n-1) / 2

# 5. Practice Questions
**Q1:** Two coins are tossed. Find probability of getting at least one head.
**Q2:** Two dice are thrown. Find probability of getting sum 8.
**Q3:** A card is drawn from a pack of 52. Probability it is a King or Queen?
**Q4:** A bag contains 4 red and 6 blue balls. 2 balls are drawn. Probability both are red?
**Q5:** Probability of getting 53 Sundays in a leap year?
**Q6:** Three coins are tossed. Probability of getting exactly 2 heads?
**Q7:** From 1 to 20, one number is picked. Probability it's prime?
**Q8:** Two dice thrown. Probability they show same number (doublet)?
**Q9:** A bag has 3 red, 4 black, 5 white balls. 1 ball drawn. Probability it's not black?
**Q10:** Probability of solving a problem by A is 1/2 and B is 1/3. Probability problem is solved?

# 6. Answers
**A1:** P(none) = P(TT) = 1/4. P(at least 1) = 1 - 1/4 = 3/4.
**A2:** Sum 8 ways = 5. Total = 36. Ans = 5/36.
**A3:** 4 Kings + 4 Queens = 8 cards. P = 8/52 = 2/13.
**A4:** Total ways = 10C2 = 45. Favorable = 4C2 = 6. P = 6/45 = 2/15.
**A5:** Leap year = 366 days = 52 weeks + 2 days. 2 days can be (Sun-Mon, Mon-Tue...Sat-Sun). 2 favorable out of 7. P = 2/7.
**A6:** Favorable: HHT, HTH, THH (3). Total = 8. P = 3/8.
**A7:** Primes up to 20: 2, 3, 5, 7, 11, 13, 17, 19 (8 numbers). P = 8/20 = 2/5.
**A8:** Doublets: (1,1)...(6,6) -> 6 ways. P = 6/36 = 1/6.
**A9:** Not black = Red + White = 8. Total = 12. P = 8/12 = 2/3.
**A10:** Problem not solved = (1-1/2) × (1-1/3) = 1/2 × 2/3 = 1/3. Problem solved = 1 - 1/3 = 2/3.

# 7. Tips
- For balls, always use combinations (nCr) if drawing more than one at a time.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'permutation-and-combination',
    title: 'Permutation and Combination',
    contentMarkdown: `
# 1. Basics
## Factorial
n! = n × (n-1) × ... × 1
0! = 1

## Fundamental Principle of Counting
- **AND Rule (Multiplication):** If A can be done in m ways AND B in n ways, both together = m × n ways.
- **OR Rule (Addition):** If A can be done in m ways OR B in n ways, either = m + n ways.

# 2. Permutation (Arrangement)
Order matters! (e.g., passcodes, seating)
nPr = n! / (n-r)!
Number of ways to arrange n objects = n!

## Arranging words with repeated letters
If word has n letters where 'a' repeats p times, 'b' repeats q times:
Ways = n! / (p! × q!)

## Circular Permutation
n people in a circle = (n-1)! ways
If necklace/beads (flip is same) = (n-1)! / 2

# 3. Combination (Selection)
Order does not matter! (e.g., selecting a committee, choosing balls)
nCr = n! / [r! × (n-r)!]

## Important Properties
- nCr = nC(n-r) (Calculations are easier! e.g., 10C8 = 10C2)
- nC0 = 1, nCn = 1, nC1 = n

# 4. Tricks for TCS NQT
## Trick 1: Always together
"Vowels always together" -> Treat all vowels as 1 single block. Find permutations of blocks, then multiply by internal permutation of vowels.

## Trick 2: Never together
Ways = Total unrestricted ways - Ways they are always together.

## Trick 3: Handshakes / Matches
Number of handshakes among n people = nC2 = n(n-1) / 2

# 5. Practice Questions
**Q1:** In how many ways can the letters of word 'APPLE' be arranged?
**Q2:** How many 3-digit numbers can be formed from 1,2,3,4,5 (no repetition)?
**Q3:** In how many ways can 5 people sit around a circular table?
**Q4:** A committee of 3 is chosen from 5 men and 4 women. Ways to do this?
**Q5:** In how many ways can word 'SOFTWARE' be arranged so vowels are always together?
**Q6:** 10 people shake hands with each other. Total handshakes?
**Q7:** How many ways to choose 2 black balls from 5 black and 3 red balls?
**Q8:** Value of 8C6?
**Q9:** From 5 consonants and 4 vowels, how many words with 3 consonants and 2 vowels can be formed?
**Q10:** How many diagonals in a decagon (10 sides)?

# 6. Answers
**A1:** 5 letters, P repeats 2 times. 5! / 2! = 120 / 2 = 60.
**A2:** 5P3 = 5×4×3 = 60.
**A3:** (5-1)! = 4! = 24.
**A4:** Total people = 9. Select 3. 9C3 = (9×8×7) / (3×2×1) = 84.
**A5:** Vowels: O,A,E (3). Consonants: S,F,T,W,R (5). Block of vowels + 5 consonants = 6 items. Ways = 6! × 3! = 720 × 6 = 4320.
**A6:** 10C2 = (10×9)/2 = 45.
**A7:** 5C2 = 10.
**A8:** 8C6 = 8C2 = (8×7)/2 = 28.
**A9:** Select C = 5C3 = 10. Select V = 4C2 = 6. Select ways = 60. Form word (arrange 5 letters) = 5! = 120. Total = 60 × 120 = 7200.
**A10:** Diagonals = nC2 - n = 10C2 - 10 = 45 - 10 = 35.

# 7. Tips
- Read carefully: "Arrange" = Permutation, "Select/Choose" = Combination.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'geometry-area-perimeter',
    title: 'Geometry, Area and Perimeter',
    contentMarkdown: `
# 1. 2D Shapes Formulas
## Triangle
- Area = 1/2 × base × height
- Heron's Formula: Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2
- Equilateral Area = (√3 / 4) × a²
- Equilateral Height = (√3 / 2) × a

## Rectangle & Square
- Rectangle Area = L × B, Perimeter = 2(L + B), Diagonal = √(L² + B²)
- Square Area = a² or (d²)/2, Perimeter = 4a, Diagonal = a√2

## Circle
- Area = πr²
- Circumference = 2πr
- Semicircle Area = πr²/2, Perimeter = πr + 2r
- Arc Length = (θ/360) × 2πr
- Sector Area = (θ/360) × πr²

## Parallelogram, Rhombus, Trapezium
- Parallelogram Area = base × height
- Rhombus Area = 1/2 × d₁ × d₂
- Trapezium Area = 1/2 × (Sum of parallel sides) × height

# 2. 3D Shapes Formulas (Volume & Surface Area)
## Cube & Cuboid
- Cuboid Vol = L×B×H, TSA = 2(LB + BH + HL), Diagonal = √(L²+B²+H²)
- Cube Vol = a³, TSA = 6a², Diagonal = a√3

## Cylinder
- Vol = πr²h
- CSA (Curved) = 2πrh
- TSA = 2πr(h + r)

## Cone
- Vol = 1/3 × πr²h
- CSA = πrl (where l = √(r²+h²))
- TSA = πr(l + r)

## Sphere & Hemisphere
- Sphere Vol = 4/3 × πr³, TSA = 4πr²
- Hemisphere Vol = 2/3 × πr³, CSA = 2πr², TSA = 3πr²

# 3. Tricks for TCS NQT
## Trick 1: Percentage Change in Area
If sides of a 2D figure change by x% and y%,
Area change = x + y + (xy/100) %

## Trick 2: Wire Reshaping
When a wire is bent from one shape to another, **Perimeter is constant**.
When a 3D object is melted into another, **Volume is constant**.

## Trick 3: Room Problems
Longest pole in a room = Diagonal of cuboid.
Area of 4 walls = 2(L+B)×H.

# 4. Practice Questions
**Q1:** Area of a square is 50. Find its diagonal.
**Q2:** A rectangle's length is increased by 20% and breadth by 10%. Area change?
**Q3:** The ratio of radii of two cylinders is 1:2 and heights is 2:3. Ratio of volumes?
**Q4:** Wire in form of circle of radius 28cm is bent into a square. Side of square?
**Q5:** Find area of equilateral triangle with side 4cm.
**Q6:** Volume of a cube is 216. Find its surface area.
**Q7:** Longest rod that can be placed in room 12m × 9m × 8m?
**Q8:** Base of a triangle is 15 and height is 12. Area?
**Q9:** A sphere of radius 3cm is melted to form a wire of radius 1mm. Length of wire?
**Q10:** Area of a rhombus with diagonals 10 and 8?

# 5. Answers
**A1:** Area = d²/2 = 50 => d² = 100 => d = 10.
**A2:** 20 + 10 + 200/100 = 32% increase.
**A3:** V1/V2 = (r1²h1)/(r2²h2) = (1×2)/(4×3) = 2/12 = 1:6.
**A4:** Perimeter = 2πr = 2 × 22/7 × 28 = 176. Square perimeter 4a = 176 => a = 44cm.
**A5:** (√3/4) × 16 = 4√3.
**A6:** a³ = 216 => a = 6. TSA = 6a² = 6 × 36 = 216.
**A7:** Diagonal = √(12² + 9² + 8²) = √(144 + 81 + 64) = √289 = 17m.
**A8:** 1/2 × 15 × 12 = 90.
**A9:** Vol sphere = 4/3 × π × 3³ = 36π cm³. Vol wire (cylinder) = πr²h = π(0.1)²h = 0.01πh. 36π = 0.01πh => h = 3600 cm = 36m.
**A10:** 1/2 × 10 × 8 = 40.

# 6. Tips
- Remember Pythagoras triplets (3-4-5, 5-12-13, 7-24-25, 8-15-17). They speed up right-angled triangle, cone, and diagonal calculations massively.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'aptitude',
    topicSlug: 'clocks-calendar-ages',
    title: 'Clocks, Calendar and Ages',
    contentMarkdown: `
# 1. Clocks
## Core Rules
- Minute hand speed = 6° per minute
- Hour hand speed = 0.5° per minute
- Relative speed = 5.5° per minute

## Angle Formula (Crucial)
Angle between hands at H hours M minutes:
θ = |30H - 5.5M|

## Coincidence & Opposite
- Hands coincide (0°): 11 times in 12 hours (skip 11:59-12:00)
- Hands opposite (180°): 11 times in 12 hours
- Hands right angle (90°): 22 times in 12 hours
- Coincide exactly every 65 5/11 minutes.

# 2. Calendars
## Odd Days Concept
Odd days = Remainder when total days are divided by 7.
- Ordinary year = 365 days = 52 weeks + 1 odd day.
- Leap year = 366 days = 52 weeks + 2 odd days.

## Century Rules
- 100 years = 5 odd days
- 200 years = 3 odd days
- 300 years = 1 odd day
- 400 years = 0 odd days

## Finding the Day of the Week
Code Method or purely counting odd days from 0001 AD.
Sunday=0, Monday=1, Tuesday=2...

# 3. Ages
## Core Concept
- Age differences ALWAYS remain constant. (If A is 5 years older than B today, he will be 5 years older even after 20 years).
- Use linear equations. If ratio today is A:B, and after X years is C:D:
(A+X)/(B+X) = C/D

# 4. Tricks for TCS NQT
## Trick 1: Reflex Angle
If formula gives θ > 180°, reflex angle = 360 - θ.

## Trick 2: Same Date Next Year
If going to next ordinary year, add 1 day.
If crossing Feb 29 of leap year, add 2 days.

## Trick 3: Age Cross-Multiplication
Ratio past = a:b, Ratio future = c:d.
1 unit of ratio = [Time Gap × Difference of (c,d)] / [Cross product difference of (a,b) and (c,d)]

# 5. Practice Questions
**Q1:** Angle between hands at 3:40?
**Q2:** Angle between hands at 8:20?
**Q3:** Jan 1, 2007 was Monday. What day was Jan 1, 2008?
**Q4:** How many times in a day do hands of a clock coincide?
**Q5:** The ratio of ages of A and B is 3:4. After 4 years, ratio is 4:5. Find present age of A.
**Q6:** Father is 3 times as old as son. 5 years ago, he was 4 times as old. Find son's present age.
**Q7:** What day of week was 15th August 1947?
**Q8:** A clock loses 10 mins each hour. If set right at 12 noon, what time will it show at 6 PM?
**Q9:** Present ages of X and Y are in ratio 5:6. Seven years hence ratio will be 6:7. X's present age?
**Q10:** Angle at 12:20?

# 6. Answers
**A1:** θ = |30(3) - 5.5(40)| = |90 - 220| = 130°.
**A2:** θ = |30(8) - 5.5(20)| = |240 - 110| = 130°.
**A3:** 2007 is ordinary. Add 1 odd day. Tuesday. (Leap year 2008 Feb 29 is not crossed yet).
**A4:** 22 times.
**A5:** Gap is 1 part in ratio for both = 4 years. A = 3 × 4 = 12 years.
**A6:** F=3S. F-5 = 4(S-5) => 3S-5 = 4S-20 => S=15.
**A7:** 1900=1 odd day. 46 years = 11 leap + 35 ord = 22+35=57 -> 1 odd day. 1947 till Aug 15 = 227 days = 3 odd days. Total = 1+1+3 = 5 = Friday.
**A8:** Real time passed = 6 hours. Clock loses 60 mins. It shows 5 PM.
**A9:** Gap is 1 part = 7 years. X = 5 × 7 = 35.
**A10:** For 12, use H=0. θ = |-5.5(20)| = 110°.

# 7. Tips
- For clock angles, always use H=0 for 12 o'clock to avoid calculation errors.
- In age problems, always try to make the difference in ratio parts equal.
`
  }
];

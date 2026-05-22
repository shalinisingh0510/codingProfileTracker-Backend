const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;

const detailedAnswers = {
  'percentages': `
# 12. Detailed Solutions
**A1:** 
- **Step 1:** Recognize the fraction equivalent of 25%, which is 1/4.
- **Step 2:** Multiply the base by the fraction: (1/4) × 480 = **120**.

**A2:** 
- **Step 1:** Use the formula: Percentage = (Part / Whole) × 100.
- **Step 2:** (40 / 160) × 100 = (1/4) × 100 = **25%**.

**A3:** 
- **Step 1:** Calculate the absolute increase: 24000 - 20000 = 4000.
- **Step 2:** Use percentage increase formula: (Increase / Original) × 100.
- **Step 3:** (4000 / 20000) × 100 = (1/5) × 100 = **20%**.

**A4:** 
- **Step 1:** Calculate the absolute decrease: 800 - 680 = 120.
- **Step 2:** Use percentage decrease formula: (Decrease / Original) × 100.
- **Step 3:** (120 / 800) × 100 = **15%**.

**A5:** 
- **Step 1:** Apply the Successive Change Formula: a + b + (ab / 100).
- **Step 2:** 20 + 10 + (20 × 10 / 100) = 30 + 2 = **32%**.

**A6:** 
- **Step 1:** For equal increase and decrease (x%), use shortcut: Net Change = -(x² / 100)%.
- **Step 2:** -(30² / 100) = -(900 / 100) = -9%. 
- **Conclusion:** It is a **9% decrease**.

**A7:** 
- **Step 1:** A 25% increase means the new salary is 125% of the original.
- **Step 2:** 125% of Original = 50000.
- **Step 3:** Original = (50000 × 100) / 125 = **40000**.

**A8:** 
- **Step 1:** Apply the Successive Discount Formula: a + b - (ab / 100).
- **Step 2:** 20 + 10 - (20 × 10 / 100) = 30 - 2 = **28%**.

**A9:** 
- **Step 1:** A 15% increase means current population is 115% of original.
- **Step 2:** 115% of Original = 23000.
- **Step 3:** Original = (23000 × 100) / 115 = **20000**.

**A10:** 
- **Step 1:** Recognize the fraction equivalent of 12.5%, which is 1/8.
- **Step 2:** Multiply: (1/8) × 640 = **80**.

**A11:** 
- **Step 1:** Percentage = (Marks Obtained / Total Marks) × 100.
- **Step 2:** (360 / 450) × 100 = (4/5) × 100 = **80%**.

**A12:** 
- **Step 1:** Calculate Profit: SP - CP = 1500 - 1200 = 300.
- **Step 2:** Profit Percentage = (Profit / CP) × 100 = (300 / 1200) × 100 = (1/4) × 100 = **25%**.

**A13:** 
- **Step 1:** Loss is calculated on CP. Loss = 10% of 1800 = 180.
- **Step 2:** SP = CP - Loss = 1800 - 180 = **1620**.

**A14:** 
- **Step 1:** Percentage = (Part / Whole) × 100.
- **Step 2:** (75 / 250) × 100 = (3/10) × 100 = **30%**.

**A15:** 
- **Step 1:** A 10% decrease means final value is 90% of original.
- **Step 2:** 90% of Original = 880.
- **Step 3:** Original = (880 × 100) / 90 = **977.78**.
`,
  'ratio-and-proportion': `
# 7. Detailed Solutions
**A1:** 
- **Step 1:** Let the numbers be 3x and 4x.
- **Step 2:** Sum = 3x + 4x = 7x.
- **Step 3:** 7x = 420 ➔ x = 60.
- **Step 4:** Greater number = 4x = 4 × 60 = **240**.

**A2:** 
- **Step 1:** Use the 'N' Trick. A:B = 2:3, B:C = 4:5.
- **Step 2:** A = 2×4 = 8. B = 3×4 = 12. C = 3×5 = 15.
- **Step 3:** Final Ratio A:B:C = **8:12:15**.

**A3:** 
- **Step 1:** Fourth proportional formula: (b × c) / a.
- **Step 2:** (8 × 15) / 5 = 120 / 5 = **24**.

**A4:** 
- **Step 1:** Mean proportional formula: √(a × b).
- **Step 2:** √(9 × 16) = √144 = **12**.

**A5:** 
- **Step 1:** Total parts = 2 + 3 + 5 = 10 parts.
- **Step 2:** 10 parts = 1200 ➔ 1 part = 120.
- **Step 3:** B's share = 3 parts = 3 × 120 = **360**.

**A6:** 
- **Step 1:** Convert ratio to value. Values = 3x(₹1) : 4x(₹0.5) : 5x(₹0.25).
- **Step 2:** Value sum = 3x + 2x + 1.25x = 6.25x.
- **Step 3:** 6.25x = 125 ➔ x = 20.
- **Step 4:** Number of ₹1 coins = 3x = 3 × 20 = **60**.

**A7:** 
- **Step 1:** Profit Ratio = (Capital_A × Time_A) : (Capital_B × Time_B).
- **Step 2:** (20000 × 1) : (30000 × 1) = **2:3**.

**A8:** 
- **Step 1:** Let numbers be 5x and 7x.
- **Step 2:** (5x + 10) / (7x + 10) = 7 / 9.
- **Step 3:** Cross multiply: 9(5x + 10) = 7(7x + 10) ➔ 45x + 90 = 49x + 70 ➔ 4x = 20 ➔ x = 5.
- **Step 4:** Original numbers = 5×5 and 7×5 = **25 and 35**.

**A9:** 
- **Step 1:** Third proportional to a and b is (b²) / a.
- **Step 2:** (6²) / 4 = 36 / 4 = **9**.

**A10:** 
- **Step 1:** Let 2A = 3B = 4C = k. Then A=k/2, B=k/3, C=k/4.
- **Step 2:** Multiply by LCM(2,3,4) = 12.
- **Step 3:** A:B:C = (12/2) : (12/3) : (12/4) = **6:4:3**.
`,
  'allegations-and-mixtures': `
# 6. Detailed Solutions
**A1:** 
- **Step 1:** Apply Allegation Cross Rule.
- **Step 2:** Cheaper(20), Dearer(28), Mean(25).
- **Step 3:** Ratio = (Dearer - Mean) : (Mean - Cheaper) = (28 - 25) : (25 - 20) = **3:5**.

**A2:** 
- **Step 1:** Apply Allegation on Profit %.
- **Step 2:** Part1(8%), Part2(18%), Mean(14%).
- **Step 3:** Ratio = (18 - 14) : (14 - 8) = 4:6 = 2:3.
- **Step 4:** Quantity at 18% = (3 / 5) × 1000 = **600 kg**.

**A3:** 
- **Step 1:** Use Replacement Formula: Final = Initial × (1 - Taken/Total)^n.
- **Step 2:** Total n = 3 (1 initial + 2 repeated).
- **Step 3:** Final Milk = 40 × (1 - 4/40)³ = 40 × (9/10)³ = 40 × 0.729 = **29.16 L**.

**A4:** 
- **Step 1:** Cost of water is always 0. Milk=12, Mean=8.
- **Step 2:** Ratio = (Milk - Mean) : (Mean - Water) = (12 - 8) : (8 - 0) = 4:8 = **1:2**.

**A5:** 
- **Step 1:** Use Milk fractions. A=3/5, B=4/5, Mean=7/10.
- **Step 2:** Ratio = (4/5 - 7/10) : (7/10 - 3/5) = (8/10 - 7/10) : (7/10 - 6/10) = (1/10) : (1/10) = **1:1**.

**A6:** 
- **Step 1:** Use weighted average formula: CP = (q1.p1 + q2.p2) / (q1 + q2).
- **Step 2:** (3×35 + 2×45) / (3 + 2) = (105 + 90) / 5 = 195 / 5 = **₹39**.

**A7:** 
- **Step 1:** Cost of pure milk = 20 / 1.5 = ₹13.33/L. Mean = 10.66. Water = 0.
- **Step 2:** Ratio of Milk to Water = (10.66 - 0) : (13.33 - 10.66) = 10.66 : 2.67 ≈ 4:1.
- **Step 3:** If 4 parts = 60L, 1 part (water) = 60/4 = **15 L**.

**A8:** 
- **Step 1:** Milk fractions: V1=1/4, V2=3/8, Mean=1/3.
- **Step 2:** Allegation: (3/8 - 1/3) : (1/3 - 1/4) = (9/24 - 8/24) : (4/12 - 3/12) = (1/24) : (1/12) = (1/24) : (2/24) = **1:2**.

**A9:** 
- **Step 1:** Use Combined Average Formula.
- **Step 2:** (40×30 + 20×15) / (40 + 20) = (1200 + 300) / 60 = 1500 / 60 = **25 kg**.

**A10:** 
- **Step 1:** Added pure sugar has 100% concentration.
- **Step 2:** Solution(40%), Pure Sugar(100%), Mean(50%).
- **Step 3:** Ratio = (100 - 50) : (50 - 40) = 50:10 = 5:1.
- **Step 4:** 5 parts = 300g ➔ 1 part = 300/5 = **60 gm**.
`,
  'averages': `
# 5. Detailed Solutions
**A1:** 
- **Step 1:** For evenly spaced series, Average = (First + Last) / 2.
- **Step 2:** (1 + 50) / 2 = 51 / 2 = **25.5**.

**A2:** 
- **Step 1:** The average of 5 consecutive odd numbers is the exact middle number (the 3rd number).
- **Step 2:** The numbers are: 57, 59, 61, 63, 65.
- **Step 3:** The largest number is **65**.

**A3:** 
- **Step 1:** Use Replacement Shortcut: New Weight = Old Weight + (Total Members × Increase).
- **Step 2:** 58 + (10 × 1.5) = 58 + 15 = **73 kg**.

**A4:** 
- **Step 1:** Use Inclusion Shortcut: Newcomer = Old Avg + (New Total Members × Increase).
- **Step 2:** 15 + (31 × 1) = 15 + 31 = **46 years**.

**A5:** 
- **Step 1:** If a constant is added to every number, the average increases by that exact constant.
- **Step 2:** New average = 20 + 5 = **25**.

**A6:** 
- **Step 1:** For equal distances, Average Speed = (2xy) / (x + y).
- **Step 2:** (2 × 40 × 60) / (40 + 60) = 4800 / 100 = **48 km/h**.

**A7:** 
- **Step 1:** The 6th result is counted twice (once in first 6, once in last 6).
- **Step 2:** 6th result = Sum of first 6 + Sum of last 6 - Total Sum.
- **Step 3:** (6 × 49) + (6 × 52) - (11 × 50) = 294 + 312 - 550 = 606 - 550 = **56**.

**A8:** 
- **Step 1:** Runs needed = New Average + (Old Innings × Increase).
- **Step 2:** New average is 32. Total innings before = 12. Increase = 2.
- **Step 3:** 32 + (12 × 2) = 32 + 24 = **56 runs**.

**A9:** 
- **Step 1:** Average = Sum / 5 = 200 / 5 = 40.
- **Step 2:** The middle (3rd) number is 40.
- **Step 3:** Numbers are 36, 38, 40, 42, 44. Smallest is **36**.

**A10:** 
- **Step 1:** B is counted twice if we add (A+B) and (B+C).
- **Step 2:** B = Sum(A,B) + Sum(B,C) - Sum(A,B,C).
- **Step 3:** (2 × 40) + (2 × 43) - (3 × 45) = 80 + 86 - 135 = 166 - 135 = **31 kg**.
`
};

const updateSolutions = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for updating solutions');

    const topicsToFix = ['percentages', 'ratio-and-proportion', 'allegations-and-mixtures', 'averages'];

    for (const slug of topicsToFix) {
      const topic = await ExamGuideTopic.findOne({ examSlug: 'tcs-nqt', sectionSlug: 'aptitude', topicSlug: slug });
      if (!topic) continue;

      const fullMd = topic.contentMarkdown;
      
      // Find where "Answers" starts and where the next major section (usually "Tips" or "Cheat Sheet" or "Revision") starts
      const lines = fullMd.split('\\n');
      let answersStartIndex = -1;
      let nextSectionIndex = -1;

      for (let i = 0; i < lines.length; i++) {
        const lower = lines[i].toLowerCase();
        if (lower.includes('answers') || lower.includes('detailed solutions')) {
          answersStartIndex = i;
          break; // Stop looking for the start once we find it
        }
      }

      for (let i = answersStartIndex + 1; i < lines.length; i++) {
        const lower = lines[i].toLowerCase();
        if (lines[i].startsWith('#') && (lower.includes('tips') || lower.includes('cheat sheet') || lower.includes('revision') || lower.includes('last minute'))) {
          nextSectionIndex = i;
          break;
        }
      }

      if (answersStartIndex !== -1) {
        const beforeAnswers = lines.slice(0, answersStartIndex).join('\\n');
        // If we found the next section, append it, otherwise append nothing
        const afterAnswers = nextSectionIndex !== -1 ? '\\n\\n' + lines.slice(nextSectionIndex).join('\\n') : '';
        
        const updatedMarkdown = beforeAnswers + '\\n\\n' + detailedAnswers[slug] + afterAnswers;

        await ExamGuideTopic.findOneAndUpdate(
          { examSlug: 'tcs-nqt', sectionSlug: 'aptitude', topicSlug: slug },
          { $set: { contentMarkdown: updatedMarkdown } },
          { new: true }
        );
        console.log('Successfully updated step-by-step solutions for: ' + slug);
      }
    }
    
    console.log('Successfully completed Aptitude Phase 1 Solutions Update!');
    process.exit(0);
  } catch (err) {
    console.error('Error updating solutions:', err);
    process.exit(1);
  }
};

updateSolutions();

const reasoningTopicsData = [
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'data-sufficiency',
    title: 'Data Sufficiency',
    contentMarkdown: `
## Theory

Data Sufficiency questions test your logical reasoning, not your calculation skills. You will be given a question followed by two statements (I and II). Your goal is to determine if the data provided in the statements are sufficient to answer the question.

**Standard Options:**
- (A) Statement I alone is sufficient, but II alone is not.
- (B) Statement II alone is sufficient, but I alone is not.
- (C) Either I or II alone is sufficient.
- (D) Both I and II together are not sufficient.
- (E) Both I and II together are necessary.

---

## Cheat Sheet

> **The Golden Rule of Data Sufficiency:** DO NOT SOLVE THE PROBLEM!
> Just determine if it *can* be solved.
> 1. Check Statement I alone.
> 2. Check Statement II alone.
> 3. If neither alone works, combine them.
> 4. If combining doesn't work, the answer is "not sufficient".
> 
> *Warning:* Never carry over information from Statement I to Statement II unless you are explicitly combining them.

---

## Practice Questions

**Q1. What is the value of x?**
I. x^2 = 36
II. x > 0
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

**Q2. Who is the tallest among A, B, C, and D?**
I. A is taller than C and D.
II. B is taller than C.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

**Q3. What day of the week is it today?**
I. Yesterday was Thursday.
II. Tomorrow is Saturday.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Either I or II alone is sufficient
(D) Both I and II are necessary

**Q4. What is the two-digit number?**
I. The sum of the digits is 8.
II. The difference between the digits is 2.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

**Q5. Is integer x even?**
I. 2x is an even integer.
II. x^2 is an even integer.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

**Q6. What is the age of P?**
I. P is 5 years older than Q.
II. The ratio of ages of P and Q is 3:2.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

**Q7. How is X related to Y?**
I. Y and Z are children of D who is wife of X.
II. R's sister X is married to Y's father.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Either I or II alone is sufficient
(D) Both I and II are necessary

**Q8. In which year was Rahul born?**
I. Rahul is 25 years younger to his mother.
II. Rahul's brother, who was born in 1964, is 35 years younger to his mother.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

**Q9. What is the speed of the train?**
I. The train crosses a signal pole in 18 seconds.
II. The train crosses a platform of equal length in 36 seconds.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

**Q10. How many boys are there in the class?**
I. There are 40 students in the class.
II. The ratio of boys to girls is 3:2.
(A) I alone is sufficient
(B) II alone is sufficient
(C) Both I and II are necessary
(D) Both I and II are not sufficient

---

## Answers

**A1. (C) Both I and II are necessary**  
From I: x can be 6 or -6. From II: x is positive. Combining them: x = 6.

**A2. (D) Both I and II are not sufficient**  
From I: A > C, A > D. From II: B > C. Combining: We don't know the relation between A and B.

**A3. (C) Either I or II alone is sufficient**  
From I: Today is Friday. From II: Today is Friday. Either one gives the answer independently.

**A4. (D) Both I and II are not sufficient**  
Combining I and II gives equations: x+y=8 and |x-y|=2. The digits could be 5 and 3. The number could be 53 or 35. Still not a unique answer.

**A5. (B) II alone is sufficient**  
From I: If x is integer, 2x is always even whether x is even or odd. Not sufficient. From II: The square of an integer is even only if the integer itself is even. Sufficient.

**A6. (C) Both I and II are necessary**  
From I: P = Q + 5. From II: P/Q = 3/2. Combining gives a solvable system of equations.

**A7. (C) Either I or II alone is sufficient**  
From I: D is wife of X (so X is father). Y is child of D. So X is father of Y. Sufficient. From II: X is married to Y's father. So X is mother of Y. Sufficient.

**A8. (C) Both I and II are necessary**  
From I: Rahul = Mother - 25. From II: Brother = 1964. Brother = Mother - 35 -> Mother = 1999. Combining: Rahul = 1999 - 25 = 1974. Both are needed.

**A9. (D) Both I and II are not sufficient**  
From I: Speed = L / 18. From II: Speed = 2L / 36 = L / 18. We don't have the length of the train in either case, so we cannot find the absolute speed.

**A10. (C) Both I and II are necessary**  
From I: Total = 40. From II: B:G = 3:2. Combining: Boys = (3/5)*40 = 24.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'statement-and-conclusion',
    title: 'Statement and Conclusion',
    contentMarkdown: `
## Theory

In these questions, you are given a statement followed by some conclusions. You have to assume everything in the statement to be true, then evaluate which of the given conclusions logically follows beyond any reasonable doubt.

**Syllogism Basics:**
- **All A are B:** Draw A inside B.
- **Some A are B:** Draw intersecting circles.
- **No A is B:** Draw separate circles with a cross line between them.
- **Some A are not B:** A portion of A cannot overlap with B.

---

## Cheat Sheet

> **Key Rules:**
> 1. Draw Venn Diagrams for Syllogism questions.
> 2. If a conclusion is possible but not certain in all Venn diagrams, it is FALSE.
> 3. Do not apply outside knowledge. If the statement says "All cats are dogs", assume it's true.
> 4. Negative conclusions require negative statements (unless explicitly proven by diagram).

---

## Practice Questions

**Q1. Statements: All men are dogs. All dogs are cats.**
Conclusions:
I. All men are cats.
II. All cats are men.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q2. Statements: Some pens are glass. All glass are wall.**
Conclusions:
I. Some wall are pens.
II. Some wall are glass.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q3. Statements: No man is a monkey. John is a man.**
Conclusions:
I. John is not a monkey.
II. John may or may not be a monkey.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q4. Statement: Good voice is a natural gift but one has to keep practicing to improve and excel well in the field of music.**
Conclusions:
I. Natural gifts need nurturing and care.
II. Even though your voice is not good, one can keep practicing.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q5. Statements: All trucks fly. Some scooters fly.**
Conclusions:
I. All trucks are scooters.
II. Some scooters do not fly.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q6. Statement: Water supply in wards A and B of the city will be affected by about 50% on Friday because repairing work of the main lines is to be carried out.**
Conclusions:
I. The residents in these wards should economize on water on Friday.
II. The residents in these wards should store some water on the previous day.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q7. Statements: Some actors are singers. All singers are dancers.**
Conclusions:
I. Some actors are dancers.
II. No singer is actor.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q8. Statements: All harmonious are instruments. All instruments are flutes.**
Conclusions:
I. All flutes are instruments.
II. All harmonious are flutes.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q9. Statement: Any student who does not behave properly while in the school brings bad name to himself and also for the school.**
Conclusions:
I. Such student should be removed from the school.
II. Stricter discipline does not improve behavior.
(A) Only I follows
(B) Only II follows
(C) Both I and II follow
(D) Neither I nor II follows

**Q10. Statements: No door is dog. All dogs are cats.**
Conclusions:
I. No door is cat.
II. No cat is door.
III. Some cats are dogs.
(A) Only I follows
(B) Only II follows
(C) Only III follows
(D) All follow

---

## Answers

**A1. (A) Only I follows**  
Men is inside Dogs, Dogs is inside Cats. Thus Men is inside Cats. "All men are cats" is true. "All cats are men" is false (some cats could be just dogs).

**A2. (C) Both I and II follow**  
Pens intersect Glass. Glass is inside Wall. Since Glass is inside Wall, the part of Pens that is Glass is also Wall. So Some wall are pens. Glass being inside Wall means some wall are glass. Both follow.

**A3. (A) Only I follows**  
Man and Monkey do not intersect. John is inside Man. Therefore, John cannot be inside Monkey.

**A4. (A) Only I follows**  
The statement clearly implies that natural gifts (good voice) need practice (nurturing) to excel. Conclusion II talks about "not good voice", which is not discussed in the statement.

**A5. (D) Neither I nor II follows**  
Trucks is inside Fly. Scooters intersects Fly. They may or may not intersect each other, so I is false. "Some scooters fly" does not strictly mean the rest don't, in pure syllogism it just affirms the intersection.

**A6. (C) Both I and II follow**  
Since water will be affected, it is a logical and practical conclusion that residents should both economize and store water.

**A7. (A) Only I follows**  
Actors intersect Singers. Singers is inside Dancers. Thus Actors must intersect Dancers. So I follows. II is clearly false.

**A8. (B) Only II follows**  
Harmonious -> Instruments -> Flutes. All Harmonious are Flutes. But not all Flutes are necessarily Instruments.

**A9. (D) Neither I nor II follows**  
The statement only talks about the consequence (bad name) of misbehavior. It doesn't propose removal as a solution, nor does it discuss stricter discipline.

**A10. (C) Only III follows**  
Door and Dog do not intersect. Dog is inside Cat. Door might still intersect Cat. So I and II are false. Since Dog is inside Cat, Some cats are definitely dogs.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'analogy-and-odd-one-out',
    title: 'Analogy and Odd One Out',
    contentMarkdown: `
## Theory

**Analogy:** You are given a pair of words/numbers/letters with a specific relationship. You must identify another pair with the exact same relationship.
**Odd One Out:** You are given a list of options. All except one share a common characteristic or pattern. You must identify the outlier.

**Common Relationships:**
- **Words:** Synonyms, Antonyms, Worker-Tool, Cause-Effect, Animal-Young, Country-Capital.
- **Numbers:** Squares, Cubes, Primes, Multiples, Operations (+, -, *, /).
- **Letters:** Positional shifts, Vowels/Consonants, Reversals.

---

## Cheat Sheet

> **Always verify the exact sequence!**
> If the first pair is 'Tool : Worker' (e.g., Scalpel : Surgeon), the answer must also be 'Tool : Worker', not 'Worker : Tool'.

---

## Practice Questions

**Q1. Odometer is to mileage as compass is to:**
(A) speed
(B) hiking
(C) needle
(D) direction

**Q2. Window is to pane as book is to:**
(A) novel
(B) glass
(C) cover
(D) page

**Q3. Cup is to coffee as bowl is to:**
(A) dish
(B) soup
(C) spoon
(D) food

**Q4. Choose the odd one out:**
(A) Apple
(B) Marigold
(C) Rose
(D) Lily

**Q5. Choose the odd one out:**
(A) 27
(B) 64
(C) 125
(D) 144

**Q6. Paw : Cat :: Hoof : ?**
(A) Lamb
(B) Elephant
(C) Lion
(D) Horse

**Q7. Safe : Secure :: Protect : ?**
(A) Conserve
(B) Sure
(C) Guard
(D) Lock

**Q8. Choose the odd number pair/group:**
(A) 81 - 243
(B) 16 - 64
(C) 64 - 192
(D) 25 - 75

**Q9. Choose the odd one out:**
(A) BDW
(B) DFU
(C) FHS
(D) GIQ

**Q10. Melt : Liquid :: Freeze : ?**
(A) Ice
(B) Condense
(C) Solid
(D) Crystal

---

## Answers

**A1. (D) direction**  
An odometer measures mileage; a compass determines direction.

**A2. (D) page**  
A pane is a single unit that makes up a window. A page is a single unit that makes up a book.

**A3. (B) soup**  
Coffee goes into a cup; soup goes into a bowl.

**A4. (A) Apple**  
All others are flowers, Apple is a fruit.

**A5. (D) 144**  
27 = $3^3$, 64 = $4^3$, 125 = $5^3$. 144 is $12^2$, not a perfect cube.

**A6. (D) Horse**  
A cat's foot is called a paw. A horse's foot is called a hoof.

**A7. (C) Guard**  
Safe and Secure are synonyms. Protect and Guard are synonyms.

**A8. (B) 16 - 64**  
In all other pairs, the second number is 3 times the first ($81\\times3=243, 64\\times3=192, 25\\times3=75$). But $16\\times3 = 48$, not 64.

**A9. (D) GIQ**  
Pattern is: First letter +2 = Second letter. Opposite of second letter = Third letter. B(+2)D -> opposite of D is W. D(+2)F -> opposite of F is U. F(+2)H -> opposite of H is S. G(+2)I -> opposite of I is R, not Q.

**A10. (C) Solid**  
Melting changes a solid to a liquid. Freezing changes a liquid to a solid.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'symbols-and-notations',
    title: 'Symbols and Notations',
    contentMarkdown: `
## Theory

In these questions, standard mathematical operators (+, -, *, /) are replaced with specific symbols, letters, or entirely different mathematical operators. You must substitute the new symbols with their corresponding standard mathematical operators and evaluate the expression using **BODMAS** rules.

**BODMAS Rule:**
- **B**rackets
- **O**f (orders/powers)
- **D**ivision
- **M**ultiplication
- **A**ddition
- **S**ubtraction

---

## Cheat Sheet

> **Time-Saving Tip:**
> 1. Rewrite the equation immediately with the standard operators.
> 2. Always perform Division first! If a division results in a fraction, check if it multiplies out cleanly. If not, the equation might be incorrect.
> 3. Do not apply BODMAS to the symbols *before* translation.

---

## Practice Questions

**Q1. If '+' means 'minus', '-' means 'multiplied by', '÷' means 'plus' and '×' means 'divided by', then 10 × 5 ÷ 3 - 2 + 3 = ?**
(A) 5
(B) 21
(C) 53/3
(D) 18

**Q2. If P means '×', R means '+', T means '÷' and S means '-', then 18 T 3 P 9 S 8 R 6 = ?**
(A) -1/3
(B) 52
(C) 46
(D) None of these

**Q3. If L denotes ÷, M denotes ×, P denotes + and Q denotes -, then which of the following statements is true?**
(A) 32 P 8 L 16 Q 4 = 3/2
(B) 6 M 18 Q 26 L 13 P 7 = 173/13
(C) 11 M 34 L 17 Q 8 L 3 = 38/3
(D) 9 P 9 L 9 Q 9 M 9 = -71

**Q4. If 'A' means '+', 'B' means '-', 'C' means '×' and 'D' means '÷', then 18 C 14 A 6 B 16 D 4 = ?**
(A) 63
(B) 254
(C) 288
(D) 1208

**Q5. If 3 # 4 = 11, 4 # 5 = 39, 5 # 6 = 89, then 6 # 7 = ?**
(A) 167
(B) 191
(C) 111
(D) 149

**Q6. If 4 * 5 = 1625 and 3 * 8 = 964, what is the value of 2 * 6?**
(A) 436
(B) 212
(C) 836
(D) 464

**Q7. Which sequence of mathematical symbols can replace * in the given equation to make it correct? 8 * 5 * 9 * 31**
(A) -, ×, =
(B) -, =, ×
(C) =, ×, -
(D) ×, -, =

**Q8. If '-' stands for addition, '+' for multiplication, '÷' for subtraction, and '×' for division, which one of the following equations is correct?**
(A) 5 + 2 - 12 × 6 ÷ 2 = 10
(B) 5 + 2 - 12 × 6 ÷ 2 = 14
(C) 5 + 2 - 12 × 6 ÷ 2 = 4
(D) 5 + 2 - 12 × 6 ÷ 2 = 13

**Q9. If $ means '+', # means '-', @ means '×', and % means '÷', then what is the value of 16 % 4 @ 5 $ 7 # 3?**
(A) 24
(B) 20
(C) 18
(D) 32

**Q10. In a certain code, '2' is coded as 'P', '3' as 'N', '9' as 'Q', '5' as 'R', '4' as 'A' and '6' as 'B'. How is 599423 coded?**
(A) RQQAPN
(B) RQQPAN
(C) RQQPNA
(D) RQQAAN

---

## Answers

**A1. (A) 5**  
Equation becomes: 10 ÷ 5 + 3 × 2 - 3. BODMAS: 2 + 6 - 3 = 8 - 3 = 5.

**A2. (B) 52**  
Equation becomes: 18 ÷ 3 × 9 - 8 + 6. BODMAS: 6 × 9 - 8 + 6 = 54 - 8 + 6 = 52.

**A3. (D) 9 P 9 L 9 Q 9 M 9 = -71**  
Check (D): 9 + 9 ÷ 9 - 9 × 9 = 9 + 1 - 81 = 10 - 81 = -71.

**A4. (B) 254**  
Equation becomes: 18 × 14 + 6 - 16 ÷ 4. BODMAS: 252 + 6 - 4 = 254.

**A5. (A) 167**  
Pattern is $a^3 - b^2$. $3^3 - 4^2 = 27 - 16 = 11$. $4^3 - 5^2 = 64 - 25 = 39$. $6^3 - 7^2 = 216 - 49 = 167$.

**A6. (A) 436**  
Pattern is to write the square of the first number followed by the square of the second. $2^2 = 4, 6^2 = 36$. So 436.

**A7. (D) ×, -, =**  
8 × 5 - 9 = 31. 40 - 9 = 31. Correct.

**A8. (A) 5 + 2 - 12 × 6 ÷ 2 = 10**  
Translate equation: 5 × 2 + 12 ÷ 6 - 2. BODMAS: 10 + 2 - 2 = 10. Correct.

**A9. (A) 24**  
Translate: 16 ÷ 4 × 5 + 7 - 3. BODMAS: 4 × 5 + 7 - 3 = 20 + 7 - 3 = 24.

**A10. (A) RQQAPN**  
Direct substitution: 5(R) 9(Q) 9(Q) 4(A) 2(P) 3(N).
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'data-arrangement-and-puzzles',
    title: 'Data Arrangement and Puzzles',
    contentMarkdown: `
## Theory

Puzzles involve multi-variable data arrangements where you must map entities (people) to variables (colors, professions, days) based on complex constraints.

**Key Strategies:**
1. **Grid Method:** Create a matrix/grid. Put people on the Y-axis and variables (like days, colors) on the X-axis. Use ticks (✓) and crosses (✗).
2. **Tabular Method:** Create a table with columns: Person, Variable 1, Variable 2. Fill in confirmed data directly.
3. **Negative Information:** "A does not like Red" is extremely useful for elimination. Mark it immediately in your grid.

---

## Cheat Sheet

> **Step-by-Step Approach:**
> 1. Start with the most restricted item or the person with the most positive information.
> 2. Read through all clues once and fill in direct info.
> 3. Read through a second time to infer indirect info.
> 4. If a scenario splits, quickly draw two small tables and proceed. One will contradict a rule.

---

## Practice Questions

**Q1-Q5 are based on the following information:**
Seven friends A, B, C, D, E, F, and G wear seven different colors: Red, Blue, Green, Yellow, Black, White, and Pink (not necessarily in that order). They also have different professions: Doctor, Engineer, Teacher, Lawyer, Architect, Pilot, and Manager.
1. B is a Doctor and does not wear Red or Yellow.
2. The one who wears Green is an Architect.
3. C wears Blue and is a Pilot.
4. E is a Teacher and wears White.
5. A does not wear Black or Yellow and is not an Engineer.
6. F wears Pink and is a Manager.
7. G is an Engineer.

**Q1. What is the profession of A?**
(A) Engineer
(B) Lawyer
(C) Architect
(D) Doctor

**Q2. What color does B wear?**
(A) Black
(B) Red
(C) Green
(D) Yellow

**Q3. Who is the Architect?**
(A) A
(B) D
(C) G
(D) Cannot be determined

**Q4. What color does D wear?**
(A) Yellow
(B) Green
(C) Red
(D) Black

**Q5. Which of the following combinations is correct?**
(A) G - Yellow - Engineer
(B) A - Red - Lawyer
(C) D - Yellow - Lawyer
(D) None of these

**Q6. Five books A, B, C, D, E are kept on a table. A is placed below E, C is placed above D, B is placed below A and D is placed above E. Which book is at the bottom?**
(A) A
(B) B
(C) C
(D) E

**Q7. In a queue, position of A from the left is 12th and B from the right is 8th. If they interchange their positions, A becomes 22nd from left. How many persons are there in the queue?**
(A) 29
(B) 30
(C) 31
(D) 28

**Q8. P, Q, R, S, T, U are 6 members of a family. P is the son of Q but Q is not the mother of P. R and Q are married. U is the brother of Q. S is the daughter of R. T is the brother of P. How many males are in the family?**
(A) 2
(B) 3
(C) 4
(D) 5

**Q9. If day before yesterday was Thursday, what day will be Sunday?**
(A) Tomorrow
(B) Today
(C) Day after tomorrow
(D) Two days after today

**Q10. A bus for Delhi leaves every 30 minutes from a bus stand. An enquiry clerk told a passenger that the bus had already left 10 minutes ago and the next bus will leave at 9:35 AM. At what time did the enquiry clerk give this information to the passenger?**
(A) 9:10 AM
(B) 8:55 AM
(C) 9:08 AM
(D) 9:15 AM

---

## Answers

**A1-A5 Logic:**
Let's build the table:
Professions: Doc(B), Arch(Green), Pilot(C), Teach(E), Eng(G), Man(F). The only profession left for A and D is Lawyer and Architect. But A is not Eng. The person who wears Green is Arch.
Colors assigned: C=Blue, E=White, F=Pink. Remaining colors: Red, Green, Yellow, Black.
B(Doc) does not wear Red or Yellow. So B wears Black or Green. But Green is Arch. So B wears Black.
A does not wear Black or Yellow. Black is taken by B. So A does not wear Yellow. Therefore A wears Red or Green.
G(Eng) must wear Yellow or Red.
Since Green = Arch, and A wears Red or Green, if A wears Green, A is Arch. Since A is not Eng, A must be Lawyer or Arch. Let's assume A is Arch(Green). Then A's profession is Arch. The only profession left is Lawyer, which goes to D. Wait, A is Lawyer or Arch. If A is Lawyer, A cannot be Green(Arch). Then A must be Red. Then D must be Green(Arch).
Let's check D: D is left with Yellow or Green.
Let's re-evaluate A: A doesn't wear Yellow. If D is Arch(Green), A wears Red. D is Arch, so D wears Green. G(Eng) wears Yellow.
Let's check if this fits:
A: Red, Lawyer
B: Black, Doctor
C: Blue, Pilot
D: Green, Architect
E: White, Teacher
F: Pink, Manager
G: Yellow, Engineer

**A1. (B) Lawyer**  
A is the Lawyer.

**A2. (A) Black**  
B wears Black.

**A3. (B) D**  
D is the Architect.

**A4. (B) Green**  
D wears Green.

**A5. (A) G - Yellow - Engineer**  
G is Engineer and wears Yellow.

**A6. (B) B**  
E > A > B. C > D > E. Combining: C > D > E > A > B. Bottom is B.

**A7. (A) 29**  
Total = 22 (A's new left pos) + 8 (B's old right pos) - 1 = 29.

**A8. (C) 4**  
Q is father (male) since not mother. R is wife (female). P is son (male). U is brother of Q (male). S is daughter of R (female). T is brother of P (male). Males: Q, P, U, T = 4.

**A9. (A) Tomorrow**  
Day before yesterday = Thursday. Yesterday = Friday. Today = Saturday. Tomorrow = Sunday.

**A10. (D) 9:15 AM**  
Next bus at 9:35 AM. Buses are every 30 mins, so the last bus left at 9:05 AM. It left 10 mins ago, so the current time is 9:15 AM.
`
  }
];

module.exports = reasoningTopicsData;
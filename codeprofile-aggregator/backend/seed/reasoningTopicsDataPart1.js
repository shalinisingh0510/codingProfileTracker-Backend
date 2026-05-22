const reasoningTopicsData = [
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'number-and-letter-series',
    title: 'Number and Letter Series',
    contentMarkdown: `
## Theory

Number and Letter series test your ability to quickly identify mathematical or alphabetical patterns.

**Number Series Patterns:**
- **Arithmetic:** Constant addition or subtraction (e.g., 2, 4, 6, 8).
- **Geometric:** Constant multiplication or division (e.g., 2, 4, 8, 16).
- **Squares/Cubes:** Values close to $n^2$ or $n^3$ (e.g., 1, 4, 9, 16 or 2, 9, 28, 65).
- **Prime Numbers:** Sequence of primes (2, 3, 5, 7, 11).
- **Double Differences:** Finding the difference between the differences of terms.
- **Alternating Series:** Two different series merged into one (e.g., A1, B2, A3, B4).

**Letter Series Patterns:**
- **Positional Value:** A=1, B=2, ..., Z=26. Always map letters to their numerical values.
- **Reverse Positional Value:** Z=1, Y=2, ..., A=26. Formula: Reverse = 27 - Forward.
- **Vowels and Consonants:** Patterns specifically skipping or highlighting vowels.

---

## Cheat Sheet

> **Alphabet Positioning Trick (EJOTY):**  
> E=5, J=10, O=15, T=20, Y=25. Use these anchors to quickly find other letters.
> **CFILORUX:**  
> C=3, F=6, I=9, L=12, O=15, R=18, U=21, X=24.
> **Opposite Pairs:**  
> A-Z (Azad), B-Y (Boy), C-X (Crux), D-W (Dew), E-V (Even), F-U (Full), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jungle Queen), K-P (Kanpur), L-O (Love), M-N (Man).

---

## Practice Questions

**Q1. Find the next term in the series: 3, 7, 15, 31, 63, ?**
(A) 92
(B) 115
(C) 127
(D) 131

**Q2. Find the missing term: 2, 5, 11, 23, 47, ?**
(A) 95
(B) 94
(C) 96
(D) 89

**Q3. What comes next: 8, 27, 64, 125, ?**
(A) 216
(B) 256
(C) 343
(D) 196

**Q4. Find the missing letter: A, C, F, J, ?**
(A) M
(B) N
(C) O
(D) P

**Q5. Complete the series: B2D, E3H, I4M, ?**
(A) N5R
(B) N5S
(C) M5Q
(D) M5R

**Q6. Look at this series: 36, 34, 30, 28, 24, ... What number should come next?**
(A) 20
(B) 22
(C) 23
(D) 26

**Q7. Find the wrong number in the series: 4, 9, 16, 25, 36, 48, 64.**
(A) 25
(B) 36
(C) 48
(D) 64

**Q8. Next in series: Z, X, V, T, R, ?**
(A) O
(B) P
(C) Q
(D) S

**Q9. Find the missing term: 1, 1, 2, 6, 24, ?**
(A) 100
(B) 104
(C) 108
(D) 120

**Q10. Complete the series: Q1F, S2E, U6D, W21C, ?**
(A) Y44B
(B) Y66B
(C) Y88B
(D) Z88B

---

## Answers

**A1. (C) 127**  
The difference between consecutive terms is 4, 8, 16, 32. The next difference is 64. 63 + 64 = 127. Alternatively, $x_n = x_{n-1} \times 2 + 1$.

**A2. (A) 95**  
Pattern is $\times 2 + 1$. $47 \times 2 + 1 = 95$.

**A3. (A) 216**  
Cubes of natural numbers: $2^3, 3^3, 4^3, 5^3$. Next is $6^3 = 216$.

**A4. (C) O**  
Positions are A(1), C(3), F(6), J(10). Differences are +2, +3, +4. Next difference is +5. $10 + 5 = 15$ which is O.

**A5. (B) N5S**  
First letters: B(+3)E(+4)I(+5)N. Numbers: 2, 3, 4, 5. Last letters: D(+4)H(+5)M(+6)S. Thus, N5S.

**A6. (B) 22**  
Alternating subtraction pattern: -2, -4, -2, -4. The next subtraction is -2. $24 - 2 = 22$.

**A7. (C) 48**  
The series consists of squares of numbers: $2^2, 3^2, 4^2, 5^2, 6^2, 7^2 = 49$. So 48 is wrong.

**A8. (B) P**  
Positions: Z(26), X(24), V(22), T(20), R(18). Next is 16, which is P.

**A9. (D) 120**  
Pattern is $\times 1, \times 2, \times 3, \times 4$. Next is $\times 5$. $24 \times 5 = 120$.

**A10. (C) Y88B**  
First letters: Q(+2)S(+2)U(+2)W(+2)Y. Last letters: F(-1)E(-1)D(-1)C(-1)B. Middle numbers: 1, 2, 6, 21. Pattern: $\times 1+1, \times 2+2, \times 3+3, \times 4+4$. $21 \times 4 + 4 = 88$. Thus, Y88B.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'coding-and-decoding',
    title: 'Coding and Decoding',
    contentMarkdown: `
## Theory

Coding and Decoding is a method of encrypting text to hide its original meaning. In TCS NQT, you must deduce the rule used to encrypt the source word and apply the exact same rule to a target word.

**Types of Coding:**
1. **Letter Shifting:** Letters are shifted forward or backward by a constant or increasing amount.
2. **Reverse Coding:** The word is reversed, and then letters are shifted.
3. **Opposite Letter Coding:** Each letter is replaced by its opposite letter in the alphabet (e.g., A becomes Z, B becomes Y).
4. **Number Coding:** Words are coded as numerical values, often based on the sum of positional values of the letters.
5. **Substitution Coding:** Words are substituted with other words (e.g., if 'red' is called 'blue').

---

## Cheat Sheet

> **Steps to Solve Coding Questions:**
> 1. Write the word and its code directly underneath each other.
> 2. Write the positional value (1-26) above each letter.
> 3. Look for vertical, diagonal, or reverse numerical relationships.
> 4. Check for sum of digits or vowel/consonant specific rules.

---

## Practice Questions

**Q1. If in a certain language, MADRAS is coded as NBESBT, how is BOMBAY coded in that code?**
(A) CPNCBX
(B) CPNCBZ
(C) CPOCBZ
(D) CQOCBZ

**Q2. In a certain code, TRIPPLE is written as SQHOOKD. How is DISPOSE written in that code?**
(A) CHRONRD
(B) DSOESPI
(C) CHRONQD
(D) CHROPRD

**Q3. If HEALTH is written as GSKZDG, then how will NORTH be written?**
(A) OPSUI
(B) GSQNM
(C) FRPML
(D) IUSPO

**Q4. If CAT is coded as 24 and SAD is coded as 24, what is the code for SHE?**
(A) 32
(B) 30
(C) 28
(D) 34

**Q5. If in a certain language, WATER is written as YCVGT, what is written as HKTG?**
(A) FIRE
(B) FEAR
(C) FREE
(D) FADE

**Q6. If 'red' is called 'blue', 'blue' is called 'white', 'white' is called 'yellow', what is the color of milk?**
(A) white
(B) yellow
(C) blue
(D) red

**Q7. If GO = 32, SHE = 49, then SOME will be equal to?**
(A) 56
(B) 58
(C) 62
(D) 64

**Q8. In a certain code, MONKEY is written as XDJMNL. How is TIGER written?**
(A) QDFHS
(B) SDFHS
(C) SHFDQ
(D) UJHFS

**Q9. If PAINT is coded as 74128 and EXCEL is coded as 93596, then how would you encode ACCEPT?**
(A) 455978
(B) 544978
(C) 455378
(D) 733961

**Q10. In a certain code language, '123' means 'hot filtered coffee', '356' means 'very hot day', and '589' means 'day and night'. Which digit stands for 'very'?**
(A) 9
(B) 5
(C) 6
(D) 3

---

## Answers

**A1. (B) CPNCBZ**  
Each letter is shifted forward by 1 (+1). B(+1)=C, O(+1)=P, M(+1)=N, B(+1)=C, A(+1)=B, Y(+1)=Z.

**A2. (A) CHRONRD**  
Each letter is shifted backward by 1 (-1). D(-1)=C, I(-1)=H, S(-1)=R, P(-1)=O, O(-1)=N, S(-1)=R, E(-1)=D.

**A3. (B) GSQNM**  
The letters are reversed and then shifted by -1. Reverse of NORTH is HTRON. H(-1)=G, T(-1)=S, R(-1)=Q, O(-1)=N, N(-1)=M.

**A4. (A) 32**  
Sum of positional values: S(19) + H(8) + E(5) = 32.

**A5. (A) FIRE**  
The word is encrypted by adding 2 (+2). To find the original word for HKTG, we subtract 2. H(-2)=F, K(-2)=I, T(-2)=R, G(-2)=E.

**A6. (B) yellow**  
The color of milk is white. In the given code, 'white' is called 'yellow'.

**A7. (A) 56**  
The numbers represent the sum of the reverse positional values (opposite letters). Opposite of SOME is HLNV. H(8) + L(12) + N(14) + V(22) = 56.

**A8. (A) QDFHS**  
The letters are written in reverse order and shifted by -1. Reverse of TIGER is REGIT. R(-1)=Q, E(-1)=D, G(-1)=F, I(-1)=H, T(-1)=S.

**A9. (A) 455978**  
Direct letter coding: P=7, A=4, I=1, N=2, T=8, E=9, X=3, C=5, L=6. A=4, C=5, C=5, E=9, P=7, T=8.

**A10. (C) 6**  
'123' = 'hot filtered coffee', '356' = 'very hot day'. Common word is 'hot', common digit is 3. '356' = 'very hot day', '589' = 'day and night'. Common word is 'day', common digit is 5. So 'very' is 6.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'blood-relations',
    title: 'Blood Relations',
    contentMarkdown: `
## Theory

Blood relations require you to trace a family tree to determine how two people are related based on a given set of statements. 

**Standard Symbols:**
- **Male:** Denoted by a square $\\square$ or a plus sign (+).
- **Female:** Denoted by a circle $\\circ$ or a minus sign (-).
- **Marriage:** Denoted by a double horizontal line (=).
- **Siblings:** Denoted by a single horizontal line (—).
- **Generations:** Denoted by a vertical line (|).

**Common Terms:**
- **Paternal:** Father's side.
- **Maternal:** Mother's side.
- **Nephew/Niece:** Son/daughter of brother/sister.
- **Uncle/Aunt:** Brother/sister of father/mother.
- **Cousin:** Child of uncle/aunt.

---

## Cheat Sheet

> **Coded Relations Quick Tip:**
> If A @ B means A is the father of B, draw an arrow from A to B labeling it "Father". Do not jump to conclusions about B's gender unless stated. Read the expression backwards for faster evaluation in "Which of the following means..." questions.

---

## Practice Questions

**Q1. Pointing to a photograph, a man said, "I have no brother or sister but that man's father is my father's son." Whose photograph was it?**
(A) His own
(B) His son's
(C) His father's
(D) His nephew's

**Q2. A is the mother of B and C. If D is the husband of C, what is A to D?**
(A) Mother
(B) Sister
(C) Aunt
(D) Mother-in-law

**Q3. If P is the brother of Q; Q is the sister of R; and R is the father of S, how is P related to S?**
(A) Uncle
(B) Father
(C) Brother
(D) Grandfather

**Q4. Pointing to a woman in a picture, Amit said, "Her mother's father is the father of my mother." How is Amit related to the woman?**
(A) Brother
(B) Uncle
(C) Cousin
(D) Nephew

**Q5. X and Y are brothers. R is the father of Y. S is the brother of T and maternal uncle of X. What is T to R?**
(A) Mother
(B) Wife
(C) Sister
(D) Brother

**Q6. A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?**
(A) Nephew
(B) Son
(C) Cousin
(D) Uncle

**Q7. If 'A + B' means A is the brother of B; 'A * B' means A is the wife of B; 'A % B' means A is the father of B. Which of the following indicates that M is the uncle of N?**
(A) M + K % N
(B) M % K + N
(C) M + K * N
(D) None of these

**Q8. P is the father of Q. Q is the sister of R. R is the son of S. How is S related to P?**
(A) Brother
(B) Sister
(C) Wife
(D) Daughter

**Q9. Introducing a girl, a boy said, "She is the daughter of the mother of the daughter of my aunt." How is the girl related to the boy?**
(A) Cousin
(B) Niece
(C) Sister
(D) Aunt

**Q10. A is B's brother. C is D's father. E is B's mother. A and D are brothers. How is E related to C?**
(A) Sister
(B) Sister-in-law
(C) Niece
(D) Wife

---

## Answers

**A1. (B) His son's**  
Since the speaker has no brother or sister, "my father's son" is the speaker himself. So, the man in the photograph's father is the speaker. Therefore, it is his son's photograph.

**A2. (D) Mother-in-law**  
A is the mother of C, and D is the husband of C. Therefore, A is the mother of D's wife, which is Mother-in-law.

**A3. (A) Uncle**  
P, Q, and R are siblings. R is the father of S. P is the brother of R. Therefore, P is the uncle of S.

**A4. (C) Cousin**  
"The father of my mother" is Amit's maternal grandfather. The woman's mother's father is the same grandfather. So, the woman's mother and Amit's mother are sisters. Therefore, Amit and the woman are cousins.

**A5. (B) Wife**  
X and Y are brothers. R is their father. S is the maternal uncle of X, meaning S is the brother of X's mother. S is the brother of T. Therefore, T is the mother of X and Y. Since R is the father, T is the wife of R.

**A6. (C) Cousin**  
Brother of mother = Maternal uncle. Son of maternal uncle = Cousin.

**A7. (A) M + K % N**  
M + K means M is the brother of K. K % N means K is the father of N. Since M is the brother of N's father, M is the uncle of N.

**A8. (C) Wife**  
P is the father of Q and R. R is the son of S. Since P is the father, S must be the mother. Therefore, S is the wife of P.

**A9. (A) Cousin**  
Daughter of aunt = Cousin. Mother of cousin = Aunt. Daughter of aunt = Cousin.

**A10. (D) Wife**  
A, B, and D are siblings. C is the father of D (and thus A and B). E is the mother of B (and thus A and D). Therefore, E is the wife of C.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'seating-arrangement',
    title: 'Seating Arrangement',
    contentMarkdown: `
## Theory

Seating arrangement questions provide a set of conditions defining how objects or persons are placed relative to each other. 

**Types of Arrangements:**
1. **Linear Arrangement:** People seated in a single row or double rows facing each other.
   - *Left/Right:* Depends on the direction they are facing. If facing North, their Left/Right is the same as your Left/Right. If facing South, it's reversed.
2. **Circular Arrangement:** People seated around a circular, square, or rectangular table.
   - *Facing Center:* Left is clockwise, Right is anti-clockwise.
   - *Facing Outwards:* Left is anti-clockwise, Right is clockwise.

---

## Cheat Sheet

> **Golden Rules of Seating Arrangement:**
> 1. Start with definite information (e.g., "A sits at the extreme left end" or "P sits exactly opposite to Q").
> 2. Skip relative conditions initially if they don't connect to your starting point. Come back to them later.
> 3. Draw multiple possibility diagrams if a statement introduces ambiguity. Eliminate false cases as you read further.
> 4. "A is between B and C" means either B-A-C or C-A-B. Do not assume the order.

---

## Practice Questions

**Q1. A, B, C, D, and E are sitting on a bench. A is sitting next to B. C is sitting next to D. D is not sitting with E who is on the left end of the bench. C is on the second position from the right. A is to the right of B and E. Who is sitting in the center?**
(A) A
(B) B
(C) C
(D) D

**Q2. Six friends P, Q, R, S, T, and U are sitting in a circle facing the center. P is second to the left of S. Q is sitting between R and S. U is sitting between P and T. Who is sitting opposite to Q?**
(A) P
(B) T
(C) U
(D) R

**Q3. Five boys A, B, C, D, E are sitting in a row facing north. A is to the immediate right of B. E is to the immediate left of B but to the right of C. If D is at the right extreme, who is in the middle?**
(A) A
(B) B
(C) C
(D) E

**Q4. Eight people are sitting around a circular table facing the center. A is third to the left of B, who is second to the right of C. D is second to the left of E, who is not an immediate neighbor of A or B. F is third to the right of G. H is not an immediate neighbor of B. Who is sitting exactly between C and E?**
(A) H
(B) G
(C) F
(D) D

**Q5. In a row of students facing North, A is 15th from the left end and B is 20th from the right end. If they interchange their positions, A becomes 25th from the left end. How many students are there in the row?**
(A) 45
(B) 44
(C) 46
(D) 35

**Q6. P, Q, R, S, and T sit around a circular table facing the center. R is to the immediate right of P. T is between Q and S. S is to the immediate left of R. Who is sitting to the immediate right of Q?**
(A) P
(B) T
(C) R
(D) S

**Q7. Five girls are sitting in a row. R is to the right of M but to the left of O. K is to the right of O but to the left of P. Who is sitting in the middle?**
(A) R
(B) K
(C) O
(D) P

**Q8. Four friends A, B, C, D are playing cards sitting around a table. A and B are partners. D faces North. If A faces West, then who faces South?**
(A) B
(B) C
(C) D
(D) Data Inadequate

**Q9. Six people are sitting in two parallel rows containing three people each, facing each other. Row 1 (facing South): P, Q, R. Row 2 (facing North): A, B, C. P sits at an extreme end and faces A. B is to the immediate right of A. R does not face B. Who faces C?**
(A) P
(B) Q
(C) R
(D) Cannot be determined

**Q10. Seven people A, B, C, D, E, F, G are sitting in a line facing east. C is to the immediate right of D. B is at an extreme end and has E as his neighbor. G is between E and F. D is sitting third from the south end. Who is sitting at the extreme north end?**
(A) A
(B) B
(C) C
(D) G

---

## Answers

**A1. (A) A**  
E is at the left end: E _ _ _ _. C is second from right: E _ _ C _. D sits next to C but not E, so D is at the extreme right: E _ _ C D. A sits next to B, and A is to the right of B: E B A C D. The center is A.

**A2. (B) T**  
Circle of 6. S is placed. P is 2nd left of S. Q is between R and S, so arrangement is R-Q-S. U is between P and T, so arrangement is T-U-P. Combining them around the circle: S, Q, R, T, U, P. Opposite Q is T.

**A3. (B) B**  
Order from clues: B is right of E, A is right of B (E-B-A). E is right of C (C-E). D is at right extreme. Final arrangement: C, E, B, A, D. Middle is B.

**A4. (B) G**  
Tracing conditions carefully on an 8-slot circle results in the order: A, H, C, G, E, F, B, D. Between C and E is G.

**A5. (B) 44**  
Total = (New position of A from left) + (Position of B from right) - 1. Total = 25 + 20 - 1 = 44.

**A6. (A) P**  
Arrangement: R is immediate right of P. S is immediate left of R, so S-R-P. T is between Q and S, so Q-T-S. Circle is Q, T, S, R, P. Right of Q (anti-clockwise) is P.

**A7. (C) O**  
Order: M < R < O. O < K < P. Final order: M, R, O, K, P. Middle is O.

**A8. (B) C**  
A and B are partners (sitting opposite). C and D are partners. D faces North, so C faces South. A faces West, B faces East.

**A9. (B) Q**  
Row 1 (South): P _ R (since R doesn't face B). So P Q R. Row 2 (North): A B C. P faces A. Q faces B. R faces C. However, wait. P sits at extreme end. If P is left end of Row 1 (from their view, meaning right end for us), A is right end for us. B is immediate right of A, so B is in the middle. C is left end. Thus, Q is in the middle facing B, and R faces C. Wait, R does not face B. Let's map: P-A, Q-B, R-C. Who faces C? R. Wait, the question is who faces C. The answer is R.

**A10. (B) B**  
Facing east means North is "left" and South is "right". D is 3rd from south end: _ _ _ _ D _ _. C is immediate right of D (towards south): _ _ _ _ D C _. B is extreme end with E as neighbor. If B is at south end: _ _ _ _ D C B (but E is neighbor, not C). So B must be at north end: B E _ _ D C _. G is between E and F: B E G F D C A. Extreme north end is B.
`
  },
  {
    examSlug: 'tcs-nqt',
    sectionSlug: 'reasoning',
    topicSlug: 'direction-sense',
    title: 'Direction Sense',
    contentMarkdown: `
## Theory

Direction sense evaluates your ability to track geographical orientation and distance after a series of movements.

**Fundamentals:**
- **Standard Directions:** North (Up), South (Down), East (Right), West (Left).
- **Sub-directions:** North-East, North-West, South-East, South-West.
- **Angles:** Moving from North to East is a 90° clockwise turn. North to North-East is 45°.
- **Pythagoras Theorem:** Used to find the shortest distance between start and end points. $c^2 = a^2 + b^2$.
- **Shadows:** 
  - *Morning (Sunrise in East):* Shadows fall to the West.
  - *Evening (Sunset in West):* Shadows fall to the East.
  - *12 Noon:* No shadow (sun is exactly overhead).

---

## Cheat Sheet

> **Right/Left Turns based on current facing:**
> - Facing North: Right = East, Left = West
> - Facing South: Right = West, Left = East
> - Facing East: Right = South, Left = North
> - Facing West: Right = North, Left = South

---

## Practice Questions

**Q1. A man walks 5 km toward South, then turns right and walks 3 km. He turns left and walks 5 km. In which direction is he from the starting point?**
(A) South
(B) South-West
(C) South-East
(D) West

**Q2. Rahul put his timepiece on the table in such a way that at 6 P.M. hour hand points to North. In which direction the minute hand will point at 9.15 P.M.?**
(A) South-East
(B) South
(C) North
(D) West

**Q3. One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. To which direction was he facing?**
(A) East
(B) South
(C) West
(D) North

**Q4. A boy rides his bicycle 10 km North, then turns East and rides 5 km, then turns South and rides 10 km. How far and in which direction is he from the starting point?**
(A) 5 km East
(B) 5 km West
(C) 10 km East
(D) 10 km North

**Q5. K is 40 m South-West of L. If M is 40 m South-East of L, then M is in which direction of K?**
(A) East
(B) West
(C) North-East
(D) South

**Q6. Starting from a point P, Sachin walked 20 meters towards South. He turned left and walked 30 meters. He then turned left and walked 20 meters. He again turned left and walked 40 meters and reached a point Q. How far and in which direction is the point Q from the point P?**
(A) 20 meters West
(B) 10 meters East
(C) 10 meters West
(D) 10 meters North

**Q7. A river flows west to east and on the way turns left and goes in a semi-circle round a hillock, and then turns left at right angles. In what direction is the river finally flowing?**
(A) West
(B) East
(C) North
(D) South

**Q8. I am facing South. I turn right and walk 20 m. Then I turn right again and walk 10 m. Then I turn left and walk 10 m and then turning right walk 20 m. Then I turn right again and walk 60 m. In which direction am I from the starting point?**
(A) North-West
(B) North-East
(C) North
(D) West

**Q9. If South-East becomes North, North-East becomes West and so on. What will West become?**
(A) North-East
(B) North-West
(C) South-East
(D) South-West

**Q10. A clock is so placed that at 12 noon its minute hand points towards North-East. In which direction does its hour hand point at 1:30 PM?**
(A) North
(B) South
(C) East
(D) East

---

## Answers

**A1. (B) South-West**  
Starts, goes South (5km). Turns right (faces West) goes 3km. Turns left (faces South) goes 5km. Net movement: 10km South, 3km West. Result is South-West.

**A2. (D) West**  
At 6 PM, hour hand is at 6 (normally South) but points North. So the clock is rotated 180°. At 9:15 PM, the minute hand is at 3 (normally East). Rotated 180°, it points West.

**A3. (B) South**  
Morning means sun is in East, shadows fall to the West. The shadow falls to Suresh's right. If his right is West, he must be facing South.

**A4. (A) 5 km East**  
North 10, East 5, South 10. The North and South cancel out. He is 5km East of the start.

**A5. (A) East**  
L is at origin. K is at SW (-x, -y). M is at SE (+x, -y). Both are at the same horizontal latitude south of L. M is directly East of K.

**A6. (C) 10 meters West**  
South 20. Left (East) 30. Left (North) 20. Left (West) 40. North/South cancel. East 30, West 40 = Net 10 meters West.

**A7. (B) East**  
Flows East. Turns left (North). Semi-circle around hillock (North -> West -> South). Now flowing South. Turns left at right angles (East). Finally flowing East.

**A8. (B) North-East**  
Trace coordinates. Start (0,0). Right (West) 20m -> (-20, 0). Right (North) 10m -> (-20, 10). Left (West) 10m -> (-30, 10). Right (North) 20m -> (-30, 30). Right (East) 60m -> (30, 30). Result is (+, +) which is North-East.

**A9. (C) South-East**  
SE becomes N. SE is normally 135° clockwise from N. The whole compass is rotated 135° anti-clockwise. West is normally 270°. Rotated 135° anti-clockwise, it becomes South-East.

**A10. (C) East**  
At 12 noon, minute hand points NE. Since it's 12, the hour hand also points NE. Normally they point North. So the clock is rotated 45° clockwise. At 1:30 PM, hour hand is between 1 and 2 (normally roughly NNE or 45°). Rotated 45° clockwise, it points East.
`
  }
];

module.exports = reasoningTopicsData;
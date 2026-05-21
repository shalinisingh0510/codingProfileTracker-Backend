# Probability (TCS NQT Prep)

## 1. Formulas & Fundamentals

Probability measures the likelihood of an event occurring.

$$\text{Probability of an event P(E)} = \frac{\text{Number of favorable outcomes (n(E))}}{\text{Total number of possible outcomes (n(S))}}$$

* **Range**: $0 \le P(E) \le 1$.

* **Complementary Event**: $P(E') = 1 - P(E)$.

### Key Probability Rules

* **Addition Rule**:

  

$$P(A \cup B) = P(A) + P(E) - P(A \cap B)$$

* **Mutually Exclusive Events**: $P(A \cap B) = 0 \implies P(A \cup B) = P(A) + P(B)$.

* **Independent Events**: $P(A \cap B) = P(A) \times P(B)$.

---

## 2. Standard Card & Coin Specs

* **Deck of Cards**: 52 cards total.

  * 4 suits (Spades $\spadesuit$, Clubs $\clubsuit$ - Black; Hearts $\heartsuit$, Diamonds $\diamondsuit$ - Red).
  * Each suit has 13 cards: Ace, 2-10, Jack, Queen, King.
  * 12 Face Cards (Jack, Queen, King).

---

## 3. Practice Questions (10)

**Q1.** A card is drawn from a pack of 52 cards. Find the probability that the card is a red king.

**Q2.** Two dice are thrown simultaneously. What is the probability of getting a sum of 9?

**Q3.** Three unbiased coins are tossed. What is the probability of getting at least two heads?

**Q4.** A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random. What is the probability that all are red?

**Q5.** The probability that A can solve a problem is 2/3 and that B can solve it is 3/5. If both try, what is the probability that the problem is solved?

**Q6.** What is the probability of getting a leap year to have 53 Sundays?

**Q7.** A card is drawn at random from a deck of 52 cards. What is the probability of getting a queen or a club?

**Q8.** Two cards are drawn together from a pack of 52 cards. Find the probability that both are spades.

**Q9.** In a class, 30% of students study Coding, 20% study Aptitude, and 10% study both. Find the probability that a student selected at random studies Coding or Aptitude.

**Q10.** A bag contains 6 black and 8 white balls. One ball is drawn at random. What is the probability that the drawn ball is white?

---

## 4. Answers & Detailed Explanations

**A1.** **1/26**

* **Step-by-step Explanation**:

  Total outcomes = 52.
  Favorable outcomes (Red Kings) = 2 (King of Hearts, King of Diamonds).
  Probability = 2/52 = 1/26.

**A2.** **1/9**

* **Step-by-step Explanation**:

  Total outcomes when 2 dice are thrown = 6 * 6 = 36.
  Favorable outcomes (sum = 9): (3,6), (4,5), (5,4), (6,3) $\implies$ 4 outcomes.
  Probability = 4/36 = 1/9.

**A3.** **1/2**

* **Step-by-step Explanation**:

  Total outcomes = $2^3 = 8$ (HHH, HHT, HTH, THH, HTT, THT, TTH, TTT).
  At least 2 heads $\implies$ 2 or 3 heads: (HHH, HHT, HTH, THH) $\implies$ 4 outcomes.
  Probability = 4/8 = 1/2.

**A4.** **2/91**

* **Step-by-step Explanation**:

  Total balls = 4 + 5 + 6 = 15.
  Number of ways to draw 3 balls = $_{15}C_3 = \frac{15 \times 14 \times 13}{3 \times 2 \times 1} = 455$.
  Favorable ways (all 3 red) = $_5C_3 = 10$.
  Probability = 10/455 = 2/91.

**A5.** **13/15**

* **Step-by-step Explanation**:

  Problem is NOT solved if both fail.
  Probability that A fails = 1 - 2/3 = 1/3.
  Probability that B fails = 1 - 3/5 = 2/5.
  Probability both fail = $1/3 \times 2/5 = 2/15$.
  Probability problem is solved = $1 - 2/15 = 13/15$.

**A6.** **2/7**

* **Step-by-step Explanation**:

  A leap year has 366 days = 52 weeks and 2 extra days.
  These 2 extra days can be: (Mon, Tue), (Tue, Wed), (Wed, Thu), (Thu, Fri), (Fri, Sat), (Sat, Sun), (Sun, Mon).
  Out of 7 possibilities, 2 contain Sunday: (Sat, Sun) and (Sun, Mon).
  Probability = 2/7.

**A7.** **4/13**

* **Step-by-step Explanation**:

  P(Queen or Club) = P(Queen) + P(Club) - P(Queen of Clubs).
  P(Queen) = 4/52, P(Club) = 13/52, P(Queen of Clubs) = 1/52.
  Probability = $(4 + 13 - 1) / 52 = 16/52 = 4/13$.

**A8.** **1/17**

* **Step-by-step Explanation**:

  Total ways to draw 2 cards = $_{52}C_2 = 1326$.
  Favorable ways (both spades) = $_{13}C_2 = 78$.
  Probability = 78/1326 = 1/17.

**A9.** **0.4**

* **Step-by-step Explanation**:

  P(Coding or Aptitude) = P(Coding) + P(Aptitude) - P(Both) = 0.30 + 0.20 - 0.10 = 0.40.

**A10.** **4/7**

* **Step-by-step Explanation**:

  Total balls = 6 + 8 = 14. Favorable (white) = 8.
  Probability = 8/14 = 4/7.

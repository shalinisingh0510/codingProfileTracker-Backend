# Probability (TCS NQT Aptitude)

## 1. Basics
```text
Probability = (Number of favorable outcomes) / (Total outcomes)
0 <= P <= 1
```

### Complement
```text
P(not A) = 1 - P(A)
```

---

## 2. Core Rules

### Addition rule (when mutually exclusive)
```text
P(A or B) = P(A) + P(B)
```

### Multiplication rule (independent events)
```text
P(A and B) = P(A) * P(B)
```

---

## 3. Quick Tips
- Use complement for “at least one” questions:
  - P(at least one) = 1 - P(none)
- Keep outcomes uniform (like dice/cards) and count carefully.

---

## 4. Practice Questions (10)
**Q1.** A fair coin is tossed. Probability of head?  
**Q2.** Two coins tossed. Probability of exactly one head?  
**Q3.** A die thrown. Probability of getting a prime number?  
**Q4.** A card drawn from a 52-card deck. Probability of a heart?  
**Q5.** Two dice thrown. Probability sum is 7?  
**Q6.** Probability of getting at least one head in 3 coin tosses?  
**Q7.** A bag has 5 red and 3 blue balls. One ball drawn. P(blue)?  
**Q8.** Two balls drawn without replacement from 4 red and 6 blue. Probability both are blue?  
**Q9.** A card drawn. Probability it is a face card (J,Q,K)?  
**Q10.** A die thrown twice. Probability of getting 6 at least once?

---

## 5. Answers
**A1.** 1/2  
**A2.** Outcomes=4, favorable=2 => 1/2  
**A3.** primes {2,3,5} => 3/6 = 1/2  
**A4.** 13/52 = 1/4  
**A5.** 6/36 = 1/6  
**A6.** 1 - P(no heads) = 1 - (1/2)^3 = 7/8  
**A7.** 3/8  
**A8.** (6/10)*(5/9) = 1/3  
**A9.** 12/52 = 3/13  
**A10.** 1 - (5/6)^2 = 11/36


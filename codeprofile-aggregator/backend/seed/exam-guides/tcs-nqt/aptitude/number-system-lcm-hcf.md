# Number System, LCM and HCF (TCS NQT Aptitude)

## 1. Key Facts
```text
LCM * HCF = Product of two numbers (only for TWO numbers)
```

**Prime factorization method**
- HCF: take minimum powers
- LCM: take maximum powers

---

## 2. Divisibility Rules (must know)
- Divisible by 2: last digit even
- By 3: sum of digits divisible by 3
- By 9: sum of digits divisible by 9
- By 11: (sum odd positions - sum even positions) divisible by 11

---

## 3. Remainders & Cyclicity (fast)
Use patterns:
- Last digit cycles for powers (2,3,7,8 etc.)
- Mod arithmetic: `(a+b) mod m`, `(a*b) mod m`

---

## 4. Practice Questions (10)
**Q1.** Find HCF and LCM of 12 and 18.  
**Q2.** Two numbers have HCF=6 and LCM=180. If one number is 30, find the other.  
**Q3.** Find HCF of 48, 72, 120.  
**Q4.** Find LCM of 8, 12, 15.  
**Q5.** Is 945 divisible by 9?  
**Q6.** Find remainder when 7^23 is divided by 6.  
**Q7.** Find number of trailing zeros in 100!.  
**Q8.** Find the greatest 3-digit number divisible by 17.  
**Q9.** If a number leaves remainder 3 when divided by 7, what remainder when its square is divided by 7?  
**Q10.** Find the smallest number that when divided by 6,8,12 leaves remainder 1.

---

## 5. Answers
**A1.** HCF=6, LCM=36  
**A2.** Other = (HCF*LCM)/30 = (6*180)/30 = 36  
**A3.** HCF = 24  
**A4.** LCM = 120  
**A5.** Sum digits=18 => divisible by 9 => yes  
**A6.** 7 mod 6 = 1 => 1^23 mod 6 = 1  
**A7.** zeros = floor(100/5)+floor(100/25)=20+4=24  
**A8.** 999/17=58 remainder 13 => 999-13=986  
**A9.** n=7k+3 => n^2 ≡ 9 ≡ 2 (mod 7)  
**A10.** Need N ≡ 1 mod lcm(6,8,12)=24 => smallest is 25


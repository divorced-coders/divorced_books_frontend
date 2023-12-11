# Fibonacci Sequence in Computer Science

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. In computer science, the Fibonacci sequence is often used as an introductory example for learning programming concepts such as loops, recursion, and functional programming.

## Mathematical Definition

The Fibonacci sequence can be defined by the recurrence relation:

\[ F(n) = F(n-1) + F(n-2) \]

with initial conditions \( F(0) = 0 \) and \( F(1) = 1 \).

## Generating Fibonacci Sequence in Different Ways

### 1. Using a Loop

**Description:**
Iterate through the range from 2 to \( n \), calculating each Fibonacci number iteratively and storing it in a data structure.

**Time Complexity (Big O):** \( O(n) \)

### 2. Using a While Loop

**Description:**
Use a while loop to iteratively calculate Fibonacci numbers and store them in a data structure until reaching the desired length.

**Time Complexity (Big O):** \( O(n) \)

### 3. Using Recursion

**Description:**
Define a recursive function that calculates Fibonacci numbers by calling itself with reduced subproblems.

**Time Complexity (Big O):** \( O(2^n) \) - Exponential time due to repeated subproblem calculations.

### 4. Using a Generator and Stream

**Description:**
Create an infinite generator that yields Fibonacci numbers on demand. Use an appropriate mechanism to generate the sequence up to \( n \).

**Time Complexity (Big O):** \( O(n) \) (for generating the first \( n \) Fibonacci numbers)
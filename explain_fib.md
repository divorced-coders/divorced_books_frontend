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

<style>
body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
            margin: 0;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        h1 {
            color: #0275d8;
            text-align: center;
        }
        label, select, button, p {
            font-size: 16px;
            margin: 10px 0;
        }
        select, button {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            background-color: #fff;
        }
        button {
            cursor: pointer;
            background-color: #0275d8;
            color: white;
            border: none;
        }
        button:hover {
            background-color: #0356a5;
        }
        .filler-container {
            display: flex;
            justify-content: space-between; /* Updated to space between */
            align-items: center;
        }
        .filler-bar {
            width: 50px; /* Updated width */
            background-color: #333;
            height: 0;
            margin-bottom: 10px;
            transition: height 0.3s linear; /* Updated transition property */
        }
        .filler-1 {
            background-color: #FF1000; /* Corrected the color value */
        }
</style>
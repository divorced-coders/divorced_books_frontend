<style>
       body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f4f4f4;
    line-height: 1.6;
}
nav {
    background: linear-gradient(135deg, #1e5799 0%,#2989d8 50%,#207cca 100%);
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.brand-name {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
}
#search-box {
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-left: auto;
}
#nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;
}
#nav-links a:hover {
    color: #a8d0e6;
    text-decoration: none;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
.section {
    background: white;
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.section h2 {
    color: #1e5799;
    margin-bottom: 15px;
}
.section p {
    text-align: justify;
}
.footer {
    background: #1e5799;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
}
</style>

<body>
<nav>
    <span class="brand-name">CrunchCrypto</span>
    <div id="nav-links">
        <a href="http://127.0.0.1:4000/student/graph">Transaction Graphs</a>
        <a href="http://127.0.0.1:4000/student/about">About</a>
        <a href="http://127.0.0.1:4000/student/news">News</a>
        <a href="http://127.0.0.1:4000/student/spring">Transaction Checker</a>
        <a href="http://127.0.0.1:4000/student/compare">Transaction Compare</a>
        <a href="http://127.0.0.1:4000/student/explain_fib">Fibonacci Explain</a>
        <a href="http://127.0.0.1:4000/student/explain_sort">Sorting Explain</a>
    </div>
    <input type="text" id="search-box" placeholder="Search ticker...">
    </nav>
</body>

<br>

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
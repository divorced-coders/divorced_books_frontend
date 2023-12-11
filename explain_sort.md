# Sorting Controller and Sorting Algorithms

The provided Java code consists of a Spring Boot application with a RestController for sorting and comparing sorting algorithms related to cryptocurrency transactions.

## Sorting Controller

### Compare Sorting Algorithms
- **Endpoint:** `/compareSort/{symbolId}/{algorithm1}/{algorithm2}`
- **Method:** `GET`
- **Description:** Compares the execution times of two sorting algorithms (`algorithm1` and `algorithm2`) applied to cryptocurrency transactions specified by `symbolId`. Returns a response with the comparison result and execution times for each algorithm.

### Sort Transactions
- **Endpoint:** `/sort/{symbolId}/{algorithm}`
- **Method:** `GET`
- **Description:** Sorts cryptocurrency transactions specified by `symbolId` using the given sorting algorithm (`algorithm`). Returns a response with a success message, sorted transactions, and performance metrics such as comparisons, swaps, and execution time.

### Sorting Algorithm Interface

The `SortingAlgorithm` interface defines a common contract for sorting algorithms. It includes a generic `sort` method, which takes a list, a comparator, and atomic integers for comparisons and swaps.

## Sorting Algorithms

### Bubble Sort (`BubbleSort` class)
- **Description:** Implements the Bubble Sort algorithm.
- **Time Complexity (Big O):** O(n^2)
- **Method:** `sort`
  - **Parameters:** List, Comparator, AtomicInteger for comparisons, AtomicInteger for swaps.
  - **Details:** Sorts the list using the Bubble Sort algorithm, counting comparisons and swaps.

### Selection Sort (`SelectionSort` class)
- **Description:** Implements the Selection Sort algorithm.
- **Time Complexity (Big O):** O(n^2)
- **Method:** `sort`
  - **Parameters:** List, Comparator, AtomicInteger for comparisons, AtomicInteger for swaps.
  - **Details:** Sorts the list using the Selection Sort algorithm, counting comparisons and swaps.

### Heap Sort (`HeapSort` class)
- **Description:** Implements the Heap Sort algorithm.
- **Time Complexity (Big O):** O(n log n)
- **Methods:**
  - `sort`: Sorts the list using Heap Sort, counting comparisons and swaps.
  - `heapify`: Maintains the heap property during heap sort.

### Merge Sort (`MergeSort` class)
- **Description:** Implements the Merge Sort algorithm.
- **Time Complexity (Big O):** O(n log n)
- **Method:** `sort`
  - **Parameters:** List, Comparator, AtomicInteger for comparisons, AtomicInteger for swaps.
  - **Details:** Sorts the list using the Merge Sort algorithm, counting comparisons and swaps.

### Insertion Sort (`InsertionSort` class)
- **Description:** Implements the Insertion Sort algorithm.
- **Time Complexity (Big O):** O(n^2)
- **Method:** `sort`
  - **Parameters:** List, Comparator, AtomicInteger for comparisons, AtomicInteger for swaps.
  - **Details:** Sorts the list using the Insertion Sort algorithm, counting comparisons and swaps.

### Sorting Algorithm Factory (`getSortingAlgorithm` method)
- **Description:** Maps algorithm names to their corresponding sorting algorithm instances.
- **Method:** `getSortingAlgorithm`
  - **Parameters:** Algorithm name as a string.
  - **Details:** Returns an instance of the specified sorting algorithm or throws an exception if the algorithm is not supported.

## Conclusion

The provided code allows for comparing and sorting cryptocurrency transactions using various sorting algorithms, with a focus on measuring and reporting performance metrics such as execution time, comparisons, swaps, and the Big O time complexity. The modular design enables easy extension with additional sorting algorithms.

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
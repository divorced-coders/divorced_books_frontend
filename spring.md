<html>
<head>
    <title>Crypto Transaction Sorting</title>
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
        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
        /* Styles for progress bar */
        #progress-container {
            height: 300px;
            width: 30px;
            background-color: #f0f0f0;
            margin-right: 20px;
            position: relative;
        }
        #filler-bar {
            width: 100%;
            background-color: #4caf50;
            height: 0;
        }
</style>
</head>
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

<br>
    <h1>Crypto Transaction Sorting by Size</h1>
    <label for="symbolDropdown">Select Symbol:</label>
    <select id="symbolDropdown">
        <option value="BINANCE_SPOT_ETH_BTC">BINANCE_SPOT_ETH_BTC</option>
        <option value="BINANCE_SPOT_BTC_USDT">BINANCE_SPOT_BTC_USDT</option>
        <option value="COINBASE_SPOT_BCH_USD">COINBASE_SPOT_BCH_USD</option>
        <option value="COINBASE_SPOT_LINK_ETH">COINBASE_SPOT_LINK_ETH</option>
        <option value="BINANCE_SPOT_QTUM_ETH">BINANCE_SPOT_QTUM_ETH</option>
        <option value="COINBASE_SPOT_ETH_EUR">COINBASE_SPOT_ETH_EUR</option>
        <option value="BINANCE_SPOT_WTC_BTC">BINANCE_SPOT_WTC_BTC</option>
        <option value="COINBASE_SPOT_ETH_USD">COINBASE_SPOT_ETH_USD</option>
        <!-- Add more symbols as needed -->
    </select>
    <button onclick="sortTransactions('bubble')">Bubble Sort</button>
    <button onclick="sortTransactions('insertion')">Insertion Sort</button>
    <button onclick="sortTransactions('heap')">Heap Sort</button>
    <button onclick="sortTransactions('selection')">Selection Sort</button>
    <button onclick="sortTransactions('merge')">Merge Sort</button>
    <p id="message"></p>
    <div id="progress-container">
        <div id="filler-bar"></div>
    </div>
    <table id="transactionTable">
        <thead>
            <tr>
                <th>Transaction Size</th>
            </tr>
        </thead>
        <tbody id="transactionData">
            <!-- Transactions will be displayed here -->
        </tbody>
    </table>
    <p id="sortingTime"></p>
    <script>
        function sortTransactions(sortType) {
            const selectedSymbol = document.getElementById("symbolDropdown").value;
            const apiUrl = `http://localhost:8084/api/crypto/sort/${selectedSymbol}/${sortType}`;
            const fillerBar = document.getElementById('filler-bar');
            fillerBar.style.transition = 'height 0s'; // Disable transition initially
            fillerBar.style.height = '0%'; // Reset the filler bar to its initial state
            const startTime = performance.now(); // Start time before fetch
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data.message) {
                        const message = data.message;
                        console.log('Message:', message); // Display the message in the console
                        const messageElement = document.getElementById("message");
                        messageElement.textContent = `Message: ${message}`; // Display the message on the page
                    }
                    if (data && data.sortedTransactions) {
                        const endTime = performance.now(); // End time after fetch
                        console.log(data);
                        displayTransactions(data.sortedTransactions); // Display sorted transactions
                        // Animation time controller
                        fillerBar.style.transition = `height ${3 * (endTime - startTime)}ms linear`;
                        fillerBar.style.height = '100%';
                        displaySortingTime(endTime - startTime); // Display sorting time
                    }
                })
                .catch(error => {
                    console.error('There was a problem:', error);
                });
        }

        function displayTransactions(transactions) {
            const tableBody = document.getElementById("transactionData");
            tableBody.innerHTML = ''; // Clear previous data
            transactions.forEach(transaction => {
                const row = document.createElement("tr");
                const cell1 = document.createElement("td");
                // Display the transaction size in the first column
                cell1.textContent = transaction.size || '';
                row.appendChild(cell1);
                tableBody.appendChild(row);
            });
        }

        function displaySortingTime(timeTaken) {
            const sortingTimeElement = document.getElementById("sortingTime");
            sortingTimeElement.textContent = `Time taken to sort: ${timeTaken.toFixed(2)} milliseconds`;
        }
    </script>
</body>
</html>
--- 
layout: Post
Title: Spring
Authors: Krishiv Akshat Raymond
--- 
<html>
<head>
    <title>Crypto Transaction Sorting</title>
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

        #message {
            background-color: #dff0d8;
            padding: 10px;
            border-radius: 5px;
        }

        #sortingTime {
            background-color: #d9edf7;
            padding: 10px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <label for="symbolDropdown">Select Symbol:</label>
    <select id="symbolDropdown">
        <option value="BINANCE_SPOT_ETH_BTC">BINANCE_SPOT_ETH_BTC</option>
        <option value="BINANCE_SPOT_BTC_USDT">BINANCE_SPOT_BTC_USDT</option>
        <option value="COINBASE_SPOT_BCH_USD">COINBASE_SPOT_BCH_USD</option>
        <option value="COINBASE_SPOT_LINK_ETH">COINBASE_SPOT_LINK_ETH</option>
        <!-- Add more symbols as needed -->
    </select>

 <button onclick="sortTransactions('bubble')">Bubble Sort</button>
    <button onclick="sortTransactions('insertion')">Insertion Sort</button>
    <button onclick="sortTransactions('heap')">Heap Sort</button>

 <p id="message"></p>

 <table id="transactionTable">
        <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Transaction Size</th>
                <th>Transaction Time</th>
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
                // Replace 'transaction.id', 'transaction.size', 'transaction.time' with your actual property names
                cell1.textContent = transaction.id || ''; 
                const cell2 = document.createElement("td");
                cell2.textContent = transaction.size || ''; 
                const cell3 = document.createElement("td");
                cell3.textContent = transaction.time || ''; 
                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
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

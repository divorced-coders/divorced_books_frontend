<html>
<head>
    <title>Crypto Transaction Sorting Comparison</title>
    <style>
        /* Styles for table */
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
</head>
<body>
    <h1>Crypto Transaction Sorting Comparison</h1>
    <label for="symbolDropdown">Select Symbol:</label>
    <select id="symbolDropdown">
        <option value="BINANCE_SPOT_ETH_BTC">BINANCE_SPOT_ETH_BTC</option>
        <option value="BINANCE_SPOT_BTC_USDT">BINANCE_SPOT_BTC_USDT</option>
        <option value="COINBASE_SPOT_BCH_USD">COINBASE_SPOT_BCH_USD</option>
        <option value="COINBASE_SPOT_LINK_ETH">COINBASE_SPOT_LINK_ETH</option>
        <!-- Add more symbols as needed -->
    </select>
    <button onclick="selectSortingMethod('Bubble')">Bubble Sort</button>
    <button onclick="selectSortingMethod('Insertion')">Insertion Sort</button>
    <button onclick="selectSortingMethod('Heap')">Heap Sort</button>
    <button onclick="selectSortingMethod('Merge')">Merge Sort</button>
    <button onclick="selectSortingMethod('Selection')">Selection Sort</button>
    <!-- Add more buttons for other sorting methods as needed -->
    <p id="result" style="text-align: center; margin-top: 20px;"></p>
    <div class="filler-container">
        <div>
            <label id="algorithmLabel1">Algorithm: </label>
            <div id="filler-bar1" class="filler-bar filler-1"></div>
        </div>
        <div>
            <label id="algorithmLabel2">Algorithm: </label>
            <div id="filler-bar2" class="filler-bar"></div>
        </div>
    </div>
    <button onclick="resetTransition()">Reset Transition</button>
    <script>
        var selectedSortMethods = [];

        function selectSortingMethod(sortMethod) {
            if (selectedSortMethods.length < 2) {
                selectedSortMethods.push(sortMethod);
            }
            if (selectedSortMethods.length === 2) {
                compareSort(selectedSortMethods[0], selectedSortMethods[1]);
                selectedSortMethods = []; // Reset the selected sorting methods
            }
        }

        function compareSort(sortType1, sortType2) {
            const selectedSymbol = document.getElementById("symbolDropdown").value;
            const apiUrl = `http://localhost:8084/api/crypto/compareSort/${selectedSymbol}/${sortType1.toLowerCase()}/${sortType2.toLowerCase()}`;
            var fillerBar1 = document.getElementById('filler-bar1');
            var fillerBar2 = document.getElementById('filler-bar2');
            var algorithmLabel1 = document.getElementById('algorithmLabel1');
            var algorithmLabel2 = document.getElementById('algorithmLabel2');
            var resultElement = document.getElementById('result'); // New result element

            fillerBar1.style.transition = 'none';
            fillerBar2.style.transition = 'none';
            void fillerBar1.offsetWidth;
            void fillerBar2.offsetWidth;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data.algorithm1 && data.algorithm2) {
                        const executionTimeAlgorithm2 = parseFloat(data.algorithm2.match(/\d+(\.\d+)?/)[0]);
                        const executionTimeAlgorithm1 = parseFloat(data.algorithm1.match(/\d+(\.\d+)?/)[0]);

                        fillerBar1.style.transition = `height ${3 * executionTimeAlgorithm1}ms linear`;
                        fillerBar2.style.transition = `height ${3 * executionTimeAlgorithm2}ms linear`;
                        fillerBar1.style.height = '150px'; // Set the height to 150px for the first bar
                        fillerBar2.style.height = '150px';
                        algorithmLabel1.textContent = `Algorithm: ${sortType1}`;
                        algorithmLabel2.textContent = `Algorithm: ${sortType2}`;

                        // Compare execution times and display the result
                        if (executionTimeAlgorithm1 < executionTimeAlgorithm2) {
                            resultElement.textContent = `${sortType1} was faster than ${sortType2}`;
                        } else if (executionTimeAlgorithm1 > executionTimeAlgorithm2) {
                            resultElement.textContent = `${sortType2} was faster than ${sortType1}`;
                        } else {
                            resultElement.textContent = `${sortType1} and ${sortType2} had the same execution time`;
                        }
                    }
                })
                .catch(error => {
                    console.error('There was a problem:', error);
                });
        }

        function resetTransition() {
            var fillerBar1 = document.getElementById('filler-bar1');
            var fillerBar2 = document.getElementById('filler-bar2');
            var algorithmLabel1 = document.getElementById('algorithmLabel1');
            var algorithmLabel2 = document.getElementById('algorithmLabel2');
            var resultElement = document.getElementById('result'); // New result element

            fillerBar1.style.transition = 'none';
            fillerBar2.style.transition = 'none';
            void fillerBar1.offsetWidth;
            void fillerBar2.offsetWidth;

            // You can set the height to 0 or any other initial value as needed
            fillerBar1.style.height = '0';
            fillerBar2.style.height = '0';
            algorithmLabel1.textContent = 'Algorithm: ';
            algorithmLabel2.textContent = 'Algorithm: ';
            resultElement.textContent = ''; // Clear the result
            // After setting initial values, restore the transition
            fillerBar1.style.transition = `height ${3 * 550}ms linear`;
            fillerBar2.style.transition = `height ${3 * 550}ms linear`;
        }
    </script>
</body>
</html>

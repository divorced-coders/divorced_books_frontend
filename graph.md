<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Graph Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="graph-container">
        <canvas id="cryptoGraph"></canvas>
    </div>
    <button id="generateGraph">Generate New Graph</button>
    <p>Graph generated in <span id="generationTime">0</span> milliseconds</p>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
</body>
</html>
<style>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
}

#graph-container {
    width: 80%;
    max-width: 600px;
    margin-bottom: 20px;
}

#generateGraph {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>
<script>
const ctx = document.getElementById('cryptoGraph').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '$BTC Value',
            data: [],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value (USD)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(0, 123, 255)'
                }
            }
        }
    }
});

document.getElementById('generateGraph').addEventListener('click', generateRandomGraph);

function generateRandomGraph() {
    const startTime = performance.now();

    // Generating random dates for X-axis
    myChart.data.labels = generateRandomDates(10);
    myChart.data.datasets[0].data = Array.from({length: 10}, () => Math.floor(Math.random() * 1000));
    myChart.update();

    const endTime = performance.now();
    const generationTime = endTime - startTime;
    document.getElementById('generationTime').textContent = generationTime.toFixed(2);
}

function generateRandomDates(numDates) {
    let dates = [];
    let currentDate = new Date();
    for (let i = 0; i < numDates; i++) {
        let date = new Date(currentDate.getTime() - (numDates - i - 1) * 24 * 60 * 60 * 1000);
        dates.push(date.toLocaleDateString());
    }
    return dates;
}

generateRandomGraph(); // Generate an initial graph
</script>
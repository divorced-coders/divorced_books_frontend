document.getElementById('cryptoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the ticker symbol from the form
    let tickerSymbol = document.getElementById('tickerSymbol').value;

    // Call the Spring Boot API
    fetch(`http://localhost:8080/api/crypto/market/${tickerSymbol}`)
        .then(response => response.json())
        .then(data => {
            // Render the graph using the data
            renderGraph(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
});

function renderGraph(data) {
    // Use a charting library to render the graph
    // Example with Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // or any other type
        data: {
            // Format your data here
        },
        options: {
            // Chart options
        }
    });
}

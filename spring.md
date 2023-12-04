<script>
document.getElementById('cryptoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const symbolId = document.getElementById('symbolInput').value;
    fetch(`http://localhost:8080/api/crypto/market/${symbolId}`)
        .then(response => response.json())
        .then(data => {
            renderChart(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function renderChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const sizes = data.map(transaction => transaction.size);
    const chart = new Chart(ctx, {
        type: 'line', // or 'bar', 'pie', etc.
        data: {
            labels: sizes.map((_, index) => `Transaction ${index + 1}`),
            datasets: [{
                label: 'Transaction Sizes',
                data: sizes,
                // additional styling options
            }]
        },
        options: {
            // chart options
        }
    });
}
</script>
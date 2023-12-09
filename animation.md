<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
    }

    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

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

    #message {
      margin-top: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div id="container">
    <div id="progress-container">
      <div id="filler-bar"></div>
    </div>
    <div id="message"></div>
  </div>

  <script>
    // Extract execution time and sorting method from the API response
    const response = {
      "sortedTransactions": [{"size":0.0028},{"size":0.0028},{"size":0.0037},{"size":0.004},{"size":0.0109},{"size":0.0109},{"size":0.0182},{"size":0.1009},{"size":0.15},{"size":0.15},{"size":0.159},{"size":0.2087},{"size":0.2477},{"size":0.25},{"size":0.2681},{"size":0.2721},{"size":0.4198},{"size":0.5555},{"size":0.6499},{"size":1.0004}],
      "message": "Transactions sorted successfully by bubble. Comparisons: 190, Swaps: 102. Execution time: 4486 milliseconds"
    };

    const sortingMethod = response.message.match(/sorted successfully by (.+)./)[1];
    const executionTime = parseInt(response.message.match(/Execution time: (\d+) milliseconds/)[1]);
    const fillerBar = document.getElementById('filler-bar');
    const messageElement = document.getElementById('message');

    // Set the height of the filler bar based on the execution time using requestAnimationFrame
    let start;
    function animateBar(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / executionTime, 1);
      fillerBar.style.height = `${progress * 100}%`;

      if (progress < 1) {
        requestAnimationFrame(animateBar);
      } else {
        messageElement.innerText = `Sorting method: ${sortingMethod}\n${response.message}`;
      }
    }

    requestAnimationFrame(animateBar);
  </script>
</body>
</html>
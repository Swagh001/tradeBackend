const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/api', async (req, res) => {
  console.log("in");
  try {
    const response = await axios.get('https://www.nseindia.com/api/option-chain-indices', {
      params: req.query,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    console.log(response.data);
    res.set('Access-Control-Allow-Origin', '*');
    res.json(response.data);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});

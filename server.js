const express = require('express');
const path = require('path');

// Init Express
const app = express();
app.use(express.static(path.join(__dirname, './build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});
// Start point
app.listen(80, function () {
  console.log(`Node server started`);
});

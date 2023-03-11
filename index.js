const express = require('express');
const app = express();
const port = 3000;

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

app.get('/test', async(request, response) => {
    response.status(200).send("hello")
})
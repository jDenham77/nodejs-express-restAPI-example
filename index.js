const express = require('express');
const app = express();
const PORT = 8080; // Declare port 

//Returns middleware that only parses json and only looks at requests where the Content-Type 
// header matches the type option. Parse json in the body of the request with middleware
app.use(express.json())

// this will fire up API on the server to the declared PORT: 8080 above.
app.listen(
  PORT,
  () => console.log(`it's live on http://localhost:${PORT}`)
); 

//Creates the endpoint http://localhost:8080/tshirt automatically. Then we handle the request woth a callback function
app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'green',
    size: 'XXL'
  })
});

//Creates endpoint for post with an id. The value of id is available in req.params and data is in req.body
app.post('/tshirt/:id', (req, res) => {

  const { id } = req.params;
  const { logo }= req.body; // the logo... is contained inside the body

  // Check is there is a logo.
  if (!logo) {
    res.status(418).send({message: 'We need a logo!'})
  }

  // Make the post request and append the logo and ID
  res.send({
    tshirt: `Green with your ${logo} and ID of ${id}`,
  })
});


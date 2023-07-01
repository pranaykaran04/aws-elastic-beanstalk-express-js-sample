const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('This is Pranay'));
=======
app.get('/', (req, res) => res.send('Hello World! this is Pranay from Austin Branch'));
>>>>>>> a9d2dec4017feb62fd76eb9b5fd99ca1ee18196a

app.listen(port);
console.log(`App running on http://localhost:${port}`);

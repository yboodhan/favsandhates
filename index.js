//Require any needed modules
let express = require('express')

//Declare our app variable
let app = express()

//Declare routes using GET (R), POST (C), PUT (U), DELETE (D)
app.get('/', (req, res) => {
    res.send('<h1>STUB HOME PAGE</h1>')
})

//Listen on a port
app.listen(3000)
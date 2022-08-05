const connectToMongo = require('./db')
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

// Middle Ware to use JSON as a body in API
app.use(express.json());

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
   console.log(`EiNotebook App listening on port ${port}`)
})
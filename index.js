const express = require('express')
const app = express()

app.use(express.static('output'))
app.listen(80)
console.log('start')
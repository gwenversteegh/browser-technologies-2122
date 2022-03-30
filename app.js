const express = require('express')

const app = express()
const port = 2000

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Application started on port: ${port}`)
})

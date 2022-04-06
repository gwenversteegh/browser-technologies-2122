const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')


const app = express()
const port = 2000



// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", renderPagina)
app.post("/", verzenden)

app.get("/verzonden", renderVerzenden)

app.listen(port, () => {
    console.log(`Application started on port: ${port}`)
})

function renderPagina (req, res){

    res.render('index')
    
    }

    function verzenden (req, res){
        userInput = JSON.stringify(req.body)
    
        fs.writeFile('informatie.json', userInput, 'utf8', cb => {
        });
    
        res.redirect('/verzonden');
    }
    
    function renderVerzenden(req, res){
        fs.readFile('informatie.json', 'utf8', (err, data) => {
    
            // if (err) throw err;
            let ingevuldeData = JSON.parse(data);
    
            res.render('verzonden', {
                data: ingevuldeData
            })
        });
    
    }
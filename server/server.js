require('./config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('get usuario');
})


app.post('/usuario', function(req, res) {
    let body = req.body;
    console.log(body);
    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            msg: 'The name is mandatory'
        });

    } else {

        res.json({
                body
            }

        );
    }
})

//actualizar registros en db
app.put('/usuario:id', function(req, res) {
    // res.json('put usuario');
    let id = req.params.id;
    res.json({ id });
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
})



app.listen(process.env.PORT, () => {

    console.log('escuchando puerto => ' + process.env.PORT);
})
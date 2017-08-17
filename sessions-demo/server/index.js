const express = require('express'),
    bodyParser = require('body-parser'),
    corse = require('cors'),
    app = express(),
    port = 3000

    // ========== TOP LEVEL MIDDLEWARE ========== //

    app.use(bodyParser.json())
    app.use(cors())













    app.listen(port, ()=> console.log(`Listening on port ${port}`))
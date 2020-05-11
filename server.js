const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 8080;
app.use(express.json())
app.use(cors())



app.post('/loginauth', (req, res) => {
const {username} = req.body

console.log(JSON.stringify(req.body))
    res.send({ status: ""+username+" is verified"})
});


app.listen(port, () => console.log(`Example app listening on port `, port, `!`))
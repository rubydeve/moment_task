const express = require('express');
const path = require('path');
const app = express()
const port = 3000
const moment = require('moment');

app.use(express.static(path.join('./assets')));

app.set("views", path.join(__dirname));
app.set("view engine", "pug");
app.get('/', (req, res) => {
	res.render("index", { title: "DateTime",moment: moment().toDate() });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app

var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var fileUpload = require("express-fileupload")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

//Necesario para usar fileUpload.
//El tutorial recomendaba usar morgan, pero funciona de todas formas.
app.use(fileUpload({
    createParentPath: true
}));

var Users = require("./routes/Users")
var Modulos = require("./routes/Modulo")
var Courses = require("./routes/Courses")

app.use("/courses", Courses) //ruta de cursos
app.use("/modulos", Modulos)
app.use("/users", Users)


app.listen(port, () => {
	console.log("Server is running on port: " + port)
})
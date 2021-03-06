// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// ====================================
//             ROUTING
// ====================================
// app.get("/", function(err, res){
// 	res.sendFile(path.join(__dirname + "/home.html"));
// })

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// ====================================
//             LISTENER
// ====================================

app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});

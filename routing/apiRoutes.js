// ====================================
// LOAD DATA
// ====================================

var tutors = require("../data/tutor");

// ====================================
// ROUTING
// ====================================

module.exports = function(app) {
	app.get("/api/tutors", function(req, res){
		res.json(tutors);
	});

	app.post("/api/", function(req, res){
		
	})
}

// =========================================
// PSUEDO CODE
// =========================================
// I want to post tutor options based on whether that tutor object contains certain 
// attributes, s.a. hourly rate and language- I'll most likely have to use if statements 
// in the routing for this. 
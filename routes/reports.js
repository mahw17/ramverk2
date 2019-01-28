var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");

// Import class object
var Report = require('../src/Report/Report');
let report = new Report();

var Security = require('../src/Security/Security');
let security = new Security();




/* GET specific report. */
router.get('/:report', function(req, res, next) {

    report.get(req.params.report, function(msg) {
        res.json(msg);
    });
});



/* Post/add a new report. */
router.post("/", function(req, res) {
    security.checkToken(req, res, function() {
        report.add(req.body.route, req.body.title, req.body.content, function(msg) {
            res.json(msg);
        });
    });
});


module.exports = router;

var express = require('express');
var router = express.Router();

// Import class object
var User = require('../src/User/User');
let user = new User();

var Security = require('../src/Security/Security');
let security = new Security();



/* Route for retrieving validation token */
router.post('/:email/:pwd', function(req, res, next) {

    user.get(req.params.email, function(err, row){ // PART1 - Get user password from db
        if (err) {
            return res.json({err});
        } else if (typeof row === 'undefined') {
            // Return error message if user email doesn't exists
            return res.json({
                result:false,
                err:"User does not exist."
            });
        }

        security.checkPassword(req.params.pwd, row.password, function(result) { // PART2 - Check user input password against db password
            if (result) {

                security.createToken(req.params.email, function(token){ // PART3 - If password match => Get token
                    // Return token
                    return res.json({
                        result:true,
                        token:token
                    });

                });
            } else {
                // Return error message if user password doesn't match
                return res.json({
                    result:false,
                    err:"Password not valid"
                });
            }
        })

    });
});


module.exports = router;

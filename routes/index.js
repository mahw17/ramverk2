var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const data = {
        result:true,
        name: "Marcus Holmersson",
        akronym: "mahw17",
        email: "mahw17@student.bth.se",
        city: "Jämjö, Blekinge",
        description: "<span>Produktionstekniker med ambition<br>att hitta en ny plattform att<br>sprida information och skapa<br>enklare applikationer på</span>",
    };

    res.json(data);
});

module.exports = router;

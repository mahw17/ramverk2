var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const data = {
        result:true,
        name: "Marcus Holmersson",
        city: "Jämjö, Blekinge",
        description: "Produktionstekniker med ambition att hitta en ny plattform att sprida information och skapa enklare applikationer på.",
    };

    res.json(data);
});

module.exports = router;

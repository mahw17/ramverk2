var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/kmom01', function(req, res, next) {
    const questions = [
        {
            question: "Berätta utförligt om din syn på nodejs backend ramverk och berätta vilket ramverk du valde och varför.",
            answer: "Jag gick igenom en del av de ramverk som var listade men jag djupdök inte ner i detalj i vad som skiljde de åt. Det ända jag kände igen var Express och då det var även detta ramverk som används i övningarna var det ett naturligt val att använda detta."
        },
        {
            question: "Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?",
            answer: "Jag började med aatt kolla 'Express application generator', då jag märkte att det som skiljde i katalogstrukturen gentemot övningsexemplets struktur var katalogerna bin, public och views. Då denna applikationen inte kommer ha någon frontend förstod jag inte vitsen med att ha dessa kataloger med och valde att använda samma struktur som i övningsexemplet."
        },
        {
            question: "Använde du någon form av scaffolding som ditt valda ramverk erbjuder?",
            answer: "Så som jag förstod scaffolding från kursen Ramverk1 körs det då ett script som kopiera och integrerar en färdig modul/paket in i din applikation. På det sättet uppfattade jag inte att jag gjorde i detta kursmoment. Det var i så fall när 'npm init' kördes som skulle kunna påminna om scaffolding."
        },
        {
            question: "Vad är din TIL för detta kmom?",
            answer: "Jag har ju tidigare använt mig av digital ocean för att skaffa mig en egen 'publik' server, men iom med övningsuppgiften lärde jag mig betydligt mer om setupen och fick en bättre förståelse. I övrigt var det roligt att komma tillbaka til JS-världen då det känns som jag kommit ifrån den."
        }
    ];

    res.json({ data: questions });
});

module.exports = router;

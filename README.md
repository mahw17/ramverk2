Course page Ramverk2 - v2 @BTH
========================================
[![Build Status](https://travis-ci.com/mahw17/ramverk2.svg?branch=master)](https://travis-ci.com/mahw17/ramverk2)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mahw17/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mahw17/ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/mahw17/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/mahw17/ramverk2/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/mahw17/ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mahw17/ramverk2/build-status/master)

Part of course Ramverk2 (framework), @BTH 2019.

KMOM01 -    Setup Express backend API

KMOM02 -    Added password cryptation and JWT token requiered to backen, draft of frontend

KMOM03 -    Unittest, Docker and forms


# ME-API documentation

## API token/User login
### To request an API token
`POST /login`

Request body according to:
`{
    "email":    ?,
    "pwd":    ?
}`

Result:
`{
    "result":true,
    "token": "sdfASDdfsasd464dsafsd3544sd"
}`
Errors:
`{
    "result":false,
    "err": "User does not exist."
}`
Or
`{
    "result":false,
    "err": "Password not valid."
}`

## Register
### To add a new user
`POST /register`

Request body according to:
`{
    "email":    ?,
    "pwd":    ?
}`

Result:
`{
    "result":true,
    "msg": "User added successfully."
}`
Errors:
`{
    "result":false,
    "err": db-error notification of some kind...
}`


## Report
### To get an existing report
`GET /report/:report`
Result:
`{
    "result":true,
    "data": db row info...
}`
Errors:
`{
    "result":false,
    "err": db-error notification of some kind...
}`

### To add a report
`Post /report`
Request body according to:
`{
    "route":    ?,
    "title":    ?,
    "content":  ?
}`

Result:
`{
    "result":true,
    "data": "Report added successfully."
}`
Errors:
`{
    "result":false,
    "err": db-error notification of some kind...
}`

/**
 * A module for handling a user
 *
 * @module
 */
"use strict";

class User {
    /**
     * @constructor
     *
     * @param {string} folder - Folder location of sqlite-db.
     */
    constructor(folder = './db/texts.sqlite') {
        const sqlite3 = require('sqlite3').verbose();
        this.db = new sqlite3.Database(folder);

    }

    /**
     * Get user properties.
     *
     * @param {string} email - The user email.
     * @param {string} pwd - The user password.
     *
     * @returns {function} A callback function.
     */
    get(email, next) {
        this.db.get("SELECT password FROM users WHERE email = ?",
        email,
        (err, row) => {
            // Return error
            // if (err) {
            //     return next(err);
            // }

            return next(err, row);
        });
    }


    /**
     * Add a new user.
     *
     * @param {string} email - The user email.
     * @param {string} pwd - The user password.
     *
     * @returns {function} A callback function.
     */
    add(email, pwd, next) {
        this.db.run("INSERT INTO users (email, password) VALUES (?, ?)",
        email,
        pwd,
        (err) => {
            if (err) {
                return next({result:false,err:err});
            }

            return next({result:true,msg:"User added successfully."});
        });
    }


}



// Export module
module.exports = User;

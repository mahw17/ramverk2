/**
 * A module for handling a report
 *
 * @module
 */
"use strict";

class Report {
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
     * Get a specific report.
     *
     * @param {string} report - The route of the report.
     *
     * @returns {function} A callback function.
     */
    get(report, next) {
        this.db.get("SELECT title, content FROM reports WHERE route = ?",
        report,
        (err, rows) => {
            if (err) {
                return next({result:false,err:err});
            }

            return next({result:true,data:rows});
        });
    }


    /**
     * Add a new report.
     *
     * @param {string} route - The route of the report.
     * @param {string} title - The title of the report.
     * @param {string} content - The content of the report.
     *
     * @returns {function} A callback function.
     */
    add(route, title, content, next) {
        this.db.run("INSERT INTO reports (route, title, content) VALUES (?, ?, ?)",
        route,
        title,
        content,
        (err) => {
            if (err) {
                return next({result:false,err:err});
            }

            return next({result:true, msg:"Report added successfully."});
        });
    }

}



// Export module
module.exports = Report;

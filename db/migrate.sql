CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    route VARCHAR(255) NOT NULL,
    title VARCHAR(60) NOT NULL,
    content VARCHAR(2550) NOT NULL,
    UNIQUE(route)
);


-- CREATE TABLE IF NOT EXISTS reports (route VARCHAR(255) NOT NULL, title VARCHAR(60) NOT NULL, content VARCHAR(2550) NOT NULL, UNIQUE(route));

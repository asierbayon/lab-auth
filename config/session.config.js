const expressSession = require('express-session');

const connectMongo = require('connect-mongo');

const mongoose = require('mongoose');

const MongoStore = connectMongo(expressSession)


// Iteration 2: configure session & enable mongo session store

const session = expressSession ({
    secret: process.env.SESSION_SECRET,
    resave: true,
    cookie: {
        secure: process.env.SESSION_SECURE,
        httpOnly: true,
        maxAge: process.env.SESSION_MAXAGE || 60000
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: process.env.SESSION_MAXAGE || 60000 // que es esto?
    })
})
module.exports = session;
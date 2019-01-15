module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: `mongodb://${process.env.DB_USER}:${
        process.env.DB_PASSWORD
    }@ds255754.mlab.com:55754/emaily-dev-db`,
    cookieKey: process.env.COOKIE_KEY,
};

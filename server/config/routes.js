// const users = require('../controllers/user_controller.js');

// Require statments
var mongoose = require('mongoose');
var listings = require('../controllers/listings.js');
var locations = require('../controllers/locations.js');
var conversations = require('../controllers/conversations.js');
var reservations = require('../controllers/reservations.js');
var reviews = require('../controllers/reviews.js');
// var users = require('../controllers/users.js');
const users = require('../controllers/user_controller.js');

// Model imports
var Listing = mongoose.model('Listing');
var Location = mongoose.model('Location');
var Conversation = mongoose.model('Conversation');
var Reservation = mongoose.model('Reservation');
var Review = mongoose.model('Review');
var User = mongoose.model('User');

module.exports = function (app) {
    // ----------------
    // - GET requests -
    // ----------------

    // Users
    app.get('/api/showUser', function(req, res){
        users.getCurrent(req, res);
    })

    app.get('/api/logout', function(req, res){
        users.logout(req, res);
    })

    app.get('/logout', users.logout);
    app.get('/currentUser', users.current);
    app.post('/register', users.register);
    app.post('/login', users.login);

    // Listings
    app.get('/api/currentUser/listings', function(req, res){
        listings.findAllUser(req, res);
    })

    app.get('/api/currentUser/listing/:id', function(req, res) {
        listings.findOne(req, res);
    })

    // Reservations
    app.get('/api/currentUser/reservations/all', function(req, res){
        reservations.show(req, res);
    })

    app.get('/api/currentUser/reservations/:id', function(req, res) {
        reservations.find(req, res);
    })

    // app.get('/listings', listings.all);
    // app.get('/myListings', listings.allUserListings);
    // app.post('/listings/search', listings.filter);
    // app.post('/newListing', listings.add);
    // app.post('/listing/edit', listenings.edit);
    // app.post('/listing/destroy', listenings.destroy);

    // -----------------
    // - POST requests -
    // -----------------

    // Users
    app.post('/api/register', function(req, res) {
        users.register(req, res);
    })

    app.post('/api/login', function(req, res){
        users.login(req, res);
    })

    app.post('/api/updateUser/:id', function(req, res){
        users.update(req, res);
    })

    app.post('/api/userHost/:id', function(req, res){
        users.regHost(req, res);
    })

    // Listings
    app.post('/api/createListing', function(req, res){
        listings.create(req, res);
    })

    app.post('/api/currentUser/listings/:id/update', function(req, res){
        listings.update(req, res);
    })

    // Reservations
    app.post('/api/currentUser/listings/:id/createReserve', function(req, res) {
        reservations.create(req, res);
    })

    app.post('/api/currentUser/listings/:id/approve', function(req, res) {
        reservations.approve(req, res);
    })

    app.post('/api/currentUser/reservations/:id/update', function (req, res) {
        reservations.update(req, res);
    })

    // Reviews
    app.post('/api/currentUser/listings/:id/newReview', function(req, res) {
        reviews.create(req, res);
    })

    // Conversations
    // app.post('/api/currentUser/listings/:id/newMessage', function(req, res))

    // Catch-all route
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./frontend/dist/index.html'));
    })

}
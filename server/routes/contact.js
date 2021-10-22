/*
File Name: server/routes/contact.js
Student's Name: Gaeun Kim
StudentID: 301157178
Date: 2021.10.21
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List Page - READ Operation*/
router.get('/', contactController.displayContactList);

/* GET Route for the displaying Add Page - CREATE Operation*/
router.get('/add', requireAuth, contactController.displayAddPage);

/* GET Route for the processing Add Page - CREATE Operation*/ 
router.post('/add', requireAuth, contactController.processAddPage);  

/* GET Route for the displaying Update Page - UPDATE Operation*/
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

/* GET Route for the processing Update Page - UPDATE Operation*/   
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

/* GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
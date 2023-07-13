const express = require('express');
const path = require('path')
const router = express.Router();

const bookingController = require('../controllers/booking')


router.get('/bookUser', bookingController.getBookUserScreen);



router.post('/submit-booked-user', bookingController.postUserDetails);

router.post('/delete-added-user', bookingController.deleteAddedUser)




module.exports = router;
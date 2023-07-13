
const path = require('path');

const Book = require('../models/booking')



exports.getBookUserScreen = (req, res, next) => {

    Book.findAll().then((data) => {
        console.log(data);
        var wholeData = "";
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].dataValues.id)
            var singleData = `<form action="/booking/delete-added-user"  method="POST">
            <input type="hidden" value ="${data[i].dataValues.id}" name="userid">
           <label> 
          ${data[i].dataValues.name} ${data[i].dataValues.email}
          ${data[i].dataValues.phoneno}</label>
      
        <button type="submit">DeleteUser</button>
           </form><br>`
            wholeData += singleData
        }

        res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Registration Form</title>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        
        <body>
          <div class="outer-box">
            <div class="inner-box">
              <header>
                <h2>Book a call</h2>
        
                <p>
                  Book a call slot and our representatives call you with in 1 hour of
                  selected time
                </p>
                <hr />
              </header>
              <main class="sign-up">
                <form class="form" action="/booking/submit-booked-user" id="sign-up-form" method="POST">
                  <p>
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name " required />
                  </p>
                  <p>
                    <label for="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder="Enter your Email id " required />
                  </p>
                  <p>
                    <label for="phone">Phone no:</label>
                    <input type="number" name="phone" id="phone" placeholder="Enter your phone no" />
                  </p>
        
        
        
                  <button type="submit">Submit</button>
        
                </form>
              </main>
            </div>
            <div id="get-booked-user" style="display: inline">
             ${wholeData}
            </div>
            <div id="edit-button-id"></div>
          </div>
        
          <script src="/css/storedata.js"> </script>
        
        </body>
        
        </html>`)

    })


}
exports.deleteAddedUser = (req, res, next) => {
    const delId = req.body.userid;
    console.log(delId)
    Book.findByPk(delId).then((result) => {

        return result.destroy();


    }).then((result) => {
        res.redirect('/booking/bookUser')
    }).catch(err => console.log(err))

}




exports.postUserDetails = (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    console.log(name)
    Book.create({
        name: name,
        email: email,
        phoneno: phone,

    }).
        then(result =>

            res.redirect('/booking/bookUser'))
        .catch(err => console.log(err))

}





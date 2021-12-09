const express = require( 'express' );
const UserRouter = express.Router();
const {UsersController} = require( './../controllers/usersController' );

//!-----------Routes----------------------------------------------------------------

UserRouter.route("/register").post(UsersController.createNewUser)

UserRouter.route("/login").post(UsersController.login)


//!-----------Routes----------------------------------------------------------------


module.exports = { UserRouter };
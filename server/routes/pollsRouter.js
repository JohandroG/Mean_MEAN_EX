const express = require( 'express' );
const PollRouter = express.Router();
const {PollsController} = require( './../controllers/pollsController' );

//!-----------Routes----------------------------------------------------------------

PollRouter.route('/create').post(PollsController.createPoll);

PollRouter.route('/vote1').post(PollsController.increment1);

PollRouter.route('/vote2').put(PollsController.increment2);

PollRouter.route('/vote3').put(PollsController.increment3);

PollRouter.route('/vote4').put(PollsController.increment4);

PollRouter.route('/find/:id').get(PollsController.findPoll);

PollRouter.route('/all').get(PollsController.requestall);

PollRouter.route('/delete/:id').delete(PollsController.deletePoll);

//!-----------Routes----------------------------------------------------------------


module.exports = { PollRouter };
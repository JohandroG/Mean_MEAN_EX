const {PollModel} = require( './../models/pollModel' );
const bcrypt = require( 'bcrypt' );

const PollsController = {


    createPoll: function (req,res) {
        
        question = req.body.question;
        creator = req.body.creator;
        creatorname = req.body.creatorname;
        created = new Date();
        option1 = req.body.option1;
        option2 = req.body.option2;
        option3 = req.body.option3;
        option4 = req.body.option4;
        vote1 = 0;
        vote2 = 0;
        vote3 = 0;
        vote4 = 0;

        newPoll = {
            question,
            creator,
            creatorname,
            created,
            option1,
            option2,
            option3,
            option4,
            vote1,
            vote2,
            vote3,
            vote4,
        }
        if(question && creator && option1 && option2 && option3 && option4){
            PollModel.createPoll(newPoll)
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                console.log(err);  //!-----------------------------------------
                res.status(406).end()
            })
        }
        else{
            res.status( 406 ).end();
        }
    },

    increment1: function (req,res) {
        let _id = req.body.id;
        

        PollModel.pollById(_id)
        .then(data=>{
            if(data === null){
                res.statusMessage = "You can not edit an option that doesn't exists";
                res.status( 404 ).end();
            }
            else{
                    vote = {}
                    voteValue = data.vote1;
                    voteupdated = voteValue + 1;
                    vote.vote1 = voteupdated //-----------------------

                    PollModel.updatevote(data._id,vote)
                    .then(data2=>{
                        res.status(200).json(data2.vote1)
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
            })
        .catch(err =>{
            console.log(err);
        })
    },

    increment2: function (req,res) {
        _id = req.body.id;

        PollModel.pollById(_id)
        .then(data=>{
            if(data === null){
                res.statusMessage = "You can not edit an option that doesn't exists";
                res.status( 404 ).end();
            }
            else{
                    vote = {}
                    voteValue = data.vote2;
                    voteupdated = voteValue + 1;
                    vote.vote2 = voteupdated //-----------------------

                    PollModel.updatevote(data._id,vote)
                    .then(data=>{
                        res.status(200).json(data.vote2)
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
            })
        .catch(err =>{
            console.log(err);
        })
    },

    increment3: function (req,res) {
        _id = req.body.id;

        PollModel.pollById(_id)
        .then(data=>{
            if(data === null){
                res.statusMessage = "You can not edit an option that doesn't exists";
                res.status( 404 ).end();
            }
            else{
                    vote = {}
                    voteValue = data.vote3;
                    voteupdated = voteValue + 1;
                    vote.vote3 = voteupdated //-----------------------

                    PollModel.updatevote(data._id,vote)
                    .then(data=>{
                        res.status(200).json(data.vote3)
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
            })
        .catch(err =>{
            console.log(err);
        })
    },

    increment4: function (req,res) {
        _id = req.body.id;

        PollModel.pollById(_id)
        .then(data=>{
            if(data === null){
                res.statusMessage = "You can not edit an option that doesn't exists";
                res.status( 404 ).end();
            }
            else{
                    vote = {}
                    voteValue = data.vote4;
                    voteupdated = voteValue + 1;
                    vote.vote4 = voteupdated //-----------------------

                    PollModel.updatevote(data._id,vote)
                    .then(data=>{
                        res.status(200).json(data.vote4)
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
            })
        .catch(err =>{
            console.log(err);
        })
    },

    findPoll: function (req,res) {
        let _id = req.params.id;
        PollModel.pollById(_id)

        .then(data=>{
            if(data === null){
                res.statusMessage = "This poll doesn't exists";
                res.status( 404 ).end();
            }
            else{
                res.status(200).json(data)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },

    requestall: function(req, res){
        PollModel
        .allPolls()
        .then(data =>{
            res.status(200).json(data);
        })
    },

    deletePoll: function(req, res){
        let _id = req.params.id;

        PollModel
        .pollById(_id)
        .then(poll =>{

            if(poll === null){
                res.statusMessage = "You can not delete a poll that doesn't exists";
                res.status( 404 ).end();
            }
            else{
                PollModel
                        .deletepoll( _id )
                        .then( result => {
                            res.status( 204 ).end();
                        });
            }

        })
    }






}

module.exports = { PollsController };
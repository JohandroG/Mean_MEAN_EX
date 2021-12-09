//* REQUIRES
const mongoose = require('mongoose');


//*----------------CONSTRUCTOR-------------------------------------------------------------------------------------
const PollSchema = new mongoose.Schema({

    question :{
        type : String,
        required : true,
        minlength : 8,
        maxlength : 200
    },

    creator :{
        type : String,
        required : true,
    },

    created :{
        type : Date,
        required : true,
    },

    creatorname :{
        type : String,
        required : true,
    },

    option1 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 100
    },

    option2 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 100
    },

    option3 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 100
    },

    option4 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 100
    },

    vote1 : {
        type : Number,
        required : true,
    },

    vote2 : {
        type : Number,
        required : true,
    },

    vote3 : {
        type : Number,
        required : true,
    },

    vote4 : {
        type : Number,
        required : true,
    }


});
//*----------------CONSTRUCTOR END----------------------------------------------------------------------------------

//*CONNECT COLLECTION
const Poll = mongoose.model( 'polls', PollSchema );


//*----------------QUERYS------------------------------------------------------------------------------------------

//?----------------(QUERYS FOR USERS)----------------------------
const PollModel = {

    allPolls : function(){
        return Poll.find();
    },
    createPoll : function (newPoll) {
        return Poll.create(newPoll) 
    },
    pollById : function( _id ){
        return Poll.findOne({ _id });
    },
    updatevote: function(_id , voteupdated) {
        return Poll.findOneAndUpdate({_id}, {$set : voteupdated}, {new:true})
    },
    deletepoll : function( _id ){
        return Poll.remove({ _id });
    }

    //TODO INSERT MORE QUERYS

}

//*----------------QUERYS END--------------------------------------------------------------------------------------

//* EXPORT MODEL (QUERY OBJECTS)
module.exports = {PollModel};
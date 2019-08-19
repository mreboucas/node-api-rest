'use_scrict';

var mongoose = require('mongoose'),
    
MessageModel = mongoose.model('Messages');

exports.list_all_messages = function (req, res) {

    MessageModel.find({}, function(err, msg){

        if (err) {
            res.send(err);
        }

        res.json(msg)

    })

};

exports.create_a_message = function (req, res) {

    var new_msg = new MessageModel(req.body);

    new_msg.save(function(err, msg){

        if (err) {
            res.send(err);
        }

        res.json(msg)

    });


    //exports.read_a_message = function(req, res) {

};
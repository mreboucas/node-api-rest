'use strict';

module.export= function(app) {

    var messageController = require('../controllers/msgController');

    //Msg Controller routes

    app.route('/messages')
        .get(messageController.list_all_messages)
        .post(messageController.create_a_message);
    
    app.route('/messages/:msgId')
        .get(messsageController.read_a_message)
        .put(messageController.update_a_message)
        .delete(messageController.delete_a_message);

}
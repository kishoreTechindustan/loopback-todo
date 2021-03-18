'use strict';

module.exports = function (Todo) {


    //validation
    Todo.validatesPresenceOf('task');
    Todo.validatesLengthOf('task', { min: 500, message: { min: 'Task must be 500 characters' } });

};

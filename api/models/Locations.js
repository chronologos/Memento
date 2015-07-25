/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //connection: 'mongodbserver',
	connection: 'localDiskDb',
  attributes: {
    location: {
      type: 'string'
    },

    abb: {
      type: 'string'
    },//abbreviation

    stockphoto: {
      type: 'string'
    },//located in assets folder

    description: {
      type: 'string'
    },

  }
};

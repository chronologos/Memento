/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		location: {
			type: 'string'
		},

		time: {
			type: 'string'
		},

		date: {
			type: 'string'
		},

		UUID {
			type: 'integer',
			unique: true
		}
	}
};


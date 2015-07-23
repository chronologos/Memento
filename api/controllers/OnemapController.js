/**
* OnemapController
*
* @description :: Server-side logic for managing onemaps
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	view: function (req, res) {
		res.locals.layout = 'layoutonemap'; //change layout for visible navbar
		return res.view('onemap');
	}
};

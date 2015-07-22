/**
 * OnemapController
 *
 * @description :: Server-side logic for managing onemaps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	view: function (req, res) {
			return res.view('onemap')
		};
	}
};

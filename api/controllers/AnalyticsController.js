/**
* AnalyticsController
*
* @description :: Server-side logic for managing analytics
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	view: function(req,res){
		res.locals.layout = 'layoutanalytics'; //change layout so that it works on iOS
		return res.view('analytics');
	}
};

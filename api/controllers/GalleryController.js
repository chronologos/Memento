/**
* GalleryController
*
* @description :: Server-side logic for managing galleries
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	view: function (req, res) {
		var fs = require('fs');
		var this_location = req.params.all().location;
		fs.readdir(require('path').join(__dirname,'/../../.tmp/public/uploads/',this_location), function (err, files) {
			console.log(require('path').join(__dirname,'/../../.tmp/public/uploads',this_location));
			console.log(files);
			res.locals.layout = 'layout1'; //change layout so that it works on iOS
			return res.view('gallery', {galleryfiles: files, location: this_location})
		});
	},

	viewalt: function (req, res) {
		var fs = require('fs');
		var this_location = req.params.all().location;
		fs.readdir(require('path').join(__dirname,'/../../.tmp/public/uploads/',this_location), function (err, files) {
			console.log(require('path').join(__dirname,'/../../.tmp/public/uploads',this_location));
			console.log(files);
			res.locals.layout = 'layout2'; //change layout so that it works on iOS
			return res.view('gallery', {galleryfiles: files, location: this_location})
		});
	}
}

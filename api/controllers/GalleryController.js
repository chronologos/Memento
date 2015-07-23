/**
* GalleryController
*
* @description :: Server-side logic for managing galleries
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	function endsWith(str, suffix) {
		return str.indexOf(suffix, str.length - suffix.length) !== -1;
	} // function to pass to view to verify files are jpg
	view: function (req, res) {
		var fs = require('fs');
		var this_location = req.params.all().location;
		fs.readdir(require('path').join(__dirname,'/../../.tmp/public/uploads/',this_location), function (err, files) {
			console.log(require('path').join(__dirname,'/../../.tmp/public/uploads',this_location));
			console.log(files);
			res.locals.layout = 'layout1'; //change layout so that it works on iOS
			return res.view('gallery', {galleryfiles: files, location: this_location, endsWith: endsWith})
		});
	},

	viewalt: function (req, res) {
		var fs = require('fs');
		var this_location = req.params.all().location;
		fs.readdir(require('path').join(__dirname,'/../../.tmp/public/uploads/',this_location), function (err, files) {
			console.log(require('path').join(__dirname,'/../../.tmp/public/uploads',this_location));
			console.log(files);
			res.locals.layout = 'layout2'; //change layout so that it works on iOS
			return res.view('gallery', {galleryfiles: files, location: this_location, endsWith: endsWith})
		});
	}
}

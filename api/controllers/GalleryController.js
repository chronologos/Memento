/**
* GalleryController
*
* @description :: Server-side logic for managing galleries
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

	view: function (req, res) {
		var fs = require('fs');
		var this_location = req.params.all().location; //get abbreviated location from url get request
		fs.readdir(require('path').join(__dirname,'/../../.tmp/public/uploads/',this_location), function (err, files) {
			console.log(require('path').join(__dirname,'/../../.tmp/public/uploads',this_location));

			Locations.find({abb: [this_location]},function(err,someModel){
				console.log(someModel);
				var locationinfo =  [someModel[0].location,someModel[0].stockphoto,someModel[0].description]
				console.log(locationinfo);

				res.locals.layout = 'layout1';
				console.log(files);
				return res.view('gallery', {galleryfiles: files, location: this_location, locationinfo: locationinfo})

			});
		});
	},

	viewalt: function (req, res) {
		var fs = require('fs');
		var this_location = req.params.all().location; //get abbreviated location from url get request
		fs.readdir(require('path').join(__dirname,'/../../.tmp/public/uploads/',this_location), function (err, files) {
			console.log(require('path').join(__dirname,'/../../.tmp/public/uploads',this_location));

			Locations.find({abb: [this_location]},function(err,someModel){
				console.log(someModel);
				var locationinfo =  [someModel[0].location,someModel[0].stockphoto,someModel[0].description]
				console.log(locationinfo);

				res.locals.layout = 'layout2';
				console.log(files);
				return res.view('gallery', {galleryfiles: files, location: this_location, locationinfo: locationinfo})

			});
		});
	},
}

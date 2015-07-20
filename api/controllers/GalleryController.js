/**
* GalleryController
*
* @description :: Server-side logic for managing galleries
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	view: function (req, res) {
		var fs = require('fs');
		// fs.readdir(require('path').join(__dirname,'/../../.tmp/public/uploads'), function (err, files) {
		fs.readdir('http://yiyantay.me/uploads'), function (err, files) {
			console.log(files);
			return res.view('gallery', {galleryfiles: files})
		});
	}
}

/**
 * UploadController
 *
 * @description :: Server-side logic for managing Uploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



	/**
	 * `UploadController.upld()`
	 */
	upld: function (req, res) {
		var params = req.params.all();
		console.log(params);
		var this_location = params.location;
		console.log(this_location);
		if (typeof this_location == "string"){
			req.file('photo').upload({ dirname:require('path').join('./',this_location)},function (err, files) {
				if (err){
					return res.serverError(err);
				}
				return res.view('homepage',{

					// not working, need implementation of flash messages

					message: files.length + ' file(s) uploaded successfully!',
				       files: files
				}
				);
			});
		}else{
			console.log('not string')
		}
	}
};

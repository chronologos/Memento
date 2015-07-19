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
		console.log(req.file);
		req.file('photo').upload({ dirname: '.'},function (err, files) {
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
	}
};

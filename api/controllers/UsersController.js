/**
* UsersController
*
* @description :: Server-side logic for managing users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
  retrieve: function(req,res){
    var columns= Array.apply(null, Array(25)).map(Number.prototype.valueOf,0);

    var columns2=Array.apply(null, Array(25)).map(Number.prototype.valueOf,0);
    Users.find({location: "istana"},function(err,someModel){
      console.log(someModel);
      columns[0]="data1";
      console.log(columns); //last 7 day data

      for (var i =0; i<someModel.length; i++){
        var result = JSON.stringify(someModel[i].createdAt);
        // console.log(result);
        // console.log(typeof(result));
        var myRegExp = /[T]([\d][\d])/g;
        var match = myRegExp.exec(result);
        var returnthis = parseInt(match[0].substring(1,3));
        // console.log(returnthis);
        columns[returnthis] += 1;

      }


    });

    Users.find({location: "itecollegecentral"},function(err,someModel){

      columns2[0]="data2";
      for (var i =0; i<someModel.length; i++){
        var result = JSON.stringify(someModel[i].createdAt);
        var myRegExp = /[T]([\d][\d])/g;
        var match = myRegExp.exec(result);
        var returnthis = parseInt(match[0].substring(1,3));

        columns2[returnthis] += 1;

      }


    });

    console.log(columns);
    console.log(columns2);
    res.locals.layout = 'layoutanalytics'; //change layout so that it works on iOS
    return res.view('analytics',{myData:columns, myData2:columns2});
  }

};

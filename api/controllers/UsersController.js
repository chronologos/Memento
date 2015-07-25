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
    var columns3=Array.apply(null, Array(25)).map(Number.prototype.valueOf,0);
    var columns4=Array.apply(null, Array(25)).map(Number.prototype.valueOf,0);
    Users.find({location: ["sri","itecollegecentral","gardens","kranji"]},function(err,someModel){
      columns[0]="data1";
      columns2[0]="data2";
      columns3[0]="data3";
      columns4[0]="data4";
      for (var i =0; i<someModel.length; i++){
        var result = JSON.stringify(someModel[i].createdAt);
        console.log(result);
        // console.log(typeof(result));
        var myRegExp = /[T]([\d][\d])/g;
        var match = myRegExp.exec(result);
        var returnthis = parseInt(match[0].substring(1,3));
        console.log(returnthis);
        console.log(someModel[i].location);
        var returnthiscorrectd = returnthis+8; //time given is GMT need to +8
        if (returnthiscorrectd >23){
          returnthiscorrectd-=24;
        }
        if (someModel[i].location == "sri"){
          console.log(someModel[i]);
          columns[returnthiscorrectd] += 1;
        }
        else if (someModel[i].location== "itecollegecentral"){
          console.log(someModel[i]);

          columns2[returnthiscorrectd] += 1;
        }
        else if (someModel[i].location== "gardens"){
          console.log(someModel[i]);

          columns3[returnthiscorrectd] += 1;
        }
        else if (someModel[i].location== "kranji"){
          console.log(someModel[i]);

          columns4[returnthiscorrectd] += 1;
        }

      }
      res.locals.layout = 'layoutanalytics'; //change layout so that it works on iOS
      return res.view('analytics',{myData: columns, myData2: columns2, myData3: columns3, myData4: columns4 })


    });



  }

};

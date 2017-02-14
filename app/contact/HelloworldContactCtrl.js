'use strict';

app.controller('HelloworldContactCtrl', [
'$resource', 
'$stateParams',
'pocRestangularService','$scope',
 HelloworldContactCtrl]);

function HelloworldContactCtrl($resource, $stateParams, pocRestangularService, $scope) {
  var vm = this;
  vm.firstName = '';
  vm.lastName = '';
  vm.email = '';
  vm.phone = '';
  vm.api_key = '';
  var user = {};
  
  vm.users = [];
  vm.hasContent = true;

  vm.email = $stateParams.email;
 
  
 
  pocRestangularService.getdata('users?api_key=ewrew@sdfd.com', function(response) {

  var arrayNum=[];
  var modArray=[];
  var finalArray=[];
  vm.users = response.data.users;
  
  for(var i=0;i< vm.users.length;i++){
  arrayNum.push(vm.users[i].email.length);
  }
 modArray=_.countBy(arrayNum, _.identity);
 for(var key in modArray){
finalArray.push({x:parseInt(key),y:modArray[key]});
 }
  $scope.data = sinAndCos(finalArray);
var arr1=[];
  var arr2=[];
//   var arr3=[];
  
for (var i=0;i< vm.users.length;i++){
    arr1.push(vm.users[i].phone);
 }
 for (var i=0;i< vm.users.length;i++){
     arr2.push(parseInt(arr1[i].substring(0,3)));
 }
// arr3=_.countBy(arr2, _.identity)
var count=0;
  var areaCode={
'NJ':201,
'AR':476,
'CA':213,
'TX':214,
'DE':302,
'CO':303,
'WY':307,
'KY':327,
'WI':353,
'MT':406,
'OR':503,
'NM':505,
'NY':518,
'NH':603,
'ND':701
  };
var finalObj={};

for(var i=0;i<arr2.length;i++){
    for(var key in areaCode){
    for(var j=0;j<areaCode[key].length;j++){
if(arr2[i]===areaCode[key][j]){

if(finalObj[key]===undefined||finalObj[key]===null){
finalObj[key]=1
}else{
   finalObj[key]=finalObj[key]+1;
}
}
    }
    }
 $scope.info = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : 'NJ' ,
                        "value" : finalObj[key]
                    } ,
                    {
                        "label" : "AR" ,
                        "value" : finalObj[key]
                    } ,
                    {
                        "label" : 'CA' ,
                        "value" : finalObj[key]
                    } ,
                    {
                        "label" : "TX" ,
                        "value" : finalObj[key]
                    } ,
                    {
                        "label" : "DE" ,
                        "value" :finalObj[key]
                    } ,
                    {
                        "label" : "CO" ,
                        "value" : finalObj[key]
                    } ,
                    {
                        "label" : "WY" ,
                        "value" : finalObj[key]
                    } ,
                    {
                        "label" : "KY" ,
                        "value" :finalObj[key]
                    },
                    {
                        "label" : "WI" ,
                        "value" : finalObj[key]
                    },
                    {
                        "label" : "MT" ,
                        "value" : finalObj[key]
                    },
                    {
                        "label" : "OR" ,
                        "value" : finalObj[key]
                    },
                    {
                        "label" : "NM" ,
                        "value" : finalObj[key]
                    },
                    {
                        "label" : "NH" ,
                        "value" : finalObj[key]
                    },
                    {
                        "label" : "ND" ,
                        "value" : finalObj[key]
                    }
                ]
            }
        ]   

}






  })

  

  
  
  $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 40,
                    right: 90,
                    bottom: 40,
                    left: 90
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Number of characters in the email'
                },
                yAxis: {
                    axisLabel: 'Number of users',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: false,
                text: 'Line Chart for number of users v/s number of characters in their email id'
            },
            subtitle: {
                enable: false,
                text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: true,
                html: '<b>Figure 1.</b> Graph showing the number of users with their number of characters of email id.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

        

//         /*Random Data Generator */
        function sinAndCos(finalArray) {
            var sin = finalArray;
              
          

//             //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: sin,      //values - represents the array of {x,y} data points
                                     //key  - the name of the series.
                    color: '#ff7f0e'  //color - optional: choose your own line color.
                }
            ];
        }


// vm.init = function () {
//    /*@ngInject*/ 
//    	// var resourceUsers = $resource('http://hire.lcdevelopment.com/api/users/:api_key');
//   	return $resource('http://hire.lcdevelopment.com/api/users/:api_key', {api_key:vm.email}, {get:{method:'GET'}}
//     );
//   }
  // vm.init();
  

  

//  vm.getUsers = function (api) {
//     vm.users = resourceUsers.get({api_key: api}, function(response) {
//   vm.userData=response.message;

// });
//  }
    
//  vm.getUsers("amogh.ui@gmail.com");

        $scope.details = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 40,
                    right: 90,
                    bottom: 40,
                    left: 90
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Areas'
                },
                yAxis: {
                    axisLabel: 'Number of users',
                    axisLabelDistance: -10
                },
            }
        };

        
  vm.save = function () {
    var user = {};
    user.api_key= vm.api_key;
    user.first_name = vm.firstName;
    user.last_name = vm.lastName;
    user.email = vm.email;
    user.phone = vm.phone;
    pocRestangularService.postdata('user/add',user, function(response){
		 
         vm.users.push(response.data.user);
		});
   
    vm.reset();
  };

  vm.delete = function (){
    pocRestangularService.deletedata('reset', function(){
      delete vm.users;
      vm.hasContent = false;
    })
  }

  vm.reset = function () {
    vm.firstName = '';
    vm.lastName = '';
    vm.email = '';
    vm.phone = '';
  };
}




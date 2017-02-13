'use strict';

app.controller('HelloworldContactCtrl', [
'$resource', 
'$stateParams',
'pocRestangularService','$scope','$http',
 HelloworldContactCtrl]);

function HelloworldContactCtrl($resource, $stateParams, pocRestangularService, $scope, $http) {
  var vm = this;
  vm.firstName = '';
  vm.lastName = '';
//   vm.email = '';
  vm.phone = '';
  var user = {};
  
  vm.users = [];
  vm.hasContent = true;

  vm.email = $stateParams.email;
 
  
 
  pocRestangularService.getdata('users?api_key=amo@gmail.com', function(response) {
//   $http.get('contact.json').then(function(response){
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
  var arr3=[];
  
for (var i=0;i< vm.users.length;i++){
    arr1.push(vm.users[i].phone);
 }
 for (var i=0;i< vm.users.length;i++){
     arr2 = arr1[i].substring(0,3);
 }
arr3=_.countBy(arr2, _.identity)



  })
// vm.users = [{
//         "email":"amo@gmail.com",
//         "first_name":"amo",
//         "last_name":"rc",
//         "phone":"12345"
//     },
//     {
//         "email":"rc@gmail.com",
//         "first_name":"rca",
//         "last_name":"rc",
//         "phone":"123456"
//     },
//     {
//         "email": "srim@gmail.com",
//         "first_name":"sri",
//         "last_name":"rc",
//         "phone":"1234567"
//     }]
  
  
vm.area ='';
var area_code; 
switch(area_code){
    case 201:
    vm.area = 'North New Jersey';
    break;
    case 202:
    vm.area = 'Washington DC';
    break;
    case 203:
    vm.area = 'Connecticut';
    break;
    case 204:
    vm.area = 'Canada: Manitoba';
    break;
    case 205:
    vm.area = 'Canada: Manitoba';
    break;
    default:
    vm.area = 'Area not available';
} 
  
  
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
                    axisLabel: 'Time (ms)'
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
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

        

        /*Random Data Generator */
        function sinAndCos(finalArray) {
            var sin = finalArray;
              
          

            //Line chart data should be sent as an array of series objects.
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

        // $scope.options = {
        //     chart: {
        //         type: 'discreteBarChart',
        //         height: 450,
        //         margin : {
        //             top: 20,
        //             right: 20,
        //             bottom: 50,
        //             left: 55
        //         },
        //         x: function(d){return d.label;},
        //         y: function(d){return d.value;},
        //         showValues: true,
        //         valueFormat: function(d){
        //             return d3.format(',.4f')(d);
        //         },
        //         duration: 500,
        //         xAxis: {
        //             axisLabel: 'X Axis'
        //         },
        //         yAxis: {
        //             axisLabel: 'Y Axis',
        //             axisLabelDistance: -10
        //         }
        //     }
        // };

        // $scope.data = [
        //     {
        //         key: "Cumulative Return",
        //         values: [
        //             {
        //                 "label" : "{{vm.area}}" ,
        //                 "value" : arr3[0]
        //             } ,
        //             {
        //                 "label" : "{{vm.area}}" ,
        //                 "value" : arr3[1]
        //             } ,
        //             {
        //                 "label" : "{{vm.area}}" ,
        //                 "value" : arr3[2]
        //             } ,
        //             {
        //                 "label" : "D" ,
        //                 "value" : 196.45946739256
        //             } ,
        //             {
        //                 "label" : "E" ,
        //                 "value" : 0.19434030906893
        //             } ,
        //             {
        //                 "label" : "F" ,
        //                 "value" : -98.079782601442
        //             } ,
        //             {
        //                 "label" : "G" ,
        //                 "value" : -13.925743130903
        //             } ,
        //             {
        //                 "label" : "H" ,
        //                 "value" : -5.1387322875705
        //             }
        //         ]
        //     }
        // ]
  vm.save = function () {
    var user = {};
    user.api_key= 'amo@gmail.com';
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




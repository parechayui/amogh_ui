// app.controller('bargraphCtrl', ['$scope', bargraphCtrl]);

// function bargraphCtrl($scope) {
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
//   var arr1=[];
//   var arr2=[];
//   var arr3=[];
    
//     for (var i=0;i< vm.users.length;i++){
//     arr1.push(vm.users[i].phone);
//  }
//  for (var i=0;i< vm.users.length;i++){
//      arr2 = arr1[i].substring(0,3);
//  }
// arr3=_.countBy(arr2, _.identity)
// vm.area ='';
// var area_code; 
// switch(area_code){
//     case 201:
//     vm.area = 'North New Jersey';
//     break;
//     case 202:
//     vm.area = 'Washington DC';
//     break;
//     case 203:
//     vm.area = 'Connecticut';
//     break;
//     case 204:
//     vm.area = 'Canada: Manitoba';
//     break;
//     case 205:
//     vm.area = 'Canada: Manitoba';
//     break;
//     default:
//     vm.area = 'Area not available';
// } 
//  $scope.options = {
//             chart: {
//                 type: 'discreteBarChart',
//                 height: 450,
//                 margin : {
//                     top: 20,
//                     right: 20,
//                     bottom: 50,
//                     left: 55
//                 },
//                 x: function(d){return d.label;},
//                 y: function(d){return d.value;},
//                 showValues: true,
//                 valueFormat: function(d){
//                     return d3.format(',.4f')(d);
//                 },
//                 duration: 500,
//                 xAxis: {
//                     axisLabel: 'X Axis'
//                 },
//                 yAxis: {
//                     axisLabel: 'Y Axis',
//                     axisLabelDistance: -10
//                 }
//             }
//         };

//         $scope.data = [
//             {
//                 key: "Cumulative Return",
//                 values: [
//                     {
//                         "label" : "{{vm.area}}" ,
//                         "value" : arr3[0]
//                     } ,
//                     {
//                         "label" : "{{vm.area}}" ,
//                         "value" : arr3[1]
//                     } ,
//                     {
//                         "label" : "{{vm.area}}" ,
//                         "value" : arr3[2]
//                     } ,
//                     {
//                         "label" : "D" ,
//                         "value" : 196.45946739256
//                     } ,
//                     {
//                         "label" : "E" ,
//                         "value" : 0.19434030906893
//                     } ,
//                     {
//                         "label" : "F" ,
//                         "value" : -98.079782601442
//                     } ,
//                     {
//                         "label" : "G" ,
//                         "value" : -13.925743130903
//                     } ,
//                     {
//                         "label" : "H" ,
//                         "value" : -5.1387322875705
//                     }
//                 ]
//             }
//         ]
// }
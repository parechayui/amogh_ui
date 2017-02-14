// app.controller('linegraphCtrl', ['$scope','contactSvc', linegraphCtrl]);

// function linegraphCtrl($scope, contactSvc) {
// vm.users = contactSvc.getdata();
    
//     var arrayNum = [];
//     var modArray = [];
//     var finalArray = []; 
//     for(var i=0;i< vm.users.length;i++){
//   arrayNum.push(vm.users[i].email.length);
//   }
//  modArray=_.countBy(arrayNum, _.identity);
//  for(var key in modArray){
// finalArray.push({x:parseInt(key),y:modArray[key]});
//  }
//   $scope.data = sinAndCos(finalArray);
// $scope.options = {
//             chart: {
//                 type: 'lineChart',
//                 height: 450,
//                 margin : {
//                     top: 40,
//                     right: 90,
//                     bottom: 40,
//                     left: 90
//                 },
//                 x: function(d){ return d.x; },
//                 y: function(d){ return d.y; },
//                 useInteractiveGuideline: true,
//                 dispatch: {
//                     stateChange: function(e){ console.log("stateChange"); },
//                     changeState: function(e){ console.log("changeState"); },
//                     tooltipShow: function(e){ console.log("tooltipShow"); },
//                     tooltipHide: function(e){ console.log("tooltipHide"); }
//                 },
//                 xAxis: {
//                     axisLabel: 'Time (ms)'
//                 },
//                 yAxis: {
//                     axisLabel: 'Voltage (v)',
//                     tickFormat: function(d){
//                         return d3.format('.02f')(d);
//                     },
//                     axisLabelDistance: -10
//                 },
//                 callback: function(chart){
//                     console.log("!!! lineChart callback !!!");
//                 }
//             },
//             title: {
//                 enable: false,
//                 text: 'Line Chart for number of users v/s number of characters in their email id'
//             },
//             subtitle: {
//                 enable: false,
//                 text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
//                 css: {
//                     'text-align': 'center',
//                     'margin': '10px 13px 0px 7px'
//                 }
//             },
//             caption: {
//                 enable: true,
//                 html: '<b>Figure 1.</b> Graph showing the number of users with their number of characters of email id.',
//                 css: {
//                     'text-align': 'center',
//                     'margin': '10px 13px 0px 7px'
//                 }
//             }
//         };

        

//         /*Random Data Generator */
//         function sinAndCos(finalArray) {
//             var sin = finalArray;
              
          

//             //Line chart data should be sent as an array of series objects.
//             return [
//                 {
//                     values: sin,      //values - represents the array of {x,y} data points
//                                      //key  - the name of the series.
//                     color: '#ff7f0e'  //color - optional: choose your own line color.
//                 }
//             ];
//         }

// }
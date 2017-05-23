

// function createTimeSeriesGraphTwo(){
var chart = AmCharts.makeChart("chartdivfuse", {
  "type": "serial",
  "theme": "light",
  "dataDateFormat": "YYYY-MM-DD",
  "titles": [ {
    "text": "FollowUp Vs Ignored Vs No-Accounts",
    "size": 16
  } ],
  "precision": 2,
  "valueAxes": [{
    "id": "v1",
    "title": "Sales",
    "position": "left",
    "autoGridCount": false,
    "labelFunction": function(value) {
      return "$" + Math.round(value) + "M";
    }
  }, {
    "id": "v2",
    "title": "Market Days",
    "gridAlpha": 0,
    "position": "right",
    "autoGridCount": false
  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v1",
    "lineColor": "#e1ede9",
    "fillColors": "#e1ede9",
    "fillAlphas": 1,
    "type": "column",
    "title": "Actual Sales",
    "valueField": "sales2",
    "clustered": false,
    "columnWidth": 0.5,
    "legendValueText": "$[[value]]M",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
  }, {
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#62cf73",
    "fillColors": "#62cf73",
    "fillAlphas": 1,
    "type": "column",
    "title": "Target Sales",
    "valueField": "sales1",
    "clustered": false,
    "columnWidth": 0.3,
    "legendValueText": "$[[value]]M",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
  }, {
    "id": "g1",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#20acd4",
    "type": "smoothedLine",
    "title": "Market Days",
    "useLineColorForBulletBorder": true,
    "valueField": "market1",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
  }, {
    "id": "g2",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#e1ede9",
    "type": "smoothedLine",
    "dashLength": 5,
    "title": "Market Days ALL",
    "useLineColorForBulletBorder": true,
    "valueField": "market2",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "legend": {
    "useGraphSettings": true,
    "position": "top"
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "export": {
    "enabled": true
  },
  "dataProvider": [{
    "date": "2013-01-16",
    "market1": 71,
    "market2": 75,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2013-01-17",
    "market1": 74,
    "market2": 78,
    "sales1": 4,
    "sales2": 6
  }, {
    "date": "2013-01-18",
    "market1": 78,
    "market2": 88,
    "sales1": 5,
    "sales2": 2
  }, {
    "date": "2013-01-19",
    "market1": 85,
    "market2": 89,
    "sales1": 8,
    "sales2": 9
  }, {
    "date": "2013-01-20",
    "market1": 82,
    "market2": 89,
    "sales1": 9,
    "sales2": 6
  }, {
    "date": "2013-01-21",
    "market1": 83,
    "market2": 85,
    "sales1": 3,
    "sales2": 5
  }, {
    "date": "2013-01-22",
    "market1": 88,
    "market2": 92,
    "sales1": 5,
    "sales2": 7
  }, {
    "date": "2013-01-23",
    "market1": 85,
    "market2": 90,
    "sales1": 7,
    "sales2": 6
  }, {
    "date": "2013-01-24",
    "market1": 85,
    "market2": 91,
    "sales1": 9,
    "sales2": 5
  }, {
    "date": "2013-01-25",
    "market1": 80,
    "market2": 84,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2013-01-26",
    "market1": 87,
    "market2": 92,
    "sales1": 4,
    "sales2": 8
  }, {
    "date": "2013-01-27",
    "market1": 84,
    "market2": 87,
    "sales1": 3,
    "sales2": 4
  }, {
    "date": "2013-01-28",
    "market1": 83,
    "market2": 88,
    "sales1": 5,
    "sales2": 7
  }, {
    "date": "2013-01-29",
    "market1": 84,
    "market2": 87,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2013-01-30",
    "market1": 81,
    "market2": 85,
    "sales1": 4,
    "sales2": 7
  }]
});
// }
// <!--end of function create timeseriesGraph-->

// users graph timeseries starts here--> needs total accounts(gmail),date,active Users,total users
// function createTimeSeriesGraphTwo(data){
// if( data === undefined){
// 			return;
// 		}
// 	if(data.length <=0 ){
// 		return;
// 	}
var chartData = generateChartData();

var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "legend": {
    "useGraphSettings": true
  },
  "dataProvider": chartData,
  "synchronizeGrid":true,
  "valueAxes": [ {
    "id":"v2",
    "axisColor": "#FCD202",
    "axisThickness": 2,
    "axisAlpha": 1,
    "position": "right"
  }, {
    "id":"v3",
    "axisColor": "#B0DE09",
    "axisThickness": 2,
    "gridAlpha": 0,
    "offset": 50,
    "axisAlpha": 1,
    "position": "left"
  }],
  "graphs": [ {
    "valueAxis": "v2",
    "lineColor": "#FCD202",
    "bullet": "square",
    "bulletBorderThickness": 1,
    "hideBulletsCount": 30,
    "title": "total GMAIL Accounts",
    "valueField": "totalaccountsgmail",
    "fillAlphas": 0
  }, {
    "valueAxis": "v3",
    "lineColor": "#B0DE09",
    "bullet": "triangleUp",
    "bulletBorderThickness": 1,
    "hideBulletsCount": 30,
    "title": "total Users",
    "valueField": "totalusers",
    "fillAlphas": 0
  }],
  "chartScrollbar": {},
  "chartCursor": {
    "cursorPosition": "mouse"
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "axisColor": "#DADADA",
    "minorGridEnabled": true
  },
  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
});

chart.addListener("dataUpdated", zoomChart);
zoomChart();

// generate some random data, quite different range
//function generateChartData(snapshotDate,totalNumOfAccounts,totalNumOfUsers,length) {
function generateChartData(data) {
  if (data){
    console.log('data>>>>>>>>>>',data);
    var chartData = [];
    data.forEach(function(val){

      //epoch time conversion
      var unixEpochTime = val.snapshotDateUnixTimeStamp;
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      d.setUTCSeconds(unixEpochTime);
      console.log('hellossnewdate>>>>>',d);
      totalUserss = val.totalNumOfUsers;
      console.log('totalUserss%%%%%',totalUserss);
      totalNumOfAccounts=val.totalNumOfAccounts.GMAIL;
      console.log('totalNumOfAccounts#####',totalNumOfAccounts);

      chartData.push({
        date: d,
        totalaccountsgmail: totalNumOfAccounts,
        totalusers: totalUserss
      });
    });
      console.log('*********chartdata*****',chartData);
    return chartData;

  }

  function zoomChart(){
      chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
  }


//   return false;
//   console.log('snapshotDate---->>',snapshotDate);
//   console.log('totalGmailAccounts---->>>',totalNumOfAccounts);
//   console.log('totalNumberofUsers--->>>>',totalNumOfUsers);
//   console.log('length',length);
//   console.log('timestamp-->>',snapshotDateUnixTimeStamp);
//   var chartData = [];
//   var firstDate = new Date();
//   firstDate.setDate(firstDate.getDate() - 100);
//
//   for (var i = 0; i < 100; i++) {
//     // we create date objects here. In your data, you can have date strings
//     // and then set format of your dates using chart.dataDateFormat property,
//     // however when possible, use date objects, as this will speed up chart rendering.
//     var newDate = new Date(firstDate);
//     console.log('newDate',newDate);
//     newDate.setDate(newDate.getDate() + i);
//
//     var  activeusers = Math.round(Math.sin(i * 5) * i);
//     var totalaccountsgmail= Math.round(Math.random() * 80) + 500 + i * 3;
//     var totalusers = Math.round(Math.random() * 6000) + i * 4;
//
//     chartData.push({
//       date: newDate,
//       activeusers: activeusers,
//       totalaccountsgmail: totalaccountsgmail,
//       totalusers: totalusers
//     });
//   }
//   return chartData;
// }

// function zoomChart(){
//   chart.zoomToIndexes(chart.chartData.length - 20, chart.chartData.length - 1);
// }
// }
// timeseriesgraph ends here

// usersgraph time series ends here
//datepicker

var bindDateRangeValidation = function (f, s, e) {
  if(!(f instanceof jQuery)){
    console.log("Not passing a jQuery object");
  }

  var jqForm = f,
  startDateId = s,
  endDateId = e;

  var checkDateRange = function (startDate, endDate) {
    var isValid = (startDate != "" && endDate != "") ? startDate <= endDate : true;
    return isValid;
  }

  var bindValidator = function () {
    var bstpValidate = jqForm.data('bootstrapValidator');
    var validateFields = {
      startDate: {
        validators: {
          notEmpty: { message: 'This field is required.' },
          callback: {
            message: 'Start Date must less than or equal to End Date.',
            callback: function (startDate, validator, $field) {
              return checkDateRange(startDate, $('#' + endDateId).val())
            }
          }
        }
      },
      endDate: {
        validators: {
          notEmpty: { message: 'This field is required.' },
          callback: {
            message: 'End Date must greater than or equal to Start Date.',
            callback: function (endDate, validator, $field) {
              return checkDateRange($('#' + startDateId).val(), endDate);
            }
          }
        }
      },
      customize: {
        validators: {
          customize: { message: 'customize.' }
        }
      }
    }
    if (!bstpValidate) {
      jqForm.bootstrapValidator({
        excluded: [':disabled'],
      })
    }

    jqForm.bootstrapValidator('addField', startDateId, validateFields.startDate);
    jqForm.bootstrapValidator('addField', endDateId, validateFields.endDate);

  };

  var hookValidatorEvt = function () {
    var dateBlur = function (e, bundleDateId, action) {
      jqForm.bootstrapValidator('revalidateField', e.target.id);
    }

    $('#' + startDateId).on("dp.change dp.update blur", function (e) {
      $('#' + endDateId).data("DateTimePicker").setMinDate(e.date);
      dateBlur(e, endDateId);
    });

    $('#' + endDateId).on("dp.change dp.update blur", function (e) {
      $('#' + startDateId).data("DateTimePicker").setMaxDate(e.date);
      dateBlur(e, startDateId);
    });
  }

  bindValidator();
  hookValidatorEvt();
};
//end of date picker

$(document).ready(function(){

  $('a.oneWeek').on('click', function(){
    $('.datePicker').css('visibility', 'visible');
  });
  $('a.twoWeeks').on('click', function(){
    $('.datePicker').css('visibility', 'visible');
  });
  $('a.oneMonth').on('click', function(){
    $('.datePicker').css('visibility', 'visible');
  });
  $('a.oneQuarter').on('click', function(){
    $('.datePicker').css('visibility', 'visible');
  });
  $('.datesubmit').on('click', function(){
    var datetimepicker1= $('input#startDate').val(),
    dateFrom = new Date(datetimepicker1).valueOf();
    console.log('date1>>>',datetimepicker1);
    var datetimepicker2= $('input#endDate').val(),
    dateTo = new Date(datetimepicker2).valueOf();
    console.log('date2>>>',datetimepicker2);
    if(isNaN(dateFrom)|| isNaN(dateTo)){
      return;
    }
  });
  //datepicker
  $.ajax({
    url : 'http://52.55.210.93:8080/analysis/snapshot-views?start_date=2017-05-14&end_date=2017-05-18',
    // url :'http://52.55.210.93:8080/analysis/snapshot-views?start_date='+dateFrom+'&end_date='dateTo,
    contentType:"application/x-www-form-urlencoded",
    type: 'GET',
    dataType: 'json',
    crossDomain: true,

    error: function() {
      $('#info').html('<p>An error has occurred</p>');
    },
    success: function (data) {
      var totalNumOfUsers,  differenceTotalNumOfUsers, differenceRefreshTokenCount, totalNumOfAccounts, totalNumOfThreads, totalNumOfFollowUpThreads, totalNumOfUserModels, totalValidRefreshTokens, avgMessagesPerThread;
      console.log ('data>>>',data);
      console.log('data.length>>>',data.length);
      let snapshotDate=[];

      data.forEach(function(single){
        console.log('DATE>>',single.snapshotDate);
        // snapshotDate.push(single.snapshotDate);
        // generateChartData(snapshotDate,single.totalNumOfUsers,single.totalNumOfAccounts.GMAIL,data.length);
        totalFollowUpStatusCounts = single.followUpStatusCounts.FOLLOWED_UP+single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED+single.followUpStatusCounts.NO_ACTION+single.followUpStatusCounts.UNDEFINED;
        totalNumOfUsers = single.totalNumOfUsers;
        differenceTotalNumOfUsers = single.totalNumOfUsers;

        totalNumOfAccounts = single.totalNumOfAccounts.GMAIL+single.totalNumOfAccounts.GMAIL_CALENDAR+single.totalNumOfAccounts.SALESFORCE+single.totalNumOfAccounts.TWITTER;
        totalNumOfThreads = single.totalNumOfThreads;
        totalNumOfFollowUpThreads = single.totalNumOfFollowUpThreads;
        totalNumOfUserModels = single.totalNumOfUserModels;
        totalValidRefreshTokens = single.totalValidRefreshTokens;
        maxPossibleNumOfFollowUp = single.maxPossibleNumOfFollowUp;
        differenceRefreshToken = single.maxPossibleNumOfFollowUp;
      })
      $('#differenceRefreshTokenCount').text(totalNumOfFollowUpThreads);
      $('#differenceTotalNumOfUsersCount').text(totalNumOfUsers);
      $('#usercount').text(totalNumOfUsers);
      $('#accountCount').text(totalNumOfAccounts);
      $('#EmailThreadsCount').text(totalNumOfThreads);
      $('#markedAsFollowUpCount').text(totalNumOfFollowUpThreads);
      $('#userModelBuiltCount').text(totalNumOfUserModels);
      $('#refreshtokenCount').text(totalValidRefreshTokens);
      $('#candidateThreadsCount').text(maxPossibleNumOfFollowUp);

      // var datevalues= [];
      // data.forEach(function(single){
      //   datevalues= [];
      //   //console.log('DATE>>',single.snapshotDate);
      //   datevalues.push(single.snapshotDate);
      //   console.log('arrayofdates>>>>>',datevalues);
      // })

      var values = [];

      data.forEach(function(single){
        values = [];
        var keys = Object.keys(single.totalNumOfAccounts);
        keys.forEach(function(key){
          let a = {"totalNoOfAccounts" : key , "litres" : single.totalNumOfAccounts[key] };
          console.log("c>>>>>>>>>",a);
          values.push(a);

        })
        // generateChartData(snapshotDate,single.totalNumOfUsers,single.totalNumOfAccounts.GMAIL,data.length);
        generateChartData(data);


        //########
        // createTimeSeriesGraph(values);
      });

    }
  });

  var sd = new Date(), ed = new Date();

  $('#startDate').datetimepicker({
    pickTime: false,
    format: "YYYY/MM/DD",
    defaultDate: sd,
    maxDate: ed
  });

  $('#endDate').datetimepicker({
    pickTime: false,
    format: "YYYY/MM/DD",
    defaultDate: ed,
    minDate: sd
  });

  //passing 1.jquery form object, 2.start date dom Id, 3.end date dom Id
  bindDateRangeValidation($("#form"), 'startDate', 'endDate');
});
}


//
// function MakeMoreChartData(chartDataTwo){
var chart = AmCharts.makeChart("chartdivfuse", {
  "type": "serial",
  "theme": "light",
  "titles": [ {
    "text": "Followup Vs Ignored Vs No action (Scaled by No.of Users)",
    "size": 16
  } ],
  "legend": {
    "horizontalGap": 15,
     "maxColumns": 1,
    "useGraphSettings": true,
    "markerSize": 10
  },
  "dataDateFormat": "YYYY-MM-DD",
  "precision": 2,
  "valueAxes": [{
    "id": "v1",
    "title": "Users",
    "position": "left",
    "autoGridCount": true,

  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v1",
    "lineColor": "#ffcc66",
    "fillColors": "#ffcc66",
    "fillAlphas": 1,
    "type": "column",
    "title": "Maximum Possible Thread List",
    "valueField": "maxpossibleTL",
     "clustered": false,
    "columnWidth": 0.7,
    "legendValueText": "[[value]]Users",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]Users</b>"
  },{
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#ccff66",
    "fillColors": "#ccff66",
    "fillAlphas": 1,
    "type": "column",
    "title": "followup",
    "valueField": "followup",
     "clustered": false,
    "columnWidth": 0.7,
    "legendValueText": "[[value]]Users",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]Users</b>"
  }, {
    "id": "g5",
    "valueAxis": "v1",
    "lineColor": "#62cf73",
    "fillColors": "#62cf73",
    "fillAlphas": 1,
    "type": "column",
    "title": "Ignored",
    "valueField": "Ignored",
   "clustered": false,
    "columnWidth": 0.7,
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]Users</b>"
  },{
    "id": "g6",
    "valueAxis": "v5",
    "lineColor": "#99ff99",
    "fillColors": "#99ff99",
    "fillAlphas": 1,
    "type": "column",
    "clustered": false,
    "columnWidth": 0.7,
    "title": "NoAction",
    "valueField": "NoAction",
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]Users</b>"
  } ,{
    "id": "g1",
    "valueAxis": "v2",
    "bullet": "square",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#20acd4",
    "type": "smoothedLine",
    "title": "Users",
    "useLineColorForBulletBorder": true,
    "valueField": "usersValue",
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

  "dataProvider":
   [{
    "date": "2013-01-16",
    "usersValue": 11,
    "Ignored": 5,
    "followup": 8,
    "maxpossibleTL": 7,
    "NoAction": 5
  }, {
    "date": "2013-01-17",
    "usersValue": 14,
    "Ignored": 4,
    "followup": 6,
    "maxpossibleTL": 18,
    "NoAction": 4,
  }, {
    "date": "2013-01-18",
    "usersValue": 18,
    "Ignored": 5,
    "followup": 2,
    "maxpossibleTL": 9,
    "NoAction": 8,
  }, {
    "date": "2013-01-19",
    "usersValue": 15,
    "market2": 89,
    "followup": 9,
    "maxpossibleTL": 6,
    "NoAction": 8,
  }, {
    "date": "2013-01-20",
    "usersValue": 12,
    "Ignored": 9,
    "followup": 6,
    "maxpossibleTL": 5,
    "NoAction": 5
  }, {
    "date": "2013-01-21",
    "usersValue": 13,
    "Ignored": 3,
    "followup": 5,
    "maxpossibleTL": 8,
    "NoAction": 5
  }, {
    "date": "2013-01-22",
    "usersValue": 18,
    "Ignored": 5,
    "followup": 7,
    "maxpossibleTL": 12,
    "NoAction": 2
  }, {
    "date": "2013-01-23",
    "usersValue": 15,
    "Ignored": 7,
    "followup": 6,
    "maxpossibleTL": 15,
    "NoAction": 8
  }, {
    "date": "2013-01-24",
    "usersValue": 15,
    "Ignored": 9,
    "followup": 11,
    "maxpossibleTL": 8,
    "NoAction": 6
  }, {
    "date": "2013-01-25",
    "usersValue": 10,
    "Ignored": 5,
    "followup": 8,
    "maxpossibleTL": 17,
    "NoAction": 8
  }, {
    "date": "2013-01-26",
    "usersValue": 17,
    "Ignored": 4,
    "followup": 8,
    "maxpossibleTL": 15,
    "NoAction": 7
  }, {
    "date": "2013-01-27",
    "usersValue": 14,
    "Ignored": 3,
    "followup": 4,
    "maxpossibleTL": 18,
    "NoAction": 6
  }, {
    "date": "2013-01-28",
    "usersValue": 13,
    "Ignored": 5,
    "followup": 7,
    "maxpossibleTL": 17,
    "NoAction": 9
  }, {
    "date": "2013-01-29",
    "usersValue": 14,
    "Ignored": 5,
    "followup": 8,
    "maxpossibleTL": 15,
    "NoAction": 8
  }, {
    "date": "2013-01-30",
    "usersValue": 11,
    "Ignored": 4,
    "followup": 7,
    "maxpossibleTL": 14,
    "NoAction": 7
  }]
});
// }

function MakeChartData(chartData){
var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "titles": [ {
      "text": "SAI Users Graph",
      "size": 16
    } ],
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": chartData,
    "synchronizeGrid":true,
    "valueAxes": [ {
        "id":"v1",
        "axisColor": "#FCD202 ",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "right"
    }, {
        "id":"v2",
        "axisColor": "#B0DE09 ",
        "axisThickness": 2,
        "gridAlpha": 0,
        "offset": 50,
        "axisAlpha": 1,
        "position": "left"
    }],
    "graphs": [ {
        "valueAxis": "v1",
        "lineColor": "#FCD202 ",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Total Gmail Accounts",
        "valueField": "totalAccounts",
        "fillAlphas": 0
    }, {
        "valueAxis": "v2",
        "lineColor": "#B0DE09 ",
        "bullet": "triangleUp",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Total Users",
        "valueField": "totalUsers",
        "fillAlphas": 0
    }],
    "chartScrollbar": {},
    "chartCursor": {
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA ",
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true,
        "position": "bottom-right"
     }
});

}

chart.addListener("dataUpdated", zoomChart);
zoomChart();



function zoomChart(){
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}



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
    // url : 'http://52.55.210.93:8080/analysis/snapshot-views?start_date=2017-05-14&end_date=2017-05-18',
    // url :'http://52.55.210.93:8080/analysis/snapshot-views?start_date='+dateFrom+'&end_date='dateTo,
    url: 'http://52.7.123.186:8080/analysis/snapshot-views',
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
      let dataL = [];
      let dataM = [];
      data.forEach(function(single){
        // console.log('DATE>>',single.snapshotDate);
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

//for the followUp

var valuesTwo = [];
data.forEach(function(single){
  var valuesTwo = [];
  var keysTwo = Object.keys(single.followUpStatusCounts);
  //  console.log("keysTwo>>>>",keysTwo);
  keysTwo.forEach(function(keyTwo){
    let b = {"followUpStatusCounts" : keyTwo , "maxpossibleTL" : single.followUpStatusCounts[keyTwo] };
    valuesTwo.push(b);
  })

});//end of for each loop


        ///////////////////////suman

        let unixEpochTime = single.snapshotDateUnixTimeStamp;
        let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
            d.setUTCSeconds(unixEpochTime);
            d.setDate(d.getDate() - 100);
            // console.log("epochdate>>>",d);
      dataL.push({
                  date: d,
                  totalAccounts: totalNumOfAccounts,
                  totalUsers: totalNumOfUsers

             });
              MakeChartData(dataL)

              dataM.push({
                date: single.snapshotDate,
                Users:single.totalNumOfUsers,
                followUp : single.followUpStatusCounts.FOLLOWED_UP,
                Ignored: single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED,
                maxpossibleTL: single.maxPossibleThreadsInList,
                NoAction:single.followUpStatusCounts.NO_ACTION

              })
              console.log("dataM>>>>",dataM);
              // MakeMoreChartData(dataM)
      })


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

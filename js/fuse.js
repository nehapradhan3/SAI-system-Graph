///////////////////////////////////////////////////////////simplestack
function MakeStackData(chartdatatwo){
var charttwo = AmCharts.makeChart("simplestack", {
    "type": "serial",
	"theme": "light",
  "titles": [ {
    "text": "Followup Vs Ignored Vs No action (Scaled by No.of Users)",
    "size": 16
  } ],
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
		"useGraphSettings": true,
		"markerSize": 10
    },
    "dataProvider": chartdatatwo ,
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [ {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "followup",
        "type": "column",
		"color": "#000000",
        "valueField": "followup"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Ignored",
        "type": "column",
		"color": "#000000",
        "valueField": "Ignored"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "No Action",
        "type": "column",
		"color": "#000000",
        "valueField": "NoAction"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "undefined",
        "type": "column",
		"color": "#000000",
        "valueField": "undefinedone"
    }],
    "categoryField": "date",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
    	"enabled": true
     }

});
}
//////////////////////////////////////////////////////////////percentgraphoffollowup
function MakepercentData(chartdatapercent){
var chart = AmCharts.makeChart("chartdivpercent", {
    "theme": "light",
    "type": "serial",
    "titles": [ {
      "text": "Followup Vs Ignored Vs No action (Based on number of links sent(%))",
      "size": 16
    } ],
     "dataProvider": chartdatapercent,
    // [{
    //     "date": "YYYY-MM-DD",
    //     "Ignored": 40000,
    //     "NoAction": 180000,
    //     "Undefined": 80000,
    //     "followup": 10000,
    //     "total":  310000
    // }, {
    //     "date": "YYYY-MM-DD",
    //     "Ignored": 4000,
    //     "NoAction": 170000,
    //     "Undefined": 60000,
    //     "followup": 20000,
    //     "total": 300000
    // },{
    //     "date": "YYYY-MM-DD",
    //     "Ignored": 90000,
    //     "NoAction": 40000,
    //     "Undefined": 100000,
    //     "followUp": 10000,
    //     "total": 240000
    // }, {
    //     "date": "YYYY-MM-DD",
    //     "Ignored": 30000,
    //     "NoAction": 50000,
    //     "Undefined": 100000,
    //       "followUp": 10000,
    //     "total": 190000
    // }],


    "categoryField": "date",

    "categoryAxis": {
        "gridAlpha": 0.1,
        "axisAlpha": 0,
        "widthField": "total",
        "gridPosition": "start"
    },

    "valueAxes": [{
        "stackType": "100% stacked",
        "gridAlpha": 0.1,
        "unit": "%",
        "axisAlpha": 0
    }],

    "graphs": [
        {
            "title": "Ignored",
            "labelText": "[[value]]",
            "valueField": "Ignored",
            "type": "column",
            "fillAlphas": 1
        }, {
            "title": "No Action",
            "labelText": "[[value]]",
            "valueField": "NoAction",
            "type": "column",
            "fillAlphas": 1
        },

        {
            "title": "Followup",
            "labelText": "[[value]]",
            "valueField": "Followup",
            "type": "column",
            "fillAlphas": 1
        },
      {
            "title": "Undefined",
            "labelText": "[[value]]",
            "valueField": "undefinedone",
            "type": "column",
            "fillAlphas": 1
      }
    ],

    "legend": {},
    "export":
     {
     "enabled":true
     }
});
}
//////////////////////////////////////////////////////////followupgraph
function MakeMoreChartData(chartdatatwo){
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
    "id": "g7",
    "valueAxis": "v6",
    "lineColor": "#ff4d4d",
    "fillColors": "#ff4d4d",
    "fillAlphas": 1,
    "type": "column",
    "clustered": false,
    "columnWidth": 0.7,
    "title": "undefined",
    "valueField": "undefinedone",
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]undefined</b>"
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

  "dataProvider": chartdatatwo

});
}
//////////////////////////////////////////////////////////////////linechart of users

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
chart.addListener("dataUpdated", zoomChart);
zoomChart();

function zoomChart(){
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}

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
      let dataN = [];
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


        ///////////////////////suman

        let unixEpochTime = single.snapshotDateUnixTimeStamp;
        // let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        //     d.setUTCSeconds(unixEpochTime);
        //     d.setDate(d.getDate() - 100);
            //  console.log("epochdate>>>",d);
             var d = new Date(unixEpochTime*1000);
             console.log("date>>>>>",d);
      dataL.push({
                  date: d,
                  totalAccounts: totalNumOfAccounts,
                  totalUsers: totalNumOfUsers

             });//endofdataL
              MakeChartData(dataL)

              dataM.push({
                date: single.snapshotDate,
                usersValue:single.totalNumOfUsers,
                followup : single.followUpStatusCounts.FOLLOWED_UP,
                Ignored: single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED,
                maxpossibleTL: single.maxPossibleThreadsInList,
                NoAction: single.followUpStatusCounts.NO_ACTION,
                undefinedone: single.followUpStatusCounts.UNDEFINED

              });//end of dataM
              console.log("dataM>>>>",dataM);
            MakeStackData(dataM);
            dataN.push({
              date: single.snapshotDate,
              usersValue:single.totalNumOfUsers,
              followup : single.followUpStatusPercentages.FOLLOWED_UP,
              Ignored: single.followUpStatusPercentages.IGNORED+single.followUpStatusPercentages.IGNORED_BLACKLISTED,
              maxpossibleTL: single.maxPossibleThreadsInList,
              NoAction: single.followUpStatusPercentages.NO_ACTION,
              undefinedone: single.followUpStatusPercentages.UNDEFINED

            });
            console.log("dataN>>>>",dataN);
            MakepercentData(dataN);
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

/*Author:NehaPradhan
11th June 2017
*/

///////////////////////////////////////////////////////////simplestack
function MakeStackData(chartdatatwo){
  var charttwo = AmCharts.makeChart("simplestack", {
    "type": "serial",
    "theme": "light",
    "titles": [ {
      "text": "Followup Vs Ignored Vs No Action (Scaled by # of Users)",
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
      "title": "Followup",
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
      "title": "Undefined",
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
      "text": "Followup Vs Ignored Vs No Action (Percentage based)",
      "size": 16
    } ],

    "dataProvider": chartdatapercent,
    "categoryField": "date",

    "categoryAxis": {
      "gridAlpha": 0.1,
      "axisAlpha": 0,
      "widthField": "usersValue",
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

    "legend": {},
    "export":
    {
      "enabled":true
    }
  });
  chart.addListener("dataUpdated", zoomChart);
  zoomChart();

  function zoomChart(){
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
  }

}
//////////////////////////////////////////////////////////followupgraph
function MakeMoreChartData(chartdatatwo){
  var chart = AmCharts.makeChart("chartdivfuse", {
    "type": "serial",
    "theme": "light",
    "titles": [ {
      "text": "Followup Vs Ignored Vs No action (Scaled by # of Users)",
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

      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#ccff66",
      "fillColors": "#ccff66",
      "fillAlphas": 1,
      "type": "column",
      "title": "Followup",
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
      "title": "No Action",
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
//////////////////////////////////////////////////////////////////////////////max possible thread vs total sent
function MaxChartData(dataofmaxpossibleTLTS){
  var chart = AmCharts.makeChart("maxpossibleTS", {
    "type": "serial",
    "theme": "light",
    "titles": [ {
      "text": "Max Possible Thread List Vs Total Sent (Scaled by # of Users)",
      "size": 16
    } ],
    "legend": {
      "horizontalGap": 10,
      "maxColumns": 1,
      "position": "right",
      "useGraphSettings": true,
      "markerSize": 10
    },
    "dataProvider": dataofmaxpossibleTLTS,

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
      "title": "Total Sent",
      "type": "column",
      "color": "#000000",
      "valueField": "totalsent"
    },{
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Max Possible Thread List",
      "type": "column",
      "color": "#000000",
      "valueField": "maxpossibleTL"
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

//////////////////////////////////////////////////////////////////linechart of users

function MakeChartData(chartData){
  var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "titles": [ {
      "text": "Total Users Vs Total Gmail Account",
      "size": 16
    } ],
    "legend": {
      "useGraphSettings": true
    },
    "dataProvider": chartData,
    "synchronizeGrid":true,
    "valueAxes": [

      {
        "id":"v1",
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
        "valueAxis": "v1",
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

    //written today but yesterdays date and one weekago
    todaysdate();

    yesterday2date = todaysdate();

    //oneWeekAgoDate
    var oneWeekDate = new Date();
    oneWeekDate.setDate(oneWeekDate.getDate() - 8);
    var oneWeekDateDate=oneWeekDate.getDate();
    var oneWeekDateMonth=oneWeekDate.getMonth()+1;
    var oneWeekDateYear=oneWeekDate.getFullYear();
    if(oneWeekDateDate<10) {
      oneWeekDateDate='0'+oneWeekDateDate
    }

    if(oneWeekDateMonth<10) {
      oneWeekDateMonth='0'+oneWeekDateMonth
    }
    var testdate=oneWeekDateYear+'-'+oneWeekDateMonth+'-'+oneWeekDateDate;
    //console.log("yesterday>>>",yesterday2date);
    //console.log("testdate>>>>",testdate);
    var getalink =localStorage.getItem('userEmail');
    //console.log("getalink>>>>>",getalink);

    $.ajax({
      //url: (num == 1) ? url1 : url2,

      //url:'http://52.7.123.186:8080/analysis/users/bijay@fusemachines.com?start_date='+testdate+'&end_date='+yesterday2date,
      url:'http://52.7.123.186:8080/analysis/users/'+getalink+'?start_date='+testdate+'&end_date='+yesterday2date,

      contentType:"application/x-www-form-urlencoded",
      type: 'GET',
      dataType: 'json',
      crossDomain: true,

      error: function() {
        $('#info').html('<p>An error has occurred</p>');
      },
      success: function (data) {
        var totalNumOfUsers, relatedAccounts, baseEmailAddress, UserEngagements, totalFollowUpStatusCounts, signUpDate, differenceTotalNumOfUsers, differenceRefreshTokenCount, totalNumOfAccounts, totalNumOfThreads, totalNumOfFollowUpThreads, totalNumOfUserModels, totalValidRefreshTokens, avgMessagesPerThread;
        // console.log ('data>>>',data);
        // console.log('data.length>>>',data.length);
        var signupDateDisplay = new Date(data.signUpDate);
        var ddate=signupDateDisplay.getDate();
        var dyear = signupDateDisplay.getFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      var dmonth=monthNames[signupDateDisplay.getMonth()];
      var tt= dmonth+ " "+ ddate+','+" "+dyear;//for the x-axis

      //  console.log("tt>>>",tt);
      $('#showName').text(data.baseEmailAddress);
      $('#signUpDate').text(tt);
      //console.log("followUpStatusCounts>>>",data.userEngagements);
      // console.log("relatedAccounts>>>",data.relatedAccounts.length);
      var major=data.userEngagements;
      var relAcc=data.relatedAccounts;
      var acctLength=data.relatedAccounts.length;
      $('#NoOfAccounts').text(acctLength);
      let dataA = [];
      relAcc.forEach(function(single){

        //  $('#AccountType').text(single.accountType);
        dataA.push({
          accounts :single.accountType
        });
          });
      // console.log("dataA>>>>",dataA);
        var indexes = $.map(dataA, function(obj, index) {
          index = obj.accounts;
          return index;

        })
        console.log("acctLength",acctLength);
         var checkIndex=" ";
         for (i = 0; i < acctLength; i++) {
         checkIndex+= "\n"+indexes[i] + "," ;


         }
         checkIndex = checkIndex.replace(/,\s*$/, "");
         console.log("CheckIndex>>>",checkIndex);

        $('#AccountType').text(checkIndex);




      let snapshotDate=[];
      let dataL = [];
      let dataM = [];
      let dataN = [];
      major.forEach(function(single){
        //console.log('snapshotDate>>',single.snapshotDate);
        // snapshotDate.push(single.snapshotDate);
        // generateChartData(snapshotDate,single.totalNumOfUsers,single.totalNumOfAccounts.GMAIL,data.length);
        totalFollowUpStatusCounts = single.followUpStatusCounts.FOLLOWED_UP+single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED+single.followUpStatusCounts.NO_ACTION+single.followUpStatusCounts.UNDEFINED;
        //console.log("totalFollowUpStatusCounts>>>>",totalFollowUpStatusCounts);
        totalNumOfUsers = single.totalNumOfUsers;
        differenceTotalNumOfUsers = single.totalNumOfUsers;

        //  totalNumOfAccounts = single.totalNumOfAccounts.GMAIL+single.totalNumOfAccounts.GMAIL_CALENDAR+single.totalNumOfAccounts.SALESFORCE+single.totalNumOfAccounts.TWITTER;
        totalNumOfThreads = single.totalNumOfThreads;
        totalNumOfFollowUpThreads = single.totalNumOfFollowUpThreads;
        totalNumOfUserModels = single.totalNumOfUserModels;
        totalValidRefreshTokens = single.totalValidRefreshTokens;
        maxPossibleNumOfFollowUp = single.maxPossibleNumOfFollowUp;
        differenceRefreshToken = single.maxPossibleNumOfFollowUp;

        let unixEpochTime = single.snapshotDateUnixTimeStamp;
        // console.log("unixEpochTime>>>>>",unixEpochTime);
        // let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        //     d.setUTCSeconds(unixEpochTime);
        //     d.setDate(d.getDate() - 100);
        //  console.log("epochdate>>>",d);
        var d = new Date(unixEpochTime*1000);
        //  console.log("date>>>>>",d);
        // dataL.push({
        //             date: d,
        //             totalAccounts: totalNumOfAccounts,
        //             totalUsers: totalNumOfUsers
        //
        //        });//endofdataL
        //         MakeChartData(dataL)
        var calculatedDate= single.snapshotDate;
        var dm= new Date(calculatedDate);
        var dmdate= dm.getDate();
        var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      var dmmonth=monthNames[dm.getMonth()];

      var t= dmmonth+ dmdate;//for the x-axis

      // console.log("date>>>>>tttt",t);
      dataM.push({
        date: t,
        usersValue:totalNumOfUsers,
        followup : single.followUpStatusCounts.FOLLOWED_UP,
        Ignored: single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED,
        maxpossibleTL: single.maxPossibleThreadsInList,
        NoAction: single.followUpStatusCounts.NO_ACTION,
        undefinedone: single.followUpStatusCounts.UNDEFINED,
        totalsent: single.followUpStatusCounts.FOLLOWED_UP+single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED+single.followUpStatusCounts.NO_ACTION+single.followUpStatusCounts.UNDEFINED

      });//end of dataM
      // console.log("dataM>>>>",dataM);
      MakeStackData(dataM);
      MaxChartData(dataM);
      // dataN.push({
      //   date: t,
      //   usersValue:single.totalNumOfUsers,
      //   followup : single.followUpStatusPercentages.FOLLOWED_UP,
      //   Ignored: single.followUpStatusPercentages.IGNORED+single.followUpStatusPercentages.IGNORED_BLACKLISTED,
      //   maxpossibleTL: single.maxPossibleThreadsInList,
      //   NoAction: single.followUpStatusPercentages.NO_ACTION,
      //   undefinedone:single.followUpStatusPercentages.UNDEFINED
      //
      // });
      // console.log("dataN>>>>",dataN);
      // MakepercentData(dataN);
    })//for each


  }//success
});//ajax



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


var ed,sd;
//for one week
$('a.oneWeek').on('click', function(today1){
  $('.datePicker').css('visibility', 'visible');
  var ed= $('#endDate').val(todaysdate(today1));
  var ed = $('#endDate').val();
  //console.log("endDate%",ed);
  var oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 8);
  var oneWeekAgoDate=oneWeekAgo.getDate();
  var oneWeekAgoMonth=oneWeekAgo.getMonth()+1;
  var oneWeekAgoYear=oneWeekAgo.getFullYear();
  if(oneWeekAgoDate<10) {
    oneWeekAgoDate='0'+oneWeekAgoDate
  }

  if(oneWeekAgoMonth<10) {
    oneWeekAgoMonth='0'+oneWeekAgoMonth
  }
  var sd=oneWeekAgoYear+'-'+oneWeekAgoMonth+'-'+oneWeekAgoDate;
  $('#startDate').val(sd);
  //console.log("one weekago>>",sd);
});
//for two weeks
$('a.twoWeeks').on('click', function(today1){
  $('.datePicker').css('visibility', 'visible');
  var ed= $('#endDate').val(todaysdate(today1));
  var ed= $('#endDate').val();
  //console.log("endDate%",ed);
  var twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 15);
  var twoWeeksAgoDate=twoWeeksAgo.getDate();
  var twoWeeksAgoMonth=twoWeeksAgo.getMonth()+1;
  var twoWeeksAgoYear=twoWeeksAgo.getFullYear();
  if(twoWeeksAgoDate<10) {
    twoWeeksAgoDate='0'+twoWeeksAgoDate
  }

  if(twoWeeksAgoMonth<10) {
    twoWeeksAgoMonth='0'+twoWeeksAgoMonth
  }
  var sd=twoWeeksAgoYear+'-'+twoWeeksAgoMonth+'-'+twoWeeksAgoDate;
  $('#startDate').val(sd);
  //console.log("twoweeks ago>>",sd);
});
//for one month
$('a.oneMonth').on('click', function(today1){
  $('.datePicker').css('visibility', 'visible');
  var ed= $('#endDate').val(todaysdate(today1));
  var ed = $('#endDate').val();
  //  console.log("endDate%",ed);
  var oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate());
  var oneMonthAgoDate=oneMonthAgo.getDate();
  var oneMonthAgoMonth=oneMonthAgo.getMonth()+1-1;
  var oneMonthAgoYear=oneMonthAgo.getFullYear();
  if(oneMonthAgoDate<10) {
    oneMonthAgoDate='0'+oneMonthAgoDate
  }

  if(oneMonthAgoMonth<10) {
    oneMonthAgoMonth='0'+oneMonthAgoMonth
  }
  var sd=oneMonthAgoYear+'-'+oneMonthAgoMonth+'-'+oneMonthAgoDate;
  $('#startDate').val(sd);
  //console.log("one Monthago>>",sd);
});
//for one quarter
$('a.oneQuarter').on('click', function(today1){
  $('.datePicker').css('visibility', 'visible');
  var ed= $('#endDate').val(todaysdate(today1));
  var ed=$('#endDate').val();
  //console.log("endDate%",ed);
  var threeMonthsAgo = new Date();
  threeMonthsAgo.setDate(threeMonthsAgo.getDate());
  var threeMonthsAgoDate=threeMonthsAgo.getDate();
  var threeMonthsAgoMonth=threeMonthsAgo.getMonth()+1-3;
  var threeMonthsAgoYear=threeMonthsAgo.getFullYear();
  if(threeMonthsAgoDate<10) {
    threeMonthsAgoDate='0'+threeMonthsAgoDate
  }

  if(threeMonthsAgoMonth<10) {
    threeMonthsAgoMonth='0'+threeMonthsAgoMonth
  }
  var sd=threeMonthsAgoYear+'-'+threeMonthsAgoMonth+'-'+threeMonthsAgoDate;
  $('#startDate').val(sd);
  // console.log("threeMonthsAgo>>",sd);
});
$('.datesubmit').on('click', function(){
  var datetimepicker1=$('#startDate').val(),
  dateFrom = new Date(datetimepicker1);
  var dOne= dateFrom.getDate();
  var mOne= dateFrom.getMonth()+1;
  var yOne= dateFrom.getFullYear();
  if(dOne<10) {
    dOne='0'+dOne
  }

  if(mOne<10) {
    mOne='0'+mOne
  }

  // console.log("dOne>>>",dOne);
  // console.log("mOne>>>",mOne);
  // console.log("yOne>>>",yOne);
  var  dateOne = yOne+"-"+mOne+"-"+dOne;
  //  console.log('date1>>>', dateOne);
  var datetimepicker2= $('#endDate').val(),
  dateTo = new Date(datetimepicker2);
  var dTwo= dateTo.getDate();
  var mTwo= dateTo.getMonth()+1;
  var yTwo= dateTo.getFullYear();
  if(dTwo<10) {
    dTwo='0'+dTwo
  }

  if(mTwo<10) {
    mTwo='0'+mTwo
  }

  // console.log("dTwo>>>",dTwo);
  // console.log("mTwo>>>",mTwo);
  // console.log("yTwo>>>",yTwo);
  var dateTwo = yTwo+"-"+mTwo+"-"+dTwo;
  //  console.log('date2>>>', dateTwo);
  // console.log('date2>>>',dateTo);
  if(isNaN(dateFrom)|| isNaN(dateTo)){
    return;
  }

  // console.log("sd>>>>",dateOne);
  // console.log("ed>>>>",dateTwo);
  // console.log("getalink>>>",getalink);
  $.ajax({
    //url: (num == 1) ? url1 : url2,
    url:'http://52.7.123.186:8080/analysis/users/'+getalink+'?start_date='+dateOne+'&end_date='+dateTwo,
    //  url:'http://52.7.123.186:8080/analysis/snapshot-views?start_date='+datetimepicker1+'&end_date='+datetimepicker2,

    contentType:"application/x-www-form-urlencoded",
    type: 'GET',
    dataType: 'json',
    crossDomain: true,

    error: function() {
      $('#info').html('<p>An error has occurred</p>');
    },
    success: function (data) {
      var totalNumOfUsers, relatedAccounts, baseEmailAddress, UserEngagements, totalFollowUpStatusCounts, signUpDate, differenceTotalNumOfUsers, differenceRefreshTokenCount, totalNumOfAccounts, totalNumOfThreads, totalNumOfFollowUpThreads, totalNumOfUserModels, totalValidRefreshTokens, avgMessagesPerThread;
      console.log ('data>>>',data);
      // console.log('data.length>>>',data.length);
      var signupDateDisplay = new Date(data.signUpDate);
      var ddate=signupDateDisplay.getDate();
      var dyear = signupDateDisplay.getFullYear();
      var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var dmonth=monthNames[signupDateDisplay.getMonth()];
    var tt= dmonth+ " "+ ddate+','+" "+dyear;//for the x-axis

    // console.log("tt>>>",tt);
    $('#showName').text(data.baseEmailAddress);
    $('#signUpDate').text(tt);
    // console.log("followUpStatusCounts>>>",data.userEngagements);
    // console.log("relatedAccounts>>>",data.relatedAccounts);
    var major=data.userEngagements;
    var relAcc=data.relatedAccounts;
    relAcc.forEach(function(single){
      // console.log("accountType>>>>",single.accountType);
      //       $('#AccountType').text(single.accountType);

    })
    let snapshotDate=[];
    let dataL = [];
    let dataM = [];
    let dataN = [];
    major.forEach(function(single){
      //console.log('snapshotDate>>',single.snapshotDate);
      // snapshotDate.push(single.snapshotDate);
      // generateChartData(snapshotDate,single.totalNumOfUsers,single.totalNumOfAccounts.GMAIL,data.length);
      totalFollowUpStatusCounts = single.followUpStatusCounts.FOLLOWED_UP+single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED+single.followUpStatusCounts.NO_ACTION+single.followUpStatusCounts.UNDEFINED;
      //console.log("totalFollowUpStatusCounts>>>>",totalFollowUpStatusCounts);
      totalNumOfUsers = single.totalNumOfUsers;
      differenceTotalNumOfUsers = single.totalNumOfUsers;

      //  totalNumOfAccounts = single.totalNumOfAccounts.GMAIL+single.totalNumOfAccounts.GMAIL_CALENDAR+single.totalNumOfAccounts.SALESFORCE+single.totalNumOfAccounts.TWITTER;
      totalNumOfThreads = single.totalNumOfThreads;
      totalNumOfFollowUpThreads = single.totalNumOfFollowUpThreads;
      totalNumOfUserModels = single.totalNumOfUserModels;
      totalValidRefreshTokens = single.totalValidRefreshTokens;
      maxPossibleNumOfFollowUp = single.maxPossibleNumOfFollowUp;
      differenceRefreshToken = single.maxPossibleNumOfFollowUp;

      let unixEpochTime = single.snapshotDateUnixTimeStamp;
      // console.log("unixEpochTime>>>>>",unixEpochTime);
      // let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      //     d.setUTCSeconds(unixEpochTime);
      //     d.setDate(d.getDate() - 100);
      //  console.log("epochdate>>>",d);
      var d = new Date(unixEpochTime*1000);
      //  console.log("date>>>>>",d);
      // dataL.push({
      //             date: d,
      //             totalAccounts: totalNumOfAccounts,
      //             totalUsers: totalNumOfUsers
      //
      //        });//endofdataL
      //         MakeChartData(dataL)
      var calculatedDate= single.snapshotDate;
      var dm= new Date(calculatedDate);
      var dmdate= dm.getDate();
      var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var dmmonth=monthNames[dm.getMonth()];

    var t= dmmonth+ dmdate;//for the x-axis

    // console.log("date>>>>>tttt",t);
    dataM.push({
      date: t,
      usersValue:totalNumOfUsers,
      followup : single.followUpStatusCounts.FOLLOWED_UP,
      Ignored: single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED,
      maxpossibleTL: single.maxPossibleThreadsInList,
      NoAction: single.followUpStatusCounts.NO_ACTION,
      undefinedone: single.followUpStatusCounts.UNDEFINED,
      totalsent: single.followUpStatusCounts.FOLLOWED_UP+single.followUpStatusCounts.IGNORED+single.followUpStatusCounts.IGNORED_BLACKLISTED+single.followUpStatusCounts.NO_ACTION+single.followUpStatusCounts.UNDEFINED

    });//end of dataM
    // console.log("dataM>>>>",dataM);
    MakeStackData(dataM);
    MaxChartData(dataM);
    // dataN.push({
    //   date: t,
    //   usersValue:single.totalNumOfUsers,
    //   followup : single.followUpStatusPercentages.FOLLOWED_UP,
    //   Ignored: single.followUpStatusPercentages.IGNORED+single.followUpStatusPercentages.IGNORED_BLACKLISTED,
    //   maxpossibleTL: single.maxPossibleThreadsInList,
    //   NoAction: single.followUpStatusPercentages.NO_ACTION,
    //   undefinedone:single.followUpStatusPercentages.UNDEFINED
    //
    // });
    // console.log("dataN>>>>",dataN);
    // MakepercentData(dataN);
  })//for each


}//success
});//ajax

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

function todaysdate(){

  /////yesterday's dateto show for datepicker2
  today = new Date();
  yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1); //setDate also supports negative values, which cause the month to rollover.
  var dd = yesterday.getDate();
  var mm = yesterday.getMonth()+1; //January is 0!

  var yyyy = yesterday.getFullYear();
  if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
  var today1 = yyyy+'-'+mm+'-'+dd;
  return today1;
};

//datepicker

});

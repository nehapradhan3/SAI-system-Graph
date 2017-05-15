var chartData = generateChartData();

var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "legend": {
    "useGraphSettings": true
  },
  "dataProvider": chartData,
  "synchronizeGrid":true,
  "valueAxes": [{
    "id":"v1",
    "axisColor": "#FF6600",
    "axisThickness": 2,
    "axisAlpha": 1,
    "position": "left"
  }, {
    "id":"v2",
    "axisColor": "#FCD202",
    "axisThickness": 2,
    "axisAlpha": 1,
    "position": "right"
  },
  {
    "id":"v3",
    "axisColor": "#FCD202",
    "axisThickness": 2,
    "axisAlpha": 1,
    "position": "right"
  }],
  "graphs": [{
    "valueAxis": "v1",
    "lineColor": "#FF6600",
    "bullet": "round",
    "bulletBorderThickness": 1,
    "hideBulletsCount": 30,
    "title": "active users",
    "valueField": "visits",
    "fillAlphas": 0
  }, {
    "valueAxis": "v2",
    "lineColor": "#e8f442",
    "bullet": "square",
    "bulletBorderThickness": 1,
    "hideBulletsCount": 30,
    "title": "total users",
    "valueField": "hits",
    "fillAlphas": 0
  }, {
    "valueAxis": "v3",
    "lineColor": "#42f44e",
    "bullet": "square",
    "bulletBorderThickness": 1,
    "hideBulletsCount": 30,
    "title": "answers",
    "valueField": "answers",
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
    "position": "bottom"
  }
});

chart.addListener("dataUpdated", zoomChart);
zoomChart();


// generate some random data, quite different range
function generateChartData() {

  $(document).ready(function () {
    $.ajax({
      //url: 'http://54.174.27.160:8080/analysis/snapshots/latest',
      url :'http://52.55.210.93:8080/analysis/snapshot-views?sortOrder=DESCENDING&size=1',

      contentType:"application/x-www-form-urlencoded",
      type: 'GET',
      dataType: 'json',
      crossDomain: true,

      error: function() {
        $('#info').html('<p>An error has occurred</p>');
      },
      success: function (data) {

        // chartData =data.dataProvider;
        var totalNumOfUsers,  differenceTotalNumOfUsers, differenceRefreshTokenCount, totalNumOfAccounts, totalNumOfThreads, totalNumOfFollowUpThreads, totalNumOfUserModels, totalValidRefreshTokens, avgMessagesPerThread;
        data.forEach(function(single){

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

        console.log("totalNumOfUsers>>>",totalNumOfUsers);
        console.log("totalNumOfAccounts>>>",totalNumOfAccounts);
        console.log("totalNumOfThreads>>>",totalNumOfThreads);
        console.log("totalNumOfFollowUpThreads>>>",totalNumOfFollowUpThreads);
        console.log("totalNumOfUserModels>>>",totalNumOfUserModels);
        console.log("totalValidRefreshTokens>>>",totalValidRefreshTokens);
        console.log("maxPossibleNumOfFollowUp>>>",maxPossibleNumOfFollowUp);

        var values = [];
        data.forEach(function(single){
          values = [];
          var keys = Object.keys(single.totalNumOfAccounts);
          keys.forEach(function(key){
            let a = {"totalNoOfAccounts" : key , "litres" : single.totalNumOfAccounts[key] };
            values.push(a);
          })
          createChart(values);
        });

      }

    });
  });

  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 100);
  var answers =20;
  var totalNumOfUsers;
  var totalNumOfAccounts;
  var totalNumOfThreads;
  var totalNumOfFollowUpThreads;
  var totalNumOfUserModels;
  var totalValidRefreshTokens;
  var avgMessagesPerThread;

  for (var i = 0; i < 100; i++) {
    // we create date objects here. In your data, you can have date strings
    // and then set format of your dates using chart.dataDateFormat property,
    // however when possible, use date objects, as this will speed up chart rendering.
    var newDate = new Date(firstDate);
    newDate.setDate(newDate.getDate() + i);

    var visits = Math.round(Math.sin(i * 5) * i);
    var hits = Math.round(Math.random() * 80) + 500 + i * 3;
    var views = Math.round(Math.random() * 6000) + i * 4;

    chartData.push({
      date: newDate,
      visits: visits,
      hits: hits,
      views: views,
      answers: answers,
      totalNumOfUsers: totalNumOfUsers,
      totalNumOfAccounts: totalNumOfAccounts,
      totalNumOfThreads: totalNumOfThreads,
      totalNumOfFollowUpThreads: totalNumOfFollowUpThreads,
      totalNumOfUserModels: totalNumOfUserModels,
      totalValidRefreshTokens: totalValidRefreshTokens,
      avgMessagesPerThread: avgMessagesPerThread
    });
  }
  return chartData;
}

function zoomChart(){
  chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}


function createChart(data){
  /*PieChart*/
  var chartTwo = AmCharts.makeChart( "chartdivTwo", {
    "type": "pie",
    "theme": "dark",
    "dataProvider": data,
    "valueField": "litres",
    "titleField": "totalNoOfAccounts",
    "balloon":{
      "fixedPosition":true
    },
    "export": {
      "enabled": true,
      "position": "bottom-right"

    }
  } );
}

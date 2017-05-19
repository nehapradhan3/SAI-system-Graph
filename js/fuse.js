var chart = AmCharts.makeChart("chartdivFour", {
    "theme": "light",
    "type": "serial",
    "titles": [ {
      "text": "Ignored Vs no_Action",
      "size": 16
    } ],
    "dataProvider": [{
        "country": "date1",
        "year2004": 3.5,
        "year2005": 4.2,
        "year2006": 5.2,
        "year2007" : 8.8,
        "expenses": 30.5


    }, {
        "country": "date2",
        "year2004": 1.7,
        "year2005": 3.1,
        "year2006": 5.2,
          "year2007" : 10,
          "expenses": 19.5
    }, {
        "country": "date3",
        "year2004": 2.8,
        "year2005": 2.9,
        "year2006": 5.2,
          "year2007" : 11,
          "expenses": 38.5

    }, {
        "country": "date4",
        "year2004": 2.6,
        "year2005": 2.3,
        "year2006": 5.2,
          "year2007" : 12,
          "expenses": 33.5

    }, {
        "country": "date5",
        "year2004": 1.4,
        "year2005": 3.1,
        "year2006": 7.2,
          "year2007" : 14,
          "expenses": 20.5

    }, {
        "country": "date6",
        "year2004": 2.6,
        "year2005": 4.9,
        "year2006": 5.2,
          "year2007" : 17,
          "expenses": 40.5

    }, {
        "country": "date7",
        "year2004": 6.4,
        "year2005": 7.2,
        "year2006": 5.2,
          "year2007" : 13,
          "expenses": 16.5
    }, {
        "country": "date8",
        "year2004": 8,
        "year2005": 7.1,
          "year2006": 5.2,
            "year2007" : 16,
            "expenses": 20.5
    }, {
        "country": "date9",
        "year2004": 9.9,
        "year2005": 10.1,
        "year2006": 5.2,
          "year2007" : 8,
          "expenses": 10.5

    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
        "title": "GDP growth rate",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 2.2,
        "title": "2004",
        "type": "column",
        "valueField": "year2004"
    }, {
        "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
        "fillAlphas": 3.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "valueField": "year2005"
    }, {
        "balloonText": "GDP grow in [[category]] (2006): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2006",
        "type": "column",
        "valueField": "year2006"
    }, {
        "balloonText": "GDP grow in [[category]] (2007): <b>[[value]]</b>",
        "fillAlphas": 1.9,
        "lineAlpha": 0.2,
        "title": "2007",
        "type": "column",
        "valueField": "year2007"
    },
    {
     "id": "graph2",
     "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
     "bullet": "round",
     "lineThickness": 3,
     "bulletSize": 7,
     "bulletBorderAlpha": 1,
     "bulletColor": "#FFFFFF",
     "useLineColorForBulletBorder": true,
     "bulletBorderThickness": 3,
     "fillAlphas": 0,
     "lineAlpha": 1,
     "title": "Expenses",
     "valueField": "expenses",
     "dashLengthField": "dashLengthLine"
   }],
    "plotAreaFillAlphas": 0.1,
    "depth3D": 60,
    "angle": 30,
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
    	"enabled": true
     }
});
jQuery('.chart-input').off().on('input change',function() {
	var property	= jQuery(this).data('property');
	var target		= chart;
	chart.startDuration = 0;

	if ( property == 'topRadius') {
		target = chart.graphs[0];
      	if ( this.value == 0 ) {
          this.value = undefined;
      	}
	}

	target[property] = this.value;
	chart.validateNow();
});

/*
* @author Neha Pradhan
* 17th May 2017
*/


var chartData = generateChartData();

var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "titles": [ {
    "text": "Number of users in time series",
    "size": 16
  } ],
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
    "title": "ignored",
    "valueField": "ignored",
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
    if (sessionStorage.getItem('status') !== 'loggedIn'){

      window.location.href="index.html";
    }

    //todays date

  var t = new Date();

 var decrement = (t.getDay() == 1? 3:1);

var yesterday = new Date();

console.log('yesterday date',yesterday);

yesterday.setDate(t.getDate() - decrement);
var printday =yesterday;
var newdatebiz = printday;
console.log("newdatebiz",newdatebiz);
var dd=newdatebiz.getDate();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var mm=monthNames[newdatebiz.getMonth()];
var yyyy=newdatebiz.getFullYear();
console.log("hellonewdate>>>",dd);
console.log("hellonewdate>>>",mm);
console.log("hellonewdate>>>",yyyy);
yesterday=dd+" "+mm+","+" "+yyyy;
console.log("yesterday1>>>>",yesterday);

printday=new Date(printday).toUTCString();
printday=printday.split(' ').slice(0, 4).join(' ')
console.log(printday);
// $('#seedate').text(printday);

filterDate(yesterday);


//////////////datepicker//////////////////////////////

window.Picker=function(e,t){function n(r,i,o,a){function s(){return n._.node("div",n._.node("div",n._.node("div",n._.node("div",h.component.nodes(u.open),d.box),d.wrap),d.frame),d.holder)}function c(){h.open(),h.$root.addClass(d.focused)}if(!r)return n;var u={id:Math.abs(~~(1e9*Math.random()))},l=o?$.extend(!0,{},o.defaults,a):a||{},d=$.extend({},n.klasses(),l.klass),m=$(r),p=function(){return this.start()},h=p.prototype={constructor:p,$node:m,start:function(){return u&&u.start?h:(u.methods={},u.start=!0,u.open=!1,u.type=r.type,r.autofocus=r==document.activeElement,r.type="text",r.readOnly=!0,h.component=new o(h,l),h.$root=$(n._.node("div",s(),d.picker)).on({focusin:function(e){h.$root.removeClass(d.focused),e.stopPropagation()},mousedown:function(e){e.target!=h.$root.children()[0]&&e.stopPropagation()},click:function(e){var t=e.target,i=$(t),o=i.data();t!=h.$root.children()[0]&&(e.stopPropagation(),h.$root.find(document.activeElement).length||r.focus(),o.nav&&!i.hasClass(d.navDisabled)?h.set("highlight",h.component.item.highlight,{nav:o.nav}):n._.isInteger(o.pick)&&!i.hasClass(d.disabled)?h.set({select:o.pick,highlight:o.pick}).close(!0):o.clear&&h.clear().close(!0))}}),h._hidden=l.formatSubmit?$("<input type=hidden name="+r.name+(l.hiddenSuffix||"_submit")+(m.data("value")?' value="'+n._.trigger(h.component.formats.toString,h.component,[l.formatSubmit,h.component.item.select]):"")+'">')[0]:t,m.addClass(d.input).on("focus.P"+u.id,c).on("click.P"+u.id,h.open).on("change.P"+u.id,function(){h._hidden&&(h._hidden.value=r.value?n._.trigger(h.component.formats.toString,h.component,[l.formatSubmit,h.component.item.select]):"")}).on("keydown.P"+u.id,function(e){var n=e.keyCode,r=/^(8|46)$/.test(n);return 27==n?(h.close(),!1):((32==n||r||!u.open&&h.component.key[n])&&(e.preventDefault(),e.stopPropagation(),r?h.clear().close():h.open()),t)}).val(m.data("value")?n._.trigger(h.component.formats.toString,h.component,[l.format,h.component.item.select]):"").after(h.$root,h._hidden).data(i,h),h.on({start:h.component.onStart,render:h.component.onRender,stop:h.component.onStop,open:h.component.onOpen,close:h.component.onClose,set:h.component.onSet}).on({start:l.onStart,render:l.onRender,stop:l.onStop,open:l.onOpen,close:l.onClose,set:l.onSet}),r.autofocus&&h.open(),h.trigger("start").trigger("render"))},render:function(){return h.$root.html(s()),h.trigger("render")},stop:function(){return u.start?(h.close(),h._hidden&&h._hidden.parentNode.removeChild(h._hidden),h.$root.remove(),m.removeClass(d.input).off(".P"+u.id).removeData(i),r.type=u.type,r.readOnly=!1,h.trigger("stop"),u.methods={},u.start=!1,h):h},open:function(t){return u.open?h:(m.addClass(d.active),h.$root.addClass(d.opened),t!==!1&&(u.open=!0,m.focus(),e.on("click.P"+u.id+" focusin.P"+u.id,function(e){e.target!=r&&e.target!=document&&h.close()}).on("keydown.P"+u.id,function(e){var t=e.keyCode,i=h.component.key[t],o=e.target;27==t?h.close(!0):o!=r||!i&&13!=t?h.$root.find(o).length&&13==t&&(e.preventDefault(),o.click()):(e.preventDefault(),i?n._.trigger(h.component.key.go,h,[i]):h.set("select",h.component.item.highlight).close())})),h.trigger("open"))},close:function(t){return t&&(m.off("focus.P"+u.id).focus(),setTimeout(function(){m.on("focus.P"+u.id,c)},0)),m.removeClass(d.active),h.$root.removeClass(d.opened+" "+d.focused),u.open?(u.open=!1,e.off(".P"+u.id),h.trigger("close")):h},clear:function(){return h.set("clear")},set:function(e,t,r){var i,o,a=n._.isObject(e),s=a?e:{};if(e){a||(s[e]=t);for(i in s)o=s[i],h.component.item[i]&&h.component.set(i,o,r||{}),("select"==i||"clear"==i)&&m.val("clear"==i?"":n._.trigger(h.component.formats.toString,h.component,[l.format,h.component.get(i)])).trigger("change");h.render()}return h.trigger("set",s)},get:function(e,i){return e=e||"value",null!=u[e]?u[e]:"value"==e?r.value:h.component.item[e]?"string"==typeof i?n._.trigger(h.component.formats.toString,h.component,[i,h.component.get(e)]):h.component.get(e):t},on:function(e,t){var r,i,o=n._.isObject(e),a=o?e:{};if(e){o||(a[e]=t);for(r in a)i=a[r],u.methods[r]=u.methods[r]||[],u.methods[r].push(i)}return h},trigger:function(e,t){var r=u.methods[e];return r&&r.map(function(e){n._.trigger(e,h,[t])}),h}};return new p}return n.klasses=function(e){return e=e||"picker",{picker:e,opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},n._={group:function(e){for(var t,r="",i=n._.trigger(e.min,e);n._.trigger(e.max,e,[i])>=i;i+=e.i)t=n._.trigger(e.item,e,[i]),r+=n._.node(e.node,t[0],t[1],t[2]);return r},node:function(e,t,n,r){return t?(t=Array.isArray(t)?t.join(""):t,n=n?' class="'+n+'"':"",r=r?" "+r:"","<"+e+n+r+">"+t+"</"+e+">"):""},lead:function(e){return(10>e?"0":"")+e},trigger:function(e,t,n){return"function"==typeof e?e.apply(t,n||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isObject:function(e){return{}.toString.call(e).indexOf("Object")>-1},isDate:function(e){return{}.toString.call(e).indexOf("Date")>-1},isInteger:function(e){return{}.toString.call(e).indexOf("Number")>-1&&0===e%1}},n.extend=function(e,t){$.fn[e]=function(r,i){var o=this.data(e);return"picker"==r?o:o&&"string"==typeof r?(n._.trigger(o[r],o,[i]),this):this.each(function(){var i=$(this);i.data(e)||new n(this,e,t,r)})},$.fn[e].defaults=t.defaults},n}($(document));


(function(){function e(e,t){var i=this,r=e.$node.data("value");i.settings=t,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"navigate create validate",view:"create viewset",disable:"flipItem",enable:"flipItem"},i.item={},i.item.disable=(t.disable||[]).slice(0),i.item.enable=-function(e){return e[0]===!0?e.shift():-1}(i.item.disable),i.set("min",t.min).set("max",t.max).set("now").set("select",r||e.$node[0].value||i.item.now,{format:r?t.formatSubmit:t.format,data:!!r}).set("highlight",i.item.select),i.key={40:7,38:-7,39:1,37:-1,go:function(e){i.set("highlight",[i.item.highlight.year,i.item.highlight.month,i.item.highlight.date+e],{interval:e}),this.render()}},e.on("render",function(){e.$root.find("."+t.klass.selectMonth).on("change",function(){e.set("highlight",[e.get("view").year,this.value,e.get("highlight").date]),e.$root.find("."+t.klass.selectMonth).focus()}),e.$root.find("."+t.klass.selectYear).on("change",function(){e.set("highlight",[this.value,e.get("view").month,e.get("highlight").date]),e.$root.find("."+t.klass.selectYear).focus()})}).on("open",function(){e.$root.find("button, select").attr("disabled",!1)}).on("close",function(){e.$root.find("button, select").attr("disabled",!0)})}var t=7,i=6;e.prototype.set=function(e,t,i){var r=this;return r.item["enable"==e?"disable":"flip"==e?"enable":e]=r.queue[e].split(" ").map(function(n){return t=r[n](e,t,i)}).pop(),"select"==e?r.set("highlight",r.item.select,i):"highlight"==e?r.set("view",r.item.highlight,i):("flip"==e||"min"==e||"max"==e||"disable"==e||"enable"==e)&&r.item.select&&r.item.highlight&&r.set("select",r.item.select,i).set("highlight",r.item.highlight,i),r},e.prototype.get=function(e){return this.item[e]},e.prototype.create=function(e,t,i){var r,n=this;return t=void 0===t?e:t,t==-1/0||1/0==t?r=t:t=Picker._.isObject(t)&&Picker._.isInteger(t.pick)?t.obj:Array.isArray(t)?new Date(t[0],t[1],t[2]):Picker._.isInteger(t)||Picker._.isDate(t)?n.normalize(new Date(t),i):n.now(e,t,i),{year:r||t.getFullYear(),month:r||t.getMonth(),date:r||t.getDate(),day:r||t.getDay(),obj:r||t,pick:r||t.getTime()}},e.prototype.now=function(e,t,i){return t=new Date,i&&i.rel&&t.setDate(t.getDate()+i.rel),this.normalize(t,i)},e.prototype.navigate=function(e,t,i){return Picker._.isObject(t)&&(t=[t.year,t.month+(i&&i.nav?i.nav:0),t.date]),t},e.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},e.prototype.measure=function(e,t){var i=this;return t?Picker._.isInteger(t)&&(t=i.now(e,t,{rel:t})):t="min"==e?-1/0:1/0,t},e.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},e.prototype.validate=function(e,t,i){var r=this,n=i&&i.interval?i.interval:1;return r.disabled(t)&&(t=r.shift(t,n)),t=r.scope(t),r.disabled(t)&&(t=r.shift(t,t.pick<=r.item.min.pick?1:t.pick>=r.item.max.pick?-1:n)),t},e.prototype.disabled=function(e){var t=this,i=t.item.disable.filter(function(i){return Picker._.isInteger(i)?e.day===(t.settings.firstDay?i:i-1)%7:Array.isArray(i)?e.pick===t.create(i).pick:void 0}).length;return-1===t.item.enable?!i:i},e.prototype.shift=function(e,t){var i=this,r=e;for(t=t||1;i.disabled(e)&&(e=i.create([e.year,e.month,e.date+t]),Math.abs(e.month-r.month)>2&&(e=r,t=-1===i.item.enable?0>t?1:-1:0>t?-1:1),!(e.pick<=i.item.min.pick||e.pick>=i.item.max.pick)););return e},e.prototype.scope=function(e){var t=this.item.min.pick,i=this.item.max.pick;return this.create(e.pick>i?i:t>e.pick?t:e)},e.prototype.parse=function(e,t,i){var r=this,n={};if(!t||Picker._.isInteger(t)||Array.isArray(t)||Picker._.isDate(t)||Picker._.isObject(t)&&Picker._.isInteger(t.pick))return t;if(!i||!i.format)throw"Need a formatting option to parse this..";return r.formats.toArray(i.format).map(function(e){var i=r.formats[e],a=i?Picker._.trigger(i,r,[t,n]):e.replace(/^!/,"").length;i&&(n[e]=t.substr(0,a)),t=t.substr(a)}),[n.yyyy||n.yy,+(n.mm||n.m)-(i.data?1:0),n.dd||n.d]},e.prototype.formats=function(){var e=function(e,t,i){var r=e.match(/\w+/)[0];return i.mm||i.m||(i.m=t.indexOf(r)),r.length};return{d:function(e,t){return e?Picker._.digits(e):t.date},dd:function(e,t){return e?2:Picker._.lead(t.date)},ddd:function(e,t){return e?getFirstWordLength(e):this.settings.weekdaysShort[t.day]},dddd:function(e,t){return e?getFirstWordLength(e):this.settings.weekdaysFull[t.day]},m:function(e,t){return e?Picker._.digits(e):t.month+1},mm:function(e,t){return e?2:Picker._.lead(t.month+1)},mmm:function(t,i){var r=this.settings.monthsShort;return t?e(t,r,i):r[i.month]},mmmm:function(t,i){var r=this.settings.monthsFull;return t?e(t,r,i):r[i.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(e,t){var i=this;return i.formats.toArray(e).map(function(e){return Picker._.trigger(i.formats[e],i,[0,t])||e.replace(/^!/,"")}).join("")}}}(),e.prototype.flipItem=function(e,t){var i=this,r=i.item.disable,n=-1===i.item.enable;return"flip"==t?i.item.enable=n?1:-1:!n&&"enable"==e||n&&"disable"==e?r=i.removeDisabled(r,t):(!n&&"disable"==e||n&&"enable"==e)&&(r=i.addDisabled(r,t)),r},e.prototype.addDisabled=function(e,t){var i=this;return t.map(function(t){i.filterDisabled(e,t).length||e.push(t)}),e},e.prototype.removeDisabled=function(e,t){var i=this;return t.map(function(t){e=i.filterDisabled(e,t,1)}),e},e.prototype.filterDisabled=function(e,t,i){var r=Array.isArray(t);return e.filter(function(e){var n=!r&&t===e||r&&Array.isArray(e)&&""+t==""+e;return i?!n:n})},e.prototype.nodes=function(e){var r=this,n=r.settings,a=r.item.now,o=r.item.select,s=r.item.highlight,l=r.item.view,c=r.item.disable,u=r.item.min,d=r.item.max,h=function(e){return n.firstDay&&e.push(e.shift()),Picker._.node("thead",Picker._.group({min:0,max:t-1,i:1,node:"th",item:function(t){return[e[t],n.klass.weekdays]}}))}((n.showWeekdaysFull?n.weekdaysFull:n.weekdaysShort).slice(0)),m=function(e){return Picker._.node("div"," ",n.klass["nav"+(e?"Next":"Prev")]+(e&&l.year>=d.year&&l.month>=d.month||!e&&l.year<=u.year&&l.month<=u.month?" "+n.klass.navDisabled:""),"data-nav="+(e||-1))},p=function(e){return n.selectMonths?Picker._.node("select",Picker._.group({min:0,max:11,i:1,node:"option",item:function(t){return[e[t],0,"value="+t+(l.month==t?" selected":"")+(l.year==u.year&&u.month>t||l.year==d.year&&t>d.month?" disabled":"")]}}),n.klass.selectMonth):Picker._.node("div",e[l.month],n.klass.month)},y=function(){var e=l.year,t=n.selectYears===!0?5:~~(n.selectYears/2);if(t){var i=u.year,r=d.year,a=e-t,o=e+t;if(i>a&&(o+=i-a,a=i),o>r){var s=a-i,c=o-r;a-=s>c?c:s,o=r}return Picker._.node("select",Picker._.group({min:a,max:o,i:1,node:"option",item:function(t){return[t,0,"value="+t+(e==t?" selected":"")]}}),n.klass.selectYear)}return Picker._.node("div",e,n.klass.year)};return Picker._.node("div",m()+m(1)+p(n.showMonthsShort?n.monthsShort:n.monthsFull)+y(),n.klass.header)+Picker._.node("table",h+Picker._.node("tbody",Picker._.group({min:0,max:i-1,i:1,node:"tr",item:function(e){return[Picker._.group({min:t*e-l.day+1,max:function(){return this.min+t-1},i:1,node:"td",item:function(e){return e=r.create([l.year,l.month,e+(n.firstDay?1:0)]),[Picker._.node("div",e.date,function(t){return t.push(l.month==e.month?n.klass.infocus:n.klass.outfocus),a.pick==e.pick&&t.push(n.klass.now),o&&o.pick==e.pick&&t.push(n.klass.selected),s&&s.pick==e.pick&&t.push(n.klass.highlighted),(c&&r.disabled(e)||e.pick<u.pick||e.pick>d.pick)&&t.push(n.klass.disabled),t.join(" ")}([n.klass.day]),"data-pick="+e.pick)]}})]}})),n.klass.table)+Picker._.node("div",Picker._.node("button",n.today,n.klass.buttonToday,"data-pick="+a.pick+(e?"":" disabled"))+Picker._.node("button",n.clear,n.klass.buttonClear,"data-clear=1"+(e?"":" disabled")),n.klass.footer)},e.defaults=function(e){return{monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",format:"d mmmm, yyyy",klass:{table:e+"table",header:e+"header",navPrev:e+"nav--prev",navNext:e+"nav--next",navDisabled:e+"nav--disabled",month:e+"month",year:e+"year",selectMonth:e+"select--month",selectYear:e+"select--year",weekdays:e+"weekday",day:e+"day",disabled:e+"day--disabled",selected:e+"day--selected",highlighted:e+"day--highlighted",now:e+"day--today",infocus:e+"day--infocus",outfocus:e+"day--outfocus",footer:e+"footer",buttonClear:e+"button--clear",buttonToday:e+"button--today"}}}(Picker.klasses().picker+"__"),Picker.extend("pickadate",e)})();




Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());





/**
 * Demo scripts
 */

var $inputDate = $('#input_date').pickadate(),
    picker = $inputDate.pickadate('picker'),
    $inputText = $('#input_text').on({
      change: function() {
        var parsedDate = Date.parse( this.value )

        if ( parsedDate ) {
          picker.set( 'select', [parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate()] )

        }
        else {
          alert( 'Invalid date' )
        }
      },
      focus: function() {
        picker.open(false)
      },
      blur: function() {
        picker.close()
      }
    })

picker.on('set', function() {
  $inputText.val(this.get('value'))
console.log(">>>>>>>>",  $inputText.val());
    var pickdatez = $inputText.val();
    console.log('pickdatez>>>>',pickdatez);
    filterDate(pickdatez);
})
//////////////////////datepicker/////////////////////



  });
/*for line graph*/
  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 100);
  var ignored;
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
    var ignored = Math.round(Math.random() *10) + i *0;
    chartData.push({
      date: newDate,
      visits: visits,
      hits: hits,
      views: views,
      ignored: ignored,
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
/*line graph ends*/

function filterDate(getdate){
  var pickdatez = getdate;
  console.log('actual date format==>',pickdatez);
  var yearss= pickdatez.substring(pickdatez.indexOf(',')+1,pickdatez.length);
  // console.log('year>>>>',yearss);
  var dayss= pickdatez.substring(0,pickdatez.indexOf(' '));
  console.log("length of days>>>",dayss.length);
  if (dayss.length!=2){
    dayss="0"+dayss;
    console.log("zero wala days>>>",dayss);
  }
  console.log("######days>>",dayss);
  var monthss= pickdatez.substring(pickdatez.indexOf(' ')+1,pickdatez.length-6);
  // console.log("month>>",monthss);

  var b = "";

      switch(monthss){
          case "January":
          b = "01";
              break;
          case "February":
           b = "02" ;
              break;
          case  "March":
          b = "03";
              break;
          case "April":
          b = "04";
              break;
          case "May":
              b = "05";
              break;
          case "June":
              b = "06";
              break;
          case "July":
              b = "07";
              break;
          case "August":
              b = "08";
              break;
          case "September":
              b = "09";
              break;
          case "October":
              b = "10";
              break;
          case "November":
              b = "11";
              break;
          case "December":
              b = "12";
              break;
              default:
              b = 00;
              break;
          }
          // console.log("month>>>>",b);




        var showDate = (yearss+'-'+b+'-'+dayss).trim();
    console.log('pickdatez>>>>',pickdatez);

  console.log('showdate>>>', showDate);
  var printday = showDate;
  printday = new Date(printday).toUTCString();
  printday = printday.split(' ').slice(0, 4).join(' ')
  console.log("what to show>>>",printday);
  //test

  var today = new Date();
  console.log("*****",today);
  var today = new Date();
  var d2 = new Date(today);
  var dateonetoday = d2.getTime();
   var d3 = new Date(pickdatez);
   var datetwopicked = d3.getTime();//checking if picked day is greater than today
  console.log("dateonetoday>>",dateonetoday);
  console.log("datetwopicked>>",datetwopicked);
  if (datetwopicked>dateonetoday){
    alert("can't select future dates");
        // $inputText.val(this.get());
  }
  $('#seedate').text(printday);//to show date next to the dashboard in sam.htmlshow daily

  $.ajax({
//url: ( $('#input_text').val()=="" ? 'http://52.7.123.186:8080/analysis/snapshot-views?start_date='+yesterday+'&end_date='+yesterday : 'http://52.7.123.186:8080/analysis/snapshot-views?start_date='+showDate+'&end_date='+showDate),
 url:'http://52.7.123.186:8080/analysis/snapshot-views?start_date='+showDate+'&end_date='+showDate,
      // url:'http://52.7.123.186:8080/analysis/snapshot-views?start_date='+yesterday+'&end_date='+yesterday,
    contentType:"application/x-www-form-urlencoded",
    type: 'GET',
    dataType: 'json',
    crossDomain: true,

    error: function() {
      $('#info').html('<p>An error has occurred</p>');
    },
    success: function (data) {

      // chartData =data.dataProvider;
      var totalNumOfUsers,  differenceTotalNumOfUsers, differenceRefreshTokenCount, totalNumOfAccounts, totalNumOfThreads, totalNumOfFollowUpThreads, totalNumOfUserModels, totalValidRefreshTokens, avgMessagesPerThread, maxPossibleNumOfFollowUp , totalFollowUpStatusCounts;
      console.log ('data>>>',data);
      data.forEach(function(single){
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
      $('#differenceRefreshTokenCount').text(totalNumOfAccounts);
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
      console.log("totalFollowUpStatusCounts>>>",totalFollowUpStatusCounts);

      var values = [];
      var valuesTwo = [];
      data.forEach(function(single){
        values = [];
        var valuesTwo = [];
        var keys = Object.keys(single.totalNumOfAccounts);
        var keysTwo = Object.keys(single.followUpStatusCounts);
        // console.log("keysTwo####",keysTwo);
        keysTwo.forEach(function(keyTwo){
          let b = {"followUpStatusCounts" : keyTwo , "visits" : single.followUpStatusCounts[keyTwo] };
          // console.log("b####",b);
          valuesTwo.push(b);
        })
        keys.forEach(function(key){
          let a = {"totalNoOfAccounts" : key , "litres" : single.totalNumOfAccounts[key] };
          values.push(a);

        })
        createChartOne(values);
        createChart(valuesTwo);
      });

    }


  });
}

function createChartOne(data){
  /*PieChart*/
  var chartTwo = AmCharts.makeChart( "chartdivTwo", {
    "type": "pie",
    "theme": "none",
    "titles": [ {
      "text": "Total Number Of Accounts",
      "size": 16
    } ],
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

function createChart(data){

console.log("createChart function called");

    /*DougnutChart*/
    var chartThree = AmCharts.makeChart( "chartdivThree", {
      "type": "pie",
      "theme": "light",
      "titles": [ {
        "text": "Follow Up Status Counts",
        "size": 16
      } ],
     "dataProvider": data,
      "valueField": "visits",
      "titleField": "followUpStatusCounts",
      "startEffect": "elastic",
      "startDuration": 2,
      "labelRadius": 15,
      "innerRadius": "50%",
      "depth3D": 1,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> [[followups]]</span>",
      "angle": 1,
      "export": {
        "enabled": true
      }
     });
}
